// // const { createServer } = require('node:http');
// import http from "http" //this is the modern technique

// const hostname = '127.0.0.1';
// const port = 3000;

// const server = http.createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/html');
//   res.end('<h1>Hello World</h1>');
// });

// server.listen(port, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}/`);
// });


// import {a,b,c} from "./server.js"
// console.log(a,b,c);

// import dev from "./server.js"
// console.log(dev);  // importing through default module
 const z=require("./server2.js")
 console.log(z);

 const p=require("./server2.js")
 console.log(p,__dirname,__filename);
 
 