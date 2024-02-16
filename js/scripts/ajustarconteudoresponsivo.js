function ajustarConteudoResponsivo(){
    // Seleciona o elemento a ser observado
    var elementoObservado = document.getElementById("navbarNav");
    var main = document.getElementsByTagName("main");
    // Cria um MutationObserver com uma função de callback
    var observer = new MutationObserver(function(mutations) {
        mutations.forEach(function(mutation) {
            if (mutation.attributeName === "class") {
                if(main[0].classList.contains("abaixado-responsivo")){
                    main[0].classList.remove("abaixado-responsivo");
                    altura = main[0].getAttribute("altura");
                    main[0].style.marginTop  = altura.toString()+"px";
                }else{
                    var alturaNav = elementoObservado.offsetHeight;
                    altura = main[0].getAttribute("altura");
                    altura = altura + alturaNav;
                    main[0].style.marginTop  = altura.toString()+"px";
                    main[0].classList.add("abaixado-responsivo");
                }
            }
        });
    });

    // Configurações do MutationObserver
    var config = { attributes: true };

    // Inicia a observação no elemento alvo e as configurações fornecidas
    observer.observe(elementoObservado, config);
}

document.addEventListener("DOMContentLoaded", function() {
    ajustarConteudoResponsivo();
});
