AS.init();

AS.attachAnimation({
    stepsNum: 1,
    milisecondsStep: 1000,
    repeatForever: true,
    func: function( _animation ) {
        console.log("animation: step!");
        ajsrClock.update(1000);
        timeCanvas.refresh();
    },
    onStart: function() { 
        console.log("animation: onStart!");
    },
    whenFinish: function() {
        console.log("animation: whenFinish!");
    }
})

var ajsrClock = {
    hh: null,
    mm: null,
    ss: null,
    lastTimestamp: null,
    onGoingUpdate: false,
    el: null,
    id: null,
    init: function(miliseconds){
        console.log("[ajsrClock] init()");
        if (miliseconds === null) { 
            this.lastTimestamp = Date.now(); 
        } else { 
            this.lastTimestamp = miliseconds; 
        }

        // create html
        if ( this.el === null){
            this.el = "ajsrClock-"+ Date.now();
            var str = '';
            str += '<div id="'+ this.el +'" class="ajsrClock"></div>';
        }

        if ( this.onGoingUpdate === false) this.update();
    },
    update: function(miliseconds){
        this.onGoingUpdate = true;
        console.log("[ajsrClock] update()");

        if ( this.lastTimestamp === null ) this.init();

        if (miliseconds === null) { 
            this.paint( miliseconds );
        } else { 
            this.paint( this.lastTimestamp );  
        }

        this.onGoingUpdate = false;
    },
    reset: function(){
        console.log("[ajsrClock] reset()");

    },
    paint: function(miliseconds){
        if (miliseconds === null) { 
            //this.paint( miliseconds );

        } else { 
            //this.paint( this.lastTimestamp );

        }
    },
    goForward: function(miliseconds){

    },
    goBackwards: function(miliseconds){

    }
}

var timeCanvas = {
    // hh: null,
    // mm: null,
    // ss: null,
    // lastTimestamp: null,
    currentTimestamp: 0,
    onGoingUpdate: false,
    el: null,
    // id: null,
    data: {
        tracks: [
            {
                title: "Default track",
                items: [
                    {
                        title: "Start event",
                        time: 0
                    }
                ]
            }
        ]
    },
    init: function(){
        console.log("[timeCanvas] init()");

        // create html
        if ( this.el === null){
            this.el = "timeCanvas-"+ Date.now();
            var str = '';
            str += '<div id="'+ this.el +'" class="timeCanvas"></div>';
        }

        this.el = document.getElementById("time-events-container");

        this.drawCanvas();

        //if ( this.onGoingUpdate === false) this.update();
    },
    update: function(){
        // this.onGoingUpdate = true;
        // console.log("[timeCanvas] update()");


        // this.onGoingUpdate = false;
    },
    reset: function(){
        console.log("[timeCanvas] reset()");

    },
    refresh: function( time ){
        console.log("[timeCanvas] refresh()");
    },
    addItem: function( timestamp, track ){

    },
    addTrack: function( label ) {

    },
    drawCanvas: function(){
        var str = ".....";

        console.log("this.el:", this.el );
        //this.el.innerHtml(str); 
    }
}