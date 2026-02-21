let cart = JSON.parse(localStorage.getItem("cart")) || [];

function addCarrinho(nome, preco){
  cart.push({nome, preco});
  localStorage.setItem("cart", JSON.stringify(cart));
  alert("Produto adicionado ao carrinho!");
}

function comprarAgora(nome, preco){
  localStorage.setItem("checkout", JSON.stringify({nome, preco}));
  window.location = "pagamento.html";
}
