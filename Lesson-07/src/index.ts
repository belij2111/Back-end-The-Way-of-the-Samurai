import express from 'express'
const app = express()
const port = 3000

app.get('/', (req, res) => {
    const a = 8
    if (a > 5) {
        res.send('Ok!')
    } else {
        res.send('Hello World')
    }
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