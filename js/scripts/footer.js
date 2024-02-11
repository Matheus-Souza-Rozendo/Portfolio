function criarFooter(){
        // Criação de elementos HTML com atributos
        var footer = document.createElement("footer");
        footer.className = "contact section-padding pt-0";
        footer.id = "contact";
        footer.style.backgroundColor = "black";

        var container = document.createElement("div");
        container.className = "container-fluid";

        var row = document.createElement("div");
        row.className = "row";

        var col = document.createElement("div");
        col.className = "mx-auto col-lg-12 col-md-12 col-12 text-center";

        // Adição de um título h3
        var title = document.createElement("h3");
        title.className = "my-4 pt-4 pt-lg-0";
        title.style.color = "white";
        title.textContent = "Entre em Contato";

        // Adição de uma lista de links sociais
        var socialLinks = document.createElement("ul");
        socialLinks.className = "social-links mt-2";

        var linkedinLink = document.createElement("li");
        var linkedinAnchor = document.createElement("a");
        linkedinAnchor.href = "https://www.linkedin.com/in/matheus-souza-rozendo";
        linkedinAnchor.rel = "noopener";
        linkedinAnchor.className = "fab fa-linkedin";
        linkedinLink.appendChild(linkedinAnchor);

        var githubLink = document.createElement("li");
        var githubAnchor = document.createElement("a");
        githubAnchor.href = "https://github.com/Matheus-Souza-Rozendo";
        githubAnchor.rel = "noopener";
        githubAnchor.className = "fab fa-github";
        githubLink.appendChild(githubAnchor);

        socialLinks.appendChild(linkedinLink);
        socialLinks.appendChild(githubLink);

        // Adição de um parágrafo de direitos autorais
        var copyrightText = document.createElement("p");
        copyrightText.className = "copyright-text mt-5 pt-3";
        copyrightText.style.color = "white";
        copyrightText.textContent = "Copyright © Matheus Souza Rozendo";

        // Adição de todos os elementos criados à estrutura da página
        col.appendChild(title);
        col.appendChild(socialLinks);
        col.appendChild(copyrightText);

        row.appendChild(col);
        container.appendChild(row);
        footer.appendChild(container);

        // Adição do footer ao corpo da página
        document.body.appendChild(footer);

}

document.addEventListener("DOMContentLoaded", function() {
    criarFooter();
});