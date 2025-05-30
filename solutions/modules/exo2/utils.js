// utils.js
export function capitalize(str) {
  return str.toUpperCase();
}
export function trim(str) {
  return str.trim();
}
export function slugify(str) {
  return str.toLowerCase().replace(/\s+/g, "-");
}
