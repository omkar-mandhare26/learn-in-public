const events = require("events");
const EventEmitter = new events.EventEmitter();

EventEmitter.on("event1", () => {
    console.log(`Event 1 Triggered`);
});

EventEmitter.on("event2", () => {
    console.log(`Event 2 Triggered`);
});

EventEmitter.on("event3", () => {
    console.log(`Event 3 Triggered`);
});

console.log(`Listening Event: `);

process.stdin.setEncoding('utf8');
process.stdin.on('data', (input) => {
    input = input.trim();
    if (input === 'event1') EventEmitter.emit('event1');
    else if (input === 'event2') EventEmitter.emit('event2');
    else if (input === 'event3') EventEmitter.emit('event3');
    else if (input === 'exit') process.exit();
    else console.log("Invalid Input");
});
