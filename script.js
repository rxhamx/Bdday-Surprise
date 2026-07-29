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

setTimeout(function(){

document.getElementById(id).classList.add("active");

},150);

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

const message = `

Happy Birthday, Amal ❤️

I made this little gift because I wanted to remind you how special you are to me.

Thank you for every smile, every laugh, and every memory we've shared together.

You make ordinary days feel brighter, and I'm really grateful to have you in my life.

I hope today is filled with happiness, love, and everything you've been wishing for.

Never forget how amazing you are.

Happy Birthday once again.

❤️
`;

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
// STARS

const stars=document.querySelector(".stars");

for(let i=0;i<60;i++){

const star=document.createElement("div");

star.className="star";

star.style.left=Math.random()*100+"vw";

star.style.top=Math.random()*100+"vh";

star.style.animationDelay=Math.random()*2+"s";

stars.appendChild(star);

}
// CONFETTI

function launchConfetti(){

const colors=[
"#ff4f8b",
"#ffb3d9",
"#ffd166",
"#7bdff2",
"#b8f2e6"
];

for(let i=0;i<120;i++){

const piece=document.createElement("div");

piece.className="confetti";

piece.style.left=Math.random()*100+"vw";

piece.style.background=
colors[Math.floor(Math.random()*colors.length)];

piece.style.animationDuration=
(3+Math.random()*2)+"s";

piece.style.transform=
"rotate("+Math.random()*360+"deg)";

document.body.appendChild(piece);

setTimeout(()=>{

piece.remove();

},5000);

}

}
