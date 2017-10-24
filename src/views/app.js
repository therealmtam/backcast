var AppView = Backbone.View.extend({

  el: '#app',

  initialize: function() {
    this.videos = new Videos();

    //Renders itself
    this.render();
    // app.html is now rendered and exists here

    // Renders VP
    var VP = new VideoPlayerView({collection: this.videos, el: '.player' });
    VP.render();
    // videoPlayer.htnl is now rendered and exists at .player
    // videoPlayer will render the video title and the video description

    // Renders VL
    var VL = new VideoListView({collection: this.videos, el: '.list' });
    VL.render();
    // videoList.html is now rendered and exists at .list
    // VideoListView will render the videoListEntryViews

    var S = new SearchView({collection: this.videos, el: '.search' });
    S.render();
    // search.html is now rendered and exists at .search
  },


  render: function() {

    // this appends the app.html code to the index.html code at id #app
    this.$el.html(this.template());   

    // return this to allow chaining
    return this;
  },

  template: templateURL('src/templates/app.html')

});
