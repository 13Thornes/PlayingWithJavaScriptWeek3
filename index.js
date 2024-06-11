const http = require('http');
const fs = require('fs');

// serveText('Hello World');
// serveHtml('<html><body><b>Woot</b>Woot</body></html>')
// serveFile('index.html');
serveJson('{"name": "John", "age": 30, "city": "New York"}');


// function serveText(theText) {
//     const server = http.createServer(function (req, res) {
//         console.log('The text was served')
//         res.writeHead(200, {'Content-Type': 'text/plain'});
//         res.write(theText);
//         res.write(', eat more lunch');
//         res.end();
//     });

//     server.listen(3000, () => {
//         console.log('Server is running on port 3000');
//     });
// }

// function serveHtml(TheHtml) {
//     const server = http.createServer(function (req,res) {
//         console.log('the html was served');
//         res.writeHead(200, {'Content-Type': 'text/html'});
//         res.write(TheHtml);
//         res.end();
//     });

//     server.listen(3000, () => {
//         console.log('Server is running on port 3000');
//     });

    // function serveFile(fileName){
    //     const server = http.createServer(function (req, res) {
    //       const theHtml = fs.readFileSync(fileName, 'utf8');
    //       console.log('file was served.')
    //       res.writeHead(200, {'Content-Type': 'text/html'});
    //       res.write(theHtml);
    //       res.end();
    //     });
      
    //     server.listen(3000, () => {
    //       console.log('Server is running on port 3000');
    //     });
    //   }
      
      function serveJson(theJson){
        const server = http.createServer(function (req, res) {
          console.log(req.method);
          console.log('json was served.')
          res.writeHead(200, {'Content-Type': 'application/json'});
          res.write(theJson);
          res.end();
        });
      
        server.listen(3000, () => {
          console.log('Server is running on port 3000');
        });
      }
// }



