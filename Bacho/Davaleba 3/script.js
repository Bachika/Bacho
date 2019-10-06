
function testNumbers1(a){
    rs = document.getElementById("result1")
    return Math.ceil(a);
}

function testNumbers2(a){
    rs = document.getElementById("result2")
    return Math.floor(a);
}

function testNumbers3(a){
    rs = document.getElementById("result3")
    return Math.round(a);
}

function testNumbers4() {
    return Math.random();
}

function testNumbers5(a, b) {
    rs = document.getElementById("result5");
    a = Math.ceil(a);
    b = Math.floor(b);
    return Math.floor(Math.random() * (b-a+1) + a);
}

function Weekdays(a, b, c, d, e, f, g) {
    rs = document.getElementById("result6");
    return Math.random(a, b, c, d, e, f, g)
}