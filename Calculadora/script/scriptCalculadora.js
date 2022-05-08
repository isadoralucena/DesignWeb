var resultado = document.querySelector(".resultado");//querySelector é uma das várias formas de selecionar elementos HTML, no caso, seleciona por seletores de CSS

function inserir(valorClicado){
  resultado.innerHTML += valorClicado;//inner=interno. innerHTML define ou retorna o conteúdo HTML de um elemento
}
function limparTudo(){
  resultado.innerHTML = '';
}
function backspace(){
  var auxiliar = resultado.innerHTML;
  resultado.innerHTML = auxiliar.substring(0, auxiliar.length - 1);//resultado vai receber auxiliar com o tamanho-1
}
function calcular(){
  var auxiliar = resultado.innerHTML;
  resultado.innerHTML = eval(auxiliar);
}
