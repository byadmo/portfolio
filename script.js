/* =========================================================
   SILICON ARCHITECT PORTFOLIO
   INTERACTION ENGINE
========================================================= */



/* =========================================================
   SILICON BOOT SEQUENCE
========================================================= */


const bootLines = [

    "BIOS CHECK ........ PASS",

    "MEMORY ARRAY ...... ONLINE",

    "RTL MODULES ....... LOADED",

    "FPGA INTERFACE .... READY",

    "ADAM_SYSTEM ....... ONLINE"

];



function bootSequence(){


    console.log(
        "%c" +
        bootLines.join("\n"),
        "color:#4cc9f0;font-family:monospace;"
    );


}



bootSequence();







/* =========================================================
   BENTO CARD REVEAL
========================================================= */


const cards =
document.querySelectorAll(".reveal");



window.addEventListener(
    "load",
    ()=>{


        cards.forEach(
            (card,index)=>{


                setTimeout(
                    ()=>{


                        card.classList.add(
                            "active"
                        );


                    },

                    index * 80

                );


            }

        );


    }

);







/* =========================================================
   TYPEWRITER SYSTEM
========================================================= */


const words = [

    "synthesizable hardware...",

    "32-bit pipelined RISC-V cores...",

    "optimized RTL architectures...",

    "FPGA-based digital systems..."

];



const typing =
document.getElementById(
    "typing"
);



let word = 0;

let char = 0;

let deleting = false;



function type(){


    if(!typing)
        return;



    const current =
    words[word];



    if(!deleting){


        typing.textContent =
        current.substring(
            0,
            char++
        );



        if(char > current.length){


            deleting=true;


            setTimeout(
                type,
                1200
            );


            return;

        }


    }

    else{


        typing.textContent =
        current.substring(
            0,
            char--
        );



        if(char < 0){


            deleting=false;


            word =
            (word+1)
            %
            words.length;



            char=0;


        }


    }



    setTimeout(

        type,

        deleting ? 40 : 90

    );


}



type();







/* =========================================================
   CIRCUIT TRACE MOUSE EFFECT
========================================================= */


const cardsGlow =
document.querySelectorAll(".card");



cardsGlow.forEach(card=>{


    card.addEventListener(
        "mousemove",
        event=>{


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
   CPU PIPELINE CLOCK
========================================================= */


const pipelineStages =
document.querySelectorAll(
    ".pipeline div"
);



let pipelineIndex=0;



function clockCycle(){


    pipelineStages.forEach(
        stage=>{


            stage.style.background =
            "transparent";


        }

    );



    if(
        pipelineStages[pipelineIndex]
    ){


        pipelineStages[pipelineIndex]
        .style.background =
        "rgba(76,201,240,.2)";


    }



    pipelineIndex++;



    if(
        pipelineIndex >= pipelineStages.length
    ){

        pipelineIndex=0;

    }



}



setInterval(
    clockCycle,
    700
);








/* =========================================================
   TERMINAL LINK COMMAND EFFECT
========================================================= */


const links =
document.querySelectorAll(
    ".socials-card a"
);



links.forEach(link=>{


    const code =
    link.querySelector(
        "code"
    );



    if(!code)
        return;



    link.addEventListener(
        "mouseenter",
        ()=>{


            code.style.opacity="1";


        }

    );



    link.addEventListener(
        "mouseleave",
        ()=>{


            code.style.opacity="0";


        }

    );



});







/* =========================================================
   BUTTON TERMINAL PROMPT
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
   SCROLL PROGRESS CIRCUIT LINE
========================================================= */


const circuitLine =
document.createElement(
    "div"
);



circuitLine.className =
"circuit-progress";



document.body.appendChild(
    circuitLine
);



window.addEventListener(
    "scroll",
    ()=>{


        const scroll =
        window.scrollY;



        const height =
        document.documentElement
        .scrollHeight -
        window.innerHeight;



        const progress =
        (scroll / height) * 100;



        circuitLine.style.width =
        progress + "%";


    }

);








/* =========================================================
   REDUCED MOTION SUPPORT
========================================================= */


const reduce =
window.matchMedia(
"(prefers-reduced-motion: reduce)"
);



if(reduce.matches){


    document
    .querySelectorAll("*")
    .forEach(element=>{


        element.style.animation =
        "none";


        element.style.transition =
        "none";


    });


}
