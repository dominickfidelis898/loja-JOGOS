let cart = JSON.parse(localStorage.getItem("cart")) || [];

document.getElementById("cartCount")?.innerText = cart.length;

function addToCart(product) {
  cart.push(product);
  localStorage.setItem("cart", JSON.stringify(cart));
  alert("Produto adicionado ao carrinho!");
}
let cart = JSON.parse(localStorage.getItem("cart")) || [];

function openCart(){
  if(cart.length === 0){
    alert("Carrinho vazio");
  } else {
    alert("Carrinho:\n" + cart.join("\n"));
  }
}

document.getElementById("cartCount") &&
(document.getElementById("cartCount").innerText = cart.length);
