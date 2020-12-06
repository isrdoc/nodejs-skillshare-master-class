import http from 'http'
import url from 'url'

const server = http.createServer((request, response) => {
    const parsedUrl = url.parse(request.url, true)
    const path = parsedUrl.pathname
    const trimmedPath = path.replace(/^\/+|\/+$/g, '')

    response.end('Hello!\n')

    console.log(`Request received on path: ${trimmedPath}`)
})

server.listen(3000, () => {
    console.log('The server is listening on port 3000 now')
})
