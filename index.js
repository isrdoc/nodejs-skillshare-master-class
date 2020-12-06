import http from 'http'
import url from 'url'

const server = http.createServer((request, response) => {
  const parsedUrl = url.parse(request.url, true)
  const path = parsedUrl.pathname
  const trimmedPath = path.replace(/^\/+|\/+$/g, '')
  const method = request.method.toUpperCase()
  const queryStringObject = parsedUrl.query

  response.end('Hello!\n')

  console.log(`Request received on path: ${trimmedPath} and method: ${method}`)
  console.log(queryStringObject)
})

server.listen(3000, () => {
  console.log('The server is listening on port 3000 now')
})
