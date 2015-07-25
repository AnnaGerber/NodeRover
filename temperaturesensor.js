var five = require("johnny-five");
var board = new five.Board();


board.on("ready", function() {
  var temp = new five.Temperature({
    pin: "A4",
    controller: "LM35",
    freq: 1000
  });

  temp.on("data", function(err, data) {
    console.log("Temp: %d", data.celsius);
  });
});

