const fs = require('fs');


const student_create = (req, res) => {
    fs.writeFile('./students.json', `[]`, () => {
        console.log('File was written');
        res.send('Students file created')
    });
};


const student_add = (req, res) => {
    fs.readFile('./students.json', (err, data) => {
        if(err) {
            console.log(err);
        }
        const students = JSON.parse(data);
        students.push(req.body);
        const updateStudents = JSON.stringify(students);

        fs.writeFile('./students.json', `${updateStudents}`, () => {
            console.log('File updated');
        })
    });
    
    res.send('Student added');
};


const student_getall = (req, res) => {
    fs.readFile('./students.json', (err, data) => {
        if(err) {
            console.log(err);
        }
        const allStudents = JSON.parse(data);
        res.send(allStudents);
    });
};


const student_getbyname = (req, res) => {
    const studentName = req.params.name;
    
    fs.readFile('./students.json', (err, data) => {
        if(err) {
            console.log(err);
        }
        const allStudents = JSON.parse(data);

        let pickedStudent = [];
        
        allStudents.forEach(student => {
            const lowerCaseName = student.name.toLowerCase();
            if(lowerCaseName === studentName){
                pickedStudent.push(student);
            }
        })
        res.send(pickedStudent);
    });
};


const student_deletebyname = (req, res) => {
    const studentName = req.params.name;
    
    fs.readFile('./students.json', (err, data) => {
        if(err) {
            console.log(err);
        }
        const allStudents = JSON.parse(data);

        const updateStudents = allStudents.filter(student => {
            const lowerCaseName = student.name.toLowerCase();

            return lowerCaseName !== studentName;
        });



        fs.writeFile('./students.json', `${JSON.stringify(updateStudents)}`,() => {
            console.log('Student deleted');
        })
        res.send(updateStudents);
    });
};


module.exports = {
    student_create,
    student_add,
    student_getall,
    student_getbyname,
    student_deletebyname
}