let produtoAtual = null;
let carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];

function verProduto(nome, preco){
  localStorage.setItem("produto", JSON.stringify({nome, preco}));
  window.location = "produto.html";
}

if(localStorage.getItem("produto")){
  let p = JSON.parse(localStorage.getItem("produto"));
  if(document.getElementById("nome")){
    document.getElementById("nome").innerText = p.nome;
    document.getElementById("preco").innerText = "R$ " + p.preco.toFixed(2);
    produtoAtual = p;
  }
}

function addCarrinho(){
  carrinho.push(produtoAtual);
  localStorage.setItem("carrinho", JSON.stringify(carrinho));
  alert("Adicionado ao carrinho!");
}

function comprarAgora(){
  carrinho.push(produtoAtual);
  localStorage.setItem("carrinho", JSON.stringify(carrinho));
  window.location = "pagamento.html";
}

if(document.getElementById("lista")){
  let total = 0;
  let div = document.getElementById("lista");
  carrinho.forEach(p=>{
    total += p.preco;
    div.innerHTML += `<p>${p.nome} - R$ ${p.preco.toFixed(2)}</p>`;
  });
  document.getElementById("total").innerText = "Total: R$ " + total.toFixed(2);
}

function irPagamento(){
  window.location = "pagamento.html";
}
