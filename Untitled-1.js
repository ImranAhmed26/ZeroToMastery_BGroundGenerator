let css =document.querySelector("h2");
let color1 = document.querySelector("#Color1");
let color2 = document.querySelector("#Color2");
let body = document.querySelector("#Body");



color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);

function setGradient(){
    body.style.background = 
    "linear-gradient(to right, "
    + color1.value + "," + color2.value + ")";
    css.textContent = body.style.background + ";";
}




