const { movementCommands, sayCommands} = require("./constants");
let connection;
const setupInput = function(conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
};

const handleUserInput = function(key) {
  if (key === "\u0003") {
    console.log("You are leaving the game. :(");
    process.exit();
  }

  const direction = movementCommands[key.toLowerCase()];
  if (direction) {
    connection.write(`Move: ${direction}`);
  }
  
  const sayMessage = sayCommands[key.toLowerCase()];
  if (sayMessage) {
    connection.write(`Say: ${sayMessage}`);
  }
  

};

module.exports = {
  setupInput
};
