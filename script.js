document.addEventListener("DOMContentLoaded", function(){

  const hamburger = document.getElementById("hamburger");
  const navLinks = document.getElementById("navLinks");
  const overlay = document.getElementById("navOverlay");
  const links = navLinks.querySelectorAll("a");

  hamburger.addEventListener("click", function(){
    hamburger.classList.toggle("active");
    navLinks.classList.toggle("active");
    overlay.classList.toggle("active");
    document.body.classList.toggle("nav-open");
  });

  overlay.addEventListener("click", closeMenu);

  links.forEach(link=>{
    link.addEventListener("click", closeMenu);
  });

  function closeMenu(){
    hamburger.classList.remove("active");
    navLinks.classList.remove("active");
    overlay.classList.remove("active");
    document.body.classList.remove("nav-open");
  }

});
if (typeof particlesJS !== "undefined") {
particlesJS("particles-js",{
"particles":{
"number":{"value":80},
"color":{"value":"#0b5cff"},
"shape":{"type":"circle"},
"opacity":{"value":0.5},
"size":{"value":3},
"line_linked":{
"enable":true,
"distance":150,
"color":"#0b5cff",
"opacity":0.4,
"width":1
},
"move":{"enable":true,"speed":1.5}
},
"interactivity":{
"events":{
"onhover":{"enable":true,"mode":"grab"}
}
}
});
}
const card = document.querySelector(".card");

if(card){
card.addEventListener("click", function(){
card.classList.add("clicked");

setTimeout(() => {
card.classList.remove("clicked");
}, 400);
});
}
