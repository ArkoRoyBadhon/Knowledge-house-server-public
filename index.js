const express = require('express')
const app = express();
const port = process.env.PORT || 5000;


const categories = require('./categories.json');
const course = require('./course.json')

app.get('/', (req, res) => {
    res.send('Course API Running');
})

app.get('/course-category', (req, res) => {
    res.send(categories);
})

app.get('/course-category/:id', (req, res) => {
    const id = req.params.id;
    const selectedCategory = course.filter(n => n.category_id === id);
    res.send(selectedCategory);
})

app.get('/course', (req,res) => {
    res.send(course);
})

app.get('/course/:id', (req, res) => {
    const id = req.params.id;
    const selectedCourse = course.find(n => n._id === id);
    res.send(selectedCourse);
})

app.listen(port, () => {
    console.log('Dragon News Server running on port ');
})

