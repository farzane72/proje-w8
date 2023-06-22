
function message(){
    alert('hello');
}
function debounce(message,time){

    setTimeout( message, time);
}

//let time=0;
let time=+prompt("enter time for run function",);
let input=document.getElementById("test");
console.log(input.value);
if(input.value===''){
    debounce(message,time);
}

input.addEventListener("keyup",()=>debounce(message,time))

//console.log(Debounce(message,time ));