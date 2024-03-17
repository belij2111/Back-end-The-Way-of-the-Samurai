const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send('Hello World!')
})
app.get('/mainGet', (req, res) => {
    res.send('Hello main GET!')
})
app.post('/mainGet', (req, res) => {
    res.send('create main POST!')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})