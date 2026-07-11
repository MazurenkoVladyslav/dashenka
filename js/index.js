const yesBtn=document.getElementById("yesBtn");
const noBtn=document.getElementById("noBtn");


let yesScale=1;


const texts=[

"Ні 😅",

"Точно? 🥺",

"Подумай ❤️",

"Не втечеш 😆",

"ЕЙ :( ",


"хіххіхі ",


"Мімо 💕",


"Просто тикни так :3 💕"

];



function moveButton(){


const maxX=window.innerWidth-120;

const maxY=window.innerHeight-80;



const x=Math.random()*maxX;

const y=Math.random()*maxY;



noBtn.style.position="fixed";

noBtn.style.left=x+"px";

noBtn.style.top=y+"px";



yesScale+=0.08;


yesBtn.style.transform=
`scale(${yesScale})`;



noBtn.innerText=
texts[Math.floor(Math.random()*texts.length)];



}



noBtn.addEventListener(
"mouseover",
moveButton
);


noBtn.addEventListener(
"touchstart",
moveButton
);


noBtn.addEventListener(
"click",
moveButton
);




yesBtn.addEventListener(
"click",
()=>{


launchConfetti();



setTimeout(()=>{


document.body.style.opacity="0";



setTimeout(()=>{


window.location="date.html";


},500);



},1000);



});





createHearts();



function createHearts(){


const container=document.querySelector(".hearts");



setInterval(()=>{


const heart=document.createElement("div");


heart.className="heart";


heart.innerHTML="❤";


heart.style.left=
Math.random()*100+"%";


heart.style.fontSize=
(15+Math.random()*30)+"px";



heart.style.animationDuration=
(5+Math.random()*5)+"s";



container.appendChild(heart);



setTimeout(()=>{


heart.remove();


},10000);



},300);


}