// Built-In Function Constructors : 

String.prototype.addSuffix = function(){
	return this.toString() + 'mySuffix';
}

var a = new String('Neera');
console.log(a.addSuffix());