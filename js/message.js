const sendBtn = document.getElementById("sendBtn");


// ❤️ Сердечка

createHearts();


function createHearts(){

const hearts=document.querySelector(".hearts");


setInterval(()=>{


const heart=document.createElement("div");


heart.className="heart";

heart.innerHTML="❤";


heart.style.left=Math.random()*100+"%";

heart.style.fontSize=(15+Math.random()*25)+"px";

heart.style.animationDuration=(5+Math.random()*5)+"s";


hearts.appendChild(heart);



setTimeout(()=>{

heart.remove();

},10000);



},400);


}




sendBtn.onclick=()=>{


const message=document.getElementById("message").value;



if(message.trim()===""){

alert("❤️ Напиши хоча б маленьке побажання.");

return;

}



const text = `

❤️ НОВЕ ПОБАЧЕННЯ ❤️


📅 Дата:
${localStorage.getItem("date")}


🕒 Час:
${localStorage.getItem("time")}


🍕 Їжа:
${localStorage.getItem("food")}


💌 Побажання:
${message}

`;

sendTelegram(text);



document.body.style.opacity="0";



setTimeout(()=>{


window.location="finish.html";


},600);



};