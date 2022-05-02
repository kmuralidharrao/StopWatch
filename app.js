const Stopwatch = require("./stopwatch");

const stopwatch = new Stopwatch();

stopwatch.start();
stopwatch.name = "hello"

setTimeout(()=>{
    stopwatch.stop();
    console.log(stopwatch.duration);
    console.log(stopwatch.name)
},3000)