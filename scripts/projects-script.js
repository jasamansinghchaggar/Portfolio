
// Initialize Locomotive Scroll
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
    },
    getBoundingClientRect() {
        return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
    },
    pinType: document.querySelector(".wrapper").style.transform ? "transform" : "fixed"
});

// Scroll to top
var scrolltop = document.querySelector('#scroll-top');
scrolltop.addEventListener('click', function () {
    locoScroll.scrollTo(0);
});

// Cursor
var body = document.querySelector('body');
var cursor = document.querySelector('#cursor');
var hoverTextElements = document.querySelectorAll('.hover-text');
var removeCursor = document.querySelectorAll('.remove-cursor');

body.addEventListener('mousemove', function (dets) {
    gsap.to(cursor, {
        x: dets.clientX,
        y: dets.clientY,
        duration: 0.5,
        ease: 'back'
    });
});

hoverTextElements.forEach(function (elem) {
    elem.addEventListener('mouseenter', function () {
        gsap.to(cursor, {
            scale: 3,
            duration: 0.2
        });
    });

    elem.addEventListener('mouseleave', function () {
        gsap.to(cursor, {
            scale: 1,
            duration: 0.2
        });
    });
});

removeCursor.forEach(function (elem) {
    elem.addEventListener('mouseenter', function () {
        gsap.to(cursor, {
            opacity: 0,
            duration: 0.2
        });
    });

    elem.addEventListener('mouseleave', function () {
        gsap.to(cursor, {
            opacity: 1,
            duration: 0.2
        });
    });
});

// Show/hide scroll to top button
window.addEventListener('scroll', function() {
    if (window.scrollY > 300) {
        gsap.to('#scroll-top', {
            scale: 1,
            duration: 0.3
        });
    } else {
        gsap.to('#scroll-top', {
            scale: 0,
            duration: 0.3
        });
    }
});

// Link effects
document.addEventListener("DOMContentLoaded", function() {
    // Get the scroll to top button
    var scrolltop = document.getElementById('scroll-top');
    
    // Initial state
    gsap.set(scrolltop, {
        scale: 0
    });
    
    // Show/hide based on scroll position
    locoScroll.on('scroll', function(args) {
        if (args.scroll.y > 300) {
            gsap.to(scrolltop, {
                scale: 1,
                duration: 0.3
            });
        } else {
            gsap.to(scrolltop, {
                scale: 0,
                duration: 0.3
            });
        }
    });
});
