const express = require('express')
const app = express();
const port = process.env.PORT || 5000;
var cors = require('cors')


app.use(cors())


const categories = require('./categoryList.json');
// const course = require('./course.json')
const courseDetail = require('./courseDetails.json');

app.get('/', (req, res) => {
    res.send('Course API Running');
})

app.get('/course-category', (req, res) => {
    res.send(categories);
})

app.get('/course-detail', (req, res) => {
    res.send(courseDetail);
})

app.get('/course-detail/:id', (req, res) => {
        const id = req.params.id;
        const selectedCategory = courseDetail.filter(course => course.id === id);
        res.send(selectedCategory);
})

app.listen(port, () => {
    console.log('Server running on port ', port);
})

