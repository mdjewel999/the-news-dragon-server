const express = require('express');
const app = express();
const cros = require('cors')
const port = process.env.PORT || 5000;

app.use(cros())

const categories = require('./data/categories.json')
app.get('/', (req, res)=>{
res.send('Dragon is running')
})

app.get('/categories', (req, res)=>{
    res.send(categories)
})
app.listen(port, ()=>{
    console.log(`Dragon API is running on port: ${port}`)
})