

const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');

    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active');
        
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = 'navLinkFade 0.5s ease forwards ${index / 7 + 1.5}s';
            }
            
        });

        burger.classList.toggle('toggle');

    });
    };
    
navSlide();

const autoClose = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');

    nav.addEventListener('click', () => {
        nav.classList.toggle('nav-active');
        
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = 'navLinkFade 0.5s ease forwards ${index / 7 + 1.5}s';
            }
            
        });

        burger.classList.toggle('toggle');

    });
    };
autoClose();


$( document ).ready(function() {
    $("#home").click(function(){
        $('html, body').animate({scrollTop: $('html').offset().top}, 'slow');      
    }); 
    $("#about").click(function(){
        $('html, body').animate({scrollTop: $('section.about').offset().top}, 'slow');      
    }); 
    $("#skills").click(function(){
        $('html, body').animate({scrollTop: $('section.skills').offset().top}, 'slow');      
    }); 
    $("#experience").click(function(){
        $('html, body').animate({scrollTop: $('section.experience').offset().top}, 'slow');      
    }); 
    $("#projects").click(function(){
        $('html, body').animate({scrollTop: $('section.projects').offset().top}, 'slow');      
    }); 
    $("#contact").click(function(){
        $('html, body').animate({scrollTop: $('section.contact').offset().top}, 'slow');      
    }); 
});

var scroll = window.requestAnimationFrame ||
             // IE Fallback
             function(callback){ window.setTimeout(callback, 1000/60)};
var elementsToShow = document.querySelectorAll('.show-on-scroll'); 

function loop() {

    Array.prototype.forEach.call(elementsToShow, function(element){
      if (isElementInViewport(element)) {
        element.classList.add('is-visible');
      } else {
        element.classList.remove('is-visible');
      }
    });

    scroll(loop);
}

loop();

function isElementInViewport(el) {

  if (typeof jQuery === "function" && el instanceof jQuery) {
    el = el[0];
  }
  var rect = el.getBoundingClientRect();
  return (
    (rect.top <= 0
      && rect.bottom >= 0)
    ||
    (rect.bottom >= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.top <= (window.innerHeight || document.documentElement.clientHeight))
    ||
    (rect.top >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight))
  );
}

