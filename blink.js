var five = require("johnny-five");
var myBoard, d1,d2,d3,d4;

myBoard = new five.Board();

myBoard.on("ready", function() {

  d1 = new five.Led(13);
  d2 = new five.Led(12);
  d3 = new five.Led(11);
  d4 = new five.Led(10);


  d1.strobe( 1000 );

  // make myLED available as "led" in REPL

  // try "on", "off", "toggle", "strobe", "stop" (stops strobing)
  // note LEDs are reversed on this board
  
  this.repl.inject({
    d1: d1,
    d2: d2,
    d3: d3,
    d4: d4     
  });
  console.log("You can interact with the LED via the variable 'led' e.g. led.on();\n Hit control-D to exit.\n >> ");
});
