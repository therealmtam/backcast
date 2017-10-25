var VideoPlayerView = Backbone.View.extend({

  render: function(e) {
    
    var model = e || this.collection.at(0);

    
    this.$el.html('<div class="loading">Please wait...</div>');
    this.$el.children().detach();
    this.$el.html(this.template(model.attributes));

    return this;
  },
  
  template: templateURL('src/templates/videoPlayer.html')

});
