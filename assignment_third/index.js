const http = require('http');
 
const HOSTNAME = 'localhost';
const PORT = 3020;


const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html')
    res.end(
      "<h1>I Am Happy To Learn Full Stack Web Development From PW Skills!</h1>"
    );
})

server.listen(PORT, () => {
    console.log(`Server running at ${HOSTNAME}: ${PORT}`);
})

