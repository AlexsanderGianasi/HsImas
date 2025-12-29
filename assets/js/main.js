/*===== EXPANDER MENU  =====*/ 
const showMenu = (toggleId, navId)=>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)
  
    if(toggle && nav){
      toggle.addEventListener('click', ()=>{
        nav.classList.toggle('show')
        toggle.classList.toggle('bx-x')
      })
    }
  }
  showMenu('header-toggle','nav-menu')

  /*===== ACTIVE AND REMOVE MENU =====*/
const navLink = document.querySelectorAll('.nav__link');   

function linkAction(){
  /*Active link*/
  navLink.forEach(n => n.classList.remove('active'));
  this.classList.add('active');
}
navLink.forEach(n => n.addEventListener('click', linkAction));

window.addEventListener("scroll", function(){
  let header = document.querySelector('#header')
  header.classList.toggle('roll', window.scrollY > 0)
})
let currentSection = 0;
const sections = document.querySelectorAll("section");
const footer = document.querySelector("footer");
let isScrolling = false;

window.addEventListener("wheel", (e) => {
  e.preventDefault();

  if (isScrolling) return;
  isScrolling = true;


  if (e.deltaY > 0) {
    if (currentSection < sections.length - 1) {
      currentSection++;
      sections[currentSection].scrollIntoView({ behavior: "smooth" });
    } else {
    
      document.body.style.overflow = "auto";
      window.scrollTo({
        top: document.body.scrollHeight,
        behavior: "smooth"
      });
    }
  }


  else {
    if (window.scrollY > sections[sections.length - 1].offsetTop) {
    
      sections[sections.length - 1].scrollIntoView({ behavior: "smooth" });
    } else if (currentSection > 0) {
      currentSection--;
      sections[currentSection].scrollIntoView({ behavior: "smooth" });
    }
  }

  setTimeout(() => {
    isScrolling = false;
  }, 800);
}, { passive: false });