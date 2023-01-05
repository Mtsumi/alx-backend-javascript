/**
 * Changes the quantity of grocery items 1 to 100.
 * @param {Map<String, number>} map - A map of the name of
 * grocery and its quantity.
 * @author Aly Mtsumi <https://github.com/Mtsumi>
 */
export default function updateUniqueItems(map) {
  if (!(map instanceof Map)) {
    throw new Error('Cannot process');
  }
  map.forEach((value, key) => {
    if (value === 1) {
      map.set(key, 100);
    }
  });
}
