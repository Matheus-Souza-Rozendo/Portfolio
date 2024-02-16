function ajustarConteudo(){
    // Seleciona o elemento a ser observado
    var elementoObservado = document.getElementById("observado");
    var main = document.getElementsByTagName("main");
    // Cria um MutationObserver com uma função de callback
    var observer = new MutationObserver(function(mutations) {
        mutations.forEach(function(mutation) {
            if (mutation.attributeName === "class") {
                if(main[0].classList.contains("abaixado")){
                    main[0].classList.remove("abaixado");
                    main[0].style.marginTop  = "0px";
                }else{
                    var alturaNav = elementoObservado.offsetHeight;
                    main[0].setAttribute("altura",alturaNav);
                    main[0].style.marginTop  = alturaNav.toString()+"px";
                    main[0].classList.add("abaixado");
                    
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
    ajustarConteudo();
});


