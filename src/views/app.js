var AppView = Backbone.View.extend({

  el: '#app',

  initialize: function() {
    this.videos = new Videos();

    //Renders itself
    this.render();

    // Renders VP
    var VP = new VideoPlayerView({collection: this.videos});
    VP.render();

    // Renders VL
    var VL = new VideoListView({collection: this.videos});
    VL.render();

    var S = new SearchView({collection: this.videos});
    S.render();
  },


  render: function() {

    // this appends the app template to the index.html at id #app
    this.$el.html(this.template());   

    return this;
  },

  template: templateURL('src/templates/app.html')

});
