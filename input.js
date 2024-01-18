const setupInput = function () {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
  };

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
};

setupInput();

module.exports = { setupInput, handleUserInput } //exporting both functions