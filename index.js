// Script para mostrar/ocultar o menu
const menuButton = document.getElementById('menu');
const menuContainer = document.getElementById('menuContainer');

menuButton.addEventListener('click', () => {
    menuContainer.classList.toggle('active'); 
});