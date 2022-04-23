

//MENU MOBILE
let btnOpen = document.getElementById("btnOpen");
let btnClose = document.getElementById("btnClose");

function toggleMenu(){
    const menuSidebar = document.getElementById("sidebar__menu");
    menuSidebar.classList.toggle('close');    
}

btnOpen.addEventListener('click', toggleMenu);
btnClose.addEventListener('click', toggleMenu);

//PORTFOLIO

