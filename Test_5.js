
const students = [
  { name: "John", usn: "A123", fees: 5000, marks: 85 },
  { name: "Smith", usn: "A124", fees: 4500, marks: 78 },
  { name: "Michael", usn: "A125", fees: 5200, marks: 92 },

];


function findStudentByUSN(usn) {
  const foundStudent = students.find((student) => student.usn === usn);
  return foundStudent || null; 
}


const searchUSN = "A124";
const student = findStudentByUSN(searchUSN);

if (student) {
  console.log("Student found!");
  console.log("Name:", student.name);
  console.log("USN:", student.usn);
  console.log("Fees:", student.fees);
  console.log("Marks:", student.marks);
} else {
  console.log("Student not found!");
}
