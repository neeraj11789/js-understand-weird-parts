// Scope Chaining

function b(){
	console.log(myVar);
}

function a(){
	var myVar = 2;
	console.log(myVar);
	b(); 
	console.log(myVar);
}

var myVar = 1;
console.log(myVar);
a();