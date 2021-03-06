process.stdout.write("prompt > ");
process.stdin.on("data", (data) => {
    let args = data.toString().trim().split(" ");
    if (args[0] === 'cat') {
        const cat = require("./cat.js")(args[1]);
    } else if (args.join('') === "pwd") {
        const pwd = require("./pwd.js");
        pwd();
    } else if (args.join('') === "ls") {
        const ls = require("./ls.js");
    }
    process.stdout.write("prompt > ");
});

