var AppView = Backbone.View.extend({

  initialize: function() {
    this.collection = this.collection || exampleVideoData;
    this.videos = new Videos(this.collection);

    //Renders itself
    this.render();
    // app.html is now rendered and exists here
    
    this.videos.on('select', this.onSelect, this);
  },
  
  
  onSelect: function(e) {
    // console.log(e);
    var VP = new VideoPlayerView({collection: this.videos, el: '.player'});
    VP.render(e);
  },
  

  render: function() {

    this.$el.html(this.template());   
    
    var VP = new VideoPlayerView({collection: this.videos, el: '.player' });
    VP.render();

    var VL = new VideoListView({collection: this.videos, el: '.list' });
    VL.render();

    var S = new SearchView({collection: this.videos, el: '.search' });
    S.render();
    
    return this;
  },

  template: templateURL('src/templates/app.html')

});
