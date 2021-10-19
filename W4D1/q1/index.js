const express = require('express');
const app= express();
const cookieParser=require('cookie-parser');
const path=require('path');

app.use(express.urlencoded({extended:false}));

app.set('view engine', 'ejs');
app.set('view',path.join(__dirname,'view'));
app.use(cookieParser());
app.get('/',(req,res)=>{
    if(req.cookies.remember){
        res.send('Remembered: ).click to  <a href=\'/forget\'>forget</a>');
    }
    res.render('addcookie',{
        'cookieList':req.cookies
    });
});
app.post('/',(req,res)=>{
    if(req.body.remember){
        res.cookie('remember',1);
    }
    res.cookie(req.body.key, req.body.value,{maxAge:1000*60*10});
    res.redirect(303,'/')
});
app.get('/forget',(req,res)=>{
    res.clearCookie('remember');
    res.redirect('back');
})
app.listen(3000, () => {
    console.log('Server running at port 3000...');
});
