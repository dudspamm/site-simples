'use strict';

const switcher = document.querySelector('.btn');

switcher.addEventListener('click', function() {
    // Pega a classe do tema claro e a do tema escuro
    const body = document.body;
    const isLight = body.classList.contains('light-theme');

    if (isLight) {
        // Se o tema é claro, troca para o escuro
        body.classList.remove('light-theme');
        body.classList.add('dark-theme');
        this.textContent = "Claro"; // Botão agora oferece a opção "Claro"
    } else {
        // Se o tema é escuro, troca para o claro
        body.classList.remove('dark-theme');
        body.classList.add('light-theme');
        this.textContent = "Escuro"; // Botão agora oferece a opção "Escuro"
    }
});