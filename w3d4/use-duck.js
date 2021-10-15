const Duck=require("./duck");
var duck=new Duck();

duck.moveTo(1,1);
duck.takeOff();
duck.moveTo(1,2);
duck.startQuacking();
duck.moveTo(1,3);
duck.land();
duck.moveTo(2,3);
duck.stopQuacking();
duck.moveTo(3,3);
duck.xPos=0;


//=================
// const duck= require('./duck');
// duck.moveTo(1,1);
// duck.takeOff();
// duck.moveTo(1,2);
// duck.startQuacking();
// duck.moveTo(1,3);
// duck.land();
// duck.moveTo(2,3);
// duck.stopQuacking();
// duck.moveTo(3,3);