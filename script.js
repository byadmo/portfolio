/* =====================================================
   ADAM MORGAN PORTFOLIO
   PREMIUM INTERACTION SYSTEM
===================================================== */



/* =====================================================
   CARD REVEAL
===================================================== */


const revealCards =
document.querySelectorAll(".reveal");



window.addEventListener("load",()=>{


    revealCards.forEach((card,index)=>{


        setTimeout(()=>{


            card.classList.add("active");


        }, index * 120);


    });


});









/* =====================================================
   TYPEWRITER
===================================================== */


const typingElement =
document.getElementById("typing");



const typingWords = [

"32-bit pipelined RISC-V cores...",

"synthesizable RTL architectures...",

"FPGA hardware systems..."

];



let wordIndex = 0;

let letterIndex = 0;

let deleting = false;




function typeWriter(){


if(!typingElement)
return;



const word =
typingWords[wordIndex];



if(!deleting){


typingElement.textContent =
word.substring(
0,
letterIndex++
);



if(letterIndex > word.length){


deleting=true;


setTimeout(
typeWriter,
1400
);


return;


}


}

else{


typingElement.textContent =
word.substring(
0,
letterIndex--
);



if(letterIndex < 0){


deleting=false;


wordIndex =
(wordIndex+1)
%
typingWords.length;



letterIndex=0;


}


}




setTimeout(

typeWriter,

deleting ? 45 : 90

);


}



typeWriter();









/* =====================================================
   CURSOR GLOW
===================================================== */


const cards =
document.querySelectorAll(".card");



cards.forEach(card=>{


card.addEventListener(
"mousemove",
(e)=>{


const rect =
card.getBoundingClientRect();



const x =
e.clientX - rect.left;



const y =
e.clientY - rect.top;



card.style.setProperty(
"--mouse-x",
`${x}px`
);



card.style.setProperty(
"--mouse-y",
`${y}px`
);



});


});









/* =====================================================
   ENGINEERING JOURNEY DATA
===================================================== */


const projects = {



"2026":[


{
title:"32-Bit Pipelined RISC-V CPU Core",

text:
"Designed a processor architecture using SystemVerilog RTL with a 5-stage pipeline, hazard detection, forwarding logic, and verification."
},



{
title:"Processor Pipeline Architecture",

text:
"Implemented instruction fetch, decode, execute, memory, and write-back stages while analyzing data flow."
},



{
title:"Verification Environment",

text:
"Used simulation tools including ModelSim and GTKWave to debug RTL behavior and validate hardware design."
}



],






"2025":[


{
title:"Digital Systems Development",

text:
"Built foundations in digital logic, programming, electronics, and hardware design concepts."
},


{
title:"Engineering Applications",

text:
"Applied mathematics, physics, and programming toward engineering problems and technical projects."
}


],







"2024":[


{
title:"Technical Foundation",

text:
"Developed programming fundamentals, problem-solving skills, and engineering curiosity through technical exploration."
}


]


};









/* =====================================================
   TIMELINE EXPANSION
===================================================== */


const timeline =
document.getElementById(
"timeline-card"
);



const timelineContent =
document.querySelector(
".project-grid"
);



const yearButtons =
document.querySelectorAll(
".year-buttons button"
);





function loadProjects(year){


if(!timelineContent)
return;



timelineContent.innerHTML="";



projects[year].forEach(
(item,index)=>{


const project =
document.createElement(
"div"
);



project.className =
"project-item";



project.style.animationDelay =
`${index * .12}s`;



project.innerHTML = `

<h4>
${item.title}
</h4>


<p>
${item.text}
</p>

`;



timelineContent.appendChild(
project
);



});


}








yearButtons.forEach(button=>{


button.addEventListener(
"mouseenter",
()=>{


timeline.classList.add(
"expanded"
);



loadProjects(
button.dataset.year
);



});


});






timeline.addEventListener(
"mouseleave",
()=>{


timeline.classList.remove(
"expanded"
);


});









/* =====================================================
   VIEW PROJECT BUTTON
===================================================== */


const projectsButton =
document.getElementById(
"projects-button"
);





if(projectsButton && timeline){


projectsButton.addEventListener(
"click",
(event)=>{


event.preventDefault();



timeline.scrollIntoView({

behavior:"smooth",

block:"center"

});





setTimeout(()=>{


timeline.classList.add(
"project-active"
);





setTimeout(()=>{


timeline.classList.remove(
"project-active"
);



},5000);



},700);



});


}









/* =====================================================
   TERMINAL DOT EFFECT
===================================================== */


const dots =
document.querySelectorAll(
".terminal-dots span"
);



dots.forEach(dot=>{


dot.addEventListener(
"mouseenter",
()=>{


dot.style.transform =
"scale(1.25) rotate(10deg)";


});




dot.addEventListener(
"mouseleave",
()=>{


dot.style.transform =
"scale(1) rotate(0deg)";


});


});
