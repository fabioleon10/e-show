// recupera o elemento tbody da página
const tbody = document.querySelector('tbody');

//cria um array para receber os dados e montar os cards
const card = [];

//adiciona um escutador de eventos ao formulário para verificar quando ele será enviado e
document.querySelector('form').addEventListener('submit', function (e) {
    // cancelar o evento 
    e.preventDefault();

    //recuperar os campos
    const campos = [
        document.querySelector('#artista'),
        document.querySelector('#dataShow'),
        document.querySelector('#cidade'),
        document.querySelector('#localShow'),
        document.querySelector('#mediaIngresso'),
        document.querySelector('#banner')
    ];

    // criar uma TR para escrever no tbody
    const tr = document.createElement('tr');

    // vamos montar um forEach para percorrer o Array e para cada ocorrência , criar uma td e vincular à tr
    campos.forEach((campo) => {

        // criar a td 
        const td = document.createElement('td');

        //verificando o tipo de campo por causa do file
        if (campo.type == 'file') {
            //criando a variável para receber o endereço da imagem            
            let src = String(campo.value);
            //arrumando o endereço da imagem
            src = src.replace('C:\\fakepath\\', './images/');
            //inserindo a imagem na td
            td.innerHTML = `<img src="${src}" width="200" height="auto">`;
            //inserindo a imagem no array
            card.push(src);
        }

        else {
            //inserir o conteúdo dos campos na td
            td.textContent = campo.value;
            card.push(campo.value);
        }

        //vincule a td na tr
        tr.appendChild(td);
    })

    // vincular a tr criada no tbody
    tbody.appendChild(tr);

    //limpar os dados digitados
    this.reset();

    //criando os cards
    let cards = document.querySelector('.cards-shows');
    cards.innerHTML +=`
        <div class="col-md-3 my-3">
            <div class="card">
                <img src="${card[5]}" class="card-img-top" alt="Show">
                <div class="card-body">
                    <h2 class="card-title display-6">${card[0]}</h2>
                    <p class="card-text lead">Data: ${card[1]}</p>                    
                    <a href="#" class="btn btn-danger">Comprar Ingresso</a>
                </div>
            </div>
        </div>
    `
    //zerando o array após inserir na página
    card.splice(0);
});