const https = require('https');
const getData  = function(url){
    https.get(url,(response) => {
        let data = '';
        response.on('data',(d) => {
            data += (d.toString());
         
        })
        response.on('end',() => {
            let newData = JSON.parse(data.toString());
            let arr = newData.filter(item => item.type === "Charm" && item.light === "Blue");
            console.table(arr);
        })
    }
    )};
 module.exports.getData = getData;
