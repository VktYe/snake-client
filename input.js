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
    console.log("You are leaving the game. :(")
    process.exit();
  };

  if (key === 'w' || key === 'W') {
    connection.write("Move: up");
  };

  if (key === 'a' || key === 'A') {
    connection.write("Move: left");
  };

  if (key === 's' || key === 'S') {
    connection.write("Move: down");
  };

  if (key === 'd' || key === 'D') {
    connection.write("Move: right");
  };
  
};

module.exports = {
  setupInput
};
