// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({

  initialize: function() {
    // this.on('enqueue', function(song){
    //   this.push(song);
    // });
  },

  playFirst : function(){
    this.at(0).play();
  }



});