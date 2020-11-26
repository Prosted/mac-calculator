const display=document.getElementById("display");
const result=document.getElementById("result");
let numberClicked=false;

function add(char){
    if(numberClicked==false){
        if(isNaN(char)==true){
            //I'm going to do nothing
        }else{
            display.value+=char;
        }
    }else{
        display.value+=char;
    }

    if(isNaN(char)==true){
        numberClicked=false;
    }else{
        numberClicked=true;
    }
}

function calculate(){
    result.value=eval(display.value);
    display.value="";
}

function initValue(){
    result.value=""
    display.value="";
}