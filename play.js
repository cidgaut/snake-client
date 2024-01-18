
const connectKey = require("./client"); //we assign a variable to the file we require to then request the object using a key

//
console.log("Connecting ...");
connectKey.connect(); //this is where we take the  => file we require via value => dot => name of the object/key exported from said file


const setupInput = function () {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
};

const handleUserInput = function () {
  // your code here
};