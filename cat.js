const fs = require("fs");

module.exports = (file) => {
  fs.readFile(file, "utf8", function read(err, data) {
    if (err) {
      throw err;
    } else {
      process.stdout.write(data);
    }
  });
  process.stdout.write("\nprompt > ");
};
