// alert("hlw")

const time_element = document.querySelector(".watch .time");
const start_btn = document.getElementById("start");
const end_btn = document.getElementById("end");
const reset_btn =document.getElementById("reset");


start_btn.addEventListener("click", start);
end_btn.addEventListener("click", end);
reset_btn.addEventListener("click", reset);

let counter = 0;
let innerValue = null;

function time(){
    counter++;

    let hours = Math.floor(counter / 3600);
    let minutes = Math.floor((counter / 60 ) % 60);
    // let minutes = Math.floor((counter -(hours *3600)) / 60)
    let seconds = Math.floor(counter % 60);

    if( hours < 10){
        hours = '0' + hours;
    }
    if(minutes < 10){
        minutes = '0' + minutes;
    }
    if(seconds < 10){
        seconds = '0'+ seconds;
    }


    time_element.innerHTML = `${hours}:${minutes}:${seconds}`;
 

   
}

start();

function start(){
    if(innerValue){
        return;
    }

 innerValue= setInterval(time , 200);
}

function end(){
    clearInterval(innerValue);
}

function reset(){
  end();
  counter = 0;
  time_element.innerText= "00:00:00";
}





// var secs  = Math.floor(c % 60);
// var mins  = Math.floor((c/60) % 60);
// var hours = Math.floor((c/(60*60)));