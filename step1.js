const fs = require('fs');

function cat(path){
    fs.readFile(path, 'utf8', (err, data) => {
        if(err){
            console.log("error reading file");
            process.exit(1);
        }

        console.log(data);
    });
}

const argv = process.argv;

cat(argv[2]);