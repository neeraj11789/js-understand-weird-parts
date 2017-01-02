(function(){


  var myModule = {
    self: this,
    people: ["Neerajaaa", "Guptaaaa"],
    init: function(){
      console.log('Hey!!! I am init');
      // console.log(self);
      this.cacheDOM();
      this.bindEvents();
      this.render();
    },
    bindEvents: function(){
      this.$pm.on('click', this.$btn, this.addPerson.bind(this));
      this.$pm.on('click', 'i.del', this.removePerson.bind(this));

    },
    cacheDOM: function(){
        this.$pm = $('#peopleModule'),
        this.$btn = this.$pm.find('button'),
        this.$txtF = this.$pm.find('input'),
        this.template = this.$pm.find('#people-template').html(),
        this.$ul = this.$pm.find('#people');
    },
    render: function(){
      var data = {
        people : this.people
      }
      this.$ul.html(Mustache.render(this.template, data));
    },
    addPerson: function(){
      // console.log(self);
      // console.log(this);
      var per = this.$txtF.val();
      if('' !== per){
        this.people.push(per);
        this.render();
        this.$txtF.val('');
      }
    },
    removePerson: function(eve){
      var $remove = $(eve.target).closest('li');
      var i = this.$ul.find('li').index($remove);
      this.people.splice(i,1);
      this.render();
    }
  }


  myModule.init();
}());