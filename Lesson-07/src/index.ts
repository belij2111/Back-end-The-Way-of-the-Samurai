import express from 'express'

const app = express()
const port = 3000

app.get('/courses', (req, res) => {
    res.json([
        {id: 1, title: 'front-end'},
        {id: 2, title: 'back-end'},
        {id: 3, title: 'automation qa'},
        {id: 4, title: 'devops'}
    ])
})
app.get('/courses/:id', (req, res) => {
    const foundCourse = [
        {id: 1, title: 'front-end'},
        {id: 2, title: 'back-end'},
        {id: 3, title: 'automation qa'},
        {id: 4, title: 'devops'}
    ].find(c => c.id === +req.params.id)
    if (!foundCourse) {
        res.sendStatus(404)
        return
    }
    res.json(foundCourse)
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})