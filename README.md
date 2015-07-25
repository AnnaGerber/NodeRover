

# NodeRover 

Robot kits designed for International NodeBots day 2015 Brisbane event

Physical parts for these kits were designed by AnnaGerber and nog3 and fabricated on the 3D printers and laser cutter at The Edge.

The wheels and axle were created by modifying files that were generated using the OpenSCAD files for the [TrinketRover](https://github.com/rwinscot/TrinketRover)

Read more about TrinketRover [here](https://learn.adafruit.com/trinket-powered-rover/red-rover)

This design is for a larger robot based around an Arduino Uno and with wheels that attach directly to larger continuous rotation servos rather than using the snap together wheels of the original. 

The bases are laser cut from acrylic so they are stronger than the 3D printed base of the original design, and laser cutting also keeps the fabrication time and material costs down, and were based on prototyping with cardboard and then drawing up the final layout in Illustrator.

The idea of using cable ties to attach the servos to a laser cut baseplate came from SimpleBot (though this design does not reuse any of the SimpleBot parts directly). However, we are re-using the bot navigation code from [SimpleBot](https://github.com/nodebotsau/simplebot)


Build instructions for the bots are here and also under docs as a PDF: https://t.co/x3J8mI0ddU


Code examples MIT licensed and based on [node-ardx](https://github.com/AnnaGerber/node-ardx) exercises and Johnny-Five docs.

Run npm install in the directly where you have downloaded the files to install the libraries then run the code from your teminal/comand prompt using node e.g. node blink.js


A schematic for the HCARDU0085 expansion board included in our kits is included under docs. This is how the I/O pins are wired up:

    A0 potentiometer
    A1 button
    A2 button
    A3 button
    A4 LM35 temperature sensor
    A5 sensor header pins
    0 APC220 headers
    1 APC220 headers
    2 IR receiver (headers marked IR receiver but could be anything we want)
    3 piezo
    4 Latch (segment Shift Register)
    5 servo header pins
    6 servo header pins
    7 Clock (segment SR)
    8 Data (segment SR)
    9 servo header pins
    10 led 4
    11 led 3
    12 led 2
    13 led 1

Note: The expansion board has LEDs and Buzzer attached to 5V so on and off are reversed. For this reason, it also helps to add digitalWrite(3, HIGH) to the setup function in the Firmata sketch to avoid the piezo screeching when the board is powered up. you can do the same thing with the LEDs if you want them to be off by default on startup: 

    digitalWrite(13, HIGH);
    digitalWrite(12, HIGH);
    digitalWrite(11, HIGH);
    digitalWrite(10, HIGH);

The bot building instructions and parts are published under a CC-BY 4.0 license. 

The missions documents use content from Wikipedia, licensed under CC-BY-SA.

The board schematic license is unknown (but included here for educational purposes)