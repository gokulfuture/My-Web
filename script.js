// Mobile Menu

const menu=document.querySelector(".menu-btn");
const nav=document.querySelector(".nav-links");

menu.onclick=()=>{
nav.classList.toggle("active");
};

// Typing Effect

const text="Web Developer | Python Programmer | Data Science Enthusiast";

let i=0;

function typing(){

if(i<text.length){

document.getElementById("typing").innerHTML+=text.charAt(i);

i++;

setTimeout(typing,80);

}

}

typing();

// Scroll Animation

window.addEventListener("scroll",()=>{

const reveals=document.querySelectorAll(".reveal");

reveals.forEach((element)=>{

const top=element.getBoundingClientRect().top;

const visible=150;

if(top<window.innerHeight-visible){

element.classList.add("active");

}

});

});