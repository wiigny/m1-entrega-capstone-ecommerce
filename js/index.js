const listaProdutosUl = document.querySelector("#listaProdutos ul");
const contadorCarrinho = document.querySelector("#contadorCarrinho");
const listaCarrinho = document.querySelector("#listCarrinho");
const input = document.querySelector("#pequisarProdutos");
input.addEventListener("click", (e) => {
  e.preventDefault();
  let inputText = document.querySelector("#inputText");
  let nome = inputText.value;
  let nomeTratado = nome.toLowerCase();
  addProdutoPesquisa(nomeTratado);
});

const todos = document.querySelector("#todos");
const acessorios = document.querySelector("#acessorios");
const calcados = document.querySelector("#calcados");
const camisetas = document.querySelector("#camisetas");
let carrinhoCount = 0;
let precoTotal = 0;

function navigation() {
  todos.addEventListener("click", todosProdutos);
  todosProdutos();

  acessorios.addEventListener("click", todosAcessorios);

  calcados.addEventListener("click", todosCalcados);

  camisetas.addEventListener("click", todosCamisetas);
}
navigation();

function todosProdutos() {
  todos.classList.add("bold");
  acessorios.classList.remove("bold");
  calcados.classList.remove("bold");
  camisetas.classList.remove("bold");

  listaProdutosUl.innerHTML = "";

  for (let i = 0; i < data.length; i++) {
    let produto = data[i];

    let li = document.createElement("li");

    li.innerHTML = `
            <div class="img__produtos">
                <img src="${produto.img}" alt="${produto.nameItem}">
            </div>

            <div class="descricao__produtos">
                <p><span class="tag__produto">${produto.tag}</span></p>
                <h3 class="titulo__produto">${produto.nameItem}</h3>
                <p class="paragraph__produto">${produto.description}</p>
                <p class="price__produto">R$ ${produto.value.toFixed(2)}</p>
                <button id="${produto.id}">Adicionar no carrinho</button>
            </div>
        `;

    listaProdutosUl.appendChild(li);
  }
  addButton();
}
function todosAcessorios() {
  acessorios.classList.add("bold");
  todos.classList.remove("bold");
  calcados.classList.remove("bold");
  camisetas.classList.remove("bold");

  listaProdutosUl.innerHTML = "";
  for (let i = 0; i < data.length; i++) {
    let produto = data[i];
    let tag = data[i].tag;
    for (let j = 0; j < tag.length; j++) {
      if (tag[j] == "Acessórios") {
        let li = document.createElement("li");
        li.innerHTML = `
                    <div class="img__produtos">
                        <img src="${produto.img}" alt="${produto.nameItem}">
                    </div>
        
                    <div class="descricao__produtos">
                        <p><span class="tag__produto">${produto.tag}</span></p>
                        <h3 class="titulo__produto">${produto.nameItem}</h3>
                        <p class="paragraph__produto">${produto.description}</p>
                        <p class="price__produto">R$ ${produto.value.toFixed(
                          2
                        )}</p>
                        <button id="${
                          produto.id
                        }">Adicionar no carrinho</button>
                    </div>
                `;

        listaProdutosUl.appendChild(li);
      }
    }
  }
  addButton();
}
function todosCalcados() {
  calcados.classList.add("bold");
  todos.classList.remove("bold");
  acessorios.classList.remove("bold");
  camisetas.classList.remove("bold");

  listaProdutosUl.innerHTML = "";

  for (let i = 0; i < data.length; i++) {
    let produto = data[i];
    let tag = data[i].tag;
    for (let j = 0; j < tag.length; j++) {
      if (tag[j] == "Calçados") {
        let li = document.createElement("li");

        li.innerHTML = `
                    <div class="img__produtos">
                        <img src="${produto.img}" alt="${produto.nameItem}">
                    </div>
        
                    <div class="descricao__produtos">
                        <p><span class="tag__produto">${produto.tag}</span></p>
                        <h3 class="titulo__produto">${produto.nameItem}</h3>
                        <p class="paragraph__produto">${produto.description}</p>
                        <p class="price__produto">R$ ${produto.value.toFixed(
                          2
                        )}</p>
                        <button id="${
                          produto.id
                        }">Adicionar no carrinho</button>
                    </div>
                `;

        listaProdutosUl.appendChild(li);
      }
    }
  }
  addButton();
}
function todosCamisetas() {
  camisetas.classList.add("bold");
  todos.classList.remove("bold");
  acessorios.classList.remove("bold");
  calcados.classList.remove("bold");

  listaProdutosUl.innerHTML = "";
  for (let i = 0; i < data.length; i++) {
    let produto = data[i];
    let tag = data[i].tag;
    for (let j = 0; j < tag.length; j++) {
      if (tag[j] == "Camisetas") {
        let li = document.createElement("li");
        li.innerHTML = `
                    <div class="img__produtos">
                        <img src="${produto.img}" alt="${produto.nameItem}">
                    </div>
        
                    <div class="descricao__produtos">
                        <p><span class="tag__produto">${produto.tag}</span></p>
                        <h3 class="titulo__produto">${produto.nameItem}</h3>
                        <p class="paragraph__produto">${produto.description}</p>
                        <p class="price__produto">R$ ${produto.value.toFixed(
                          2
                        )}</p>
                        <button id="${
                          produto.id
                        }">Adicionar no carrinho</button>
                    </div>
                `;

        listaProdutosUl.appendChild(li);
      }
    }
  }
  addButton();
}
function addProdutoPesquisa(name) {
  listaProdutosUl.innerHTML = "";
  todos.classList.remove("bold");
  acessorios.classList.remove("bold");
  calcados.classList.remove("bold");
  camisetas.classList.remove("bold");

  for (let i = 0; i < data.length; i++) {
    let produto = data[i];
    let produtoNome = produto.nameItem;

    let tag = data[i].tag;
    for (let j = 0; j < tag.length; j++) {
      if (name == produtoNome.toLowerCase()) {
        let li = document.createElement("li");
        li.innerHTML = `
                    <div class="img__produtos">
                        <img src="${produto.img}" alt="${produto.nameItem}">
                    </div>
        
                    <div class="descricao__produtos">
                        <p><span class="tag__produto">${produto.tag}</span></p>
                        <h3 class="titulo__produto">${produto.nameItem}</h3>
                        <p class="paragraph__produto">${produto.description}</p>
                        <p class="price__produto">R$ ${produto.value.toFixed(
                          2
                        )}</p>
                        <button id="${
                          produto.id
                        }">Adicionar no carrinho</button>
                    </div>
                `;

        listaProdutosUl.appendChild(li);
      }
    }
  }
  addButton();
}

