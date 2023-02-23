let conta;

document.addEventListener('DOMContentLoaded', () => {
	conta = document.querySelector('#conta');
	conta.focus();

	registrarOnClickNumeros();
	registrarOnClickOperacoes();
	registrarCalcular();
	registrarOnClickApagar();
	registrarOnClickResetar();
})

function registrarOnClickNumeros() {
	document.querySelectorAll('.numero').forEach(tecla => {
		tecla.addEventListener('click', function () {
			if(conta.value == 0) {
				conta.value = this.innerHTML;
			} else {
				conta.value += this.innerHTML;	
			}
			conta.focus();
		});
	});
}

function registrarOnClickOperacoes() {
	document.querySelectorAll('.operacao').forEach(operacao => {
		operacao.addEventListener('click', function () {
			conta.value += this.innerHTML;
			conta.focus();
		});
	});
}

function registrarOnClickResetar() {
	document.querySelector('#resetar').addEventListener('click', () => {
		conta.value = '0';
		conta.focus();
	});
}

function registrarOnClickApagar() {
	document.querySelector('#apagar').addEventListener('click', () => {
		conta.value = conta.value.slice(0, conta.value.length - 1);
		conta.focus();
	});
}

function calcular(){
	if(!conta.value) return
	
	//substitui os simbolos pelos operadores
	const str = conta.value
		.replace(/−/g,'-')
		.replace(/×/g,'*')
		.replace(/÷|:/g,'/');
	
	const resultado = eval(str) || "";
	conta.value = resultado;	
	conta.focus();
}

function registrarCalcular() {
	document.querySelector('#calcular').addEventListener('click', () => calcular());

	conta.addEventListener('keyup', event => {
		event.preventDefault();
		if (event.key === 'Enter') {
			calcular();
		}
	});
}
