const http = require('http')
let requestCounter = 0
const server = http.createServer((request, response) => {
    if (request.url !== '/favicon.ico') {
        requestCounter++
    }
    switch (request.url) {
        case '/student':
            response.write('STUDENT')
            break
        case '/':
        case '/courses':
            response.write('Back')
            break
        default:
            response.write('404 not found')
    }

    response.write(' lesson-05' + ' : ' + requestCounter)
    response.end()
})
server.listen(3003)