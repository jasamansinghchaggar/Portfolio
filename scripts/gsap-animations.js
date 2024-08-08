gsap.from('.main h1', { 
    opacity: 0, 
    duration: 1, 
    y: 100, 
    stagger: 0.3,
    ease: 'power1'
});

gsap.from('.animate-link', {
    opacity: 0,
    duration: 1,
    delay: 0.1,
    y: 20,
    stagger: 0.1,
    ease: 'power1'
});