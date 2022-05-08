var preçoFinal = 0
function adicionarCarrinho() {
	var serial = document.getElementById('serial').value
	var qnt = document.getElementById('qnt').value
	var tabela = document.getElementById('tabelaVenda')
	
	for (var i = 0; i < products.length; i++) {
		var pro = products[i]
		if (pro["serial"] == serial) {
			var preçoParcial = pro["price"] *qnt
			var novaLinha="<tr>    <th>"+pro["name"]+"</th> <th>"+pro["serial"]+"</th>  <th>"+pro["price"]+"</th>  <th>"+qnt+"</th>   <th>"+preçoParcial+"</th>  </tr>"
			tabela.innerHTML = tabela.innerHTML + novaLinha
			preçoFinal = preçoFinal + preçoParcial
			document.getElementById('valorFinal').innerHTML = preçoFinal
			return
		}
	}
	alert("Produto não encontrado")
	limparTodos()
}