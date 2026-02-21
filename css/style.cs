.topo{
  display:flex;
  justify-content:space-between;
  align-items:center;
  padding:15px 25px;
  background:#000;
}

.logo{
  font-size:20px;
  font-weight:bold;
}
.check{color:#0f0}

.cart{color:#fff;text-decoration:none}

.produto-container{
  max-width:1200px;
  margin:auto;
  padding:30px;
  display:grid;
  grid-template-columns:1fr 1fr;
  gap:40px;
}

.produto-img img{
  width:100%;
  border-radius:14px;
  box-shadow:0 0 30px rgba(255,0,0,.25);
}

.produto-info h1{
  font-size:28px;
  margin-bottom:10px;
}

.avaliacao{
  color:#ffd700;
  margin-bottom:15px;
}

.precos{
  margin:20px 0;
}
.old{
  text-decoration:line-through;
  color:#aaa;
  margin-right:10px;
}
.price{
  font-size:28px;
  color:#ff2a2a;
  font-weight:bold;
}

.btn-buy{
  width:100%;
  padding:16px;
  background:#ff2a2a;
  color:#fff;
  border:none;
  border-radius:10px;
  font-size:16px;
  cursor:pointer;
}
.btn-buy:hover{opacity:.85}

.btn-cart{
  width:100%;
  padding:14px;
  margin-top:10px;
  background:#111;
  color:#fff;
  border:1px solid #ff2a2a;
  border-radius:10px;
  cursor:pointer;
}

.descricao{
  margin-top:25px;
  background:#0d0d0d;
  padding:15px;
  border-radius:10px;
}

.rodape{
  text-align:center;
  padding:20px;
  background:#000;
  margin-top:40px;
}

@media(max-width:768px){
  .produto-container{
    grid-template-columns:1fr;
  }
}
