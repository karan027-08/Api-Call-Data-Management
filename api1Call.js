//  https://poetrydb.org/title/Ozymandias/lines.json 

const https = require('https');

async function getData(url){
    https.get(url,(response) => {
        let data = '';
        response.on('data',(d) => {
            data += (d.toString());
         
        })
        response.on('end',async () => {
            // console.log(JSON.parse(data.toString())[0].lines)
            let newData = JSON.parse(data.toString())[0].lines;
            console.log(newData)
            // let set = function(newData){
            //     let i = 0;
            //     return function(){
            //         console.log(newData[i]);
            //         i++;
            //         i %= newData.length;
            //     }
               
            // }  
            function sleep(ms) {
                return new Promise(resolve => setTimeout(resolve, ms));
             }
                // for(let i =0;i < newData.length;i++){
                //     console.log(newData[i]);
                    
                //     await sleep(3000);
                   
                // }
                let i = 0;
                let flag = false;
                while (true){
                    
                    console.log(newData[i]);
                    
                    await sleep(3000);
                    i = (i+1)% newData.length;
                    if(true) break;
                    
                }
                await setTimeout(()=>{
                    flag = true;
                },5000)
               
                
            
            // let newId  = setInterval(set(newData),3000);
            // setTimeout(() =>{
            //     clearInterval(newId);

            // },15 * 60000)
        })
    }
    )};
    

// module.exports.getData1 = getData1;
getData('https://poetrydb.org/title/Ozymandias/lines.json');
