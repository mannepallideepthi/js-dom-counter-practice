const display=document.getElementById("initial");
const incrementValue=document.getElementById("yashu");
let count=0;
const decrementValue=document.getElementById("janu");
incrementValue.addEventListener("click",function(){
    count++;
    display.innerText=count;
    
});
decrementValue.addEventListener("click",function(){
    count--;
    display.innerText=count;
    
});
