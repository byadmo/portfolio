/* =====================================================
   ADAM MORGAN PORTFOLIO
   OPTIMIZED INTERACTION ENGINE
   FPGA SIGNAL SYSTEM + MOBILE OPTIMIZATION
===================================================== */


/* =====================================================
   GLOBAL ELEMENTS
===================================================== */


const cards =
document.querySelectorAll(".card");


const revealCards =
document.querySelectorAll(".reveal");


const hero =
document.querySelector(".hero");


const typingElement =
document.getElementById("typing");


const timeline =
document.getElementById("timeline-card");


const projectsButton =
document.getElementById("projects-button");


const yearButtons =
document.querySelectorAll(".year-buttons button");


const projectGrid =
document.querySelector(".project-grid");





/* =====================================================
   BOOT SCREEN
===================================================== */


window.addEventListener(
"load",
()=>{


const boot =
document.getElementById(
"boot-screen"
);



if(boot){


setTimeout(()=>{


boot.classList.add(
"hide"
);



document.body.classList.add(
"loaded"
);



},2200);



}



}
);








/* =====================================================
   CARD REVEAL SYSTEM
===================================================== */


window.addEventListener(
"load",
()=>{


revealCards.forEach(
(card,index)=>{


setTimeout(()=>{


card.classList.add(
"active"
);



},
index * 120
);



}
);



}
);








/* =====================================================
   TYPEWRITER SYSTEM
===================================================== */


const typingWords = [


"32-bit pipelined RISC-V cores...",


"synthesizable RTL architectures...",


"FPGA hardware systems...",


"processor microarchitecture...",


"high-performance digital logic..."



];




let wordIndex = 0;

let charIndex = 0;

let deleting = false;







function typeWriter(){



if(!typingElement)
return;





const word =
typingWords[wordIndex];





if(!deleting){



charIndex++;




typingElement.textContent =
word.substring(
0,
charIndex
);





if(charIndex >= word.length){


deleting = true;


setTimeout(
typeWriter,
1600
);


return;


}



}

else{



charIndex--;





typingElement.textContent =
word.substring(
0,
charIndex
);





if(charIndex <= 0){



deleting = false;



wordIndex =
(wordIndex + 1)
%
typingWords.length;



}



}





setTimeout(

typeWriter,

deleting ? 40 : 80

);



}



typeWriter();









/* =====================================================
   CURSOR GLOW SYSTEM
===================================================== */


if(
window.matchMedia(
"(pointer:fine)"
).matches
){



cards.forEach(
card=>{



let mouseX = 0;

let mouseY = 0;

let currentX = 0;

let currentY = 0;







function animateGlow(){



currentX +=
(mouseX-currentX)*0.15;



currentY +=
(mouseY-currentY)*0.15;





card.style.setProperty(
"--mouse-x",
`${currentX}px`
);



card.style.setProperty(
"--mouse-y",
`${currentY}px`
);





requestAnimationFrame(
animateGlow
);



}





animateGlow();







card.addEventListener(
"mousemove",
(e)=>{


const rect =
card.getBoundingClientRect();



mouseX =
e.clientX -
rect.left;



mouseY =
e.clientY -
rect.top;



}
);





}
);




}








/* =====================================================
   HERO PARALLAX
===================================================== */


if(hero &&
window.matchMedia(
"(pointer:fine)"
).matches
){



hero.addEventListener(
"mousemove",
(e)=>{


const rect =
hero.getBoundingClientRect();




const x =
(
e.clientX -
rect.left
)
/
rect.width
-
0.5;





const y =
(
e.clientY -
rect.top
)
/
rect.height
-
0.5;





hero.style.transform = `

perspective(1200px)

rotateY(${x*3}deg)

rotateX(${-y*3}deg)

translateY(-5px)

`;



}
);





hero.addEventListener(
"mouseleave",
()=>{


hero.style.transform="";


}
);



}
/* =====================================================
   TERMINAL DOT INTERACTION
===================================================== */


document
.querySelectorAll(".terminal-dots span")
.forEach(dot=>{


dot.addEventListener(
"mouseenter",
()=>{


dot.style.transform =
"scale(1.35) rotate(15deg)";


}
);



dot.addEventListener(
"mouseleave",
()=>{


dot.style.transform =
"scale(1) rotate(0deg)";


}
);



});









