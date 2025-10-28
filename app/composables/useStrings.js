export function containsSubstring(str, substring) {
  return str.includes(substring)
}

export function removeSpaces(str) {
  return str.replace(/\s+/g, '');
}