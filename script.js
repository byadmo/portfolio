/* =========================================================
   ADAM MORGAN PORTFOLIO
   INTERACTION ENGINE
========================================================= */



/* =========================================================
   BENTO LOAD ANIMATION
========================================================= */


const cards = document.querySelectorAll(".reveal");


window.addEventListener("load", () => {


    cards.forEach((card, index) => {


        setTimeout(() => {


            card.classList.add("active");


        }, index * 80);


    });


});







/* =========================================================
   TYPEWRITER SYSTEM
========================================================= */


const typingElement =
document.getElementById("typing");


const cursor =
document.querySelector(".cursor");



const phrases = [

    "Computer Architecture",

    "RTL Design",

    "FPGA Development",

    "Digital Systems"

];



let phraseIndex = 0;

let letterIndex = 0;

let deleting = false;




function typeWriter(){


    if(!typingElement)
        return;



    const current =
    phrases[phraseIndex];



    if(!deleting){


        typingElement.textContent =
        current.substring(
            0,
            letterIndex
        );



        letterIndex++;



        if(letterIndex >
        current.length){


            deleting = true;


            setTimeout(
                typeWriter,
                1200
            );


            return;

        }



    } else {


        typingElement.textContent =
        current.substring(
            0,
            letterIndex
        );



        letterIndex--;



        if(letterIndex < 0){


            deleting=false;


            phraseIndex =
            (phraseIndex + 1)
            %
            phrases.length;


            letterIndex=0;


        }


    }



    setTimeout(

        typeWriter,

        deleting ? 45 : 90

    );


}



typeWriter();







/* =========================================================
   MOUSE FOLLOWING CARD LIGHT
========================================================= */


const glowCards =
document.querySelectorAll(".card");



glowCards.forEach(card => {


    card.addEventListener(
        "mousemove",
        event => {



        const box =
        card.getBoundingClientRect();



        const x =
        event.clientX -
        box.left;



        const y =
        event.clientY -
        box.top;



        card.style.setProperty(
            "--x",
            `${x}px`
        );


        card.style.setProperty(
            "--y",
            `${y}px`
        );


    });





    card.addEventListener(
        "mouseleave",
        ()=>{


        card.style.setProperty(
            "--x",
            "50%"
        );


        card.style.setProperty(
            "--y",
            "50%"
        );


    });


});








/* =========================================================
   ENGINEERING TIMELINE
========================================================= */


const timeline =
document.getElementById(
"timeline-display"
);



const yearButtons =
document.querySelectorAll(
".year-buttons button"
);



const timelineInfo = {


    "2026":`

    <h3>
    Processor Architecture
    </h3>

    <p>
    Developing processor design skills through
    RTL architecture, SystemVerilog,
    pipeline design, and hardware simulation.
    </p>

    `,



    "2025":`

    <h3>
    Digital Systems Foundation
    </h3>

    <p>
    Built engineering fundamentals through
    circuits, programming, mathematics,
    and digital logic design.
    </p>

    `,



    "2024":`

    <h3>
    Engineering Foundations
    </h3>

    <p>
    Developed programming and technical
    foundations in preparation for
    electrical engineering studies.
    </p>

    `


};





yearButtons.forEach(button => {


    button.addEventListener(
        "mouseenter",
        ()=>{


        const year =
        button.dataset.year;



        timeline.innerHTML =
        timelineInfo[year];


    });


});







/* =========================================================
   PIPELINE ACTIVITY SIMULATION
========================================================= */


const stages =
document.querySelectorAll(
".pipeline div"
);



let activeStage = 0;



function runPipeline(){


    if(!stages.length)
        return;



    stages.forEach(stage=>{


        stage.style.color="";

        stage.style.borderColor="";


    });



    stages[activeStage].style.color =
    "#00ff66";


    stages[activeStage].style.borderColor =
    "#00ff66";



    activeStage++;



    if(activeStage >= stages.length){

        activeStage=0;

    }


}



setInterval(
    runPipeline,
    900
);








/* =========================================================
   TERMINAL BUTTON MICRO EFFECT
========================================================= */


const buttons =
document.querySelectorAll(
".button"
);



buttons.forEach(button=>{


    button.addEventListener(
        "mouseenter",
        ()=>{


        button.dataset.text =
        button.textContent;



        if(!button.textContent.startsWith(">")){


            button.textContent =
            "> " +
            button.textContent;


        }


    });




    button.addEventListener(
        "mouseleave",
        ()=>{


        button.textContent =
        button.dataset.text;


    });



});








/* =========================================================
   ACCESSIBILITY
========================================================= */


const reduceMotion =
window.matchMedia(
"(prefers-reduced-motion: reduce)"
);



if(reduceMotion.matches){


    document
    .querySelectorAll("*")
    .forEach(element=>{


        element.style.transition =
        "none";


    });


}
