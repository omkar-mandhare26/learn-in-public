const events = require('events');

function createEventEmitter() {
    const EventEmittter = new events();

    function on(eventName, listener) {
        EventEmittter.on(eventName, listener);
    }

    function emit(eventName) {
        EventEmittter.emit(eventName);
    }

    return {
        on, emit
    };
}

const myEventEmitter = createEventEmitter();
myEventEmitter.on('hello', () => {
    console.log("Hello World!");
});

myEventEmitter.emit('hello');
