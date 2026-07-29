console.log("Script loaded successfully");
// FLOATING HEARTS

const hearts = document.querySelector(".hearts");

for(let i = 0; i < 25; i++){

let heart = document.createElement("span");

heart.innerHTML = "❤";

heart.style.left = Math.random()*100 + "%";

heart.style.fontSize =
(15 + Math.random()*25) + "px";

heart.style.animationDuration =
(5 + Math.random()*5) + "s";

heart.style.animationDelay =
Math.random()*5 + "s";


hearts.appendChild(heart);

}



// FALLING PETALS


const petals = document.querySelector(".petals");


for(let i = 0; i < 25; i++){

let petal = document.createElement("span");

petal.innerHTML = "🌸";

petal.style.left = Math.random()*100 + "%";

petal.style.fontSize =
(15 + Math.random()*20) + "px";

petal.style.animationDuration =
(7 + Math.random()*6) + "s";

petal.style.animationDelay =
Math.random()*5 + "s";


petals.appendChild(petal);

}





// SECTIONS


const intro = document.getElementById("intro");
const hero = document.getElementById("hero");
const letter = document.getElementById("letter");
const love = document.getElementById("love");
const promises = document.getElementById("promises");
const final = document.getElementById("final");





// HERO


function showHero(){

intro.style.display="none";

hero.style.display="flex";

}





// LETTER


function showLetter(){

hero.style.display="none";

letter.style.display="flex";

startTyping();

}





// TYPEWRITER


const message = 
`Happy Birthday ❤️

I hope today reminds you how special you are.

Thank you for all the memories, the smiles, and the moments we have shared.

I truly appreciate having you in my life.

I hope this year brings you happiness, peace, and everything you wish for. ❤️`;



function startTyping(){

let text = document.getElementById("letterText");

let button = document.getElementById("letterButton");

let i = 0;


function type(){

if(i < message.length){

text.innerHTML += message.charAt(i);

i++;

setTimeout(type,45);

}

else{

button.classList.remove("hidden");

}

}


type();

}






// LOVE SECTION


function showLove(){

letter.style.display="none";

love.style.display="flex";

}







// PROMISES


function showPromises(){

love.style.display="none";

promises.style.display="flex";

}







// FINAL


const finalMessage =

`Thank you...

For every smile.

For every memory.

For every moment.

I hope we keep creating beautiful memories together.

Happy Birthday ❤️`;



function showFinal(){

promises.style.display="none";

final.style.display="flex";


let text = document.getElementById("finalText");

let question = document.getElementById("question");

let answer = document.getElementById("answer");


let i=0;


function typeFinal(){

if(i < finalMessage.length){

text.innerHTML += finalMessage.charAt(i);

i++;

setTimeout(typeFinal,60);

}

else{

question.classList.remove("hidden");

answer.classList.remove("hidden");

}

}


typeFinal();

}
