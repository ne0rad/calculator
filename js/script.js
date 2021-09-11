function add() {
    args = [...arguments];
    return args[0] + args[1];
}

function substract() {
    args = [...arguments];
    return args[0] - args[1];
}

function divide() {
    args = [...arguments];
    return args[0] / args[1];
}

function multiply() {
    args = [...arguments];
    return args[0] * args[1];
}

function numberClick(num) {
    let bottom = document.getElementById("bottom");
    if(bottom.innerHTML == 0) bottom.innerHTML = num.toString();
    else bottom.innerHTML = bottom.innerHTML + num.toString();
}

function clearEverything() {
    document.getElementById("bottom").innerHTML = 0;
}

function backspace() {
    let bottom = document.getElementById("bottom");
    if(bottom.innerHTML.length <= 1) bottom.innerHTML = 0;
    else bottom.innerHTML = bottom.innerHTML.substring(0, bottom.innerHTML.length - 1);
}