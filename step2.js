const fs = require('fs');
const process = require('process');
const axios = require('axios');

function cat(path){
    fs.readFile(path, 'utf8', (err, data) => {
        if(err){
            console.log("error reading file");
            process.exit(1);
        }

        console.log(data);
    });
}

async function webCat(url) {
    try {
      let resp = await axios.get(url);
      console.log(resp.data);
    } 
    catch (err) {
      console.error('Error');
      process.exit(1);
    }
  }

const argv = process.argv;

if (argv[2].includes('http')) {
    webCat(argv[2]);
  } 
  else {
    cat(argv[2]);
  }