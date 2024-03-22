const EventEmitter = require('events');
class UptimeEmitter extends EventEmitter { }
const uptimeEmitter = new UptimeEmitter();

uptimeEmitter.on('uptime', (data) => {
    console.log(`Application uptime: ${data.uptime} seconds`);
});

function emitUptime() {
    setInterval(() => {
        const uptimeInSeconds = process.uptime();
        uptimeEmitter.emit('uptime', { uptime: uptimeInSeconds });
    }, 1000);
}
emitUptime();