'use strict'
// Первая задача:

const allStudents = ['Иванов', 'Петров', 'Сидоров', 'Кузнецов', 'Смирнов', 'Попов', 'Соколов'];

const failedStudents = ['Сидоров', 'Смирнов', 'Попов'];

const passedStudents = [];

for (const student of allStudents) {
    let equal = false;

    equal = failedStudents.includes(student) || equal;

    if (!equal) {
        passedStudents.push(student);
    }
}

console.log(`Сдали экзамен: ${passedStudents}`);