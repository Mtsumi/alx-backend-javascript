/**
 * Retrieves the sum of ids of a list of students.
 * @params array of students - The list of students.
 * @author Aly Mtsumi <https://github.com/Mtsumi>
 * @returns {Number}
 */
export default function getStudentIdsSum(students) {
  if (students instanceof Array) {
    return students
    .map((student) => student.id)
    .reduce(
      (prevStudent, curStudent) => prevStudent + curStudent
      //another method without using map
      //  (prevStudent, curStudent) => prevStudent.id || prevStudent + curStudent.id, 0,
    );
  }
  return 0;
}
