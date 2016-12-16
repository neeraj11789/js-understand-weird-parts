// Closures and Callbacks

function sayHiLater(){
	var greeting = 'Hi !!!';

	setTimeout(function(){
		console.log(greeting);
	}, 5000);
}

sayHiLater();