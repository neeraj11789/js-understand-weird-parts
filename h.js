// Operator Comparisons

console.log(1 < 2 < 3);

console.log(3 < 2 < 1);


// existince and boolean

var a;

// a false for undefined, null or ""

if(a || a ===0){ // Check the operator percedence
	console.log("Something is there");
}


// Default Values
// 

function greet(name){
	name = name || 'default name';
	console.log('Hello ' + name);
}

greet();


// Framework : Default Values
