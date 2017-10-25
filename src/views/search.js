var SearchView = Backbone.View.extend({
  
  events: {
    "click button": "searchClickHandler",
    "keyup": "keyAction"
  },
  
  searchClickHandler: function(e) {
    console.log($('.form-control').val());
    this.collection.search($('.form-control').val());
    
  },
  
  keyAction: function(k) {
    if (k.keyCode === 13) {
      this.searchClickHandler();
    }
  },

  render: function() {

    this.$el.html(this.template());

    return this;
  },

  template: templateURL('src/templates/search.html')

});
