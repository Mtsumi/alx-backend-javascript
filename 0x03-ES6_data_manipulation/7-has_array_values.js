/**
 * Checks if a set contains each element in an array.
 * @param {Set} set - The collection of unique items.
 * @param {*} array - The array of items.
 * @author Aly Mtsumi <https://github.com/Mtsumi>
 * @returns {Boolean}
 */
export default function hasValuesFromArray(set, array) {
  return array.some((value) => set.has(value));
  // array.every((value) => set.has(value));
  // some works just as every does in this context
}