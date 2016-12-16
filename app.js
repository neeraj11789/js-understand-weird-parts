var g = G$('John', 'Doe');
var a = g.greet().setLanguage('es').greet(true);
g.setLanguage('es').HTMLGreeting('#greeting', true);
console.log(a);


$('#login').click(function(){
	var j = G$('Neerajaaa', 'Gupta');
	j.setLanguage($('#lang').val());
	$('#loginContainer').hide();
	j.HTMLGreeting('#greeting');
});