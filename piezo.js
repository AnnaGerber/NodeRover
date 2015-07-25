var eb = require("./expansion-board.js"),
  five = eb.five,
  board, piezo;

board = new five.Board();

board.on("ready", function() {

  piezo = new five.Piezo(3);

  function playSong() {
    piezo.play({
      // song is composed by a string of notes
      // a default beat is set, and the default octave is used
      // any invalid note is read as "no note"
      song: "C D F D A - A A A A G G G G - - C D F D G - G G G G F F F F - -",
        beats: 1 / 4,
        tempo: 100
    });
  }

  playSong();

  board.repl.inject({
    piezo: piezo,
    playSong: playSong
  });

  console.log("Try piezo.tone(160,100) or piezo.noTone() or playSong()\nHit control D to exit\n>>");

});
