gsap.registerPlugin(ScrollTrigger);

const locoScroll = new LocomotiveScroll({
    el: document.querySelector('.wrapper'),
    smooth: true,
    smoothMobile: true,
});

// Sync ScrollTrigger with Locomotive Scroll
locoScroll.on("scroll", ScrollTrigger.update);

ScrollTrigger.scrollerProxy(".wrapper", {
    scrollTop(value) {
        return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
    },
    getBoundingClientRect() {
        return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
    },
    pinType: document.querySelector(".wrapper").style.transform ? "transform" : "fixed"
});

const mm = gsap.matchMedia();

// Desktop Animations
mm.add("(min-width: 1024px)", () => {
    const tl = gsap.timeline();

    tl.from('.animate-link', {
        opacity: 0,
        duration: 0.5,
        delay: 0.1,
        y: 20,
        stagger: 0.1,
        ease: 'power1.inOut'
    })
    .from('.main h1', {
        opacity: 0,
        duration: 0.5,
        y: 100,
        stagger: 0.3,
        ease: 'power1.inOut'
    });

    // About1 Section Animations
    const about1Timeline = gsap.timeline({
        scrollTrigger: {
            trigger: ".about1",
            scroller: ".wrapper",
            start: "top 70%",
            end: "top 30%",
            scrub: true,
        }
    });

    about1Timeline
        .from(".about1 .about-text p", {
            opacity: 0,
            y: 100,
            duration: 2,
            ease: 'power2.inOut'
        })
        .from(".about1 .about-text .resume", {
            opacity: 0,
            y: 100,
            duration: 2,
            ease: 'power2.inOut'
        })
        .from(".about1 .connect", {
            opacity: 0,
            y: 100,
            duration: 2,
            ease: 'power2.inOut'
        })
        .from(".about1 .connect .connecting-links a", {
            opacity: 0,
            y: 100,
            duration: 1,
            stagger: 0.4,
            ease: 'power2.inOut'
        });

    // About2 Section Animations
    const about2Timeline = gsap.timeline({
        scrollTrigger: {
            trigger: ".about2 .can-help",
            scroller: ".wrapper",
            start: "top 90%",
            end: "top 70%",
            scrub: 2,
        }
    });

    about2Timeline
        .from(".about2 .can-help p", {
            scale: 0,
            y: 50,
            duration: 1,
            ease: 'power2.inOut'
        })
        .from(".about2 .helps .help-box", {
            opacity: 0,
            y: 100,
            x: 100,
            duration: 1,
            ease: 'power2.inOut',
            stagger: 1
        });
});

// Mobile Animations
mm.add("(max-width: 1023px)", () => {
    const tl = gsap.timeline();

    tl.from('.animate-link', {
        opacity: 0,
        duration: 0.5,
        y: 10,
        stagger: 0.1,
        ease: 'power1.inOut'
    })
    .from('.main h1', {
        opacity: 0,
        duration: 0.5,
        y: 50,
        stagger: 0.2,
        ease: 'power1.inOut'
    });

    // About1 Section Animations for Mobile
    const about1Timeline = gsap.timeline({
        scrollTrigger: {
            trigger: ".about1",
            scroller: ".wrapper",
            start: "top 80%",
            end: "top 40%",
            scrub: true,
        }
    });

    about1Timeline
        .from(".about1 .about-text p", {
            opacity: 0,
            y: 50,
            duration: 1,
            ease: 'power1.inOut'
        })
        .from(".about1 .about-text .resume", {
            opacity: 0,
            y: 50,
            duration: 0.8,
            ease: 'power1.inOut'
        })
        .from(".about1 .connect", {
            opacity: 0,
            y: 50,
            duration: 1,
            ease: 'power1.inOut'
        })
        .from(".about1 .connect .connecting-links a", {
            opacity: 0,
            y: 50,
            duration: 0.8,
            stagger: 0.1,
            ease: 'power1.inOut'
        });

    // About2 Section Animations for Mobile
    const about2Timeline = gsap.timeline({
        scrollTrigger: {
            trigger: ".about2 .can-help",
            scroller: ".wrapper",
            start: "top 90%",
            end: "top 60%",
            scrub: 2,
        }
    });

    about2Timeline
        .from(".about2 .can-help p", {
            scale: 0,
            y: 30,
            duration: 1,
            ease: 'power2.inOut'
        })
        .from(".about2 .helps .help-box", {
            opacity: 0,
            y: 80,
            x: 50,
            duration: 1,
            ease: 'power2.inOut',
            stagger: 0.8
        });
});

// Scroll to Top Button Animation
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
        toggleActions: "play pause reverse pause",
    }
});

// Refresh ScrollTrigger and LocomotiveScroll on window updates
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
ScrollTrigger.refresh();