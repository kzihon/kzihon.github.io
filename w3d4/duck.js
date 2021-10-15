class Duck{
    constructor(){
        this.quaking=false;
        this.flying=false;
        this.xPos=0;
        this.yPos=0;
    }
    takeOff(){
        this.flying=true;
    }
    land(){
        this.flying=0;
    }
    startQuacking(){
        this.quaking=true;
    }
    stopQuacking(){
        this.quaking=false;
    }
    moveTo(x,y){
        this.xPos=x;
        this.yPos=y;
        let msg="Duck is ";
        if(this.flying){
            msg+= `flying fo ${x},${y} `;
        } else{
        msg+=`swimming to ${x},${y} `;
        }
        if(this.quaking){
            msg+=`while quaking`;
        }
        console.log(msg);
    }

}
module.exports=Duck;
//=============== if duck module have the following local variable and should export the 
//following methods, you should do it like this.
// let flying=false;
// let quaking=false;
// let xPos=0;
// let yPos=0;

//  function takeOff(){
//     flying=true;
// }
// function land(){
//      flying=0;
// }
// function startQuacking(){
//      quaking=true;
// }
// function stopQuacking(){
//      quaking=false;
// }
// function moveTo(x,y){
//     xPos=x;
//     yPos=y;
//     let msg="Duck is ";
//     if(this.flying){
//         msg+= `flying fo ${x},${y} `;
//     } else{
//     msg+=`swimming to ${x},${y} `;
//     }
//     if(this.quaking){
//         msg+=`while quaking`;
//     }
//     console.log(msg);
// }

// module.exports.takeOff=takeOff
// module.exports.land=land

// module.exports.startQuacking=startQuacking;
// module.exports.stopQuacking=stopQuacking;
// module.exports.moveTo=moveTo;
