var a = new Array();

console.log(a);

var arr = [
	1,
	"neeraj",
	false,
	{
		name : "Neeraj",
		city : "Bangalore"
	},
	["apple", "ball", "cat"],
	function(name){
		var greet = "Hello ";
		console.log(greet + name);
	}
];

console.log(arr);
arr[5](arr[3].name);
arr[5](arr[4][2]);