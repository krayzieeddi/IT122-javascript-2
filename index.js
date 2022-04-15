import http from 'http'; // assigns the http protocole to http var
import { getAllCards, findCard } from './data.js'; // import all exported items from data.js
import { parse } from "querystring"; // convert query string to a JS object

http.createServer((req,res) => {
    var path = req.url.toLowerCase(); // the url itself
    let url = req.url.split("?"); // separate route from query string
    let query = parse(url[1]); // convert query string to a JS object (assocative array)

    switch(path) { // this switch case will redirect depending on url
        case '/':
            res.writeHead(200, {'Content-Type': 'text/plain'});
            res.end(getAllCards());
            break;

        case `/detail?name=${query.name}`:
            res.writeHead(200, {'Content-Type': 'text/plain'});
            res.end(findCard(query));
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