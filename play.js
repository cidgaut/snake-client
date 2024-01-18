
const connectKey = require("./client"); //we assign a variable to the file we require to then request the object using a key

//
console.log("Connecting ...");
connectKey.connect(); //this is where we take the  => file we require via value => dot => name of the object/key exported from said file


const setupInput = function () {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();

  const handleUserInput = function (key) { //user input
    if (key === "\u0003") { //key ctrl + c to log out
      process.exit();
    }

    /*if(key === "w") { // wsad move up
      conn.write("Move: up");
    }

    if(key === "s") { // wsad move up
      conn.write("Move: down");
    }
    
    if(key === "a") { // wsad move up
      conn.write("Move: left");
    }

    if(key === "r") { // wsad move up
      conn.write("Move: right");
    }
  };*/

  stdin.on("data", handleUserInput);
  return stdin;
};
}