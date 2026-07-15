/* =====================================================
   ADAM MORGAN PORTFOLIO
   INTERACTION ENGINE
===================================================== */


/* =====================================================
   STAGGERED CARD REVEAL
===================================================== */


const cards = document.querySelectorAll(".reveal");


window.addEventListener("load", () => {


    cards.forEach((card, index) => {


        setTimeout(() => {


            card.classList.add("active");


        }, index * 120);


    });


});







/* =====================================================
   TYPEWRITER EFFECT
===================================================== */


const typingText = document.getElementById("typing");


const words = [

    "32-bit pipelined RISC-V cores...",

    "synthesizable hardware...",

    "optimized RTL architectures..."

];



let wordIndex = 0;

let charIndex = 0;

let deleting = false;



function typeEffect(){


    if(!typingText) return;



    const current = words[wordIndex];



    if(!deleting){


        typingText.textContent =

        current.substring(
            0,
            charIndex++
        );



        if(charIndex > current.length){


            deleting = true;


            setTimeout(
                typeEffect,
                1400
            );


            return;


        }


    }

    else{


        typingText.textContent =

        current.substring(
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








/* =====================================================
   ENGINEERING TIMELINE
===================================================== */


const timelineData = {


    "2026":

    `
    Processor architecture,
    RTL design,
    SystemVerilog development,
    and digital hardware projects.
    `,


    "2025":

    `
    Engineering foundations,
    programming,
    mathematics,
    physics,
    and electronics development.
    `,


    "2024":

    `
    Building fundamentals in
    programming, problem solving,
    and technical design.
    `


};




const yearButtons = document.querySelectorAll(
    ".year-buttons button"
);



const timelineContent =
document.getElementById(
    "timeline-content"
);



yearButtons.forEach(button => {



    button.addEventListener(
        "mouseenter",
        ()=>{


            const year =
            button.dataset.year;



            timelineContent.textContent =
            timelineData[year];


        }

    );




    button.addEventListener(
        "mouseleave",
        ()=>{


            timelineContent.textContent =
            "Hover a year";


        }

    );



});







/* =====================================================
   TERMINAL DOT MICRO INTERACTION
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








/* =====================================================
   CARD MOUSE LIGHT EFFECT
===================================================== */


const allCards =
document.querySelectorAll(".card");



allCards.forEach(card=>{


    card.addEventListener(
        "mousemove",
        e=>{


            const rect =
            card.getBoundingClientRect();



            const x =
            e.clientX - rect.left;



            const y =
            e.clientY - rect.top;



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



});








/* =====================================================
   BUTTON TERMINAL EFFECT
===================================================== */


const buttons =
document.querySelectorAll(
    ".buttons a"
);



buttons.forEach(button=>{


    const original =
    button.textContent;



    button.addEventListener(
        "mouseenter",
        ()=>{


            button.textContent =
            "> " +
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
