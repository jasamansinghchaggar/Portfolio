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

const mm = gsap.matchMedia();

// Desktop Animations
mm.add("(min-width: 1024px)", () => {
    const tl = gsap.timeline();

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
            start: "top 80%",
            end: "top 70%",
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
        stagger: 0.5,
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
    gsap.from(".about2 .can-help p", {
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

    gsap.from(".about2 .helps .help-box", {
        opacity: 0,
        y: 100,
        x: 100,
        duration: 1,
        ease: 'power2.inOut',
        stagger: 1.5,
        scrollTrigger: {
            trigger: ".about2 .can-help p",
            scroller: ".wrapper",
            start: "top 80%",
            end: "top 70%",
            scrub: 1,
        },
    });

    // WORK PAGE ANIMATIONS
    gsap.from(".work .work-head #left", {
        opacity: 0,
        x: -100,
        duration: 1,
        ease: 'power2.inOut',
        scrollTrigger: {
            trigger: ".work .work-head #left",
            scroller: ".wrapper",
            start: "top 80%",
            end: "top 70%",
            scrub: 1
        }
    });
    gsap.from(".work .work-head #right", {
        opacity: 0,
        x: 100,
        duration: 1,
        ease: 'power2.inOut',
        scrollTrigger: {
            trigger: ".work .work-head #right",
            scroller: ".wrapper",
            start: "top 80%",
            end: "top 70%",
            scrub: 1,
        }
    });

    gsap.from(".work #work-list a", {
        opacity: 0,
        y: 100,
        duration: 2,
        stagger: 1,
        ease: 'power2.inOut',
        scrollTrigger: {
            trigger: ".work #work-list",
            scroller: ".wrapper",
            start: "top 60%",
            end: "top 50%",
            scrub: 1,
        },
    });


    // EXPERTISE PAGE ANIMATIONS
    gsap.from(".expertise .expertise-left .text-head", {
        opacity: 0,
        x: -100,
        duration: 1,
        ease: 'power2.inOut',
        scrollTrigger: {
            trigger: ".expertise .expertise-left .text-head",
            scroller: ".wrapper",
            start: "top 80%",
            end: "top 70%",
            scrub: 1,
        },
    });
    gsap.from(".expertise .expertise-left .text-para", {
        opacity: 0,
        x: -100,
        duration: 1,
        delay: 1,
        ease: 'power2.inOut',
        scrollTrigger: {
            trigger: ".expertise .expertise-left .text-para",
            scroller: ".wrapper",
            start: "top 80%",
            end: "top 70%",
            scrub: 1,
        },
    });
    gsap.from(".expertise .expertise-right .accordian li", {
        opacity: 0,
        x: 100,
        duration: 2,
        stagger: 5,
        ease: 'power2.inOut',
        scrollTrigger: {
            trigger: ".expertise .expertise-right .accordian li",
            scroller: ".wrapper",
            start: "top 80%",
            end: "top 70%",
            scrub: 4,
        },
    });

    // COLLABORATE PAGE ANIMATIONS
    gsap.from(".collaborate .collaborate-head", {
        opacity: 0,
        y: 100,
        duration: 1,
        ease: 'power2.inOut',
        scrollTrigger: {
            trigger: ".collaborate .collaborate-head",
            scroller: ".wrapper",
            start: "top 90%",
            end: "top 80%",
            scrub: 1,
        },
    });
});

// Mobile Animations
mm.add("(max-width: 1023px)", () => {
    const tl = gsap.timeline();

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
            start: "top 80%",
            end: "top 70%",
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
        stagger: 0.5,
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
    gsap.from(".about2 .can-help p", {
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
    gsap.from(".about2 .helps .design", {
        opacity: 0,
        y: 100,
        duration: 1,
        ease: 'power2.inOut',
        scrollTrigger: {
            trigger: ".about2 .helps .design",
            scroller: ".wrapper",
            start: "top 90%",
            end: "top 70%",
            scrub: 1,
        },
    });
    gsap.from(".about2 .helps .develop", {
        opacity: 0,
        y: 100,
        duration: 1,
        ease: 'power2.inOut',
        scrollTrigger: {
            trigger: ".about2 .helps .develop",
            scroller: ".wrapper",
            start: "top 90%",
            end: "top 70%",
            scrub: 1,
        },
    });
    gsap.from(".about2 .helps .full", {
        opacity: 0,
        y: 100,
        duration: 1,
        ease: 'power2.inOut',
        scrollTrigger: {
            trigger: ".about2 .helps .full",
            scroller: ".wrapper",
            start: "top 90%",
            end: "top 70%",
            scrub: 1,
        },
    });

    // WORK PAGE ANIMATIONS
    gsap.from(".work .work-head #left", {
        opacity: 0,
        x: -100,
        duration: 1,
        ease: 'power2.inOut',
        scrollTrigger: {
            trigger: ".work .work-head #left",
            scroller: ".wrapper",
            start: "top 80%",
            end: "top 70%",
            scrub: 1
        }
    });
    gsap.from(".work .work-head #right", {
        opacity: 0,
        x: 100,
        duration: 1,
        ease: 'power2.inOut',
        scrollTrigger: {
            trigger: ".work .work-head #right",
            scroller: ".wrapper",
            start: "top 80%",
            end: "top 70%",
            scrub: 1,
        }
    });
    gsap.from(".work #work-list a", {
        opacity: 0,
        y: 100,
        duration: 2,
        stagger: 1,
        ease: 'power2.inOut',
        scrollTrigger: {
            trigger: ".work #work-list",
            scroller: ".wrapper",
            start: "top 60%",
            end: "top 50%",
            scrub: 1,
        },
    });

    // EXPERTISE PAGE ANIMATIONS
    gsap.from(".expertise .expertise-left .text-head", {
        opacity: 0,
        x: -100,
        duration: 1,
        ease: 'power2.inOut',
        scrollTrigger: {
            trigger: ".expertise .expertise-left .text-head",
            scroller: ".wrapper",
            start: "top 80%",
            end: "top 70%",
            scrub: 1,
        },
    });
    gsap.from(".expertise .expertise-left .text-para", {
        opacity: 0,
        x: -100,
        duration: 1,
        delay: 1,
        ease: 'power2.inOut',
        scrollTrigger: {
            trigger: ".expertise .expertise-left .text-para",
            scroller: ".wrapper",
            start: "top 80%",
            end: "top 70%",
            scrub: 1,
        },
    });
    gsap.from(".expertise .expertise-right .accordian li", {
        opacity: 0,
        x: 100,
        duration: 2,
        stagger: 2,
        ease: 'power2.inOut',
        scrollTrigger: {
            trigger: ".expertise .expertise-right .accordian li",
            scroller: ".wrapper",
            start: "top 80%",
            end: "top 70%",
            scrub: 1,
        },
    });

    // COLLABORATE PAGE ANIMATIONS
    gsap.from(".collaborate .collaborate-head", {
        opacity: 0,
        y: 100,
        duration: 1,
        ease: 'power2.inOut',
        scrollTrigger: {
            trigger: ".collaborate .collaborate-head",
            scroller: ".wrapper",
            start: "top 80%",
            end: "top 70%",
            scrub: 1,
        },
    });
});


// SCROLL TO TOP BUTTON
const btt = document.querySelector("#scroll-top");
gsap.set(btt, { y: 80 });
gsap.to(btt, {
    y: 0,
    scale: 1,
    duration: 0.5,
    ease: "power2.inOut",
    scrollTrigger: {
        trigger: "body",
        scroller: ".wrapper",
        start: "top -30%",
        end: "top -30%",
        toggleActions: "play none reverse none"
    }
});
// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();