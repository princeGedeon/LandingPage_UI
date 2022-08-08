const menuElementToToggle=document.querySelectorAll(".toggle-menu");
const iconToggle=document.querySelector(".icone-toggle");

const toggleMenu=()=> menuElementToToggle.forEach(el=> el.classList.toggle("hidden"));
iconToggle.addEventListener("click",toggleMenu);