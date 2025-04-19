
// Main initialization 
{document.addEventListener('DOMContentLoaded', () => {
    // Register ScrollTrigger with GSAP
    gsap.registerPlugin(ScrollTrigger);

    // Initialize animations
    initHeroAnimations();
    initAboutAnimations();
    initFeaturedAnimations();
    initTestimonialAnimations();
    initCtaAnimations();
});

// Hero Section Animations
function initHeroAnimations() {
    // Hero heading animation
    gsap.from('.discovercontent h1', {
        duration: 1.2,
        opacity: 0,
        y: 50,
        ease: 'power3.out',
    });

    // Hero paragraph animation with slight delay
    gsap.from('.discovercontent p', {
        duration: 1.2,
        opacity: 0,
        y: 30,
        delay: 0.3,
        ease: 'power3.out',
    });

    // Hero buttons animation
    gsap.from('.discovercontent .flex', {
        duration: 1,
        opacity: 0,
        y: 20,
        delay: 0.6,
        ease: 'power3.out',
    });

}

// About Section Animations
function initAboutAnimations() {
    // About heading animation
    gsap.from('.aboutpremium', {
        scrollTrigger: {
            trigger: '.aboutpremium',
            start: 'top 80%',
            end: 'top 60%',
            toggleActions: 'play none none none',
            scrub: 2,
        },
        duration: 1,
        opacity: 0,
        y: 50,
        ease: 'back.out(1.7)',
    });

    // About line animation
    gsap.from('.aboutline', {
        scrollTrigger: {
            trigger: '.aboutline',
            start: 'top 80%',
            end: 'top 60%',
            scrub: 2,
        },
        duration: 1.5,
        width: 0,
        ease: 'power3.out',
        delay: 0.3
    });

    // About content animation
    gsap.from('.pcontent', {
        scrollTrigger: {
            trigger: '.pcontent',
            start: 'top 90%',
            end: 'top 60%',
            scrub: 2,
        },
        duration: 1,
        opacity: 0,
        x: -50,
        ease: 'power3.out',
    });

    // Stats grid animation - staggered reveal
    gsap.from('.grid-cols-3 > div', {
        scrollTrigger: {
            trigger: '.grid-cols-3',
            start: 'top 75%',
            end: 'top 60%',
            scrub: 2,
        },
        duration: 0.8,
        opacity: 0,
        y: 30,
        stagger: 0.15,
        ease: 'power2.out',
    });

    // Stats number counters animation
    const statElements = document.querySelectorAll('.number');
    statElements.forEach(stat => {
        const value = stat.textContent;
        const endValue = parseInt(value);

        gsap.from(stat, {
            scrollTrigger: {
                trigger: stat,
                start: 'top 80%',
            },
            innerText: 0,
            duration: 2,
            snap: { innerText: 1 },
            onUpdate: function () {
                // Remove the "+" if it exists in the original text
                const displayValue = Math.ceil(this.targets()[0].innerText);
                this.targets()[0].innerText = `${displayValue}+`;
            }
        });
    });
}

// Featured Properties Animations
function initFeaturedAnimations() {
    // Featured section heading animation
    gsap.from('.py-16.bg-gray-50 h2:not(.aboutpremium)', {
        scrollTrigger: {
            trigger: '.py-16.bg-gray-50 h2:not(.aboutpremium)',
            start: 'top 80%',
            end: 'top 60%',
            scrub: 2,
        },
        duration: 1.2,
        opacity: 0,
        y: 30,
        ease: 'power3.out',
    });

    // Property cards staggered animation
    const propertyCards = document.querySelectorAll('.propertycard');

    propertyCards.forEach((card) => {
        gsap.set(card, { opacity: 0, y: 50 });

        gsap.to(card, {
            scrollTrigger: {
                trigger: card,
                start: 'top 85%',
                toggleActions: 'play none none none',
                once: true
            },
            duration: 0.8,
            opacity: 1,
            y: 0,
            ease: 'power2.out'
        });
    });

    // "View All Properties" button animation
    gsap.from('.mt-10 .bg-blue-800', {
        scrollTrigger: {
            trigger: '.mt-10 .bg-blue-800',
            start: 'top 85%',
            end: 'top 60%',
            scrub: 2,
        },
        duration: 0.8,
        opacity: 0,
        y: 20,
        scale: 0.9,
        ease: 'back.out(1.7)',
    });
}

// Testimonials Section Animations
function initTestimonialAnimations() {
    // Testimonial section heading animation
    gsap.from('.bg-blue-800 h2:not(.absolute)', {
        scrollTrigger: {
            trigger: '.bg-blue-800 h2:not(.absolute)',
            start: 'top 80%',
            end: 'top 60%',
            scrub: 2,
        },
        duration: 1,
        opacity: 0,
        y: 30,
        ease: 'power3.out',
    });

    // Background "TESTIMONIALS" text animation
    gsap.from('.text-\\[120px\\]', {
        scrollTrigger: {
            trigger: '.text-\\[120px\\]',
            start: 'top 90%',
        },
        duration: 1.5,
        opacity: 0,
        scale: 0.8,
        ease: 'power2.out',
    });

    // Testimonial divider animation
    gsap.from('.bg-gradient-to-r', {
        scrollTrigger: {
            trigger: '.bg-gradient-to-r',
            start: 'top 80%',
            end: 'top 60%',
            scrub: 2,

        },
        duration: 1.5,
        width: 0,
        ease: 'power2.out',
    });

    // Testimonial cards staggered animation
    gsap.from('.bg-blue-800 .bg-white', {
        scrollTrigger: {
            trigger: '.bg-blue-800 .grid',
            start: 'top 75%',
            end: 'top 60%',
            scrub: 2,
        },
        duration: 0.8,
        opacity: 0,
        y: 40,
        stagger: 0.2,
        ease: 'back.out(1.7)',
    });

    // Star ratings animation
    gsap.from('.text-yellow-500 i', {
        scrollTrigger: {
            trigger: '.text-yellow-500',
            start: 'top 80%',
        },
        duration: 0.5,
        opacity: 0,
        x: -10,
        stagger: 0.1,
        ease: 'back.out(1.7)',
    });
}

// Call to Action Section Animations
function initCtaAnimations() {
    // CTA container card animation
    gsap.from('.bg-gradient-to-br', {
        scrollTrigger: {
            trigger: '.bg-gradient-to-br',
            start: 'top 75%',
        },
        duration: 1,
        opacity: 0,
        scale: 0.9,
        ease: 'power3.out',
    });

    // CTA heading and text animations
    gsap.set('.callhead, .callp', {
        opacity: 0,
        y: 20
      });
      
      // Then create the animation that will run once when scrolled into view
      gsap.to('.callhead, .callp', {
        scrollTrigger: {
          trigger: '.call',
          start: 'top 75%',
          end: 'top 60%',
          scrub: 2,
          toggleActions: 'play none none none', // Play once when entering viewport
        //   once: true, // Only trigger once
        //   markers: true // Set to true for debugging
        },
        duration: 1,
        opacity: 1,
        y: 0,
        stagger: 0.2,
        ease: 'power3.out'
      });

    // CTA buttons animation
    gsap.from('.contact', {
        scrollTrigger: {
            trigger: '.bg-gradient-to-br',
            start: 'top 75%',
            end: 'top 60%',
            scrub: 2,
        },
        duration: 0.8,
        opacity: 0,
        y: 20,
        stagger: 0.2,
        delay: 0.6,
        ease: 'back.out(1.7)',
    });
}

// General page scroll animation for smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);

        if (targetElement) {
            gsap.to(window, {
                duration: 1,
                scrollTo: {
                    y: targetElement,
                    offsetY: 50
                },
                ease: 'power3.inOut'
            });
        }
    });
});

