var VideoPlayerView = Backbone.View.extend({

	el: '.player',

	initialize: function() {
		this.collection.on('select', this.render, this);
	},

  render: function() {
    this.$el.html('<div class="loading">Please wait...</div>');

    // Removes the '<div class="loading">Please wait...</div>' from the node
    this.$el.children().detach();

    // Attaches the video to the .player class
    this.$el.html(this.template());

    return this;
  },

  template: templateURL('src/templates/videoPlayer.html')

});
