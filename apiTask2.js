const https = require('https');
const readline = require('readline');

const getData  = function(url){
    https.get(url,(response) => {
        let data = '';
        response.on('data',(d) => {
            data += (d.toString());
         
        })
        response.on('end',() => {
            let newData = JSON.parse(data.toString());
            // let arr = newData.filter(item => item.type === "Charm" && item.light === "Blue");
            // console.table(arr);
        })
    }
    )};
const searchMethod = (newData) => {
    
    const ql =readline.createInterface({
        input : process.stdin,
        output : process.stdout,
    });
    ql.question("Enter ", function (answer) {
        if (newData === answer){
            console.log(newData)
        }
        console.log(`Oh, so you live in ${answer}`);
        console.log("Interface Closed");
        ql.close();
      });
}
searchMethod();