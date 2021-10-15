const fs = require('fs');
let rawdata = fs.readFileSync('data.json');
const data = JSON.parse(rawdata);

function eDevices(data){
    // find 1 str di antara str lainnya
    const results = data.filter(obj => obj.tags.find(str => str == "brown"));
    for (var i = 0; i < results.length; i++){
        console.log(results[i].name);
    }
}

eDevices(data);
