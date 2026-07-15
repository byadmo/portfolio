/* =====================================================
   ADAM MORGAN PORTFOLIO
   RESTORED INTERACTION ENGINE
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


            deleting = true;


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
            (wordIndex + 1)
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
   MOUSE CURSOR GLOW OVERLAY
===================================================== */


const cards =
document.querySelectorAll(".card");



cards.forEach(card=>{


    card.addEventListener(
        "mousemove",
        event=>{


            const rect =
            card.getBoundingClientRect();



            const x =
            event.clientX - rect.left;



            const y =
            event.clientY - rect.top;



            card.style.setProperty(
                "--mouse-x",
                `${x}px`
            );



            card.style.setProperty(
                "--mouse-y",
                `${y}px`
            );


        }

    );



});









/* =====================================================
   ENGINEERING JOURNEY
===================================================== */


const timelineData = {


"2026":`

<h3>
2026 — Processor Architecture
</h3>

<p>

• 32-bit pipelined RISC-V CPU Core

<br><br>

• SystemVerilog RTL design

<br>

• Pipeline control and hazard handling

<br>

• Hardware verification workflow

</p>

`,




"2025":`

<h3>
2025 — Engineering Development
</h3>


<p>

• Digital systems foundations

<br>

• Programming development

<br>

• Mathematics and physics application

<br>

• Electronics exploration

</p>

`,





"2024":`

<h3>
2024 — Technical Foundation
</h3>


<p>

• Programming fundamentals

<br>

• Problem solving

<br>

• Engineering concepts

<br>

• Building technical curiosity

</p>

`


};





const yearButtons =
document.querySelectorAll(
".year-buttons button"
);



const timelineContent =
document.getElementById(
"timeline-content"
);





yearButtons.forEach(button=>{


    button.addEventListener(
        "click",
        ()=>{


            const year =
            button.dataset.year;



            if(timelineContent){


                timelineContent.innerHTML =
                timelineData[year];


            }



        }

    );



});









/* =====================================================
   VIEW PROJECTS BUTTON
===================================================== */


const projectsButton =
document.getElementById(
"projects-button"
);



const timelineCard =
document.getElementById(
"timeline-card"
);



if(projectsButton && timelineCard){


projectsButton.addEventListener(
"click",
(event)=>{


event.preventDefault();



timelineCard.scrollIntoView({

behavior:"smooth",

block:"center"

});



timelineCard.classList.add(
"project-active"
);





setTimeout(()=>{


timelineCard.classList.remove(
"project-active"
);


},5000);



});


}









/* =====================================================
   TERMINAL DOT ANIMATION
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
"scale(1.3) rotate(10deg)";


});




dot.addEventListener(
"mouseleave",
()=>{


dot.style.transform =
"scale(1) rotate(0deg)";


});


});
