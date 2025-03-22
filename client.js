const net = require("net"); //used Node "net library"

// establishes a connection with the game server
const connect = function() {  //used createConnection function from net library
  const conn = net.createConnection({
    host: "localhost",
    port: 50541, 
  });

  conn.on("data", (data) => {
    console.log("Server says: ", data);
  });

  conn.on("connect", () => {
    console.log("Successfully connected to game server");
    conn.write("Name: HRN");
  });

  conn.on("connect", () => {
    conn.write("Move: up");
  });

  conn.on("error", (error) => {
    console.log("Connecrtion error: ", error);
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  return conn; //connection with the server
};

module.exports = connect;