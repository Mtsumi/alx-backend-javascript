/**
 * Retrieves ids from a list of students.
 * @params students - The list of students.
 * @author Aly Mtsumi <https://github.com/Mtsumi>
 * @returns Student IDs in a new list
 */
export default function getListStudentIds(students) {
  if (students instanceof Array) {
    return students.map((student) => student.id);
  }
  return [];
}
