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
    const declarator = path.findParent((p) => p.isVariableDeclarator());
    const identifier = declarator.get('id');
    if (identifier.node.typeAnnotation == null) {
      console.log("BOOM");
      throw new Error('Flow factories need to be annotated with flow types!');
    }

    const annotation = declarator.get('id.typeAnnotation.typeAnnotation');
    /* TODO actually check the referenced value and make sure it comes from fake-eggs */
    if (annotation.node == null || annotation.node.id.name !== 'Factory') return;
    const id = annotation.get('typeParameters.params.0.id').node.name;
    return path.scope.bindings[id].path.get('right');
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

  return {
    inherits: syntaxFlow,
    visitor: {
      Flow (path) {
        console.log(path.node);
      },
      CallExpression (path) {
        if (!isFakeFactoryCall(path.node.callee)) return;
        const createdType = getCreatedTypeAnnotation(path);
        if (createdType == null) return;
        const replacement = t.expressionStatement(buildFactoryFromTypeAnnotation(createdType.node));
        console.log(replacement);
        path.replaceWith(replacement);
      }
    }
  }
}
