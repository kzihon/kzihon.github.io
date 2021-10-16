const express = require("express");
const router =express.Router();
const app=express(); 
app.use("/",router);
app.use(express.urlencoded({extended: false}))

app.get('/',(req,res)=>{
res.send(`<form action=result method=POST>
    <div id="container">
    <label for="name">Name</label>
    <input type="text" name="name" >
    <label for="age">Age</label>
    <input type="text" name="age">
    <button type="submit" id ="btn">Submit Query</button>
    </div>
</form>`);
});

app.post('/result',(req,res)=>{
let name = req.param('name', null);
let age = req.param('age', null);
res.send(`Welcome ${name} age ${age}`);
})

app.listen(3000,()=>{
    console.log("Started on PORT 3000");
}
)