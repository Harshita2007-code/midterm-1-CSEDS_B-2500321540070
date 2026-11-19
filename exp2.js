console.log("Start the program");

setTimeout(() => {
    console.log("run setTimeout");
}, 0);

setImmediate(() => {
    console.log("run setImmediate");
});

process.nextTick(() => {
    console.log("process.nextTick");
});

console.log("End of program");
