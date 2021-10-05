window.onload = eventHandler;

function eventHandler() {
    "use strict";
    document.getElementById("addbtn").onclick = addProduct;
}

function addProduct() {
    var date = document.getElementById("txtDate");
    var datereg = new RegExp(/^(1[5-9][0-9][0-9])|((20[0-4][0-9])|2050)[-](0?[1-9]|1[0-2])[-](0?[1-9]|[12][0-9]|3[01])$/);

    if(datereg.exec(date.value)){
        alert("Success!")
    }else {
        alert("Please Enter a Date between the year of 1500 and 2050 in the format of yyyy-mm-dd")
    }
}