// HEARTS

const hearts = document.querySelector(".hearts");

for(let i=0;i<20;i++){

const heart=document.createElement("span");

heart.innerHTML="❤️";

heart.style.left=Math.random()*100+"vw";

heart.style.fontSize=(15+Math.random()*20)+"px";

heart.style.animationDuration=(5+Math.random()*5)+"s";

heart.style.animationDelay=Math.random()*5+"s";

hearts.appendChild(heart);

}



// PETALS

const petals=document.querySelector(".petals");

for(let i=0;i<20;i++){

const petal=document.createElement("span");

petal.innerHTML="🌸";

petal.style.left=Math.random()*100+"vw";

petal.style.fontSize=(15+Math.random()*15)+"px";

petal.style.animationDuration=(8+Math.random()*5)+"s";

petal.style.animationDelay=Math.random()*5+"s";

petals.appendChild(petal);

}



// SECTIONS

const screens=document.querySelectorAll(".screen");

function showScreen(id){

screens.forEach(screen=>{

screen.classList.remove("active");

});

document.getElementById(id).classList.add("active");

}



// BUTTONS

document.getElementById("openBtn").onclick=()=>{

showScreen("hero");

};

document.getElementById("nextBtn").onclick=()=>{

showScreen("letter");

typeLetter();

};

document.getElementById("loveBtn").onclick=()=>{

showScreen("love");

};

document.getElementById("promiseBtn").onclick=()=>{

showScreen("promise");

};

document.getElementById("finalBtn").onclick=()=>{

showScreen("final");

};



// TYPEWRITER

const message=`Happy Birthday ❤️

I hope today brings you happiness, peace, and lots of smiles.

Thank you for every memory we've shared together.

You are truly special to me, and I hope this year brings you everything your heart wishes for.

Happy Birthday once again. ❤️`;

let started=false;

function typeLetter(){

if(started) return;

started=true;

const text=document.getElementById("typeText");

let i=0;

function type(){

if(i<message.length){

text.innerHTML+=message.charAt(i);

i++;

setTimeout(type,35);

}

}

type();

}
