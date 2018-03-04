// @flow
import syntaxFlow from "@babel/plugin-syntax-flow";
import type {Path} from 'babel-traverse';

export default function babelPlugin ({types: t}) {
  /** are we calling fake.factory.flow? */
  function isFakeFactoryCall (callee) {
    return (
      t.isMemberExpression(callee) &&
      t.isIdentifier(callee.property, {name: 'flow'}) &&
      t.isMemberExpression(callee.object) &&
      t.isIdentifier(callee.object.property, {name: 'factory'}) &&
      t.isIdentifier(callee.object.object, {name: 'fake'})
      /* TODO actually check the referenced value and make sure it comes from fake-eggs */
    );
  }

  function getCreatedTypeAnnotation (path): ?Path {
    const annotation = path.get('typeAnnotation');
    /* TODO actually check the referenced value and make sure it comes from fake-eggs */
    if (annotation.node == null || annotation.node.id.name !== 'Factory') return;
    const id = annotation.get('typeParameters.params.0.id').node.name;
    return path.scope.bindings[id].identifier;
  }

  function buildFactoryFromTypeAnnotation (node) {
    switch (node.type) {
      case 'ObjectTypeAnnotation':
        return buildFactoryFromObjectTypeAnnotation(node);
      case 'StringTypeAnnotation':
        return t.memberExpression(
          t.identifier('fake'),
          t.identifier('string'),
        );
      case 'NumberTypeAnnotation':
        return t.memberExpression(
          t.identifier('fake'),
          t.identifier('number'),
        );
    }
  }

  function buildFactoryFromObjectTypeAnnotation (node) {
    return t.callExpression(
      t.memberExpression(
        t.identifier('fake'),
        t.identifier('factory'),
      ),
      [
        t.objectExpression(
          node.properties.map((property) =>
            t.objectProperty(
              t.identifier(property.key.name),
              buildFactoryFromTypeAnnotation(property.value)
            )
          )
        )
      ],
    );
  }

  /** we need to work around the fact that
   * transform-flow-strip-types is removing
   * type information out from under us.
   * This map keeps track of all the identifiers
   * that we encounter so that we can use their
   * definitions later, after they may already
   * have been removed from the AST.
   */
  const identifiers = new WeakMap();

  return {
    inherits: syntaxFlow,
    visitor: {
      Flow (path) {
        if (path.isTypeAlias())
          identifiers.set(path.node.id, path.node.right);

        if (
          path.isTypeAnnotation() &&
          path.get('typeAnnotation').isGenericTypeAnnotation() &&
          path.get('typeAnnotation.id').node.name === 'Factory' /* TODO something more robust than this */
        ) {
          const createdType = identifiers.get(getCreatedTypeAnnotation(path));
          if (createdType == null) return;
          path.parentPath.parentPath.traverse({
            CallExpression (innerPath) {
              if (!isFakeFactoryCall(innerPath.node.callee)) return;
              const replacement = t.expressionStatement(buildFactoryFromTypeAnnotation(createdType));
              innerPath.replaceWith(replacement);
            }
          });
        }
      },
    }
  }
}
