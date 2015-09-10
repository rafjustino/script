function construtorObservador() {
	var lista = [];
	var objeto = {contar:function(){
		lista.forEach(function (valor){
			valor(evento);
		});
		evento.contador ++;
	}
	};
	
	
	function adicionarOuvinte (funcao){
		lista.push(funcao);
	}
	objeto.adicionarOuvinte = adicionarOuvinte;
	
	return objeto;
}


function observador() {
	console.log ("Contando ....");
}
function observador2() {
	console.log("Contando de novo ...");
}

var contadorObservador = construtorObservador();
console.log(contadorObservador);

contadorObservador.adicionarOuvinte(observador);
contadorObservador.adicionarOuvinte(observador2);

contadorObservador.contar();
contadorObservador.contar();
