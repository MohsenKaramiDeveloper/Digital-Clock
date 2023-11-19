let hrs = document.getElementById("hrs")
let min = document.getElementById("min")
let sec = document.getElementById("sec")

setInterval(()=>{
    let currentTime = new Date();

hrs.innerHTML = (currentTime.getHours()<10?"0":"") + currentTime.getHours();
min.innerHTML = (currentTime.getMinutes()<10?"0":"") + currentTime.getMinutes();
sec.innerHTML = (currentTime.getSeconds()<10?"0":"") + currentTime.getSeconds();


},1000)


var text = document.getElementById('text');
function changeColor(event){
    text.style.color=event.target.value;
}

//1comment
//var text = document.getElementById('text');
function changeColor(event){
    text.style.color=event.target.value;
}



