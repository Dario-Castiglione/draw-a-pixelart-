const color = document.querySelectorAll('.color');
const section = document.querySelector("section");
const circles = document.querySelector('.circles')



//imposto i colori
let counter = 0;
const colorsPallette= ["black","red","blue","grey","orange","yellow","salmon","greenyellow","firebrick","white","khaki"] 
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
let isStoppedColor = false;


//blocchi da colorare
const stopColor = () => section.addEventListener("mouseup", () =>  isStoppedColor = true,);
const draw = document.querySelectorAll('.drawer')
function colorDraw(event){
  if (!isStoppedColor){
    event.target.style.backgroundColor = colorChosen; 
}}



const mousecolor =()=> {for (x of draw) x.addEventListener("mouseover", colorDraw),
isStoppedColor = false;}
section.addEventListener("mousedown", mousecolor)
stopColor()




//cancella
const removeAll = document.querySelectorAll("button")
removeAll[0].addEventListener("click",() => {
    for (x of draw) x.style.backgroundColor = "#fff"
})

