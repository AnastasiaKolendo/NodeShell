process.stdout.write('prompt > ');
process.stdin.on('data', (data) =>{
    //const cmd = data.toString().trim();
    //const path = node.path.toString();
    let path = process.cwd();
    process.stdout.write('Your working directory: ' + path);
    process.stdout.write('\nprompt > ')
})