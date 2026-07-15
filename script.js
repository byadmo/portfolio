/* =========================================================
   ADAM MORGAN
   ELECTRICAL ENGINEERING PORTFOLIO
   INTERACTION SYSTEM
========================================================= */



/* =========================================================
   BENTO CARD REVEAL
========================================================= */


const revealCards = document.querySelectorAll(".reveal");


window.addEventListener("load", () => {


    revealCards.forEach((card, index) => {


        setTimeout(() => {


            card.classList.add("active");


        }, index * 80);


    });


});







/* =========================================================
   TYPEWRITER EFFECT
========================================================= */


const words = [

    "synthesizable hardware...",

    "32-bit pipelined RISC-V cores...",

    "optimized RTL architectures..."

];



const typingElement =
document.getElementById("typing");



let wordIndex = 0;

let charIndex = 0;

let deleting = false;



function typeEffect(){


    if(!typingElement)
        return;



    const currentWord =
    words[wordIndex];



    if(!deleting){


        typingElement.textContent =
        currentWord.substring(
            0,
            charIndex++
        );



        if(charIndex > currentWord.length){


            deleting = true;


            setTimeout(
                typeEffect,
                1200
            );


            return;


        }


    } else {



        typingElement.textContent =
        currentWord.substring(
            0,
            charIndex--
        );



        if(charIndex < 0){


            deleting=false;


            wordIndex =
            (wordIndex + 1)
            %
            words.length;



            charIndex=0;


        }


    }



    setTimeout(

        typeEffect,

        deleting ? 45 : 90

    );


}



typeEffect();








/* =========================================================
   CARD LIGHT TRACKING
========================================================= */


const cards =
document.querySelectorAll(".card");



cards.forEach(card => {


    card.addEventListener(
        "mousemove",
        event => {


            const rect =
            card.getBoundingClientRect();



            const x =
            event.clientX -
            rect.left;



            const y =
            event.clientY -
            rect.top;



            card.style.setProperty(
                "--x",
                `${x}px`
            );


            card.style.setProperty(
                "--y",
                `${y}px`
            );


        }
    );




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


        }
    );


});








/* =========================================================
   ENGINEERING TIMELINE
========================================================= */


const timelineButtons =
document.querySelectorAll(
    ".year-buttons button"
);



const timelineDisplay =
document.getElementById(
    "timeline-display"
);



const timelineData = {


    "2026": `

    <h3>
    Computer Architecture
    </h3>

    <p>

    Developing processor architecture,
    RTL design concepts, and
    digital hardware systems.

    </p>

    `,



    "2025": `

    <h3>
    Engineering Foundation
    </h3>

    <p>

    Building skills in programming,
    digital logic, circuit analysis,
    and engineering design.

    </p>

    `,



    "2024": `

    <h3>
    Technical Foundation
    </h3>

    <p>

    Exploring mathematics,
    physics, programming,
    and electronics fundamentals.

    </p>

    `


};




timelineButtons.forEach(button => {



    button.addEventListener(
        "click",
        ()=>{


            timelineButtons.forEach(btn=>{

                btn.classList.remove(
                    "active"
                );

            });



            button.classList.add(
                "active"
            );



            timelineDisplay.innerHTML =
            timelineData[
                button.dataset.year
            ];



        }

    );


});








/* =========================================================
   CPU PIPELINE ANIMATION
========================================================= */


const pipelineStages =
document.querySelectorAll(
    ".pipeline div"
);



let currentStage = 0;



function animatePipeline(){


    pipelineStages.forEach(stage=>{


        stage.style.background =
        "transparent";


    });



    if(
        pipelineStages[currentStage]
    ){


        pipelineStages[currentStage]
        .style.background =
        "rgba(76,201,240,.18)";


    }



    currentStage++;



    if(
        currentStage >= pipelineStages.length
    ){

        currentStage=0;

    }


}



setInterval(
    animatePipeline,
    650
);








/* =========================================================
   TERMINAL LINK HOVER
========================================================= */


const socialLinks =
document.querySelectorAll(
    ".socials-card a"
);



socialLinks.forEach(link=>{


    link.addEventListener(
        "mouseenter",
        ()=>{


            link.style.transform =
            "translateX(10px)";


        }
    );



    link.addEventListener(
        "mouseleave",
        ()=>{


            link.style.transform =
            "translateX(0)";


        }
    );


});








/* =========================================================
   HERO BUTTON TERMINAL STYLE
========================================================= */


const buttons =
document.querySelectorAll(
    ".button"
);



buttons.forEach(button=>{


    const original =
    button.textContent;



    button.addEventListener(
        "mouseenter",
        ()=>{


            button.textContent =
            "> "
            +
            original.trim();


        }
    );



    button.addEventListener(
        "mouseleave",
        ()=>{


            button.textContent =
            original;


        }
    );


});








/* =========================================================
   REDUCED MOTION SUPPORT
========================================================= */


const reduceMotion =
window.matchMedia(
"(prefers-reduced-motion: reduce)"
);



if(reduceMotion.matches){


    document
    .querySelectorAll("*")
    .forEach(element=>{


        element.style.animation =
        "none";


        element.style.transition =
        "none";


    });


}
