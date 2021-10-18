const express = require('express'); // npm run dev - to run nodemon
const path = require('path');
const app = express();
let cart=[];
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, "view"));


app.use(express.urlencoded({ extended: false }));
const productList=[
    {id: 1,name: 'Samsung', price: 750, description: 'Samsung mobile' },
    {id: 2,name: 'hp', price: 800, description: 'Hp laptop' },
    {id: 3,name: 'MAC', price: 1200, description: 'MAC laptop' }
];

app.get('/', (req,res)=>{
    res.render("product",{
        productList:productList
    });
})
app.post('/addToCart',(req,res)=>{
    name=req.body.name;
    price=req.body.price;
    cart.push({name:{n:name, p:price, q=quanity}});
    res.render("shoppingCart",{
        listofItems: cart
  })
    res.redirect(303,"/shoppingCart")

});
app.listen(3000, () => {
    console.log("Server running at port 3000.");
});