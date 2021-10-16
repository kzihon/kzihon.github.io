const express = require("express");
const path=require("path")
const router =express.Router();
const app=express(); 
const date=new Date();
const hour=date.getHours();
app.use("/",router);


app.use(express.urlencoded({extended: false}))

if(hour>6 && hour<18){
    app.use('/css', express.static(path.join(__dirname, 'css/day.css')));
}
else{
    app.use('/css', express.static(path.join(__dirname, 'css/night.css')));
}
app.get('/',(req,res)=>{
res.sendFile(__dirname+"/index.html");
});


app.post('/result',(req,res)=>{
let name = req.param('name', null);
let age = req.param('age', null);
res.redirect(303,`output/?name=${name}&age=${age}`)

})

app.get('/output',(req,res)=>{
    let name = req.query.name;
    let age=req.query.age;
    if (!name) {
        name = "person";
        }
       
        res.send(`Welcome ${name} age ${age}`);
});

app.listen(3000,()=>{
    console.log("Started on PORT 3000");
}
)