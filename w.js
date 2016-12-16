// Function Constructors and .prototype

function Person(fName, lName){
	console.log(this);
	this.firstname = fName;
	this.lastname = lName;
	console.log('This Function is invoked');
}

Person.prototype.getFullName = function(){
	return this.firstname + ' ' + this.lastname;
}

var neerja = new Person('Neeraj', 'Gupta');
console.log(neerja);
console.log(neerja.getFullName());

var pooja = new Person('Pooja', 'Bhatt');
console.log(pooja);
console.log(pooja.getFullName());

Person.prototype.getFormalFullName = function() {
	return this.lastname + ', ' + this.firstname;
};


// Prototype of all the objects created using new keyword will have __proto__ set to the parent object
console.log(neerja.__proto__);
console.log(pooja.__proto__);