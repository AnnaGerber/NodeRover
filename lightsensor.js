var five = require("johnny-five"),
    board, myPhotoresistor, myLed;

board = new five.Board();

board.on("ready", function() {

  myPhotoresistor = new five.Sensor({
    pin: "A5",
    freq: 250
  });


  myPhotoresistor.on("data", function( err, value ) {
    console.log("light", value)
    // range of led brightness is 0 - 255
    var brightnessValue = five.Fn.constrain(five.Fn.map(value, 0, 900, 0, 255), 0, 255);
    // do something e.g. display on digit display
  });
});
