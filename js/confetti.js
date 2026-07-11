const canvas = document.getElementById("confetti");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

window.addEventListener("resize", () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});

let confetti = [];

function launchConfetti() {

    confetti = [];

    for (let i = 0; i < 250; i++) {

        confetti.push({

            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height - canvas.height,

            r: Math.random() * 8 + 4,

            dx: Math.random() * 6 - 3,

            dy: Math.random() * 5 + 3,

            color: `hsl(${Math.random()*360},100%,60%)`,

            rotate: Math.random() * 360

        });

    }

    animateConfetti();

}

function animateConfetti(){

    ctx.clearRect(0,0,canvas.width,canvas.height);

    confetti.forEach((c)=>{

        ctx.save();

        ctx.translate(c.x,c.y);

        ctx.rotate(c.rotate);

        ctx.fillStyle=c.color;

        ctx.fillRect(-c.r/2,-c.r/2,c.r,c.r);

        ctx.restore();

        c.x+=c.dx;
        c.y+=c.dy;
        c.rotate+=0.1;

    });

    confetti=confetti.filter(c=>c.y<canvas.height+30);

    if(confetti.length>0){

        requestAnimationFrame(animateConfetti);

    }

}