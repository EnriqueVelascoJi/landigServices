
//Menú Responsive
//Variables por utlizar en el Script
const btnMenu = document.querySelector('.btn-Menu');
const enlacesMenu = document.querySelectorAll('.enlace-menu');
const landingInfo = document.querySelector('.landing-info');
const generalDescription = document.querySelector('.general-description'); 

//Eventos
addEventListeners();
function addEventListeners() {

    btnMenu.addEventListener('click', activarMenuResponsive);
}

//Fubción que activa el menú responsivo
const divMenu = document.createElement('div');
divMenu.classList.add('menu-responsive');
let oculto = true;
function activarMenuResponsive() {

    
    if(oculto) {
        divMenu.classList.remove('menu-responsive-oculto', 'animate__fadeOutUp');
        divMenu.classList.add('animate__animated', 'animate__fadeInDown');

        enlacesMenu.forEach(enlace => {
            divMenu.appendChild(enlace);
        });

        landingInfo.insertBefore(divMenu, generalDescription);
        console.log(oculto)
        oculto = false;
    } else {
        console.log(oculto)
        divMenu.classList.remove('animate__animated', 'animate__fadeInDown');
        divMenu.classList.add('menu-responsive-oculto', 'animate__animated', 'animate__fadeOutUp');
        setTimeout(() => {
            divMenu.remove();
        }, 600);
        oculto = true;
    }
    

}