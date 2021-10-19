const express=require('express');
const path=require('path');
const app=express();
app.use(express.urlencoded({extended:false}));
app.set('view engine','ejs');
app.set('view',path.join(__dirname,"view"));

let list=[];

app.get('/',(req,res)=>{
    res.render("index",{list})
});
app.get('/add',(req,res)=>{
    res.render("form")
});
app.post('/add',(req,res)=>{
    const input=req.body.input;
    if(!input)
    input="unknown";
    list.push(input);
    res.render(302,'/')
});
app.listen(3000, ()=>console.log("Server running at port 3000"));