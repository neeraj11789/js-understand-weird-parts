function a(){
	console.log("This");
	console.log(this);
	this.aaa = 'Heelop';
}

var b = function(){
	console.log(this);
}

a();

console.log(aaa);

b();


var c = {
	name : "the c object",
	log : function(){
		this.name = 'the updated c object';
		c.name = 'yet again updated';
		console.log(this);
	}
}

c.log();


var d = {
	name : 'The D object',
	log : function(){
		console.log(this);
		this.name = 'updated D';

		console.log(this);

		var setName = function(){
			this.name = 'updated yet again';
		}
		setName();
		console.log(this);
	}
}

d.log();

var e = {
	name : 'The E Object',
	log : function(){
		var self = this;
		console.log(this);
		self.name = "The Updated E";
		console.log(this);
		var setName = function(name){
			self.name = name;
		}
		setName("Again updated E");
		console.log(this);
	}
}

e.log();