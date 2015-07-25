// =======================
// Derived from the work done by @makenai on the
// SumoBot Jr
// =======================

var five = require("johnny-five");
var keypress = require('keypress');

// note you can also adjust the stop points using the pots on the servos 
// look for the access holes at the back of your servos
var RSTOPVAL = 90;
var LSTOPVAL = 90;

var opts = {};
opts.port = process.argv[2] || "";

keypress(process.stdin);

var board = new five.Board(opts);

board.on("ready", function() {

    console.log("Control the bot with the arrow keys, and SPACE to stop.")

    var left_wheel  = new five.Servo({ pin:  5, type: 'continuous' });
    var right_wheel = new five.Servo({ pin: 6, type: 'continuous'  });

    process.stdin.resume(); 
    process.stdin.setEncoding('utf8'); 
    process.stdin.setRawMode(true); 
    left_wheel.to(LSTOPVAL);
    right_wheel.to(RSTOPVAL);
    
    process.stdin.on('keypress', function (ch, key) {

        if ( !key ) return;

        if ( key.name == 'q' ) {
            console.log('Quitting');
            process.exit();
        } else if ( key.name == 'up' ) {

            console.log('Forward');
            left_wheel.cw();
            right_wheel.ccw();

        } else if ( key.name == 'down' ) {

            console.log('Backward');
            left_wheel.ccw();
            right_wheel.cw();      

        } else if ( key.name == 'left' ) {

            console.log('Left');
            left_wheel.ccw(); 
            right_wheel.ccw();      

        } else if ( key.name == 'right' ) {

            console.log('Right');
            left_wheel.cw();
            right_wheel.cw();

        } else if ( key.name == 'space' ) {

            console.log('Stopping');
            left_wheel.to(LSTOPVAL);
            right_wheel.to(RSTOPVAL);

        }
    });
});

board.on("error", function(err) {
    console.log(err.message);
    process.exit();
});

