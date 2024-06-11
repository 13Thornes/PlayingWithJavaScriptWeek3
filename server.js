const http = require('http');
const fs = require('fs');
const path = require('path');

global.DEBUG = false;

function fetchFile(fileName, res) {
    fs.readFile(fileName, (error, content) => {
        if(error) {
            res.writeHead(500, { 'Content-Type': 'text/plain'});
            res.end('500 Internal Server Error')
        } else {
            res.writeHead(200, { 'Content-Type': 'text/html'});
            res.end(content, 'utf-8')
        };
    });
}



const server = http.createServer((req,res) => {
 if(DEBUG) console.log('Request Url:', req.url);
 let path = './views/'
 switch (req.url) {
    case '/':
        path += 'index.html';
        if(DEBUG) console.log("Index page")
        fetchFile(path, res);
        break;
    case '/about':
        path += 'about.html';
        if(DEBUG) console.log("About page")
        fetchFile(path, res);
        break;
        
    case '/home':
        path += 'home.html'
        if(DEBUG) console.log("Home page")
        fetchFile(path, res)
        break;
    default:
        if(DEBUG) console.log('404 Not Found');
        res.writeHead(404, { 'Content-Type': 'text/plain'});
        res.end('404 Not Found')
        break;
 }
});

server.listen(3000, () => {
    console.log('Server is running');
});