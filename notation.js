const student = {
    name: 'Kolim Ullah',
    age: 15,
    class: 'Ten',
    marks: {
        math: 79,
        physics: 89,
        chemistry: 68
    }
};

const marks = student.marks;
const math = student.marks.math;
console.log(math);

const chemistry = student['marks']['chemistry'];
const subject = 'math';
const subjectMarks = student.marks[subject];
const marks2 = student.marks[subject];
console.log(marks2);
// console.log(subjectMarks);