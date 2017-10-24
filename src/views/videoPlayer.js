var VideoPlayerView = Backbone.View.extend({

  initialize: function() {
    this.collection.on('select', function(e) { this.render(e);}, this);
  },

  render: function() {
    this.$el.html('<div class="loading">Please wait...</div>');

    // Removes the '<div class="loading">Please wait...</div>' from the node
    this.$el.children().detach();

    // Attaches the video to the .player class
    this.$el.html(this.template());

    return this;
  },
  
  //template: _.template('<div class="video-player-details"><%= snippet.title %></div>')
  template: templateURL('src/templates/videoPlayer.html')

});
