const botaoMenu = document.querySelector('.cabecalho__menu-hamburguer')
const menu = document.querySelector('.lista-menu')
const itensMenu = document.querySelectorAll('.lista-menu__item')

botaoMenu.addEventListener('click', () => {
    menu.classList.toggle('ativo')
    itensMenu.forEach(e => {
        e.classList.toggle('item-ativo')
    });
})

