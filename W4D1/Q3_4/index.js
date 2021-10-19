const express = require('express');
const product = require('./product');
var parseurl = require('parseurl');
var session = require('express-session');
const path = require('path');

const app = express();

app.use(session({
    secret: 'salt secret',
    resave: false,
    saveUninitialized: false,
}))



app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, "views"));
app.use(express.urlencoded({ extended: false }));


const prod = [
    new product('Samsung', 750, 'Samsung mobile', 1),
    new product('hp', 800, 'Hp laptop', 2),
    new product('MAC', 1200, 'MAC laptop', 3),
];
let item;
app.use(function (req, res, next) {

    res.locals = {
        pageTitle: "Products",
    };
    next();
})

app.get('/', (req, res) => {
    res.render("products", {

        products: prod,
    });

});

app.get('/products/:name', (req, res) => {
    let name = req.params.name;
    let product1 = prod.find(p => p.getName() == name);
    res.render('product', { product: product1 });
});

app.post('/addToCart', (req, res) => {
    if (!req.session.cart) {
        req.session.cart = {};
    }
    let name = req.body.name;
    let product = prod.find(p => p.getName() == name);

    if (!req.session.cart[name]) {
        req.session.cart[name] = {
            product,
            price: product.getPrice(),
            quantity: 1
        }
    } else {
        let obj = req.session.cart[name];
        let qty = obj.quantity + 1;
        let price = obj.product.price * qty;

        req.session.cart[name] = {
            product,
            price: price,
            quantity: qty
        }
    }

    console.log(JSON.stringify(req.session.cart));

    res.render("shoppingCart", {
        cart : req.session.cart
    })

})


app.listen(3000);