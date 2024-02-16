function construirmain() {
    // Criar o elemento main
    var mainElement = document.createElement('main');
    mainElement.classList.add('container-fluid');
    mainElement.style.minHeight = '100vh';

    // Criar o elemento div com a classe row e id filtro
    var rowElement = document.createElement('div');
    rowElement.classList.add('row');
    rowElement.id = 'filtro';

    // Criar o elemento div com a classe col e classes adicionais
    var colElement = document.createElement('div');
    colElement.classList.add('col', 'd-flex', 'justify-content-between', 'align-items-center');

    // Adicionar o formulário ao elemento col
    var formElement = document.createElement('form');
    formElement.classList.add('form-inline', 'categorias-details');
    var labelElement = document.createElement('label');
    labelElement.textContent = 'Categorias';

    // Adicionar o multi-checkbox ao formulário
    var multiCheckbox = document.createElement('multi-checkbox');
    multiCheckbox.setAttribute('separator', ',');
    multiCheckbox.setAttribute('value', '');
    var ulElement = document.createElement('ul');
    ulElement.setAttribute('slot', 'check-values');

    // Adicionar itens à lista
    var categorias = ['Python', 'C++', 'Backend', 'FrontEnd', 'Javascript', 'Embarcados', 'Eletrônica'];
    categorias.forEach(function(categoria) {
        var liElement = document.createElement('li');
        liElement.textContent = categoria;
        ulElement.appendChild(liElement);
    });

    // Adicionar os elementos criados ao DOM
    multiCheckbox.appendChild(ulElement);
    formElement.appendChild(labelElement);
    formElement.appendChild(multiCheckbox);
    colElement.appendChild(formElement);

    // Adicionar o botão Filtrar ao elemento col
    var buttonElement = document.createElement('button');
    buttonElement.type = 'button';
    buttonElement.classList.add('btn', 'btn-primary', 'ml-auto');
    buttonElement.id = 'btn-filtrar';
    buttonElement.textContent = 'Filtrar';
    colElement.appendChild(buttonElement);

    // Adicionar o elemento col ao elemento row
    rowElement.appendChild(colElement);

    // Criar o elemento div com o id cards
    var cardsElement = document.createElement('div');
    cardsElement.id = 'cards';

    // Adicionar os elementos ao main
    mainElement.appendChild(rowElement);
    mainElement.appendChild(cardsElement);

    // Adicionar o main ao body
    document.body.appendChild(mainElement);
}

document.addEventListener("DOMContentLoaded", function() {
construirmain();
});