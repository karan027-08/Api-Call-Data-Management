console.log("Ajax Call");

let fetchBtn = document.getElementById('fetchBtn');
fetchBtn.addEventListener('click', clickHandler);

function clickHandler() {
    console.log("you have clicked fetchBtn ");
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://poetrydb.org/title/Ozymandias/lines.json', true);
    xhr.onprogress = function () {
        console.log("on progress");
    }
    xhr.onload = function () {
        if (this.status === 200) {
            let obj = JSON.parse(this.responseText);
            let list = document.getElementById('list1');
            
            console.log(obj[0].lines);
            str = '';
            
            const arr = obj[0].lines;
            // for (let y of arr){
            //     console.log(y);
            // }
            // for (let i =0; i<arr.length;i++){
            //     console.log(arr[i]);
            // }


            
                setInterval(function(){
                    for(let x of arr){
                    str += `<li>${x}</li>`
                    list.innerHTML = str;
                    }
                },2000);
                
            
            
        }
        else {
            console.log("some error occured")
        }


    }
    //send the request
    xhr.send();
    
    // for(let x of arr){
                    
    //     str += `<li>${x}</li>`
           
    // }
}


// let popBtn = document.getElementById('popBtn');
// popBtn.addEventListener('click', popHandler);
 let getData = function (url) {

    var xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.onload = function () {

    let obj = JSON.parse(xhr.response);

    let arr = obj.filter(item => item.type === "Charm" && item.light === "Blue");
    console.table(arr);




    }
xhr.send();
}
getData("https://wizard-world-api.herokuapp.com/Spells");





    // console.log("you have clicked fetchBtn ");
    // const xhr = new XMLHttpRequest();

    // xhr.open('GET', 'https://wizard-world-api.herokuapp.com/Spells', true);
    
    // xhr.onload = function () {
    //     if (this.status === 200) {
    //         let obj = JSON.parse(this.responseText);
    //         console.log(obj);
    //         // let list  = document.getElementById('list')
    //         str = "";
    //         for (let x in obj){
    //             if(obj[x].type == "Charm" && obj[x].light == "Blue"){
    //                 console.table([`${obj[x].type}${obj[x].light} ${obj[x].name} ${obj[x].incantation} ${obj[x].effect}${obj[x].id} ${obj[x].canBeVerbal}${obj[x].creator}`], [""]);
                    
    //             }
    //         }
    //         // list.innerHTML = str;
    //         // console.log(str);
    //     }
    //     else {
    //         console.log("some error occured")
    //     }


    // }
    // xhr.send();

// module.exports.getData = getData;

