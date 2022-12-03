

var querystring = require('querystring');
var https = require('https');

https.open('GET', 'https://wizard-world-api.herokuapp.com/Spells', true);

https.onload = function () {
    if (this.status === 200) {
        let obj = JSON.parse(this.responseText);
        console.log(obj);
        // let list  = document.getElementById('list')
        str = "";
        for (let x in obj){
            if(obj[x].type == "Charm" && obj[x].light == "Blue"){
                console.table([`${obj[x].type}${obj[x].light} ${obj[x].name} ${obj[x].incantation} ${obj[x].effect}${obj[x].id} ${obj[x].canBeVerbal}${obj[x].creator}`], [""]);
                
            }
        }
        // list.innerHTML = str;
        // console.log(str);
    }
    else {
        console.log("some error occured")
    }


}
https.send();


