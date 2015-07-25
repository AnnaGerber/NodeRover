var five = require("johnny-five"),
    onButton, dimButton, offButton, led;

five.Board().on("ready", function() {

  onButton = new five.Button({
    pin:"A1", 
    pullup: true
  });

  dimButton = new five.Button({
    pin:"A2", 
    pullup: true
  });

  offButton = new five.Button({
    pin:"A3", 
    pullup: true
  });

  led = new five.Led({
    pin:10, 
    isAnode:true // reverse this led so that on and off work as you expect
  });

  onButton.on("press", function(value){
    console.log("Turn LED on");
    led.on();
  });

  dimButton.on("press", function(){
    console.log("Dim LED");
    led.brightness(50);
  });

  offButton.on("press", function(){
    console.log("Turn LED off");
    led.off();
  });

});
