var five = require("johnny-five"),
    board, myPotentiometer;

board = new five.Board();

board.on("ready", function() {

  myPotentiometer = new five.Sensor({
    pin: "A0",
    freq: 500
  });

  myPotentiometer.on("data", function(err,data) {
    console.log(data);
  });
});

