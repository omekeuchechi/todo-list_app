const http = require('http');
const path = require('path');
const fs = require('fs');

const server = http.createServer((req, res) =>{
    const filePath = path.join(__dirname, 'index.html');

    fs.readFile(filePath, (err, data) => {
       if (err) {
             res.statusCode = 500;
             res.setHeader('Content-Type', 'plain/text');
             res.end("Internal Server Error")
         }

         res.statusCode= 200;
         res.setHeader('Content-Type', 'text/html');
         res.end(data);
        });
});

server.listen(3000, () => {
    console.log('server listening on port');
});