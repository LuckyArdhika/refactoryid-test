const fs = require('fs');
let rawdata = fs.readFileSync('data.json');
const data = JSON.parse(rawdata);

function itemMeetingRoom(data){
    // use filter for get same string more than 1
    var result = data.filter(obj=> obj.placement.name == "Meeting Room");
    for (var i = 0; i < result.length; i++){
        console.log(result[i].name);
    }
}

itemMeetingRoom(data);
