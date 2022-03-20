"use strict";

window.addEventListener("load", start)

const tlArrowBounce = new TimelineMax({ repeat: -1 });

function start() {
    console.log("ready");
}
const downArrow = document.querySelector(".arrow_container");

tlArrowBounce.
to(downArrow, { y: '-8', ease: Sine.easeInOut, duration: .8 }).
to(downArrow, { y: '+=8', ease: Sine.easeInOut, duration: .8 });