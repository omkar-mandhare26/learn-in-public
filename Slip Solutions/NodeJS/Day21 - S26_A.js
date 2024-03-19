const events = require("events");
class EventEmittter extends events { };
const myEventEmittter = new EventEmittter();

myEventEmittter.on('hello', () => {
    console.log("Hello World!");
});
myEventEmittter.emit('hello');