process.stdout.write('prompt > ');


let catArgs = process.argv.slice(' ')




console.log(catArgs)

if(catArgs.length === 2) {
    const cat = require('./cat.js')(catArgs[1])
}
if(catArgs === 'pwd') {
    const pwd = require('./pwd.js')
}

if(catArgs === 'ls') {
    const ls = require('./ls.js')
}