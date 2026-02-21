*{margin:0;padding:0;box-sizing:border-box;font-family:Arial}
body{background:radial-gradient(circle,#2b0000,#000);color:#fff}

.topo{
  display:flex;
  justify-content:space-between;
  padding:15px 25px;
  background:#000;
}

.logo{font-size:20px;font-weight:bold}
.check{color:#0f0}

a{color:#fff;text-decoration:none}

.container{max-width:1200px;margin:auto;padding:30px}

.grid{
  display:grid;
  grid-template-columns:repeat(auto-fit,minmax(220px,1fr));
  gap:20px;
}

.card{
  background:#0d0d0d;
  padding:20px;
  border-radius:12px;
  box-shadow:0 0 20px rgba(255,0,0,.2);
}

.card img{width:100%;border-radius:10px}

.old{text-decoration:line-through;color:#aaa}
.price{color:#ff2a2a;font-size:22px}

button{
  width:100%;
  padding:14px;
  margin-top:10px;
  border:none;
  border-radius:10px;
  cursor:pointer;
}

.btn-buy{background:#ff2a2a;color:#fff}
.btn-cart{background:#111;color:#fff;border:1px solid #ff2a2a}

.produto-container{
  max-width:1100px;
  margin:auto;
  padding:30px;
  display:grid;
  grid-template-columns:1fr 1fr;
  gap:30px;
}

.produto-container img{width:100%;border-radius:12px}

.descricao{margin-top:20px;background:#111;padding:15px;border-radius:10px}

.rodape{text-align:center;padding:20px;background:#000}

@media(max-width:768px){
  .produto-container{grid-template-columns:1fr}
}
