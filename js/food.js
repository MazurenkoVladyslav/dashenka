let selectedFood = "";


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



// 🍕 Вибір їжі

const cards=document.querySelectorAll(".food-card");


cards.forEach(card=>{


card.addEventListener("click",()=>{


cards.forEach(c=>{

c.classList.remove("selected");

});


card.classList.add("selected");


selectedFood=card.dataset.food;


});


});




// ➡️ Наступна сторінка

document.getElementById("nextFood").onclick=()=>{


if(selectedFood===""){

alert("❤️ Обери, що будемо їсти.");

return;

}



localStorage.setItem(
"food",
selectedFood
);



document.body.style.opacity="0";


setTimeout(()=>{


window.location="message.html";


},500);



};