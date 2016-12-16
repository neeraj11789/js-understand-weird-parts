(function(global, $){
	// console.log(global);
	// console.log($);

	var Greetr = function(firstname, lastname, language){
		return new Greetr.init(firstname, lastname, language);
	},

	supportedLanguges = ['en', 'es'],

	greetings = {
		en : 'Hello',
		es : 'Hola'
	},

	formalGreetings = {
		en : 'Greetings',
		es : 'Saludos'
	},

	logMessages = {
		en : 'Logged in ',
		es : 'Logged in -- spanish'
	},

	consoleGreet = function(msg){
		if(console){
			console.log(msg);
		}
	}

	Greetr.prototype = { 
		version : 1.0,
		date : '15-December-2016',
		getLanguage : function(){
			return this.language;
		},
		fullName : function(){
			return this.firstname + " " + this.lastname;
		},
		validate : function(){
			if(supportedLanguges.indexOf(this.language) === -1){
				throw "Invalid Language";
			}else{
				return true;
			}
		},
		greeting : function(){
			return greetings[this.getLanguage()] + " " + this.fullName() + "!"; 
		},
		formalGreetings : function(){
			return formalGreetings[this.getLanguage()] + " " + this.lastname; 
		},
		greet : function(formal){
			var msg;
			if(formal){
				msg = this.formalGreetings();
			}else{
				msg = this.greeting();
			}
			consoleGreet(msg);
			return this;
		},
		log : function(){
			if(console){
				console.log(logMessages[this.getLanguage()] + ": " + this.fullName());
			}
			return this;
		},
		setLanguage : function(lang){
			var oldLang = this.getLanguage();
			this.language = lang;
			if(!this.validate()){
				this.language = oldLang;
			}
			return this;
		},
		HTMLGreeting : function(selector, formal){
			if(!$){
				throw "jQuery Not Found";
			}

			if(!selector){
				throw "Missing jQuery Selector";
			}

			var msg;
			if(formal){
				msg = this.formalGreetings();
			}else{
				msg = this.greeting();
			}
			
			$(selector).html(msg);

			return this;

		}
	};

	Greetr.init = function(firstname, lastname, language){

		var self = this;
		self.firstname = firstname || '';
		self.lastname = lastname || '';
		self.language = language || 'en';
	}

	Greetr.init.prototype = Greetr.prototype;

 
	global.Greetr = global.G$ = Greetr;

})(window, jQuery);