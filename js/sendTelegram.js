const BOT_TOKEN = "8962803850:AAGnVcgLyN6QbYIAxGWeC1132MRbFkiKtns";

const CHAT_ID = "957280068";


function sendTelegram(text){


const url =
`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`;


fetch(url,{

method:"POST",

headers:{
"Content-Type":"application/json"
},

body:JSON.stringify({

chat_id:CHAT_ID,

text:text

})

})


.then(response=>{

console.log("Відправлено ❤️");

})


.catch(error=>{

console.log(error);

});


}