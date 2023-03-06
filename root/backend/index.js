"use strict";

const express = require("express");

// const app = http(http.createServer((request, response) => {
//     response.writeHead(200, { 'Content-Type': 'application/json' })
//     response.end(JSON.stringify("{}"))
// }));

const app = express();
app.get('/', (request, response) => {
    response.send('<h1>HELLO WORLD</h1>');
});

app.get('/products', (request, response) => {
    response.json({ hola: 'hola' })
});

const PORT = 3001;
app.listen(PORT, () => {
    console.log(`Server running on PORT=${PORT}`);
});
