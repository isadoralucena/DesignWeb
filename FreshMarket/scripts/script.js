//para loginFuncionarios
function validateUser(){
  var usuario = document.getElementById("user").value
  var senha = document.getElementById("password").value
  for(var i=0; i<users.length;i++){
    var u = users[i];
    if(u["username"] == usuario){
      if(u["password"] == senha){
        window.location.href="opcoesFuncionario.html"
        limparTodos()
        return //sai da função
      }else{
        alert("Usuario ou senha errados")
        return // sai da função
      }
    }
  }
  alert("Usuario ou senha errados")
}
//limpar input
function limparTodos(){
  var inputs = document.getElementsByTagName('input')
  for(var i=0; i<inputs.length;i++){
    inputs[i].value = ""
  }
}
//transparencia
function transparenciaAdicionar(){
  var input = document.querySelectorAll(".elementoTransparente")
  for (var i = 0;i<input.length;i++){
    input[i].style.opacity='1'
  }   
}

function transparenciaRemover(){
  var input = document.querySelectorAll(".elementoTransparenteNovo")
  for (var i = 0;i<input.length;i++){
    input[i].style.opacity='1'
  }   
}

function transparenciaEditar(){
  var input = document.querySelectorAll(".elementoTransparenteNovoNovo")
  for (var i = 0;i<2;i++){//Seleciona os dois primeiros elementos com a classe
    input[i].style.opacity='1'
  }
}

