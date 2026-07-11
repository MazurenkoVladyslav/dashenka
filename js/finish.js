document.getElementById("date").innerHTML =
localStorage.getItem("date") || "Не вибрано";


document.getElementById("time").innerHTML =
localStorage.getItem("time") || "Не вибрано";


document.getElementById("food").innerHTML =
localStorage.getItem("food") || "Не вибрано";


document.getElementById("message").innerHTML =
localStorage.getItem("message") || "Без побажань ❤️";



// 🎉 Запуск конфеті

if(typeof launchConfetti === "function"){

launchConfetti();

}



// ❤️ Створення сердечок

createHearts();


function createHearts(){

const hearts=document.querySelector(".hearts");


setInterval(()=>{


const heart=document.createElement("div");


heart.className="heart";

heart.innerHTML="❤";


heart.style.left=Math.random()*100+"%";

heart.style.fontSize=(15+Math.random()*30)+"px";

heart.style.animationDuration=(5+Math.random()*5)+"s";


hearts.appendChild(heart);



setTimeout(()=>{

heart.remove();

},10000);



},300);


}




function restart(){

localStorage.clear();

window.location="index.html";

}