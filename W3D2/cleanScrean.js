let rate=200;
var timer =setInterval(growCircle,rate);
$(function() {
   
    $("#start").click(showCircle);
    timer =setInterval(growCircle,rate);

});

var width;
var amount;

function showCircle(){

    clearInterval(timer);
    $("#circ").empty();
    width = parseInt($("#wid").val());
    amount = parseInt($("#ga").val());
    rate = parseInt($("#gr").val());
    let number = parseInt($("#num").val());

    for (let i = 0; i < number; i++){
        $("#circ").append($("<div>", {
            "id": "circle"
        }));
    }
    setInitialSize();
    timer = setInterval(growCircle, rate);
    
}


function setInitialSize(){
    $('*[id*=circle]:visible').each(function(){
    $(this).css("width", width).css("height", width).css("border-radius", width/2);
    $(this).css("background-color",getColor());
    let lmargin =Math.random()*1000;
    $(this).css("margin-left",lmargin+"1px");

    $(this).click(removeCircle);

});
}

function getColor(){
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}


function growCircle(){
 $('*[id*=circle]:visible').each(function(){
   let width=parseInt( $(this).css("width"));
   let height=parseInt( $(this).css("height"));
   $(this).css("width", width+amount).css("height", height+amount).css("border-radius", (width+amount)/2);
});
}

function removeCircle(){
    $("#circle").remove();
}