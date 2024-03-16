const events = require('events');
const EventEmitter = new events.EventEmitter();

function firstListener() {
    console.log('First listener executed');
};

function secondListener() {
    console.log('Second listener executed');
};

EventEmitter.on('customEvent', firstListener);
EventEmitter.on('customEvent', secondListener);

EventEmitter.emit('customEvent');