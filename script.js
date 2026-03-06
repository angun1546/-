const gsap = window.gsap;
const ScrollTrigger = window.ScrollTrigger;

gsap.registerPlugin(ScrollTrigger);

// Hero Animations
gsap.from(".hero h1", {
    y: 100,
    opacity: 0,
    duration: 1.5,
    stagger: 0.2,
    ease: "power4.out"
});

gsap.from(".hero-image-container", {
    scale: 0.8,
    opacity: 0,
    duration: 2,
    delay: 0.5,
    ease: "expo.out"
});

// Ticker Animation
gsap.to(".ticker-content", {
    xPercent: -50,
    repeat: -1,
    duration: 20,
    ease: "none"
});

// Scroll Reveal Animations
gsap.utils.toArray(".section-label, .about-text, .project-card, .service-item").forEach(section => {
    gsap.from(section, {
        scrollTrigger: {
            trigger: section,
            start: "top 85%",
            toggleActions: "play none none none"
        },
        y: 50,
        opacity: 0,
        duration: 1,
        ease: "power3.out"
    });
});

// Hover effect for project cards
document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('mouseenter', () => {
        gsap.to(card.querySelector('img'), {
            scale: 1.05,
            duration: 0.6,
            ease: "power2.out"
        });
    });
    card.addEventListener('mouseleave', () => {
        gsap.to(card.querySelector('img'), {
            scale: 1,
            duration: 0.6,
            ease: "power2.out"
        });
    });
});

// Smooth Scroll for navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            gsap.to(window, {
                duration: 1,
                scrollTo: target,
                ease: "power3.inOut"
            });
        }
    });
});
