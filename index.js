const express = require('express')
const app = express();
const port = process.env.PORT || 5000;


const categories = require('./categories.json');
const course = require('./course.json')

app.get('/', (req, res) => {
    res.send('Course API Running');
})

app.get('/course-category', (req, res) => {
    res.send()
})

app.listen(port, () => {
    console.log('Dragon News Server running on port ');
})

