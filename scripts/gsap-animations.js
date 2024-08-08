var tl = gsap.timeline();

// MAIN PAGE ANIMATIONS
tl.from('.animate-link', {
    opacity: 0,
    duration: 0.5,
    delay: 0.1,
    y: 20,
    stagger: 0.1,
    ease: 'power1'
});

tl.from('.main h1', { 
    opacity: 0, 
    duration: 0.5, 
    y: 100, 
    stagger: 0.3,
    ease: 'power1'
});

// ABOUT PAGE ANIMATIONS
tl.from('.about-text p', {
    opacity: 0,
    duration: 0.3,
    y: 100,
    ease: 'power1',
});

tl.from('.about-text a', {
    opacity: 0,
    duration: 0.2,
    y: 100,
    ease: 'power1'
});

tl.from('.connecting-links', {
    opacity: 0,
    duration: 0.2,
    y: 100,
    ease: 'power1',
    stagger: 0.1
});

tl.from('.connecting-links a', {
    opacity: 0,
    duration: 0.2,
    y: 100,
    ease: 'power1',
    stagger: 0.1
});