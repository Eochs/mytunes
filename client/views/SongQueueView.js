// SongQueueView.js - Defines a backbone view class for the song queue.
var SongQueueView = Backbone.View.extend({
  tagName: "table",
  
  initialize: function() {
    this.collection.on('add', this.render, this);
    this.render();
  },

  render: function() {
    this.$el.html('<th>Song Queue</th>');
    this.$el.append(this.collection.map(function(song){ return new SongQueueEntryView({model: song}).render(); }))

  //   this.$el.append(new SongQueueEntryView({model: new SongModel({
  //   url: "https://s3-us-west-1.amazonaws.com/hr-mytunes/data/04+One+In+A+Million.mp3",
  //   title: "One In A Million",
  //   artist: "Aaliyah",
  // })
  // }).render());
    // return this.$el.html('<th>Song Queue</th>').append(

    //   this.collection.map(
    //     function(song){
    //       return '<td>Dummy song</td>';
    //     }
    //   );
    // );
    return this.$el;
  }


});
