const path = require('path');
const express = require('express');
const app = express();


app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, "views"));

app.use(express.json());
app.use('/js', express.static(path.join(__dirname, 'views', 'js')));

const list = {};

app.get("/", (req, res) => {
    const date = new Date();
    const hour =date.getHours();
    const minutes=date.getMinutes();
    const time = ""+hour+": "+minutes;
    res.render("form",{
        arrival:time,
    });
});

app.post("/add", (req, res) => {
    console.log(req.body);
    list[req.body.fname + " " + req.body.lname] = { ...req.body };
    res.status(200);
    res.end();
    
});

app.get("/list", (req, res) => {
    res.render("list", 
    { list: list });
});

app.listen(3000);