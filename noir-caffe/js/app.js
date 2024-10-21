// Array de produtos simulados
const produtos = [
    { id: 1, nome: "Placa de vídeo", preco: 250.00,Image:"", descricao: "Placa de Vídeo Galax NVIDIA GeForce - RTX 3050, 6GB, DDR6, 96 Bits" },
    { id: 2, nome: "Water Cooler", preco: 320.00,Image:"", descricao: "Water Cooler Galax Hydro Vortex, ARGB, 120mm, AMD/Intel, Branco - AGV12AN4AW0" },
    { id: 3, nome: "Processador", preco: 720.00,Image:"",descricao: "Processador AMD Ryzen 5 5500, 3.6GHz (4.2GHz Max Turbo), Cache 19MB, AM4, Sem Vídeo - 100-100000457BOX" }
];

const carrinho = [];

// Função para carregar produtos dinâmicos na seção de "Produtos em Destaque"
document.addEventListener("DOMContentLoaded", () => {
    carregarProdutos();
    atualizarCarrinho();
});

function carregarProdutos() {
    const listaProdutos = document.querySelector('.row'); // Seleciona o container de produtos

    produtos.forEach(produto => {
        const colDiv = document.createElement('div');
        colDiv.classList.add('col-sm-4');

        const cardDiv = document.createElement('div');
        cardDiv.classList.add('card');

        cardDiv.innerHTML = `
            <img src="${produto.image}" class="card-img-top" alt="${produto.nome}">
            <div class="card-body">
                <h5 class="card-title">${produto.nome}</h5>
                <p class="card-text">${produto.descricao}</p>
                <p class="card-text">Preço: R$ ${produto.preco.toFixed(2)}</p>
                <button class="btn btn-primary" onclick="adicionarAoCarrinho(${produto.id})">Adicionar ao Carrinho</button>
            </div>
        `;

        colDiv.appendChild(cardDiv);
        listaProdutos.appendChild(colDiv);
    });
}

// Função para adicionar ao carrinho
function adicionarAoCarrinho(id) {
    const produto = produtos.find(prod => prod.id === id);
    carrinho.push(produto);
    atualizarCarrinho();
}

// Função para remover do carrinho
function removerDoCarrinho(id) {
    const index = carrinho.findIndex(prod => prod.id === id);
    if (index !== -1) {
        carrinho.splice(index, 1); // Remove o item do carrinho
        atualizarCarrinho();
    }
}

// Função para atualizar o carrinho e mostrar os itens
function atualizarCarrinho() {
    const listaCarrinho = document.getElementById('lista-carrinho');
    const total = document.getElementById('total');
    
    listaCarrinho.innerHTML = ""; // Limpa o conteúdo anterior
    let totalValor = 0;

    carrinho.forEach(item => {
        const li = document.createElement('li');
        li.innerHTML = `
            ${item.nome} - R$ ${item.preco.toFixed(2)}
            <button class="btn btn-danger btn-sm" onclick="removerDoCarrinho(${item.id})">Remover</button>
        `;
        listaCarrinho.appendChild(li);
        totalValor += item.preco;
    });

    total.textContent = `Total: R$ ${totalValor.toFixed(2)}`;
}

// Função para finalizar a compra
function finalizarCompra() {
    if (carrinho.length === 0) {
        alert("Seu carrinho está vazio!");
        return;
    }

    alert("Compra finalizada com sucesso!");
    carrinho.length = 0; // Limpa o carrinho
    atualizarCarrinho();
}