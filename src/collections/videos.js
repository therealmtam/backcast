var Videos = Backbone.Collection.extend({

  model: Video,
  
  search: function(input) {
    Backbone.ajax({
      url: "https://www.googleapis.com/youtube/v3/search",
      type: "GET",
      data: {
        part: "snippet",
        type: "video",
        videoEmbeddable: "true",
        q: input,
        maxResults: 5,
        key: window.YOUTUBE_API_KEY
      },
      success: function(data) {
        console.log('SUCCESS', data);
        var videos = new Videos(data.items);
        console.log(videos);
        // var VL = new VideoListView({collection: videos, el: '.list' });
        // VL.render();
        // var VP = new VideoPlayerView({collection: videos, el: '.player' });
        // VP.render();
        new AppView({el: '#app', collection: videos});
      }, 
      error: function(data) {
        console.log("FAIL", data);
      }
    });
    
  }

});
