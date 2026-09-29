function adicionarCarrinho(nome, preco) {

    let carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];

    let produto = carrinho.find(item => item.nome === nome);

    if (produto) {

        produto.quantidade++;

    } else {

        carrinho.push({
            nome: nome,
            preco: preco,
            quantidade: 1
        });

    }

    localStorage.setItem("carrinho", JSON.stringify(carrinho));

    mostrarCarrinho();
}


function mostrarCarrinho() {

    let carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];

    let lista = document.getElementById("listaCarrinho");

    lista.innerHTML = "";

    carrinho.forEach(function(produto) {

        if (produto.quantidade === undefined) {
            produto.quantidade = 1;
        }

        let item = document.createElement("p");

        item.textContent = produto.quantidade + " " + produto.nome;

        lista.appendChild(item);

    });

    localStorage.setItem("carrinho", JSON.stringify(carrinho));
}


function limparCarrinho() {

    localStorage.removeItem("carrinho");

    mostrarCarrinho();
}


mostrarCarrinho()


function mostrarCarrinho() {

    let carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];

    let lista = document.getElementById("listaCarrinho");
    let valorTotal = document.getElementById("valorTotal");

    lista.innerHTML = "";

    let total = 0;

    carrinho.forEach(function(produto) {

        if (produto.quantidade === undefined) {
            produto.quantidade = 1;
        }

        let item = document.createElement("p");

        item.textContent = produto.quantidade + " " + produto.nome;

        lista.appendChild(item);

        total = total + (produto.preco * produto.quantidade);

    });

    valorTotal.textContent = "Total: R$ " + total.toFixed(2);

    localStorage.setItem("carrinho", JSON.stringify(carrinho));
}

function comprarProdutos() {

    let carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];

    if (carrinho.length === 0) {
        alert("Seu carrinho está vazio!");
        return;
    }

    let mensagem = document.getElementById("mensagemCompra");

    mensagem.style.display = "block";

}

function fecharMensagem() {

    let mensagem = document.getElementById("mensagemCompra");

    mensagem.style.display = "none";

}

let botaoProdutos = document.getElementById("botaoPerfil");
let botaoCarrinho = document.getElementById("botaoInicio");

let telaProdutos = document.getElementById("telaProdutos");
let telaCarrinho = document.getElementById("telaCarrinho");


// COMEÇA MOSTRANDO OS PRODUTOS
telaProdutos.style.display = "block";
telaCarrinho.style.display = "none";


// BOTÃO PRODUTOS
botaoProdutos.addEventListener("click", function() {

    telaProdutos.style.display = "block";
    telaCarrinho.style.display = "none";

});


// BOTÃO CARRINHO
botaoCarrinho.addEventListener("click", function() {

    telaProdutos.style.display = "none";
    telaCarrinho.style.display = "block";

    mostrarCarrinho();

});

function adicionarCarrinho(nome, preco) {

    let carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];

    let produto = carrinho.find(item => item.nome === nome);

    if (produto) {

        produto.quantidade++;

    } else {

        carrinho.push({
            nome: nome,
            preco: preco,
            quantidade: 1
        });

    }

    localStorage.setItem("carrinho", JSON.stringify(carrinho));

    mostrarCarrinho();


    // MOSTRAR MENSAGEM NA TELA
    let mensagem = document.getElementById("mensagemProduto");
    let texto = document.getElementById("textoMensagem");

    texto.textContent = nome + " foi adicionado ao carrinho!";

    mensagem.style.display = "block";
}

function fecharMensagemProduto() {

    let mensagem = document.getElementById("mensagemProduto");

    mensagem.style.display = "none";

}

