export default function generateDocHtml({name, docs, typeDef, location}) {
  return `
#### \`${name}\`

\`${typeDef}\`

${docs}

<small>[[view source]](${location.path}#L${location.start}-L${location.end})</small>

  `;
}