// Add this for the arrow in the hero section
document.querySelector('.arrow').addEventListener('click', function () {
    gsap.to(window, {
        duration: 1,
        scrollTo: {
            y: window.innerHeight,
            autoKill: false
        },
        ease: 'power3.inOut'
    });
});

// Add parallax effect to the hero image
gsap.to('.heroimg', {
    scrollTrigger: {
        trigger: '.heroimg',
        start: 'top top',
        end: 'bottom top',
        scrub: true
    },
    y: 100,
    ease: 'none'
});

// Page load animation sequence
window.addEventListener('load', () => {
    // Create a timeline for page load
    const pageLoadTl = gsap.timeline();

    // Fade in the whole page first
    pageLoadTl.from('body', {
        opacity: 0,
        duration: 0.5
    });

    // Then animate the hero section elements
    pageLoadTl.from('.heroimg', {
        opacity: 0,
        duration: 1,
        scale: 1.1
    }, '-=0.3');
});

// Add a smooth reveal effect for all section headers as they come into view
gsap.utils.toArray('section').forEach(section => {
    gsap.from(section, {
        scrollTrigger: {
            trigger: section,
            start: 'top 80%',
        },
        duration: 1,
        opacity: 0,
        y: 30,
        ease: 'power3.out',
    });
});}