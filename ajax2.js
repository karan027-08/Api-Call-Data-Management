



var XMLHttpRequest = require('xhr2');

let getData = function(url){
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.onload = function () {

    let obj = JSON.parse(xhr.response);

    // let arr = obj.filter(item => item.type === "Charm" && item.light === "Blue");
    // console.table(arr);
    // str = "";
    // for (let x in obj){
    //     if(obj[x].type == "Charm" && obj[x].light == "Blue"){
    //         console.table([`${obj[x].type}${obj[x].light} ${obj[x].name} ${obj[x].incantation} ${obj[x].effect}${obj[x].id} ${obj[x].canBeVerbal}${obj[x].creator}`]);

    //     }
    // }
    // console.table(str);



    }
xhr.send();
}


// let getData = function(url){
//     window.fetch(url)
//   .then(response => response.json())
//   .then(data => console.log(data));
// }


module.exports.getData = getData;


