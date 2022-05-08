function mostrarUsuariosFakeDatabase(){
  var tabela = document.getElementById("tabelaUsuario")
  
  for (var i = 0; i < users.length; i++) {
    var user = users[i];
    var novaLinha = "<tr> <th>"+user["name"]+"</th> <th>"+user["idade"]+"</th> <th>"+user["password"]+"</th> <th>"+user["username"]+"</th> </tr>";
    tabela.innerHTML = tabela.innerHTML + novaLinha;
  } 
}
function adicionarUsuario() {
  var input = document.querySelectorAll(".elementoTransparente")
  var nome = document.getElementById("nome").value
  var idade = document.getElementById("idade").value
  var senha = document.getElementById("senha").value
  var username = document.getElementById("username").value
  var tabela = document.getElementById("tabelaUsuario")
  if (nome==""|| idade==""|| senha==""|| username=="") {
    alert("Faltam informações")
    return
  }else{
    var novaLinha = "<tr> <th>"+nome+"</th> <th>"+idade+"</th> <th>"+senha+"</th> <th>"+username+"</th> </tr>"
    tabela.innerHTML = tabela.innerHTML + novaLinha
    for (var i = 0;i<input.length;i++){
      input[i].style.opacity='0'
    }
    limparTodos() 
  }
}
function checagemDoUser(){
  var input = document.querySelector(".elementoTransparenteNovoNovo")
  var userDigitado = document.getElementById("UsernameNovo").value
  var table = document.getElementById("tabelaUsuario")
  var trLinhas = document.getElementsByTagName("tr")

  for(var i=0;i<table.rows.length;i++){
    if(table.rows[i].cells[3].innerHTML == userDigitado){
      index = trLinhas[i].rowIndex
      input = document.querySelectorAll(".elementoTransparenteNovoNovo")//Seleciona todas as aparições 
      for (var i = 0;i<input.length;i++){
        input[i].style.opacity='1'
      }
      return//sai da função
    }
  }
  if(userDigitado.length == 0){
    alert("Informe um username")
  }else{
    alert("Funcionario com o username "+userDigitado+" nao encontrado")
  }
}
function editarUsuario(){
  var input = document.querySelectorAll(".elementoTransparenteNovoNovo")
  var novoNome = document.getElementById("newName").value
  var novaIdade = document.getElementById("newAge").value
  var novaSenha = document.getElementById("newPass").value
  var novoUser = document.getElementById("newUser").value
  var table = document.getElementById("tabelaUsuario")
  if(novoNome =="" || novaIdade ==""|| novaSenha ==""|| novoUser ==""){
    alert("Informe um novo nome, idade, senha e username")
  }else if(novoNome == table.rows[index].cells[0].innerHTML && novaIdade == table.rows[index].cells[1].innerHTML && novaSenha == table.rows[index].cells[2].innerHTML && novoUser == table.rows[index].cells[3].innerHTML){
    alert("Edição desnecessária")
  }else{
    table.rows[index].cells[0].innerHTML = novoNome
    table.rows[index].cells[1].innerHTML = novaIdade
    table.rows[index].cells[2].innerHTML = novaSenha
    table.rows[index].cells[3].innerHTML = novoUser
    for (var i = 0;i<input.length;i++){
        input[i].style.opacity='0'
    }
    limparTodos() 
  }
}
function removerUser(){
  var trLinhas = document.getElementsByTagName("tr")
  var table = document.getElementById("tabelaUsuario")
  var userDigitado = document.querySelector(".elementoTransparenteNovo").value
  var input = document.querySelectorAll(".elementoTransparenteNovo")

  for(var i=0;i<table.rows.length;i++){
    if(table.rows[i].cells[3].innerHTML == userDigitado){
      //alert(trLinhas[i].rowIndex)
      table.deleteRow(trLinhas[i].rowIndex)
      for (var i = 0;i<input.length;i++){
        input[i].style.opacity='0'
      } 
      limparTodos() 
      return//sai da função
    }
  }
  if(userDigitado.length == 0){
    alert("Informe um username")

  }else{
    alert("Funcionario com o username "+userDigitado+" nao encontrado")
  }
}