const menu = document.querySelector('.hamburguesa');
const navegacion = document.querySelector('.navegacion');

document.addEventListener('DOMContentLoaded',()=>{
    eventos();
});

const eventos = () =>{
    menu.addEventListener('click',abrirMenu);
}
const abrirMenu = () =>{
    navegacion.classList.remove('ocultar');
    botonCerrar();
}
const botonCerrar = () =>{
     const btnCerrar = document.createElement('p');
     const overlay = document.createElement('div');
     overlay.classList.add('pantalla-completa');
     const body = document.querySelector('body');
     body.appendChild(overlay);
     btnCerrar.textContent = 'x';
     btnCerrar.classList.add('btn-cerrar');
     navegacion.appendChild(btnCerrar);
     cerrarMenu(btnCerrar);
}

const cerrarMenu = (boton) =>{
    boton.addEventListener('click',()=>{
        navegacion.classList.add('ocultar');
    });
}