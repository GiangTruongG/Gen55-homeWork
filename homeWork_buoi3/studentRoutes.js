const express = require('express');
const { append } = require('express/lib/response');
const studentRouter = express.Router();
const fs = require('fs');
const studentController = require('./studentController');



// create a students json file
studentRouter.get('/students', studentController.student_create);


// update new student
studentRouter.post('/students', studentController.student_add);


// read all students
studentRouter.get('/all-students', studentController.student_getall);


// get students according to their name
studentRouter.get('/students/:name', studentController.student_getbyname);


// delete students according to their name
studentRouter.delete('/students/:name', studentController.student_deletebyname);



module.exports = studentRouter;