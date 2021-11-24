const color = document.querySelectorAll('.color');
const section = document.querySelector("section");

//imposto i colori
let counter = 0;
const colorsPallette= ["black","red","blue","grey","orange","yellow","salmon","greenyellow","firebrick","white","khaki","black"] 
for (x of color) x.style.background = colorsPallette[counter], counter++;

//genero i blocchi da colorare
for (let i = 0; i < 1600; i++){
const div = document.createElement("div");
div.setAttribute('class', 'drawer');
section.appendChild(div);}

//colori
let colorChosen = "";
function colorChose(event){
  colorChosen = event.target.style.backgroundColor;
}
for (x of color) x.addEventListener("click", colorChose)


//blocchi da colorare
let isStoppedColor = false;
const stopColor = () => document.addEventListener("mouseup", () =>  isStoppedColor = true,);
const draw = document.querySelectorAll('.drawer')
function colorDraw(event){
  if (!isStoppedColor){
    event.target.style.backgroundColor = colorChosen; 
}}

const mousecolor =()=> {section.addEventListener("mouseover", colorDraw),
isStoppedColor = false;}
document.addEventListener("mousedown", mousecolor)
stopColor()


//cancella
const Btn = document.querySelectorAll("button")
Btn[0].addEventListener("click",() => {
    for (x of draw) x.style.backgroundColor = "#fff"
})


//griglia
let griglia = false;
const pixel = document.querySelectorAll(".drawer")
Btn[1].addEventListener("click", () =>{
 if (!griglia) {

for (x of pixel) x.style.border = "1px solid #1b1b1b5b";
Btn[1].innerText ="RIMUOVI GRIGLIA";
griglia = true;}
else {
  for (x of pixel) x.style.border = "";
Btn[1].innerText ="AGGIUNGI GRIGLIA";
griglia = false;}
});


/*
function mobile() {
  //var el = document.getElementById("canvas");
  el.addEventListener("touchstart", handleStart, false);
  el.addEventListener("touchend", handleEnd, false);
  el.addEventListener("touchcancel", handleCancel, false);
  el.addEventListener("touchmove", handleMove, false);
}
document.addEventListener("DOMContentLoaded", startup);
*/

//let isStoppedColorMobile = false;
//const stopColorMobile = () => section.addEventListener("touchend", () =>  isStoppedColorMobile = true, true);
//const draw = document.querySelectorAll('.drawer')
function colorDrawMobile(TouchEvent){
  //if (!isStoppedColorMobile){
    TouchEvent.changedTouches.target.style.backgroundColor = colorChosen; 
    console.log("ciao")
}//}

const mousecolorMobile =()=> {for (x of draw) x.addEventListener("touchmove", colorDrawMobile, true)}
//stopColorMobile()
mousecolorMobile()
