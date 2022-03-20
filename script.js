"use strict";
gsap.registerPlugin(ScrollTrigger);

window.addEventListener("load", start)


function start() {
    console.log("ready");
}


// animations

const downArrow = document.querySelector(".arrow_container");
const tlArrowBounce = new TimelineMax({ repeat: -1 });

tlArrowBounce.
to(downArrow, { y: '-8', ease: Sine.easeInOut, duration: .8 }).
to(downArrow, { y: '+=8', ease: Sine.easeInOut, duration: .8 });


const screen = document.querySelector(".device_container");
const screentl = gsap.timeline({ repeat: -1, delay: .5, repeatDelay: .5 });

screentl.to(screen, { duration: 1, scaleX: .5, scaleY: .5, rotation: 90, ease: "sine" });
screentl.to(screen, { duration: 1, scaleX: .5, scaleY: .6, delay: 1, ease: "bounce" });
screentl.to(screen, { duration: 1, rotation: 90, delay: 0, ease: "sine" });
screentl.to(screen, { duration: 1, rotation: 180, delay: 0, ease: "sine" });
screentl.to(screen, { duration: 1, scaleX: 1, scaleY: 1, delay: 1, ease: "circ" });