/* =====================================================
   PROJECT DATABASE
===================================================== */


const projects = {


2026:[


{

title:
"32-Bit Pipelined RISC-V CPU Core",

text:
"Designed a custom SystemVerilog processor architecture with a 5-stage pipeline, hazard detection, forwarding logic, and verification."

},



{

title:
"RTL Verification Environment",

text:
"Created simulation workflows using ModelSim, GTKWave, and Icarus Verilog for waveform analysis and debugging."

},



{

title:
"Computer Architecture Research",

text:
"Exploring instruction pipelines, datapaths, control units, memory systems, and processor optimization."

}


],







2025:[


{

title:
"Digital Systems Development",

text:
"Developed foundations in digital logic, programming, electronics, and hardware design."

},



{

title:
"Engineering Applications",

text:
"Applied mathematics, physics, and programming toward engineering problems."

},



{

title:
"Hardware Exploration",

text:
"Started exploring FPGA systems, embedded hardware, and processor design."

}


],







2024:[


{

title:
"Programming Foundation",

text:
"Built programming fundamentals and problem-solving skills through technical projects."

},



{

title:
"Engineering Curiosity",

text:
"Explored computer systems, electronics, and modern technology."

}


]


};









/* =====================================================
   PROJECT LOADER
===================================================== */


function loadProjects(year){



if(!projectGrid)
return;




projectGrid.innerHTML="";





projects[year].forEach(
(project,index)=>{



const item =
document.createElement(
"div"
);





item.className =
"project-item";





item.style.animationDelay =
`${index*0.12}s`;






item.innerHTML = `


<h4>

${project.title}

</h4>



<p>

${project.text}

</p>


`;





projectGrid.appendChild(
item
);



}
);



}









/* =====================================================
   TIMELINE SYSTEM
===================================================== */


let timelineHovered = false;

let collapseTimer;






function resetTimeline(){



clearTimeout(
collapseTimer
);





collapseTimer =
setTimeout(
()=>{



if(
timeline &&
!timelineHovered
){



timeline.classList.remove(
"expanded"
);



yearButtons.forEach(
button=>{


button.classList.remove(
"active"
);


}
);





if(projectGrid){


projectGrid.innerHTML = `

<p class="timeline-placeholder">

Hover a year to explore projects.

</p>

`;



}



}



},
4500
);



}









function activateYear(button){



const year =
button.dataset.year;





yearButtons.forEach(
btn=>{


btn.classList.remove(
"active"
);



}
);





button.classList.add(
"active"
);






if(timeline){


timeline.classList.add(
"expanded"
);


}





loadProjects(year);



resetTimeline();



}









yearButtons.forEach(
button=>{



button.addEventListener(
"mouseenter",
()=>{


activateYear(button);


}
);





button.addEventListener(
"click",
()=>{


activateYear(button);


}
);





}
);









if(timeline){



timeline.addEventListener(
"mouseenter",
()=>{


timelineHovered = true;


clearTimeout(
collapseTimer
);


}
);





timeline.addEventListener(
"mouseleave",
()=>{


timelineHovered = false;



resetTimeline();



}
);



}








/* =====================================================
   VIEW PROJECT BUTTON
===================================================== */


function timelineHighlight(){



if(!timeline)
return;





timeline.classList.remove(
"project-active"
);





void timeline.offsetWidth;





timeline.classList.add(
"project-active"
);






setTimeout(
()=>{


timeline.classList.remove(
"project-active"
);


},
5000
);



}







if(
projectsButton &&
timeline
){



projectsButton.addEventListener(
"click",
(e)=>{


e.preventDefault();





timeline.scrollIntoView({

behavior:
"smooth",

block:
"center"

});





setTimeout(
()=>{


timelineHighlight();


timeline.classList.add(
"expanded"
);



},
700
);



}
);



}

/* =====================================================
   PIPELINE ANIMATION
===================================================== */


const pipelineStages =
document.querySelectorAll(
".pipeline div"
);



let pipelineIndex = 0;




