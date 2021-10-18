const express=require('express');
const app=express();
let l=[];
app.use(express.urlencoded({extended:false}));
app.get('/',(req,res)=>{
    let ul="<ul>"+l.map(x=> `<li>${x}</li>`).join(" ")+"</ul>"+"<a href='/add'>add</a>";
    res.send(ul);

});
app.get('/add',(req,res)=>{
    res.send(`<form method="post"><input name="li"/><input type="submit"/></form>`);

})
app.post('/add',(req,res)=>{
    l.push(req.body.li);
    res.redirect(302,"/");
})
app.listen(3000,()=>{
    console.log("server started at 3000");
})