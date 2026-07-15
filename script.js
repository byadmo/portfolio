/* =======================================================
   STAGGERED PAGE LOAD ANIMATION
======================================================= */

const revealCards = document.querySelectorAll(".reveal");

window.addEventListener("load", () => {

    revealCards.forEach((card, index) => {

        setTimeout(() => {

            card.classList.add("active");

        }, index * 140);

    });

});



/* =======================================================
   TYPEWRITER EFFECT
======================================================= */

const words = [
    "32-bit pipelined RISC-V cores...",
    "synthesizable hardware...",
    "RTL architecture..."
];


const typingElement = document.getElementById("typing");
const cursor = document.querySelector(".cursor");


let wordIndex = 0;
let charIndex = 0;
let deleting = false;



function typeEffect() {

    const currentWord = words[wordIndex];


    cursor.classList.add("typing");


    if (!deleting) {

        typingElement.textContent =
            currentWord.substring(0, charIndex++);


        if (charIndex > currentWord.length) {

            deleting = true;

            cursor.classList.remove("typing");

            setTimeout(typeEffect, 1500);

            return;

        }


    } else {


        typingElement.textContent =
            currentWord.substring(0, charIndex--);


        if (charIndex < 0) {

            deleting = false;

            wordIndex =
                (wordIndex + 1) % words.length;

            charIndex = 0;

        }

    }


    setTimeout(
        typeEffect,
        deleting ? 50 : 100
    );

}


typeEffect();





/* =======================================================
   MOUSE FOLLOWING CARD GLOW
======================================================= */


const glowCards = document.querySelectorAll(".card");


glowCards.forEach(card => {


    card.addEventListener(
        "mousemove",
        (event) => {


            const rect =
                card.getBoundingClientRect();


            const x =
                event.clientX - rect.left;


            const y =
                event.clientY - rect.top;


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





/* =======================================================
   TERMINAL DOT INTERACTIONS
======================================================= */


const dots = document.querySelectorAll(".dot");


dots.forEach(dot => {


    dot.addEventListener(
        "mouseenter",
        () => {

            dot.style.transform =
                "scale(1.25) rotate(15deg)";

        }
    );



    dot.addEventListener(
        "mouseleave",
        () => {

            dot.style.transform =
                "scale(1) rotate(0deg)";

        }
    );


});





/* =======================================================
   TERMINAL BUTTON EFFECT
======================================================= */


const buttons = document.querySelectorAll(".button");


buttons.forEach(button => {


    button.addEventListener(
        "mouseenter",
        () => {


            button.dataset.original =
                button.textContent;


            button.textContent =
                "> " + button.textContent;


        }
    );



    button.addEventListener(
        "mouseleave",
        () => {


            button.textContent =
                button.dataset.original;


        }
    );


});
