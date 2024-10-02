const produtos = [
    { id: 1, nome: "Café Expresso", preco: 10.00, imagem: "caminho/para/imagem1.jpg" },
    { id: 2, nome: "Café Latte", preco: 12.50, imagem: "caminho/para/imagem2.jpg" },
    { id: 3, nome: "Café Mocha", preco: 13.00, imagem: "caminho/para/imagem3.jpg" },
    { id: 4, nome: "Café Americano", preco: 9.00, imagem: "caminho/para/imagem4.jpg" },
    { id: 5, nome: "Capuccino", preco: 11.00,imagem: "caminho/para/imagem1.jpg" },
    { id: 6, nome: "Latte Machiatto", preco: 14.00,imagem: "caminho/para/imagem1.jpg" },
    { id: 7, nome: "frapuccino", preco: 18.00,imagem: "caminho/para/imagem1.jpg" }

]

const carrinho = [];

document.addEventListener("DOMContentLoaded", () => {
    carregarProdutos();
    atualizarCarrinho();
});

function carregarProdutos() {
    const listaProdutos = document.getElementById("lista-produtos");

    produtos.forEach(produto => {
        const div = document.createElement("div");
        div.classList.add("produto");

        div.innerHTML = `
            <img src="${produto.imagem}" alt="${produto.nome}">
            <h3>${produto.nome}</h3>
            <p>Preço: R$ ${produto.preco.toFixed(2)}</p>
            <button onclick="adicionarAoCarrinho(${produto.id})">Adicionar ao Carrinho</button>
        `;

        listaProdutos.appendChild(div);
    });
}

function adicionarAoCarrinho(id) {
    const produto = produtos.find(p => p.id === id);
    carrinho.push(produto);
    atualizarCarrinho();
}

function atualizarCarrinho() {
    const listaCarrinho = document.getElementById("lista-carrinho");
    const cartCount = document.getElementById("cart-count");
    const total = document.getElementById("total");

    listaCarrinho.innerHTML = "";
    let totalValor = 0;

    carrinho.forEach(item => {
        const li = document.createElement("li");
        li.textContent = `${item.nome} - R$ ${item.preco.toFixed(2)}`;
        listaCarrinho.appendChild(li);
        totalValor += item.preco;
    });

    cartCount.textContent = carrinho.length;
    total.textContent = `Total: R$ ${totalValor.toFixed(2)}`;
}

function finalizarCompra() {
    if (carrinho.length === 0) {
        alert("Seu carrinho está vazio!");
        return;
    }

    alert("Compra finalizada com sucesso!");
    carrinho.length = 0;
    atualizarCarrinho();
}
