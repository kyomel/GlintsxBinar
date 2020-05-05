const panitia = require('./events');

// Set listener first
panitia.on('Dengerin', () => {
  console.log("Aku jalan");
  console.log("Aku jalan");
  console.log("Aku jalan");
  console.log("Aku jalan");
  console.log("Aku jalan");
  console.log("Aku jalan");
  console.log("Aku jalan");
});

// Then emit the event
panitia.emit("Dengerin");
