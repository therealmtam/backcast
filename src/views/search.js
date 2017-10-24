var SearchView = Backbone.View.extend({

  render: function() {

    this.$el.html(this.template());

    //console.log(this.template());

    return this;
  },

  template: templateURL('src/templates/search.html')

});
