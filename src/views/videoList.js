var VideoListView = Backbone.View.extend({

  el: '.list',

	initialize: function() {
		this.collection.on('sync', this.render, this);
	},


  render: function() {
    this.$el.children().detach();
    this.$el.html(this.template());

    // this.$el.html(_.map(this.collection.models, function(video) {
    // 	var VLE = new VideoListEntryView({model: video});
    //   this.$el.append(VLE.render());
    // }));

    return this;
  },

  template: templateURL('src/templates/videoList.html')

});
