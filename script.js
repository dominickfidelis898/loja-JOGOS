const produtos={
 gow:{nome:"God of War",price:"R$19,99",old:"R$250,00",img:"img/gow.jpg"},
 gta:{nome:"GTA V Enhanced",price:"R$14,99",old:"R$180,00",img:"img/gta.jpg"},
 ff:{nome:"Free Fire Level 15",price:"R$2,99",old:"R$4,00",img:"img/ff.jpg"}
};

function abrirProduto(id){
 localStorage.setItem("produtoAtual",id);
 window.location="product.html";
}

if(location.pathname.includes("product")){
 const p=produtos[localStorage.getItem("produtoAtual")];
 document.getElementById("nome").innerText=p.nome;
 document.getElementById("price").innerText=p.price;
 document.getElementById("old").innerText=p.old;
 document.getElementById("imgProduto").src=p.img;
}

function registrar(){
 let email=email.value, senha=senha.value;
 let users=JSON.parse(localStorage.users||"{}");
 users[email]={senha,cart:[]};
 localStorage.users=JSON.stringify(users);
 alert("Conta criada");
}

function login(){
 let users=JSON.parse(localStorage.users||"{}");
 if(users[email.value]?.senha===senha.value){
  localStorage.logged=email.value;
  location="index.html";
 } else alert("Login inválido");
}

function addCarrinho(){
 let u=localStorage.logged;
 if(!u) return alert("Faça login");
 let users=JSON.parse(localStorage.users);
 users[u].cart.push(localStorage.produtoAtual);
 localStorage.users=JSON.stringify(users);
 alert("Adicionado ao carrinho");
}

function comprar(){
 alert("Digite o valor correto ao pagar o PIX");
 alert("PIX COPIADO!");
 setTimeout(()=>{
  window.open("https://wa.me/5522981312812?text=Já paguei o PIX da DOM7STORE");
 },10000);
}
