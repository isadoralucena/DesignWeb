function mostrarProdutosFakeDatabase(){
  var tabela = document.getElementById("tabelaProdutos")

  for(var i=0;i<products.length;i++){
    var pro = products[i]
    var novaLinha="<tr>    <th>"+pro["name"]+"</th>   <th>"+pro["price"]+"</th>  <th>"+pro["serial"]+"</th>  </tr>"
    tabela.innerHTML = tabela.innerHTML + novaLinha
  }
}
function adicionarProduto(){
  var input = document.querySelectorAll(".elementoTransparente")
  var nome = document.getElementById("nome").value
  var preco = document.getElementById("preco").value
  var serial = document.getElementById("serial").value
  var tabela = document.getElementById("tabelaProdutos")
  if(nome=="" || preco==""|| serial==""){
    alert("Faltam informações")
    return
  }else{
    var novaLinha="<tr>    <th>"+nome+"</th>   <th>"+preco+"</th>  <th>"+serial+"</th>  </tr>"
    tabela.innerHTML = tabela.innerHTML + novaLinha
    for (var i = 0;i<input.length;i++){
      input[i].style.opacity='0'
    }
    limparTodos() 
  }
}
function removerProdutos(){
  var trLinhas = document.getElementsByTagName("tr")
  var table = document.getElementById("tabelaProdutos")
  var serialDigitado = document.querySelector(".elementoTransparenteNovo").value
  var input = document.querySelectorAll(".elementoTransparenteNovo")

  for(var i=0;i<table.rows.length;i++){
    if(table.rows[i].cells[2].innerHTML == serialDigitado){
      
      table.deleteRow(trLinhas[i].rowIndex)
      for (var i = 0;i<input.length;i++){
        input[i].style.opacity='0'
      } 
      limparTodos() 
      return//sai da função
    }
  }
  if(serialDigitado.length == 0){
    alert("Informe um serial")

  }else{
    alert("Produto com o serial "+serialDigitado+" nao encontrado")
  }
}
function checagemDoSerialEditar(){
  var input = document.querySelector(".elementoTransparenteNovoNovo")
  var serialDigitado = document.getElementById("serialNovo").value
  var table = document.getElementById("tabelaProdutos")
  var trLinhas = document.getElementsByTagName("tr")

  for(var i=0;i<table.rows.length;i++){
    if(table.rows[i].cells[2].innerHTML == serialDigitado){
      index = trLinhas[i].rowIndex
      input = document.querySelectorAll(".elementoTransparenteNovoNovo")//Seleciona todas as aparições 
      for (var i = 0;i<input.length;i++){
        input[i].style.opacity='1'
      }
      return//sai da função
    }
  }
  if(serialDigitado.length == 0){
    alert("Informe um serial")
  }else{
    alert("Produto com o serial "+serialDigitado+" nao encontrado")
  }
}
function editarProdutos(){
  var input = document.querySelectorAll(".elementoTransparenteNovoNovo")
  var novoPreco = document.getElementById("newPrice").value
  var novoNome = document.getElementById("newName").value
  var novoSerial = document.getElementById("newSerial").value
  var table = document.getElementById("tabelaProdutos")
  if(novoNome =="" || novoPreco =="" || novoSerial ==""){
    alert("Informe um novo nome e um novo preço")
  }else if(novoNome == table.rows[index].cells[0].innerHTML && novoPreco == table.rows[index].cells[1].innerHTML && novoSerial== table.rows[index].cells[2].innerHTML){//pode ter mudança no preço e não no nome, por isso && e  não ||
    alert("Edição desnecessária")
  }else{
    table.rows[index].cells[0].innerHTML = novoNome
    table.rows[index].cells[1].innerHTML = novoPreco
    table.rows[index].cells[2].innerHTML = novoSerial
    for (var i = 0;i<input.length;i++){
        input[i].style.opacity='0'
    }
    limparTodos() 
  }
}