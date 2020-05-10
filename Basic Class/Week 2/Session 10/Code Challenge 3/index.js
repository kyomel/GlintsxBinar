const Product = require('./product.js')
const User = require('./user.js')
const http = require('http');
const PORT = 5000;
const app = http.createServer((req, res) => {

    if(req.url == '/'){
        res.write('Hello, World!!!');
    // This endpoint is used to display all of products
    }else if(req.url == '/products'){
        res.write(JSON.stringify(Product.all));
    // This endpoint is used to check which product has more than 0 stock
    }else if(req.url == '/products/avaibility'){
        res.write(JSON.stringify(Product.check(0)));
    // This endpoint is used to display user's info exclude its password
    }else if(req.url == '/user'){
        res.write(JSON.stringify(User.all,['id','name','email','verified','role']));
        
    }else{
        res.writeHead(404);
        res.write('error');
    }

    res.end();
})
app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
})
