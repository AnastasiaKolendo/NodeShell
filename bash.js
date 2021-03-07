process.stdout.write("prompt > ");
process.stdin.on("data", (data) => {
    let args = data.toString().trim().split(" ");
    if (args[0] === 'cat') {
        require("./cat.js")(args[1]);
    } else if (args.join('') === "pwd") {
        require("./pwd.js");
    } else if (args.join('') === "ls") {
        require("./ls.js");
    } else if(args[0] === 'curl'){
        require("./curl.js")(args[1]);
    } else {
        process.stdout.write("command not found\n");
    }
});

