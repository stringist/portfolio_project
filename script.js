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

const cubes = document.querySelectorAll(".cube");
const cubetl = gsap.timeline({ repeat: -1, delay: .5, repeatDelay: .5 });
gsap.from(cubes, { x: "-60vw", rotation: -400, duration: 2, ease: "back", stagger: -.4, scrollTrigger: { trigger: cubes, markers: false, start: "top 75%", end: "bottom 40%", toggleActions: "play reverse play reverse" } });
// cubetl.to(cubes, { rotation: -10, duration: .1, delay: 2, ease: "none" });
// cubetl.to(cubes, { rotation: 0, duration: .5, ease: "back" });
gsap.to(cubes, { y: -6, repeat: -1, duration: 1, stagger: { each: .2, repeat: Infinity, yoyo: true } });
// gsap.to(cubes, { y: 3, repeat: -1, duration: 1, delay: 2, stagger: { each: .2, repeat: Infinity, yoyo: true } });



const screen = document.querySelector(".device_container");
const screentl = gsap.timeline({ repeat: -1, delay: 1.5, repeatDelay: .5 });

screentl.to(screen, { duration: 1, scaleX: .5, scaleY: .5, rotation: 90, ease: "sine" });
screentl.to(screen, { duration: 1, scaleX: .5, scaleY: .6, delay: 1, ease: "bounce" });
screentl.to(screen, { duration: 1, rotation: 90, delay: 0, ease: "sine" });
screentl.to(screen, { duration: 1, rotation: 180, delay: 0, ease: "sine" });
screentl.to(screen, { duration: 1.5, scaleX: 1, scaleY: 1, delay: 1, ease: "power2" });