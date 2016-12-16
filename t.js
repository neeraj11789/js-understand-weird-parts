// Call, Apply And Bind 

var Person = {
	firstName : 'Neeraj',
	lastName : 'Gupta',
	getFullName : function (){
		return ("Full name is " + this.firstName + " " + this.lastName)
	}
}

console.log(Person.getFullName());

var logName = function(language1, language2){
	console.log(this.getFullName());
	console.log("Function Arguements : " + language1 + " " + language2);
}

//logName();

var logPersonName = logName.bind(Person); // Creates copy of the LogName function 

logPersonName();


var logName2 = function(language1, language2){
	console.log(this.getFullName());
}.bind(Person);

logName2();


// These two directly run the functions without creating a copy
logName.call(Person, 'en', 'es');
logName.apply(Person, ['en', 'es']);


// Function Borrowing 
var Person2 = {
	firstName : 'Mitthu',
	lastName : 'Gupta'
}
console.log(Person.getFullName.apply(Person2));



// Function Currying
function multiply(a,b){
	return a*b;
}


var multiplyByTwo = multiply.bind(this, 2);
console.log(multiplyByTwo(4));

var multiplyByThree = multiply.bind(this, 3);
console.log(multiplyByThree(4));