const http = require('http')
const fs = require('fs')

const delay = (ms) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve()
        }, ms)
    })
}

const server = http.createServer(async (request, response) => {
    switch (request.url) {
        case '/home': {
            fs.readFile('pages/home.html', (err, data) => {
                if (err) {
                    response.write('500 , some error occured')
                } else response.write(data)
                response.end()
            })
            break
        }
        case '/about': {
            await delay(10000)
            response.write('about course')
            response.end()
            break
        }

        default: {
            response.write('404 not found')
            response.end()
        }
    }
})
server.listen(3003)