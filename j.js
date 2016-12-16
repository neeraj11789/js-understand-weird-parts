// ES6 Classes

class Person{
	constructor(firstname, lastname){
		this.firstname = firstname;
		this.lastname = lastname;
	}

	greet(){
		return "Yo!!!" + this.firstname;
	}
}

var john = new Person('Neeraj', 'Gupta');
console.log(john);