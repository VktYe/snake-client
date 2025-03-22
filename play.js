const net = require("net"); //used Node "net library"

// establishes a connection with the game server
const connect = function () {  //used createConnection function from net library
  const conn = net.createConnection({
    host: "localhost",
    port: 50541
  });

  conn.on("data", (data) => {
    console.log("Server says: ", data);
  });

  conn.on("connect", () => {
    conn.write("Hello from a new client!")//code that does something when a connection is first established
  });

  conn.on("error", (error) => {
    console.log("Connecrtion error: ", error);
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  return conn; //connection with the server
};

console.log("Connecting ...");
connect();