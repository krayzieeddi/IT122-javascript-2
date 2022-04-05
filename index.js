const http = require("http"); // assigns the http protocole to http var

http.createServer((req,res) => {
    var path = req.url.toLowerCase(); // the url itself

    switch(path) { // this switch case will redirect depending on url
        case '/':
            res.writeHead(200, {'Content-Type': 'text/plain'});
            res.end('Home page info');
            break;
        case '/about':
            res.writeHead(200, {'Content-Type': 'text/plain'});
            res.end('My name is Edwin.');
            break;
        default:
            res.writeHead(404, {'Content-Type': 'text/plain'});
            res.end('Not found');
            break;
    }

}).listen(process.env.PORT || 3000); // the .listen chains the functions together