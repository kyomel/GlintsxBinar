const panitia = require("./events.js");

// Randomly Loop and emit event
for (let i = 0; i < 100; i++) {
  if (i == 50)
    panitia.emit("Pembukaan");
}
