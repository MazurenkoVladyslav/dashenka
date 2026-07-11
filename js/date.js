const container = document.getElementById("timeContainer");
const nextBtn = document.getElementById("nextBtn");

let selectedTime = "";

// ❤️ Сердечка
createHearts();

function createHearts() {

    const hearts = document.querySelector(".hearts");

    setInterval(() => {

        const heart = document.createElement("div");

        heart.className = "heart";
        heart.innerHTML = "❤";

        heart.style.left = Math.random() * 100 + "%";
        heart.style.fontSize = (15 + Math.random() * 25) + "px";
        heart.style.animationDuration = (5 + Math.random() * 4) + "s";

        hearts.appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, 9000);

    }, 350);

}

// ❤️ Генерація часу
for (let hour = 8; hour <= 16; hour++) {

    for (let min = 0; min < 60; min += 30) {

        if (hour === 16 && min === 30) break;

        const btn = document.createElement("div");

        btn.className = "time-btn";

        const h = String(hour).padStart(2, "0");
        const m = String(min).padStart(2, "0");

        btn.innerHTML = `${h}:${m}`;

        btn.onclick = () => {

            document
                .querySelectorAll(".time-btn")
                .forEach(el => el.classList.remove("selected"));

            btn.classList.add("selected");

            selectedTime = btn.innerHTML;

        }

        container.appendChild(btn);

    }

}

nextBtn.onclick = () => {

    const calendar = document.getElementById("datePicker").value;

    const custom = document.getElementById("customDate").value;

    const date = custom || calendar;

    if (!date) {

        alert("❤️ Обери або введи дату.");

        return;

    }

    if (!selectedTime) {

        alert("🕒 Обери час.");

        return;

    }

    localStorage.setItem("date", date);

    localStorage.setItem("time", selectedTime);

    document.body.style.opacity = "0";

    setTimeout(() => {

        window.location = "food.html";

    }, 500);

}