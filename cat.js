const fs = require('fs')

module.exports = (file) => {fs.readFile(file, 'utf8', function read(err, data) {
    if(err) {
        throw err
    }
    else {
        // const content = data
      //  console.log(data)
        process.stdout.write(data)
        process.stdout.write('prompt > ')
    }
})

}