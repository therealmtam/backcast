var SearchView = Backbone.View.extend({

	el: '.search',

  render: function() {

    this.$el.html(this.template());

    console.log(this.template());

    return this;
  },

  template: templateURL('src/templates/search.html')

});
