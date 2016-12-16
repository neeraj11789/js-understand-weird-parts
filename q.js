// Function Factories : 

function makeGreetings(language){
	return function (firstName, lastName){
		if(language == 'en'){
			console.log("Hello " + firstName + " " + lastName);
		}

		if(language == 'es'){
			console.log("Hola " + firstName + " " + lastName);
		}
	}
}

makeEnglishGreeting = makeGreetings('en');
makeSpanishGreeting = makeGreetings('es');

makeEnglishGreeting("neeraj gupta");
makeSpanishGreeting("neeraj gupta");