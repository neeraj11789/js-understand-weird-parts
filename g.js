// Execution Context and Event Queue
// 

function waiting(){
	let lateSec = new Date().getTime() + 3000;
	while(new Date().getTime() < lateSec){

	}
	console.log("Function execution Done");
}

function clickEventHandler(){
	console.log("Click Event Handler Done");
}

document.addEventListener('click', clickEventHandler);

waiting();
console.log("Finshed Exection -- Global Context");