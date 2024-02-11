function criarNavbar() {
    // Criação dos elementos
    var nav = document.createElement("nav");
    nav.className = "navbar navbar-expand-lg";

    var container = document.createElement("div");
    container.className = "container";

    var brandLink = document.createElement("a");
    brandLink.className = "navbar-brand";
    brandLink.href = "/index.html";
    brandLink.textContent = "Matheus Rozendo";

    var toggleButton = document.createElement("button");
    toggleButton.className = "navbar-toggler";
    toggleButton.type = "button";
    toggleButton.setAttribute("data-toggle", "collapse");
    toggleButton.setAttribute("data-target", "#navbarNav");
    toggleButton.setAttribute("aria-controls", "navbarNav");
    toggleButton.setAttribute("aria-expanded", "false");
    toggleButton.setAttribute("aria-label", "Toggle navigation");

    var toggleIcon = document.createElement("span");
    toggleIcon.className = "navbar-toggler-icon";
    toggleButton.appendChild(toggleIcon);

    var collapseDiv = document.createElement("div");
    collapseDiv.className = "collapse navbar-collapse";
    collapseDiv.id = "navbarNav";

    var ulList = document.createElement("ul");
    ulList.className = "navbar-nav mx-auto";

    var menuItems = [
        { href: "#intro", text: "Introdução" },
        { href: "#about", text: "Sobre Mim" },
        { href: "Projetos.html", text: "Projetos" },
        { href: "#contact", text: "Contato" }
    ];

    menuItems.forEach(function (item) {
        var liItem = document.createElement("li");
        liItem.className = "nav-item";

        var aLink = document.createElement("a");
        aLink.href = item.href;
        aLink.className = "nav-link smoothScroll";
        aLink.textContent = item.text;

        liItem.appendChild(aLink);
        ulList.appendChild(liItem);
    });

    var downloadDiv = document.createElement("div");
    downloadDiv.className = "mt-lg-0 mt-3 mb-4 mb-lg-0";

    var downloadLink = document.createElement("a");
    downloadLink.href = "#"; 
    downloadLink.className = "custom-btn btn";
    downloadLink.download = true;
    downloadLink.style.color = "red";
    downloadLink.textContent = "Download CV";

    downloadDiv.appendChild(downloadLink);

    // Adiciona os elementos ao DOM
    collapseDiv.appendChild(ulList);
    collapseDiv.appendChild(downloadDiv);

    container.appendChild(brandLink);
    container.appendChild(toggleButton);
    container.appendChild(collapseDiv);

    nav.appendChild(container);

    // Adiciona a navbar ao corpo do documento
    document.body.appendChild(nav);
}

// Chama a função para criar a navbar quando o DOM estiver pronto
document.addEventListener("DOMContentLoaded", function() {
    criarNavbar();
});