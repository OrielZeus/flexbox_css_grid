//parte responsive basica para simular una barra de navegacion con modo hamburguesa
let menu=document.querySelector('#menu');
let menu_bar=document.querySelector('#menu-bar');
menu_bar.addEventListener('click',function(){
    //escuchar el evento de cambio para una simulacion de responsivo y muestre el menu
    menu.classList.toggle('menu-toggle');
});
//fin de la parte responsive
