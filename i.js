var Neeraj = {
	firstName : "Neeraj",
	lastName : "Gupta",
	address : {
		street : 'D3, Shakti Corner',
		city : 'Bangalore',
		state : "Karnataka"
	}
};
console.log(Neeraj);

function greet(person){
	console.log('Hi ' + person.firstName);
}

greet(Neeraj);

greet({
	firstName: "Neeraj2"
});