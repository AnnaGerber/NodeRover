

# NodeRover 

Robot kits designed for International NodeBots day 2015 Brisbane event

Physical parts for these kits were designed by AnnaGerber and nog3 and fabricated on the 3D printers and laser cutter at The Edge.

The wheels and axle were created by modifying files that were generated using the OpenSCAD files for the [TrinketRover](https://github.com/rwinscot/TrinketRover)

This design is for a larger robot based around an Arduino Uno and with wheels that attach directly to larger continuous rotation servos rather than using the snap together wheels of the original. 

The bases are laser cut from acrylic so they are stronger than the 3D printed base of the original design, and laser cutting also keeps the fabrication time and material costs down, and were based on prototypng with cardboard and then drawing up the final layout in Illustrator.

The idea of using cable ties to attach the servos to a laser cut baseplate came from SimpleBot (though this design does not reuse any of the SimpleBot parts directly). However, we are re-using the bot navigation code from [SimpleBot](https://github.com/nodebotsau/simplebot)


Build instructions for the bots are here: https://t.co/x3J8mI0ddU


Code examples MIT licensed and based on [node-ardx](https://github.com/AnnaGerber/node-ardx) exercises and Johnny-Five docs.

Run npm install in the directly where you have downloaded the files to install the libraries then run the code from your teminal/comand prompt using node e.g. node blink.js


Note: the HCARDU0085 Arduino expansion board included in our kits has LEDs and Buzzer attached to 5V so on and off are reversed. For this reason, it also helps to add digitalWrite(3, HIGH) to the setup function in the Firmata sketch to avoid the piezo screeching when the board is powered up. you can do the same thing with the LEDs if you want them to be off by default on startup: 

    digitalWrite(13, HIGH);
    digitalWrite(12, HIGH);
    digitalWrite(11, HIGH);
    digitalWrite(10, HIGH);

List to part suppliers coming soon