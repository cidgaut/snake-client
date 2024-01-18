let connection;

const setupInput = (conn) => {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
};

function handleUserInput(key) { //user input
  console.log(key);

  if (key === "\u0003") { //key ctrl + c to log out
    process.exit();
  }

  if (key === "w") { // wsad move up
    connection.write("Move: up"); //updated to connection.write 
  }

  if (key === "s") { // wsad move down
    connection.write("Move: down");
  }

  if (key === "a") { // wsad move left
    connection.write("Move: left");
  }

  if (key === "d") { // wsad move right
    connection.write("Move: right");
  }
};

module.exports = { setupInput }; //exporting both functions 
//handleUserInput doesn't actually need to be exported as it is called within setUpInput in the same file.