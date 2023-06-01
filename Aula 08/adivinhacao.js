var mostra = function(valor){
		document.write(valor + "<br>");
	}

	var sorteio = [Math.round(Math.random() * 100),
		Math.round(Math.random() * 100),
		Math.round(Math.random() * 100),
		Math.round(Math.random() * 100)
		];
	
	var inputNumero = document.getElementById("numero");

	var tentaAdvinhar = function(){
		var chute = inputNumero.value;
		for(var tentativa = 0; tentativa < sorteio.length; tentativa++){
			if(chute == sorteio[tentativa]){
				mostra("Que sorte eim ;) eu pensei no " + chute + " e você também!");
				break;
			}else{
				if(chute < sorteio[tentativa]){
					mostra(numeroMaior());
				}
				if(chute > sorteio[tentativa]){
					mostra(numeroMenor());
				}

				chute = prompt("Vamos tentar novamente." + " Tentativa: " + tentativa);
			}
		}
	}

	var numeroMaior = function(){
		return "Que pena o número é maior que o que você escolheu!";
	}

	var numeroMenor = function(){
		return "Que pena o número é menor que o que você escolheu!";
	}

	var btAdvinhar = document.getElementById("btAdvinhar");
	btAdvinhar.onclick = tentaAdvinhar;
