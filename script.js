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
const intro = document.querySelector(".intro");
const hero = document.getElementById("hero");

document.getElementById("openBtn").onclick = () => {
const continueBtn = document.getElementById("continueBtn");
const letter = document.getElementById("letter");
const typingText = document.getElementById("typingText");
const letterBtn = document.getElementById("letterBtn");

const message = 
`happy birthday my love ❤️

today is a special day because it is the day someone truly amazing came into this world.

i hope this year brings you happiness, peace, and everything your heart wishes for.

thank you for every smile, every memory, and every moment we have shared together.

i hope you always remember how special you are. ❤️`;

continueBtn.onclick = () => {

hero.style.display = "none";

letter.style.display = "flex";

typeWriter();

};


function typeWriter(){

let i = 0;

function typing(){

if(i < message.length){

typingText.innerHTML += message.charAt(i);

i++;

setTimeout(typing,40);

}

else{

letterBtn.style.display="inline-block";

}

}

typing();

}
intro.style.display = "none";

hero.style.display = "flex";

window.scrollTo({
top:0,
behavior:"smooth"
});

};
const loveSection = document.getElementById("loveSection");
const letterBtn = document.getElementById("letterBtn");
const promiseBtn = document.getElementById("promiseBtn");


letterBtn.onclick = () => {

letter.style.display="none";

loveSection.style.display="flex";

};
const promiseSection = document.getElementById("promiseSection");
const finalBtn = document.getElementById("finalBtn");


promiseBtn.onclick = () => {

loveSection.style.display="none";

promiseSection.style.display="flex";

};


finalBtn.onclick = () => {

promiseSection.style.display="none";

alert("The final surprise is coming ❤️");

};
const finalSection = document.getElementById("finalSection");
const finalText = document.getElementById("finalText");
const question = document.getElementById("question");


const finalMessage = 
`Thank you...

For every smile.

For every laugh.

For every memory.

For being you.

Happy Birthday ❤️`;


finalBtn.onclick = () => {

promiseSection.style.display="none";

finalSection.style.display="flex";

typeFinal();

};


function typeFinal(){

let i = 0;

function write(){

if(i < finalMessage.length){

finalText.innerHTML += finalMessage.charAt(i);

i++;

setTimeout(write,60);

}

else{

question.style.display="block";

}

}

write();

}
