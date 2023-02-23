var conta = document.getElementById('conta');
conta.focus();

//definindo a função de digitar os numeros
var teclas = document.getElementsByClassName('numero');
for(var i = 0; i < teclas.length; i++){
	teclas[i].onclick = function(){
		if(conta.value == 0){
			conta.value = this.innerHTML;
		}else{
			conta.value += this.innerHTML;
		}
		conta.focus();
	}
}

//definindo a função de digitar as quatro operações
var operacoes = document.getElementsByClassName('operacao');
for(var i = 0; i < operacoes.length; i++){
	operacoes[i].onclick = function(){
		conta.value += this.innerHTML;
		conta.focus();
	}
}

function apagar(){
	var caracters = conta.value.split('');
	caracters.pop();
	conta.value = caracters.join('');
	conta.focus();
}

function resetar(){
	conta.value = '0';
	conta.focus();
}

function calcular(){
	//substitui os simbolos pelos operadores
	var str = conta.value;
	str = str.replace('+','+');
	str = str.replace('−','-');
	str = str.replace('×','*');
	str = str.replace('÷','/');
	str = str.replace(':','/');

	//if(str != "undefined"){
		//console.log('foi');

		var resultado = eval(str);
		conta.value = resultado;	
	//}
	conta.focus();
}

conta.addEventListener('keyup',function(event){
	//console.log(event.key+', '+event.code+', '+event.keyCode);
	event.preventDefault();
	if(event.keyCode === 13){
		calcular();
	}
});