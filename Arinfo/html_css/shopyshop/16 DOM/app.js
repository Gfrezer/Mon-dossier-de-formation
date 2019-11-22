/*
// DOM - Document Object Model
let liste;
liste = document.querySelector('li')
liste.style.color = "red"
console.log(liste);

let liste1;
liste1 = document.getElementsByClassName('collection-item')
liste1[1].style.color = "blue"

const h3 = document.querySelector("h3");

const form = document.getElementById("main");
form.addEventListener('mousemove' , mouseTracking);
function mouseTracking(b) {    h3.textContent = `l axe x: ${b.offsetX} - l'axe y: ${b.offsetY}`
}

 
let n;
n = document.all;
console.log(n);



let liste;
liste =document.querySelectorAll("ul");
console.log(liste);

let liste;
liste = document.querySelector("ul");
console.log(liste);

let liste1;
liste1 = document.querySelectorAll("li");
liste1[1].style.color = "red"
console.log(liste1);
  
let getid;
getid = document.getElementById("main");
getid.style.backgroundColor = "green";
*/
let li =document.querySelector("li");
let n = li;
n = li.getAttribute("class");
n = li.setAttribute("style", "font-style:italic");
console.log(n);
