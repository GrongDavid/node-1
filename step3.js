const fs = require('fs');
const process = require('process');
const axios = require('axios');

function handler(text, out) {
    if (out) {
      fs.writeFile(out, text, 'utf8', function(err) {
        if (err) {
          console.error('Error');
          process.exit(1);
        }
      });
    } 
    else {
      console.log(text);
    }
  }

function cat(path, out){
    fs.readFile(path, 'utf8', (err, data) => {
        if(err){
            console.log("error reading file");
            process.exit(1);
        }
        else {
            handler(data, out);
        }
    });
}

async function webCat(url) {
    try {
      let resp = await axios.get(url);
      handler(resp.data, out);
    } 
    catch (err) {
      console.error('Error');
      process.exit(1);
    }
  }

const argv = process.argv;

if(argv[2] === '--out'){
    if (argv[2].includes('http')) {
        webCat(argv[4], argv[3]);
    } 
    else {
        cat(argv[4], argv[3]);
    }
}

else {

    if (argv[2].includes('http')) {
        webCat(argv[2], argv[3]);
    } 
    else {
        cat(argv[2], argv[3]);
    }
}