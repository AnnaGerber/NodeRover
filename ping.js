
var five = require("johnny-five");
var myBoard, ping;

// Note: you'll need to have the version of Firmata install on your board that suports this sensor
myBoard = new five.Board();

myBoard.on("ready", function() {

  ping = new five.Proximity({
    controller: "HCSR04",
    pin: 9
  });
  
  ping.on("data", function() {
    console.log("inches: ", this.inches);
    console.log("cm: ", this.cm);
  });  
});

