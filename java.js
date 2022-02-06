const hamburger =document.querySelector(".hamburger");
const nav = document.querySelector(".nav");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu(){
    hamburger.classList.toggle("active");
    nav.classList.toggle("active");
}

var i = 0;
var txt = 'Lorem ipsum typing effect!'
var speed = 50;

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("banner").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}