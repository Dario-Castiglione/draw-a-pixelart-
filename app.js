const color = document.querySelectorAll('.color');
const section = document.querySelector("section")

//inserisco i colori
color[0].style.background = "black";
color[1].style.background = "red";
color[2].style.background = "blue";
color[3].style.background = "grey";
color[4].style.background = "orange";
color[5].style.background = "yellow";
color[6].style.background = "salmon";
color[7].style.background = "greenyellow";
color[8].style.background = "firebrick";
color[9].style.background = "khaki";


//genero i blocchi da colorare
for (let i = 0; i < 400; i++){
const div = document.createElement("div");
div.setAttribute('class', 'drawer');
section.appendChild(div);}



//colori
let colorChosen = "";
function colorChose(event){
  colorChose = event.target.style.backgroundColor;
  console.log(colorChosen)
}
for (x of color) x.addEventListener("click", colorChose)

//blocchi da colorare
const draw = document.querySelectorAll('.drawer')
function colorDraw(event){
    event.target.style.backgroundColor = colorChose;
}
for (x of draw) x.addEventListener("click", colorDraw)

//cancella

const removeAll = document.querySelectorAll("button")
removeAll[0].addEventListener("click",() => {
    for (x of draw) x.style.backgroundColor = "#fff"
})

