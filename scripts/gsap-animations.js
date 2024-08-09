gsap.registerPlugin(ScrollTrigger);

const locoScroll = new LocomotiveScroll({
    el: document.querySelector('.wrapper'),
    smooth: true,
    smoothMobile: true,
});

// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the ".smooth-scroll" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy(".wrapper", {
    scrollTop(value) {
        return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
    }, // we don't have to define a scrollLeft because we're only scrolling vertically.
    getBoundingClientRect() {
        return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
    },
    // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
    pinType: document.querySelector(".wrapper").style.transform ? "transform" : "fixed"
});

var tl = gsap.timeline();
var mm = gsap.matchMedia();

// MAIN PAGE ANIMATIONS
tl.from('.animate-link', {
    opacity: 0,
    duration: 0.5,
    delay: 0.1,
    y: 20,
    stagger: 0.1,
    ease: 'power1.inOut'
});

tl.from('.main h1', {
    opacity: 0,
    duration: 0.5,
    y: 100,
    stagger: 0.3,
    ease: 'power1.inOut'
});

// ABOUT1 PAGE ANIMATIONS

tl.from(".about1 .about-text p", {
    opacity: 0,
    y: 100,
    duration: 1.5,
    ease: 'power1.inOut',
    scrollTrigger: {
        trigger: ".about1 .about-text p",
        scroller: ".wrapper",
        start: "top 90%",
        end: "top 80%",
        scrub: 1,
    },
});

tl.from(".about1 .about-text .resume", {
    scrollTrigger: {
        trigger: ".about1 .about-text p",
        scroller: ".wrapper",
        start: "top 70%",
        end: "top 60%",
        scrub: 2,
    },
    opacity: 0,
    y: 100,
    duration: 1,
    ease: 'power1.inOut'
});

tl.from(".about1 .connect", {
    scrollTrigger: {
        trigger: ".about1 .connect",
        scroller: ".wrapper",
        start: "top 100%",
        end: "top 80%",
        scrub: 1,
    },
    opacity: 0,
    y: 100,
    duration: 1,
    ease: 'power1.inOut'
});

tl.from(".about1 .connect .connecting-links a", {
    opacity: 0,
    y: 100,
    duration: 1,
    stagger: 0.2,
    ease: 'power1.inOut',
    scrollTrigger: {
        trigger: ".about1 .about-text p",
        scroller: ".wrapper",
        start: "top 70%",
        end: "top 60%",
        scrub: 1,
    },
});

// ABOUT2 PAGE AMINATIONS
gsap.from (".about2 .can-help p", {
    scale: 0,
    y: 50,
    delay: 0.5,
    duration: 1,
    ease: 'power2.inOut',
    scrollTrigger: {
        trigger: ".about2 .can-help p",
        scroller: ".wrapper",
        start: "top 90%",
        end: "top 80%",
        scrub: 2,
    },
});

gsap.from (".about2 .helps .help-box", {
    opacity: 0,
    y: 100,
    x: 100,
    duration: 1,
    ease: 'power2.inOut',
    stagger: 1,
    scrollTrigger: {
        trigger: ".about2 .can-help p",
        scroller: ".wrapper",
        start: "top 80%",
        end: "top 70%",
        scrub: 1,
    },
});



// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();