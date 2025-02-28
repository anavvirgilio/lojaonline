const produtos = [
    { id: 1, nome: "Colar de Prata 925", preco: 120.00, imagem: "logo coroa.png" },
    { id: 2, nome: "Pulseira de Prata 925", preco: 95.00, imagem: "logo nome.png" },
    { id: 3, nome: "Anel de Prata 925", preco: 80.00, imagem: "logo coroa.png" }
];

const listaProdutos = document.getElementById("lista-produtos");
const listaCarrinho = document.getElementById("lista-carrinho");
let carrinho = [];

function exibirProdutos() {
    produtos.forEach(produto => {
        const div = document.createElement("div");
        div.classList.add("produto-card");
        div.innerHTML = `
            <img src="${produto.imagem}" alt="${produto.nome}">
            <h3>${produto.nome}</h3>
            <p>R$ ${produto.preco.toFixed(2)}</p>
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

function removerDoCarrinho(index) {
    carrinho.splice(index, 1);
    atualizarCarrinho();
}

function atualizarCarrinho() {
    listaCarrinho.innerHTML = "";
    carrinho.forEach((produto, index) => {
        const div = document.createElement("div");
        div.innerHTML = `<p>${produto.nome} - R$ ${produto.preco.toFixed(2)} <button onclick="removerDoCarrinho(${index})">Remover</button></p>`;
        listaCarrinho.appendChild(div);
    });
}

exibirProdutos();