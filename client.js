const net = require("net"); //needed for line 5

  // establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: "165.227.47.243",
    port: 50541
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  conn.on("connect", () => {
    console.log("Successfully connected to game server"); //changed previous message
  
    conn.write("Name: CID");//still witthin the conn.on function. Won't work outside.
    
    //make the snake move up once every 50 ms
    setInterval(() => {
      conn.write("Move: up");
    }, 50);

  });

  

  return conn;
};


module.exports = {connect};

//had touble with this one 
//there is a connect function that we turn into an object once it's in module.exports
