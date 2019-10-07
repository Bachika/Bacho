function testString(elid, text){
    resultDiv = document.getElementById(elid);
    resultDiv.innerHTML = text;
}

function clickedButton(){
    input1 = document.getElementById('in1').value;
    testString('res1', input1);
}

function dialogWindow(){
    // alert();
    conf = confirm('gaiget?');
    console.log(conf);
    resultDiv = document.getElementById('res3');
    if(conf==true){
        resultDiv.innerHTML = 'gavige';
    }else if(conf==false){
        resultDiv.innerHTML = 'ver gavige';
    }
    prom = prompt();
    console.log(prom);
    resultDiv = document.getElementById('res4');
    if(prom!=null){
        resultDiv.innerHTML = prom;
    }
    else{
        resultDiv.innerHTML = 'monacemebi araa';
        
    }
}