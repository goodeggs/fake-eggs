// @flow

export default function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w\-_]+/g, '') // remove all non-word characters
}
