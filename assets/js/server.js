const http = require('http');
const path = require('path');
const fs = require('fs');

const serverStaticFiles = (filePath, res) =>{
    let contentType = "";
    const extName = path.extname(filePath);

    switch (extName) {
        case ".html":
            contentType = "text/html";
            break;
        case ".js":
            contentType = "application/javascript";
            break;
        case ".css":
            contentType = "text/css";
            break;
        case ".jpg":
        case ".jpeg":
            contentType = "image/jpg";
            break;
        case ".png":
            contentType = "image/png";
            break;
        default:
            contentType = "text/plain";
    }

    fs.readFile(filePath, (err, data) => {
        if (err) {
            res
        }
    })

}

const server = http.createServer((req, res) =>{
    // checking for the browser request
    // console.log();
})

server.listen(3000, () => {
    console.log('listening on port 3000');
})