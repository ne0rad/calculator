function numberClick(num) {
    let bottom = document.getElementById("bottom");
    if(bottom.innerHTML == 0) bottom.innerHTML = num.toString();
    else bottom.innerHTML = bottom.innerHTML + num.toString();
}

function clearClick() {
    document.getElementById("bottom").innerHTML = 0;
    document.getElementById("top").innerHTML = "&nbsp;";
}

function delClick() {
    let bottom = document.getElementById("bottom");
    if(bottom.innerHTML.length <= 1) bottom.innerHTML = 0;
    else bottom.innerHTML = bottom.innerHTML.substring(0, bottom.innerHTML.length - 1);
}

function operatorClick(operator) {
    let bottom = document.getElementById("bottom");
    let top = document.getElementById("top");
    top.innerHTML = bottom.innerHTML + operator;
    bottom.innerHTML = 0;
}

function dotClick() {
    let bottom = document.getElementById("bottom");
    if(bottom.innerHTML.split(".").length == 1) {
        bottom.innerHTML += ".";
    }
}

function negativeClick() {
    let bottom = document.getElementById("bottom");
    if(bottom.innerHTML.split("-").length == 1) {
        bottom.innerHTML = "-" + bottom.innerHTML;
    } else {
        bottom.innerHTML = bottom.innerHTML.replace("-", "");
    }
}

function equalsClick() {
    let bottom = document.getElementById("bottom");
    let top = document.getElementById("top");
    let topNum = parseFloat(top.innerHTML.slice(0,top.innerHTML.length-1));
    let botNum = parseFloat(bottom.innerHTML);
    switch (top.innerHTML[top.innerHTML.length-1]) {
        case "+":
            bottom.innerHTML = topNum + botNum;
            top.innerHTML += botNum;
            break;
        case "-":
            bottom.innerHTML = topNum - botNum;
            top.innerHTML += botNum;
            break;
        case "÷":
            bottom.innerHTML = topNum / botNum;
            top.innerHTML += botNum;
            break;
        case "×":
            bottom.innerHTML = topNum * botNum;
            top.innerHTML += botNum;
            break;
        default:
            break;
    }   
}