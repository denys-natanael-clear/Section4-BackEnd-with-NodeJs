const http = require('http')

http.createServer((res, res) => {

    console.log('URL', req.url)
    console.log('METHOD', req.method)

})

server.listen(3000, '127.0.0.1', () => {

    console.log('server is running')

})