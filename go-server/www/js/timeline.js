AS.init();

AS.attachAnimation({
    stepsNum: 1,
    milisecondsStep: 1000,
    repeatForever: true,
    func: function( _animation ) {
        console.log("animation: step!");
    },
    onStart: function() { 
        console.log("animation: onStart!");
    },
    whenFinish: function() {
        console.log("animation: whenFinish!");
    }
})