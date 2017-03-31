export default function slugify(text) {
  return text
    .toLowerCase()
    .replace(/[^\w\-_]+/g, '') // remove all non-word characters
}
