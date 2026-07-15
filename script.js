/* =========================================================
   APPLE x TERMINAL PORTFOLIO
   INTERACTION ENGINE
========================================================= */



/* =========================================================
   STAGGERED BENTO LOAD ANIMATION
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
   TYPEWRITER ENGINE
========================================================= */


const phrases = [

    "synthesizable hardware...",

    "32-bit pipelined RISC-V cores...",

    "optimized RTL architectures..."

];


const typing = document.getElementById("typing");


let phraseIndex = 0;

let characterIndex = 0;

let deleting = false;



function typeWriter(){


    if(!typing) return;



    const current =
    phrases[phraseIndex];



    if(!deleting){


        typing.textContent =
        current.substring(
            0,
            characterIndex++
        );



        if(characterIndex > current.length){


            deleting = true;


            setTimeout(
                typeWriter,
                1500
            );


            return;


        }



    }
    else {


        typing.textContent =
        current.substring(
            0,
            characterIndex--
        );



        if(characterIndex < 0){


            deleting = false;


            phraseIndex =
            (phraseIndex + 1)
            %
            phrases.length;



            characterIndex = 0;


        }



    }



    setTimeout(

        typeWriter,

        deleting ? 45 : 90

    );



}



typeWriter();








/* =========================================================
   MOUSE FOLLOWING CARD GLOW
========================================================= */


const glowCards =
document.querySelectorAll(".card");



glowCards.forEach(card => {



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
        () => {


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
   EXPERIENCE DATABASE
========================================================= */


const experiences = {



    "2026": `

    <p>

    Currently focused on computer architecture,
    RTL design, and developing processor systems.

    Working on:

    <br><br>

    • RISC-V CPU pipeline optimization
    <br>
    • Hardware simulation workflows
    <br>
    • Digital system design

    </p>

    `,





    "2025": `

    <p>

    Engineering development phase.

    <br><br>

    • Expanded programming knowledge
    <br>
    • Built technical projects
    <br>
    • Studied computer architecture fundamentals

    </p>

    `,





    "2024": `

    <p>

    Foundation year focused on:

    <br><br>

    • Mathematics
    <br>
    • Physics
    <br>
    • Programming fundamentals
    <br>
    • Engineering problem solving

    </p>

    `


};







function showExperience(year){


    const display =
    document.getElementById(
        "experience-display"
    );



    if(!display) return;



    display.innerHTML =
    experiences[year];



}







/* =========================================================
   TERMINAL DOT MICRO INTERACTION
========================================================= */


const dots =
document.querySelectorAll(".dot");



dots.forEach(dot => {


    dot.addEventListener(
        "mouseenter",
        ()=>{


            dot.style.transform =
            "scale(1.3) rotate(15deg)";


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







/* =========================================================
   TERMINAL STYLE LINK COMMAND EFFECT
========================================================= */


const terminalLinks =
document.querySelectorAll(
    ".socials-card a"
);



terminalLinks.forEach(link => {



    const command =
    link.querySelector("code");



    if(!command) return;



    link.addEventListener(
        "mouseenter",
        ()=>{


            command.style.opacity="1";


        }

    );



    link.addEventListener(
        "mouseleave",
        ()=>{


            command.style.opacity="0";


        }

    );



});







/* =========================================================
   BUTTON TERMINAL PREFIX EFFECT
========================================================= */


const buttons =
document.querySelectorAll(
    ".button"
);



buttons.forEach(button => {



    const original =
    button.textContent;



    button.addEventListener(
        "mouseenter",
        ()=>{


            button.textContent =
            "> "
            +
            original;



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
   ACCESSIBILITY
========================================================= */


const reducedMotion =
window.matchMedia(
"(prefers-reduced-motion: reduce)"
);



if(reducedMotion.matches){


    document
    .querySelectorAll("*")
    .forEach(element=>{


        element.style.transition =
        "none";


        element.style.animation =
        "none";


    });



}
