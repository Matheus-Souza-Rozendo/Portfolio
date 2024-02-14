let container = document.getElementById("cards");

async function consumirAPI() {
    try {
      const response = await fetch('JSON/Projetos.json');
  
      if (!response.ok) {
        throw new Error('Não foi possível obter os dados do JSON');
      }
  
      const data = await response.json();
      // Aqui você pode manipular os dados obtidos do JSON
      return data;
    } catch (error) {
      console.error('Erro ao obter dados do JSON:', error);
      return null;
    }
  }

async function inserirCard(Projeto){
    // Container do card
    const cardContainer = document.createElement('div');
    cardContainer.classList.add('card-custom');

    // Imagem do card
    const cardImagem = document.createElement('img');
    cardImagem.src = Projeto.imagem;
    cardImagem.alt = 'destaque';

    // Título do card
    const cardTitulo = document.createElement('p');
    cardTitulo.classList.add('text-center', 'card-titulo');
    cardTitulo.textContent = Projeto.nome;

    // Descrição do card
    const cardDescricao = document.createElement('div');
    cardDescricao.classList.add('text-center');
    const descricaoParagrafo = document.createElement('p');
    descricaoParagrafo.classList.add('card-description');
    descricaoParagrafo.textContent = Projeto.descricao;
    cardDescricao.appendChild(descricaoParagrafo);

       // Categoria do card
       const categoriaDiv = document.createElement('div');
       categoriaDiv.style.marginBottom = '10px';
       const pilsDiv = document.createElement('div');
       pilsDiv.classList.add('pils');
       
       //div de comprimido
       Projeto.categorias.forEach(e => {
        const comprimidoDiv = document.createElement('div');
        if(e=="Eletrônica"){
            comprimidoDiv.classList.add('comprimido', 'eletronica');
        }
        if(e=="C++"){
            comprimidoDiv.classList.add('comprimido', 'cpp');
        }
        if(e!="Eletrônica" && e!="C++"){
            comprimidoDiv.classList.add('comprimido', e.toLowerCase());
        }

        comprimidoDiv.textContent = e;
        pilsDiv.appendChild(comprimidoDiv);
       });

       categoriaDiv.appendChild(pilsDiv);
   
       // Botão "Saiba Mais" do card
       const botaoSaibaMais = document.createElement('a');
       botaoSaibaMais.href = Projeto.link;
       botaoSaibaMais.classList.add('botao-moderno');
       botaoSaibaMais.textContent = 'Saiba Mais';
   
       // Container do rodapé do card
       const footerCard = document.createElement('div');
       footerCard.classList.add('footer-card');
       footerCard.style.display = 'flex';
       footerCard.style.flexDirection = 'column';
       footerCard.style.alignItems = 'center';
       footerCard.appendChild(categoriaDiv);
       footerCard.appendChild(botaoSaibaMais);


    cardContainer.appendChild(cardImagem);
    cardContainer.appendChild(cardTitulo);
    cardContainer.appendChild(cardDescricao);
    cardContainer.appendChild(footerCard);

    container.appendChild(cardContainer);
}

async function gerarCards() {
    dados = await consumirAPI();
    if (dados && dados.Projetos) {
        dados.Projetos.forEach((projeto) => {
            inserirCard(projeto);
            // Aqui você pode gerar os cards com as informações do projeto
        });
    } else {
        console.error('Dados inválidos ou sem projetos.');
    }
}

document.addEventListener("DOMContentLoaded", function() {
    gerarCards();
});


