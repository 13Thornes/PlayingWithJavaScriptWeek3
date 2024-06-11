const http = require('http');
const fs = require('fs');

function serveHtml(theHtml){
    const server = http.createServer(function (req, res) {
      console.log(req.url);
      console.log('html was served.')
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.write(theHtml);
      res.end();
    });
  
    server.listen(3000, () => {
      console.log('Server is running on port 3000');
    });
  }