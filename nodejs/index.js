const http = require('node:http');


const server = http.createServer((req, res) => {

    if(req.method==='GET' && req.url==='/menu'){
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({
            items: [
                { id: 1, name: 'Pizza', price: 10 },
                { id: 2, name: 'Burger', price: 5 },
                { id: 3, name: 'Salad', price: 8 },
            ]
        }));
    }

});