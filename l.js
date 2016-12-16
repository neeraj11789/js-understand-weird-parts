var objectLiteral = {
	firstName : 'Mary',
	isAProgrammer : true
}

console.log(objectLiteral);

console.log(JSON.stringify(objectLiteral));

var jsonString = '{ "firstName" : "Neeraj", "isAProgrammer" : true}';
console.log(JSON.parse(jsonString));