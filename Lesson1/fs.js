
const fs = require('fs');

// Create a new file
fs.writeFile('./student.json', `[{"name": "Giang", "age": 25}]`, () => {
    console.log('File was written');
});


// Read file
/* fs.readFile('./student.json', (err, data) => {
    if(err){
        console.log(err);
    }
    console.log(data.toString());
}); */


// Update file
/* fs.readFile('./student.json', (err, data) => {
    if(err){
        console.log(err);
    }

    const students = JSON.parse(data)
    
    students.push({name: 'Vuong', age: 20});

    const addedStudent = JSON.stringify(students);
    
    fs.writeFile('./student.json', `${addedStudent}`, () => {
        console.log('File updated');
    })
});
 */


// Delete file
/* fs.unlink('./student.json', (err) => {
    if(err){
        console.log(err);
    }
    console.log('File deleted');
}); */

