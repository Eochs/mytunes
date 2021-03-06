var AppModel = Backbone.Model.extend({

  initialize: function(params) {
    this.set('currentSong', new SongModel());
    this.set('songQueue', new SongQueue());

    params.library.on('play', function(song) {this.set('currentSong', song);}, this);

    params.library.on('enqueue', function(song) {this.set({'songQueue': this.get('songQueue').add(song)});
                                                 if (this.get('songQueue').length === 1) song.play();   
                                                 }, this);

    params.library.on('dequeue', function(song) { this.get('songQueue').remove(song);
                                                  this.set( 'currentSong', this.get('songQueue').at(0) );  
     }, this)
    //this.get('songQueue').on('ended', function(song){
    params.library.on('ended', function(song){
        this.get('songQueue').remove(song);
        this.set( 'currentSong', this.get('songQueue').at(0) );  
    }, this);
        //function() {this.set({'currentSong': this.get('songQueue').shift()});}, this);}
    
    this.get('songQueue').on('removeFromQueue', function(song){
        this.get('songQueue').remove(song);
    }, this);

    }
});
    /* Note that 'this' is passed as the third argument. That third argument is
    the context. The 'play' handler will always be bound to that context we pass in.
    In this example, we're binding it to the App. This is helpful because otherwise
    the 'this' we use that's actually in the function (this.set('currentSong', song)) would
    end up referring to the window. That's just what happens with all JS events. The handlers end up
    getting called from the window (unless we override it, as we do here). */