function addButton() {
  const button = document.querySelectorAll(".descricao__produtos button");

  for (let i = 0; i < button.length; i++) {
    let botao = button[i];
    botao.addEventListener("click", function (e) {
      let elemento = e.target;
      let elementoId = parseInt(elemento.id);

      let produto = procuraObjeto(elementoId);
      console.log(produto);
      inserirCarrinho(produto);
    });
  }
}

function procuraObjeto(id) {
  for (let j = 0; j < data.length; j++) {
    let produto = data[j];
    if (id == produto.id) {
      return produto;
    }
  }
  return console.log("id não encontrado");
}

function inserirCarrinho(produto) {
  if (verificarCarrinhoRepetido(produto.id)) {
    alert("Esse produto ja foi inserido");
  } else {
    contadorCarrinho.classList.remove("carrinho__vazio");
    contadorCarrinho.classList.add("contagem__produtos");
    contadorCarrinho.innerHTML = `
            <div>
                <p>Quantidade:</p>
                <p id="contagemQuantia"></p>
            </div>
            <div>
                <p>Total:</p>
                <p id="contagemTotal"></p>
            </div>
        `;

    carrinhoCount++;
    document.querySelector("#contagemQuantia").innerText = carrinhoCount;
    let valor = produto.value;

    precoTotal = precoTotal + valor;
    document.querySelector(
      "#contagemTotal"
    ).innerText = `R$ ${precoTotal.toFixed(2)}`;

    const listaCarrinho = document.querySelector("#listCarrinho");

    let li = document.createElement("li");
    li.id = `cart_${produto.id}`;
    let divImg = document.createElement("div");
    let img = document.createElement("img");
    img.src = produto.img;
    img.alt = produto.nameItem;

    let divContadora = document.createElement("div");
    divContadora.innerHTML = `
            <p class="title__produto">${produto.nameItem}</p>
            <p class="price__produto">R$ ${produto.value.toFixed(2)}</p>
        `;
    let button = document.createElement("button");
    button.innerText = "Remover produto";
    button.id = "remove";
    button.addEventListener("click", (e) => {
      carrinhoCount--;
      document.querySelector("#contagemQuantia").innerText = carrinhoCount;
      precoTotal = precoTotal - valor;
      document.querySelector("#contagemTotal").innerText =
        precoTotal.toFixed(2);

      let li = e.path[2];
      li.remove();
      carrinhoContador();
    });

    divImg.appendChild(img);
    divContadora.appendChild(button);
    li.append(divImg, divContadora);
    listaCarrinho.appendChild(li);

    carrinhoContador();
  }
}
function carrinhoContador() {
  let children = listaCarrinho.children;
  if (children.length == 0) {
    contadorCarrinho.classList.remove("contagem__produtos");
    contadorCarrinho.classList.add("carrinho__vazio");
    contadorCarrinho.innerHTML = `
            <span>Carrinho Vázio</span>
            <p>Adicione itens</p>    
        `;
  }
}
function verificarCarrinhoRepetido(obj) {
  let elemento = document.querySelector(`#cart_${obj}`);
  if (elemento == null) {
    return false;
  } else {
    return true;
  }
}

// function findUniq(arr) {
//     debugger
//     let total = arr[0]
//     for(let i = 0; i < arr.length; i++){
//       if(total < arr[i]){
//         total = arr[i]
//       }
//     }

//     return total
// }
// findUniq([ 1, 0, 0 ])
