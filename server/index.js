const http = require('http');

// Create the HTTP server
const server=http.createServer((req, res) => {
    // Check if the request method is GET and the URL is "/"
    if (req.method === 'GET' && req.url === '/vikas') {
        res.writeHead(200, { 'Content-Type': 'text/plain' }); // Set response header
        
        res.end('Hello, this is a response from the server!'); // End the response
    } else {
        // Handle other routes
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        
        res.end('404 Not Found');
    }
});

server.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});
