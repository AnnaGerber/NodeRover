var five = require("johnny-five");

var exports = {};

// override noTone function so that it sets HIGH instead of LOW 
// (this is inverted because of the way that piezo is wired up with 10K resistor to 5V)
five.Piezo.prototype.noTone = function() {
  this.io.digitalWrite(this.pin, 255);
  if (this.timer) {
   this.timer.clearInterval();
    delete this.timer;
  }
  return this;
};


exports.five = five;



module.exports = exports;