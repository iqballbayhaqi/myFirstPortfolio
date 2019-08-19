// import Button from '../Avatar';
// Loading Page_
let load = document.getElementById("loading");

window.addEventListener('load', function(){
  load.style.display = 'none';
});

// Typewrite
var i = 0;
var txt = "Hi! I'am Iqbal Baihaqi";
var speed = 10; /* Durasi kecepatan teks */

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("demo").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

typeWriter()

// Sidebar
var modal = document.getElementById("mySideBar");
var btn = document.getElementById("myBtn");
var span = document.getElementsByClassName("close")[0];

btn.onclick = function() {
  modal.style.width = "100%";
}
span.onclick = function() {
  modal.style.width = "0";
}
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
} 
function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
}

document.getElementById("about").onclick = function() {
  modal.style.width = "0";
}
document.getElementById("contact").onclick = function() {
  modal.style.width = "0";
}
document.getElementById("work").onclick = function() {
  modal.style.width = "0";
}