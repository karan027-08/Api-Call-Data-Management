function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
 }
 async function Tutor() {
   
    for (let i = 1; i <20 ; i++) {   
        console.log("hello "+ i);     
       await sleep(3000);
      
    }
 }
 Tutor();