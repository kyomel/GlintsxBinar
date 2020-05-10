/*
  GET => Headers, contoh https://google.com
  POST => Headers and Body, contoh ketika kita login dan klik button login
  PUT => Headers and Body, biasa dipake buat edit data
  DELETE => Headers, biasa dipake buat delete data.
  */

 const Product = require('../Task Explaination/product');
 console.log(Product);
 
 function handler(req, res) {
   switch(req.url) {
     case '/':
       res.write("Hello World");
       break;
 
     case '/users':
       res.write("Ini User");
       break;
 
     case '/products':
       res.write(JSON.stringify(Product.all));
       break;
 
     default:
       res.write("404 Not Found!");
   }
 
   res.end();
 }
 
 const http = require('http'); // Import HTTP module
 const app = http.createServer(handler);
 
 
 
 app.listen(3000, () => {
   console.log("Listening on port 3000");
 })
 