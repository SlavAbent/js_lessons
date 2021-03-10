

let a = 'Slava';
let b = '23456745655';
let studentPerson = [
    'name: ASToE1',
    'job: programming'

]

const person = new User(a, b);

console.log(person);
console.log(person.username);
console.log(person.validatePassword());


let firstStudent = new Student(a, b, studentPerson);
console.log(firstStudent);
console.log(firstStudent.getStudentCourses());
console.log(firstStudent.validatePassword());