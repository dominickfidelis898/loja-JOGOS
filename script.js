let cart = JSON.parse(localStorage.getItem("cart")) || [];

document.getElementById("cartCount")?.innerText = cart.length;

function addToCart(product) {
  cart.push(product);
  localStorage.setItem("cart", JSON.stringify(cart));
  alert("Produto adicionado ao carrinho!");
}
