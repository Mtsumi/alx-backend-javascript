/**
 * Retrieves students in a given location.
 * @params Array of student objects - The list of students.
 * @param {String} city - The location.
 * @author Aly Mtsumi <https://github.com/Mtsumi>
 * @returns list of students in the city passed
 */
export default function getStudentsByLocation(students, city) {
  if (students instanceof Array) {
    return students.filter((student) => student.location === city);
  }
  return [];
}
