/* =========================================================
   ADAM MORGAN PORTFOLIO
   INTERACTION SYSTEM
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
   TYPEWRITER EFFECT
========================================================= */


const typing = document.getElementById("typing");


const words = [

    "32-bit pipelined RISC-V cores...",
    "synthesizable hardware...",
    "optimized RTL architectures..."

];


let word = 0;

let character = 0;

let deleting = false;




function typeEffect(){


    if(!typing) return;



    const current =
    words[word];



    if(!deleting){


        typing.textContent =
        current.substring(
            0,
            character
        );


        character++;



        if(character >
        current.length){


            deleting = true;


            setTimeout(
                typeEffect,
                1200
            );


            return;

        }



    } else {


        typing.textContent =
        current.substring(
            0,
            character
        );


        character--;



        if(character < 0){


            deleting=false;


            word =
            (word+1)
            %
            words.length;


            character=0;


        }


    }



    setTimeout(

        typeEffect,

        deleting ? 40 : 90

    );


}



typeEffect();








/* =========================================================
   CARD MOUSE LIGHT EFFECT
========================================================= */


document
.querySelectorAll(".card")
.forEach(card=>{


    card.addEventListener(
        "mousemove",
        e=>{


        const rect =
        card.getBoundingClientRect();



        card.style.setProperty(
            "--x",
            `${e.clientX - rect.left}px`
        );


        card.style.setProperty(
            "--y",
            `${e.clientY - rect.top}px`
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
"timeline"
);



const yearButtons =
document.querySelectorAll(
".years button"
);



const timelineContent = {


    2026:

    `
    <h3>
    Processor Architecture
    </h3>

    <p>
    Developing skills in CPU architecture,
    SystemVerilog RTL design,
    pipeline systems, and hardware simulation.
    </p>
    `,



    2025:

    `
    <h3>
    Digital Systems Development
    </h3>

    <p>
    Built foundations in circuits,
    programming, mathematics,
    and engineering design.
    </p>
    `,



    2024:

    `
    <h3>
    Engineering Foundations
    </h3>

    <p>
    Studied programming,
    electronics fundamentals,
    physics, and mathematics.
    </p>
    `


};




yearButtons.forEach(button=>{


    button.addEventListener(
        "mouseenter",
        ()=>{


        const year =
        button.dataset.year;



        timeline.innerHTML =
        timelineContent[year];



    });


});