if(pipelineStages.length){



setInterval(
()=>{



pipelineStages.forEach(
stage=>{


stage.style.boxShadow="";

stage.style.color="";


}
);





pipelineStages[pipelineIndex].style.boxShadow =

"0 0 25px rgba(0,234,255,.5)";





pipelineStages[pipelineIndex].style.color =

"#00ff88";





pipelineIndex++;





if(
pipelineIndex >= pipelineStages.length
){

pipelineIndex = 0;

}



},
1200
);



}









/* =====================================================
   SCROLL PROGRESS BAR
===================================================== */


const scrollBar =
document.createElement(
"div"
);



scrollBar.className =
"scroll-progress";



document.body.appendChild(
scrollBar
);





window.addEventListener(
"scroll",
()=>{



const height =
document.documentElement.scrollHeight -
window.innerHeight;




const progress =
(
window.scrollY /
height
)
*
100;





scrollBar.style.width =
`${progress}%`;



}
);









/* =====================================================
   MULTI DIRECTION FPGA SIGNAL SYSTEM
===================================================== */


const cpuField =
document.getElementById(
"cpu-field"
);





const signalDirections = [


0,

45,

90,

135,

180,

225,

270,

315


];







function createSignal(
initial=false
){



if(!cpuField)
return;






const pulse =
document.createElement(
"div"
);



pulse.className =
"cpu-pulse";







const angle =
signalDirections[
Math.floor(
Math.random()
*
signalDirections.length
)
];







const length =
Math.random()
*
300
+
150;







const duration =
Math.random()
*
6
+
9;







const distance =
Math.random()
*
600
+
700;







const startX =
Math.random()
*
120
-
20;





const startY =
Math.random()
*
120
-
20;







pulse.style.width =
`${length}px`;



pulse.style.left =
`${startX}%`;



pulse.style.top =
`${startY}%`;






pulse.style.setProperty(
"--angle",
`${angle}deg`
);





pulse.style.setProperty(
"--distance",
`${distance}px`
);






pulse.style.animationDuration =
`${duration}s`;







pulse.style.opacity =
Math.random()
*
0.35
+
0.25;







if(initial){


pulse.style.animationDelay =
`${Math.random()*1.5}s`;


}








cpuField.appendChild(
pulse
);







setTimeout(
()=>{


pulse.remove();



},
(duration+2)
*
1000
);



}









function startSignalSystem(){





// instant startup signals

for(
let i=0;
i<22;
i++
){



createSignal(true);



}







// continuous generation


setInterval(
()=>{


createSignal();



},
1800
);



}






startSignalSystem();









/* =====================================================
   RANDOM SIGNAL BURSTS
===================================================== */



function randomBurst(){





const amount =
Math.floor(
Math.random()*5
)
+
2;






for(
let i=0;
i<amount;
i++
){



setTimeout(
()=>{


createSignal();



},
i*200
);



}








setTimeout(
randomBurst,

Math.random()
*
9000
+
9000

);



}






randomBurst();









/* =====================================================
   MOBILE TOUCH OPTIMIZATION
===================================================== */


if(
window.innerWidth < 700
){



cards.forEach(
card=>{


card.addEventListener(
"touchstart",
()=>{


card.classList.add(
"touch-active"
);


}
);





card.addEventListener(
"touchend",
()=>{


setTimeout(
()=>{


card.classList.remove(
"touch-active"
);


},
300
);



}
);



}
);



}









/* =====================================================
   KEYBOARD SHORTCUTS
===================================================== */


document.addEventListener(
"keydown",
(e)=>{



if(
e.key==="1" &&
yearButtons[0]
){


activateYear(
yearButtons[0]
);


}



if(
e.key==="2" &&
yearButtons[1]
){


activateYear(
yearButtons[1]
);


}




if(
e.key==="3" &&
yearButtons[2]
){


activateYear(
yearButtons[2]
);


}



}
);








/* =====================================================
   SYSTEM ONLINE MESSAGE
===================================================== */


console.log(`

================================

ADAM MORGAN PORTFOLIO

SYSTEM ONLINE

ARCHITECTURE:
RISC-V
RTL DESIGN
FPGA SYSTEMS

================================

`);
