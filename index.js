import http from 'http'
import url from 'url'
import { StringDecoder } from 'string_decoder'

const server = http.createServer((request, response) => {
  const parsedUrl = url.parse(request.url, true)
  const path = parsedUrl.pathname
  const trimmedPath = path.replace(/^\/+|\/+$/g, '')
  const method = request.method.toUpperCase()
  const queryStringObject = parsedUrl.query
  const headers = request.headers

  // Payload
  const decoder = new StringDecoder('utf-8')
  let buffer = ''

  request.on('data', data => {
    buffer += decoder.write(data)
  })

  request.on('end', () => {
    buffer += decoder.end()

    response.end('Hello!\n')

    console.log(
      `Request received on path: ${trimmedPath} and method: ${method}`
    )
    console.log('Query string object: ')
    console.log(queryStringObject)
    console.log('Headers: ')
    console.log(headers)
    console.log(`Payload: ${buffer}`)
  })
})

server.listen(3000, () => {
  console.log('The server is listening on port 3000 now')
})
