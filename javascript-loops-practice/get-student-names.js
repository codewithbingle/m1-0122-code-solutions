/* exported getStudentNames */

// 5 getStudentNames(students)

function getStudentNames(students) {
  var studentNames = [];
  for (var names in students) {
    studentNames.push(students[names].name);
  } return studentNames;
}
