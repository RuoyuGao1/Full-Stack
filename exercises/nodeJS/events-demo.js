const EventEmitter = require("events");

const emitter = new EventEmitter();

emitter.on("login", (username) => {
    console.log(username + " logged in");
});

emitter.on("message", (text) => {
    console.log("New message:", text);
});

emitter.emit("login", "Ruoyu");
emitter.emit("message", "Node.js events are working");