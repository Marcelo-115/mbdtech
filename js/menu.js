let btnMenu = document.querySelector('#btn-menu');
let btnFechar = document.querySelector('#btn-fechar');
let menuMobile = document.querySelector('#menu-mobile');

// Abrir menu
btnMenu.addEventListener('click', () => {
    menuMobile.classList.add('menu-ativo');
});

// Fechar menu
btnFechar.addEventListener('click', () => {
    menuMobile.classList.remove('menu-ativo');
});

// Fechar ao clicar em um link
menuMobile.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        menuMobile.classList.remove('menu-ativo');
    });
});

