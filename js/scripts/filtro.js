function filtrar(){
    // Obtendo a referência para o elemento multi-checkbox
    var multiCheckbox = document.querySelector('multi-checkbox');

    // Verificando se o elemento foi encontrado
    if (multiCheckbox) {
    // Acessando a propriedade value
    var value = multiCheckbox.value;

    var vetorValores = value.split(',');
    var cards= document.getElementsByClassName('card-custom')
    if(vetorValores[0]==""){
        for(let index=0;index<cards.length;index++){
            cards[index].style.display="block";
        }
    }else{
        for(let index=0;index<cards.length;index++){
            categorias = cards[index].getAttribute('categorias').split(',');
            if(testarCard(vetorValores,categorias)){
                cards[index].style.display="block";
            }else{
                cards[index].style.display="none";
            }
        }
    }
    }
}

function testarCard(Selecionados,Categorias){
    for(let i=0;i<Selecionados.length;i++){
        for(let j=0;j<Categorias.length;j++){
          
            if(Selecionados[i]==Categorias[j]){
                
                return true;
            }
        }
    }
    console.log("false");
    return false;
}

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById('btn-filtrar').addEventListener('click', function() {
       filtrar()
        // Adicione aqui o código que você deseja executar ao clicar no botão
    });
});