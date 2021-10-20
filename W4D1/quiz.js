const express=require('express');
const app= express();
const session=require('express-session');
const path=require('path');

app.use(express.urlencoded({extended:false}));
app.set('view engine','ejs');
app.set('views',path.join(__dirname),'view');
app.use(session({
    secret:'salted',
    resave: false,
    saveUninitialized: true
}));
app.use((req,res,next)=>{
    if(!req.session.list){
        req.session.list=[]
    }
    next();
});
app.get('/',(req,res)=>{
    res.render('req.session.list');
});
app.get('/add',(req, res)=>{
    res.resnder(form);
});
app.post('/add',(req,res)=>{
    req.session.list.push(req.body.name);
    res.redirect(302,'/');
});
app.listen(3000,()=>console.log('Server started at 3000'));