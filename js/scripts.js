// social media fullscreen
/* Open */
function openNav() {
    document.getElementById("myNav").style.height = "100%";
    document.getElementById("myNav").style.opacity = "100%";
  }
  
  /* Close */
  function closeNav() {
    document.getElementById("myNav").style.height = "0%";
    document.getElementById("myNav").style.opacity = "0%";
  }

  document.addEventListener('keydown', function(event) {
    const key = event.key; 
    if (key === "Escape") {
       closeNav();
    }
});
// social media fullscreen

// typewriter animation
const typedTextSpan = document.querySelector(".typed-text");
const cursorSpan = document.querySelector(".cursor");

const textArray = ["Game Developer", "Software Developer", "Web Developer", "Minecraft Server Developer", "Researcher", "Designer"];
const typingDelay = 100;
const erasingDelay = 50;
const newTextDelay = 1000; 
let textArrayIndex = 1;
let charIndex = 0;

function type() {
  if (charIndex < textArray[textArrayIndex].length) {
    if(!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
    typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
    charIndex++;
    setTimeout(type, typingDelay);
  } 
  else {
    cursorSpan.classList.remove("typing");
    setTimeout(erase, newTextDelay);
  }
}

function erase() {
  if (charIndex > 0) {
    if(!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
    typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex-1);
    charIndex--;
    setTimeout(erase, erasingDelay);
  } 
  else {
    cursorSpan.classList.remove("typing");
    textArrayIndex++;
    if(textArrayIndex>=textArray.length) textArrayIndex=0;
    setTimeout(type, typingDelay + 1100);
  }
}

document.addEventListener("DOMContentLoaded", function() { 
  if(textArray.length) setTimeout(type, newTextDelay + 250);
});

type();
// typewriter animation


// Change navi color on scroll
window.addEventListener("scroll", function() {
  var header = document.getElementById("nav");
  if (window.scrollY > 0) {
      header.style.backgroundColor = "black"; 
  } else {
      header.style.backgroundColor = "rgba(0, 0, 0, 0.3)"; 
  }
});
// Change navi color on scroll



// Back to Top Button
let mybutton = document.getElementById("backtotop");


window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 600 || document.documentElement.scrollTop > 600) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}


function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
// Back to Top Button


// Scroll Reveal code
ScrollReveal().reveal('.scrollreveal');
// Scroll Reveal code
