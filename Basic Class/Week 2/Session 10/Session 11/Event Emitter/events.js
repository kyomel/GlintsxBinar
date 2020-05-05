/*
  HTTP Request,
  Frontend do the request to Backend,
  it's an event.

  TCP 8000 -> HTTP,
  handle request,
  give the response */

  const events = require('events');
  const { EventEmitter } = events;
  
  // Instantiate EventEmitter
  const panitia = new EventEmitter();
  
  // Registering listener
  panitia.on('Pembukaan', () => {
    console.log("MC membuka acara");
  });
  
  module.exports = panitia;
  