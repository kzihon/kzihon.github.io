let frame;
let currentAnime;
let speed=250;

var timer=setInterval(displayAnimation,speed);
window.onload=function(){
'use strict';
document.getElementById("start").onclick=startAnimation;
document.getElementById("animation").onchange=choseAnimation;
document.getElementById("stop").onclick=stopAnimation;
document.getElementById("fontsize").onchange=changeFont;
document.getElementById("turbo").onclick=turbo;
};

function choseAnimation(){
'use strict';
let anime=document.getElementById("animation");
let textArea=document.getElementById("text-area");
switch(anime.selectedIndex){
    case 0:
        textArea.value=ANIMATIONS["BLANK"];
        break;
    case 1:
        textArea.value=ANIMATIONS["EXERCISE"];
        break;
    case 2:
        textArea.value=ANIMATIONS["JUGGLER"];
        break;
    case 3:
        textArea.value=ANIMATIONS["BIKE"];
        break;
    case 4:
        textArea.value=ANIMATIONS["DIVE"];
        break;  
}  
}
function startAnimation(){
    'use strict';
    if(document.getElementById("animation".selectedIndex)!=0){
        document.getElementById("start").disabled = true; 
        document.getElementById("stop").disabled = false;
        document.getElementById("animation").disabled=true;
        let textArea = document.getElementById("text-area");
        currentAnime=textArea.value.split("=====");
        frame=0;
        clearInterval(timer);
        timer = setInterval(displayAnimation,speed);

    }
}

function displayAnimation(){
    'use strict';
    let textArea = document.getElementById("text-area");
    textArea.value = currentAnime[frame];
    frame++;
    if(frame == currentAnime.length){
        frame=0;
    }
}

function stopAnimation(){
    'use strict';
    document.getElementById("stop").disabled=true;
    document.getElementById("start").disabled=false;
    document.getElementById("animation").disabled=false;
    clearInterval(timer);
    choseAnimation();
}

function changeFont(){
    'use strict';
    let size=document.getElementById("fontsize");
    let textArea=document.getElementById("text-area");
    switch(size.selectedIndex){
        case 0:
            textArea.style.fontSize = "7pt";
            break;
        case 1:
            textArea.style.fontSize = "10pt";
            break;
        case 2:
            textArea.style.fontSize = "12pt";
            break;
        case 3:
            textArea.style.fontSize ="16pt";
            break;
        case 4:
            textArea.style.fontSize ="24pt";
            break;
        case 5:
            textArea.style.fontSize ="32pt";
            break;
    }
}

function turbo(){
    'use strict';
    let sp=document.getElementById("turbo");
    clearInterval(timer);
    if(sp.checked==true){
        speed=50;
        timer=setInterval(displayAnimation,speed);
    }
    else{
        speed=250;
        timer=setInterval(displayAnimation,speed);
    }
}


