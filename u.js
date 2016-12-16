// Functional Programming

var arr1 = [1, 2, 3, 4, 5];
console.log(arr1);

var arr2 = [];
for(var i=0; i< arr1.length; i++){
	arr2.push(arr1[i] * 2);
}
console.log(arr2);

// The same done with Function Programming using First Class Functions

var mapForEach = function(arr, fn){
	var arr2 = [];
	for(var i=0; i<arr.length; i++){
		arr2.push(fn(arr[i]));
	}
	return arr2;
}

var multiplyByThree = mapForEach(arr1, function(item){
	return item*3;
});
console.log(multiplyByThree);

var tryChecks = mapForEach(arr1, function(item){
	return item > 3;
})
console.log(tryChecks);


var checkLimits = function(limiter, item){
	return item > limiter;
}

var c1 = mapForEach(arr1, checkLimits.bind(this, 1));
console.log(c1);

var cl2 = function checkLimits2(item){
	return checkLimits(2, item);
}
 
var c2 = mapForEach(arr1, cl2);
console.log(c2);

// Important way to simplify things 
var checkLimitsSimplified = function(limiter){
	return function(limiter, item){
		return item > limiter;
	}.bind(this, limiter);
}

var c3 = mapForEach(arr1, checkLimitsSimplified(4));
console.log(c3);