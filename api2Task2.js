const https = require('https');
const fs =require("fs");
const readline = require('readline');
const searchMethod = (url) => {
    
    const ql =readline.createInterface({
        input : process.stdin,
        output : process.stdout,
    });
    ql.question("Enter your choice ", function (choice) {
        switch (choice){
            case "1":
                ql.question("Enter value of Name ", function(name1){
                    getResult(name1,url);
                    ql.close();
                });

                
                break;
            case "2": 
                ql.question("Enter the Key ", function(type){
                    ql.question("Enter the value ", function(value){
                        let out  = type + value + "\n";
                        getFilter(type,value,url,out);
                        ql.close();
                    })
                });
                
                break;
            case "3":
                ql.question("To see your search entry type ok",function(answer){
                    if(answer==="ok"){
                        historyShow(answer,url);
                    }
                    ql.close();
                })
            default:
                break;

        }
      });
}
searchMethod("https://wizard-world-api.herokuapp.com/Spells");
function getResult(name1,url){
    https.get(url,(response) => {
        let data = '';
        response.on('data',(d) => {
            data += (d.toString());
         
        })
        response.on('end',() => {
            let newData = JSON.parse(data.toString());
            // console.log(newData);
            for (x in newData){
                if (name1 === newData[x].name){
                    console.log(newData[x]);
                    
                }
            } 
        })
    }
    )};
function getFilter(type,value,url,out){
    https.get(url,(response) => {
        let data = '';
        response.on('data',(d) => {
            data += (d.toString());
         
        })
        response.on('end',() => {
            let newData = JSON.parse(data.toString());
            let arr = [];
            for (x of newData){
                for (y in x){
                    if(y === type && x[y] === value){
                        arr.push(x);
                        break;
                    }
                }
            }
            console.table(arr);
            let output = JSON.stringify(arr);
            let fileName = 'karan' + 123;
            fs.appendFile(`${fileName}.txt`,out, function (err) {
            if (err) return console.log(err);
            console.log('./Ajax/karan.txt');
            });
            
        })
        
            
    }
    )};
    function historyShow(out,url){
        https.get(url,(response) => {
            let data = '';
            response.on('data',(d) => {
                data += (d.toString());
             
            })
            response.on('end',() => {
                let newData = JSON.parse(data.toString());
                
                
                let fileName = 'karan' + 123;
                fs.appendFile(`./uploadedFilterData/${fileName}.txt`,out, function (err) {
                if (err) return console.log(err);
                console.log(`./uploadedFilterData/${fileName}.txt`);
                });
                
            })
            
                
        }
        )};

    

    //getFilter("light","Blue","https://wizard-world-api.herokuapp.com/Spells");
     //getResult("Age Line","https://wizard-world-api.herokuapp.com/Spells");