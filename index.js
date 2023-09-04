
const express = require('express')
const app = express()
const port = 2000

let student = [
  {
    name : "Rudra",
    age : 19,
    gender : "Male",
    city : "Mumbai"
  },
  {
    name : "Shubham",
    age : 22,
    gender : "Arun",
    city : "Vashi"
  },
  {
    name : "Bhavesh",
    age : 23,
    gender : "Male",
    city : "Navi Mumbai"
  },
  {
    name : "Abhishek",
    age : 20,
    gender : "Male",
    city : "Thane"
  },
  {
    name : "Mayur",
    age : 20,
    gender : "Male",
    city : "Khar Ghar"
  },
  {
    name : "Dipesh",
    age : 29,
    gender : "Male",
    city : "Bandra"
  },

]

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/student', (req, res) => {
  res.send(student)
});

app.get('/studentAge/:age', (req, res) => {
  let age = req.params.age;
  let Student = student.filter(item => item.age == age)
  res.send(Student)
});

app.get('/studentGender/:gender', (req, res) => {
  let gender = req.params.gender;
  let Gender = student.filter(item => item.gender == gender)
  res.send(Gender)
});

app.get('/studentCity/:city', (req, res) => {
 let city = req.params.city
 let City = student.filter(item => item.city == city);
 res.send(City)
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});