const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let results, hour, min;

rl.on("line", function (line) {
  results = line.split(" ");
  hour = Number(results[0]);
  min = Number(results[1]);
  
  if (){}

  rl.close();
}).on("close", function () {
  process.exit();
});
