// Object.create and Pure Prototpal Inheritance


// Hack to Overwrite the Object
Object.create = undefined;


// PolyFill for Object.create
if(!Object.create){
	Object.create = function(o){
		if(arguments.length > 1){
			throw new Error('Object.create implementation takes only one parameter');
		}
		function F(){}
		F.prototype = o;
		return new F();
	}
}


var person = {
	firstname : 'Default',
	lastname : 'Default',
	greet : function(){
		return 'Hi!!!! ' + this.firstname;
	}
}


// Pure Prototypal Inheritance

var john = Object.create(person);
console.log(john);

john.firstname = 'Neeraj';
john.lastname = 'Gupta';
console.log(john);