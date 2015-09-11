/*jshint -W030 */
(function(i,s,o,g,r,a,m){i.GoogleAnalyticsObject=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments);},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m);
})(window,document,'script','//www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-32351360-4', 'auto');
ga('send', 'pageview');

var CPF = new CPF();

document.getElementById('btn-gerar-CPF').onclick = function(){

	document.getElementById('CPF').innerHTML = CPF.gera();

	ga('send', 'event', 'button', 'click', 'Generate CPF');

};

document.getElementById('valida-CPF').onsubmit = function (event){

	if ( CPF.valida(document.getElementById('cpf-validacao').value) === true ) {
		var mensagem = 'CPF Válido';
	}else{
		var mensagem = 'CPF Inválido';
	}

	document.getElementById('resultado-validacao').innerHTML = mensagem;

	ga('send', 'event', 'button', 'click', 'Validate CPF');

	return false;
};

document.getElementById('formata-CPF').onsubmit = function (event){

	document.getElementById('resultado-formatacao').innerHTML = CPF.formata(document.getElementById('cpf-formatacao').value, document.getElementById('formatacao').value);

	ga('send', 'event', 'button', 'click', 'Formate CPF');

	return false;

};

document.getElementById('download-nao-compactada').onclick = function(){

	ga('send', 'event', 'download', 'click', 'Download versão Não Compactada');
};

document.getElementById('download-compactada').onclick = function(){

	ga('send', 'event', 'download', 'click', 'Download versão Compactada');
};

var d = new Date();

document.getElementById('year').innerHTML = d.getFullYear();

//jQuery Scripts
$(document).ready(function(){

$('#cpf-validacao').mask('999.999.999-99');

});