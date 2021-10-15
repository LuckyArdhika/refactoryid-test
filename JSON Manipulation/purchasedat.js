// find item where purchased_at 16 january 2020
const fs = require('fs');
let rawdata = fs.readFileSync('data.json');
const data = JSON.parse(rawdata);

for (var i = 0; i < data.length; i++ ){
    const unixtimestamp = data[i].purchased_at;
    // console.log(data[i]);
    var s = new Date(unixtimestamp * 1000).toLocaleDateString("en-US");
    if ( s == "1/16/2020" ){
        console.log(data[i].name);
    }
}
