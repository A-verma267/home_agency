// First, we need to add the GSAP library to your HTML file
// Add this script tag in your HTML head or just before the closing body tag
// <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>
// <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js"></script>

document.addEventListener('DOMContentLoaded', function () {
    // Register ScrollTrigger plugin
    gsap.registerPlugin(ScrollTrigger);

    gsap.from(".serviceheading",{
        y:-100,
        opacity:0,
        scrollTrigger:{
            scroll:"body",
            trigger:".serviceheading",
            start:"top 80%",
            end:"top 60%",

        }
    })
    gsap.from(".servicesp",{
        y:100,
        opacity:0,
        scrollTrigger:{
            scroll:"body",
            trigger:".servicesp",
            start:"top 80%",
            end:"top 60%",

        }
    })
    const centerItem = document.querySelector('.center-item');

// Define center point coordinates (center of the center-item)
function getCenterCoordinates() {
    if (!centerItem) return { x: window.innerWidth / 2, y: window.innerHeight / 2 };

    const rect = centerItem.getBoundingClientRect();
    return {
        x: rect.left + rect.width / 2,
        y: rect.top + rect.height / 2
    };
}

// Function to calculate starting position for each service item
function calculateStartPosition(element) {
    const centerCoords = getCenterCoordinates();
    const rect = element.getBoundingClientRect();
    const elementCenter = {
        x: rect.left + rect.width / 2,
        y: rect.top + rect.height / 2
    };

    // Calculate the difference between current position and center
    return {
        x: centerCoords.x - elementCenter.x,
        y: centerCoords.y - elementCenter.y
    };
}

// Get all service items upfront
const topRowItems = document.querySelectorAll(".grid-cols-3:first-child .service-item");
const bottomRowItems = document.querySelectorAll(".grid-cols-3:last-child .service-item");

// Ensure all items start invisible
gsap.set([centerItem, ...topRowItems, ...bottomRowItems], {
    opacity: 0,
    scale: 0
});

// Fix image to cover full height and width
const serviceImages = document.querySelectorAll('.service-item img');
gsap.set(serviceImages, {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
});

// Create the master timeline for all animations - but don't link to scroll yet
const masterTL = gsap.timeline({
    scrub: 0.5, // Smooth scrubbing
    paused: true // Start paused, will play when in view
});

// Position all items relative to center at the start
function positionAllItems() {
    // Position top row items
    topRowItems.forEach(item => {
        const startPos = calculateStartPosition(item);
        gsap.set(item, {
            x: startPos.x,
            y: startPos.y,
            scale: 0.3,
            opacity: 0
        });
    });

    // Position bottom row items
    bottomRowItems.forEach(item => {
        const startPos = calculateStartPosition(item);
        gsap.set(item, {
            x: startPos.x,
            y: startPos.y,
            scale: 0.3,
            opacity: 0
        });
    });
}

// Call positioning function once DOM is fully loaded
setTimeout(positionAllItems, 100);

// 1. Center item appears first
masterTL.to(centerItem, {
    scale: 1,
    opacity: 1,
    duration: 0.3,
    ease: "back.out(1.7)"
});

// 2. Animate top row items sequentially
topRowItems.forEach((item, index) => {
    masterTL.to(item, {
        x: 0,
        y: 0,
        scale: 1,
        opacity: 1,
        duration: 0.25,
        delay: 0.25 * index + 0.5, // Staggered delay for each item
        ease: "power2.out"
    }, "-=0.15"); // Overlap with previous animation for smoother flow
});

// 3. Animate bottom row items sequentially
bottomRowItems.forEach((item, index) => {
    masterTL.to(item, {
        x: 0,
        y: 0,
        scale: 1,
        opacity: 1,
        duration: 0.25,
        ease: "power2.out"
    }, "-=0.15"); // Overlap with previous animation
});

// Create a ScrollTrigger that plays the animation only once when element enters viewport
ScrollTrigger.create({
    trigger: "#services",
    start: "top 80%", // Starts animation when top of services section is 80% from the top of viewport
    onEnter: () => {
        // Play animation once when entering the viewport
        masterTL.play();
    },
    // Don't reset animation when scrolling back up
    once: true // This is the key change - animation plays only once
});

// Add hover effects for all service items
const serviceItems = document.querySelectorAll('.service-item');
serviceItems.forEach(item => {
    item.addEventListener('mouseenter', () => {
        gsap.to(item, {
            scale: 1.05,
            boxShadow: "0 10px 25px rgba(0,0,0,0.2)",
            borderColor: "#f59e0b", // Yellow border on hover
            duration: 0.3
        });

        // Animate the content inside
        const content = item.querySelector('.service-content');
        gsap.to(content, {
            backgroundColor: "rgba(59, 130, 246, 0.9)", // More opaque blue
            duration: 0.3
        });
    });

    item.addEventListener('mouseleave', () => {
        gsap.to(item, {
            scale: 1,
            boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
            borderColor: "#2563eb", // Back to blue
            duration: 0.3
        });

        const content = item.querySelector('.service-content');
        gsap.to(content, {
            backgroundColor: "rgba(191, 219, 254, 0.8)", // Back to original
            duration: 0.3
        });
    });
});

// Optional: Add a subtle rotation animation to the center item
// But now activate only after the animation has played once
ScrollTrigger.create({
    trigger: "#services",
    start: "top 80%",
    onEnter: () => {
        // Wait for the main animation to complete before starting continuous rotation
        masterTL.eventCallback("onComplete", () => {
            gsap.to(centerItem, {
                rotation: 5,
                duration: 3,
                ease: "sine.inOut",
                yoyo: true,
                repeat: -1
            });
        });
    },
    once: true // Apply only once
});

// Smooth scroll implementation for navigation
document.querySelectorAll('a[href="#services"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const target = document.querySelector('#services');
        if (target) {
            window.scrollTo({
                top: target.offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// Window resize handler to recalculate positions
window.addEventListener('resize', () => {
    // Refresh animations on resize for responsiveness
    ScrollTrigger.refresh();

    // Recalculate positions if needed
    setTimeout(positionAllItems, 100);
});

// Additional function to force animation replay when needed (e.g., for testing)
function replayServicesAnimation() {
    // Reset all elements to starting position
    positionAllItems();
    
    // Reset and replay the animation
    masterTL.progress(0).play();
}
    // --- HOW IT WORKS SECTION ANIMATIONS ---

    // Section heading animation
    {gsap.from("#how-it-works .text-center", {
        scrollTrigger: {
            trigger: "#how-it-works",
            start: "top 80%"
        },
        y: 30,
        opacity: 0,
        duration: 1
    });

    // Step number circles
    gsap.from(".step-number", {
        scrollTrigger: {
            trigger: "#how-it-works",
            start: "top 70%",
            toggleActions: "play none none reset"
        },
        scale: 0,
        opacity: 0,
        duration: 0.5,
        stagger: 0.15,
        ease: "back.out(1.7)"
    });

    // Step content animations - left side steps
    const leftSteps = document.querySelectorAll('.flex-col.lg\\:flex-row > div:first-child');
    leftSteps.forEach(step => {
        gsap.from(step, {
            scrollTrigger: {
                trigger: step.parentElement,
                start: "top 75%",
                toggleActions: "play none none reset"
            },
            x: -50,
            opacity: 0,
            duration: 0.8,
            ease: "power2.out"
        });
    });

    // Step content animations - right side steps
    const rightSteps = document.querySelectorAll('.flex-col-reverse.lg\\:flex-row > div:last-child');
    rightSteps.forEach(step => {
        gsap.from(step, {
            scrollTrigger: {
                trigger: step.parentElement,
                start: "top 75%",
                toggleActions: "play none none reset"
            },
            x: 50,
            opacity: 0,
            duration: 0.8,
            ease: "power2.out"
        });
    });

    // SVG animations for each step
    gsap.utils.toArray(".property-search-animation, .property-visit-animation, .consultant-animation, .selection-animation, .transaction-animation").forEach((svg, i) => {
        gsap.from(svg, {
            scrollTrigger: {
                trigger: svg,
                start: "top 80%",
                toggleActions: "play none none reset"
            },
            opacity: 0,
            scale: 0.8,
            duration: 0.8,
            delay: 0.3,
            ease: "power1.out"
        });
    });

    // Create a scroll-triggered animation for the vertical line
    gsap.from("#how-it-works .absolute.left-1\\/2", {
        scrollTrigger: {
            trigger: "#how-it-works",
            start: "top 60%",
            end: "bottom 80%",
            scrub: true
        },
        scaleY: 0,
        transformOrigin: "top center",
        ease: "none"
    });}

    // --- CALL TO ACTION SECTION ANIMATIONS ---

    // CTA section appearing with a subtle bounce
    const ctaSection = gsap.timeline({
        scrollTrigger: {
          trigger: '.action', 
          start: 'top 85%',
          end:'top 70%',
          toggleActions: 'play none none none',
          scrub:2
        }
      });
      
      ctaSection
        .from('.action', {
          y: 50,
          opacity: 0,
          duration: 1,
          ease: 'power3.out'
        })
        .from('.action h2', {
          y: -30,
          opacity: 0,
          duration: 0.8,
          ease: 'back.out(1.7)'
        }, '-=0.7')
        .from('.action p', {
          y: 30,
          opacity: 0,
          duration: 0.8,
          ease: 'power2.out'
        }, '-=0.6')
        gsap.from('.contactus', {
          scrollTrigger: {
            trigger: '.contactus',
            start: 'top 85%',
            toggleActions: 'play none none none'
          },
          scale: 0.8,
          opacity: 0,
          duration: 0.6,
          ease: 'power2.out'
        });
        
        gsap.from('.properties', {
          scrollTrigger: {
            trigger: '.properties',
            start: 'top 85%',
            toggleActions: 'play none none none'
          },
          scale: 0.8,
          opacity: 0,
          duration: 0.6,
          ease: 'back.out(1.7)'
        });

    // Button hover animations
    const ctaButtons = document.querySelectorAll('.py-16.w-\\[60\\%\\].mx-auto.rounded-2xl .flex a');
    ctaButtons.forEach(button => {
        button.addEventListener('mouseenter', () => {
            gsap.to(button, {
                scale: 1.05,
                duration: 0.3
            });
        });

        button.addEventListener('mouseleave', () => {
            gsap.to(button, {
                scale: 1,
                duration: 0.3
            });
        });
    });

    // --- ADDITIONAL ANIMATIONS ---

    // Smooth scroll for navigation links
    const navLinks = document.querySelectorAll('a[href^="#"]');
    navLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');
            if (targetId === '#') return;

            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                gsap.to(window, {
                    duration: 1,
                    scrollTo: {
                        y: targetElement,
                        offsetY: 80
                    },
                    ease: "power3.inOut"
                });
            }
        });
    });

    // Add a scroll-triggered reveal animation for images
    gsap.utils.toArray('img').forEach(img => {
        if (!img.closest('.service-item') && !img.closest('.center-item')) {
            gsap.from(img, {
                scrollTrigger: {
                    trigger: img,
                    start: "top 85%",
                    toggleActions: "play none none reset"
                },
                opacity: 0,
                y: 30,
                duration: 0.8,
            });
        }
    });

    // Parallax effect for the banner image
    gsap.to("#services .container .w-full img", {
        scrollTrigger: {
            trigger: "#services .w-full",
            start: "top bottom",
            end: "bottom top",
            scrub: true
        },
        ease: "none"
    });

    // Add a subtle pulse animation to the main logo
    gsap.to(".center-item a", {
        scale: 1.05,
        duration: 1,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
    });
});