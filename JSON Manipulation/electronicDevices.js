const fs = require('fs');
let rawdata = fs.readFileSync('data.json');
const data = JSON.parse(rawdata);

function eDevices(data){
    const results = data.filter(obj => obj.type == "electronic");
    for (var i = 0; i < results.length; i++){
        console.log(results[i].name);
    }
}

eDevices(data);
