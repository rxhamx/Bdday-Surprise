// Floating Hearts

const hearts = document.querySelector(".hearts");

for (let i = 0; i < 20; i++) {

const heart = document.createElement("span");

heart.innerHTML = "❤";

heart.style.left = Math.random()*100+"vw";

heart.style.animationDuration = (5+Math.random()*5)+"s";

heart.style.fontSize = (15+Math.random()*20)+"px";

heart.style.animationDelay = Math.random()*5+"s";

hearts.appendChild(heart);

}

// Sakura Petals

const petals = document.querySelector(".petals");

for (let i = 0; i < 25; i++) {

const petal = document.createElement("span");

petal.innerHTML = "🌸";

petal.style.left = Math.random()*100+"vw";

petal.style.animationDuration = (8+Math.random()*6)+"s";

petal.style.animationDelay = Math.random()*5+"s";

petal.style.fontSize = (18+Math.random()*15)+"px";

petals.appendChild(petal);

}
