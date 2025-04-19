// First, ensure GSAP is loaded - add this to your HTML head
// <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.11.4/gsap.min.js"></script>
// <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.11.4/ScrollTrigger.min.js"></script>

// Initialize GSAP ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', () => {
  // HERO SECTION ANIMATION
  gsap.from('.bg-blue-900.text-white.py-12', {
    duration: 1.2,
    opacity: 0,
    y: 30,
    ease: 'power3.out'
  });

  gsap.from('.bg-blue-900.text-white.py-12 h1', {
    duration: 1,
    opacity: 0,
    y: 20,
    delay: 0.3,
    ease: 'back.out'
  });

  gsap.from('.bg-blue-900.text-white.py-12 p', {
    duration: 1,
    opacity: 0,
    y: 20,
    delay: 0.5,
    ease: 'back.out'
  });

  gsap.from('.bg-blue-900.text-white.py-12 img', {
    duration: 1.2,
    opacity: 0,
    scale: 0.8,
    delay: 0.4,
    ease: 'power2.out'
  });

  // FEATURED LISTINGS SECTION
  gsap.from('.text-royal-blue', {
    scrollTrigger: {
      trigger: '.text-royal-blue',
      start: 'top 80%',
      
      end: 'top 60%',
      scrub:2,
      toggleActions: 'play none none none'
    },
    duration: 1,
    opacity: 0,
    y: 40,
    ease: 'power3.out'
  });

  gsap.from('.w-24.h-1.bg-yellow-500', {
    scrollTrigger: {
      trigger: '.w-24.h-1.bg-yellow-500',
      start: 'top 85%',
      end: 'top 60%',
      scrub: 2,
      toggleActions: 'play none none none'
    },
    duration: 0.8,
    scaleX: 0,
    transformOrigin: 'center',
    ease: 'power3.inOut',
    delay: 0.2
  });

  // PROPERTY CARDS ANIMATION
// First, make sure to include the necessary GSAP libraries
// Add these to your HTML head section:
// <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>
// <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js"></script>

// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
  // Register ScrollTrigger plugin
  gsap.registerPlugin(ScrollTrigger);
  
  // Set initial state for all property cards - hidden
  gsap.set('.property-card, .propertys-card', { 
    opacity: 0, 
    y: 50,
    scale: 0.95
  });
  
  // Select all property cards
  const propertyCards = document.querySelectorAll('.property-card, .propertys-card');
  
  // Create a timeline for the animation
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: '#propertyGrid',
      start: 'top 80%', // Start animation when the top of the grid hits 80% from the top of viewport
      end: 'bottom 20%', // End animation when bottom of grid reaches 20% from top of viewport
      toggleActions: 'play none none reverse', // play on enter, reverse on leave
      markers: false // Set to true for debugging
    }
  });
  
  // Add each card to the timeline with a stagger effect
  tl.to(propertyCards, {
    opacity: 1,
    y: 0,
    scale: 1,
    duration: 0.6,
    stagger: 0.15, // Time between each card animation
    ease: 'power2.out',
    clearProps: 'all' // Clean up inline styles after animation
  });
  
  // Optional: Add a little bounce effect to cards as they appear
  propertyCards.forEach((card, index) => {
    ScrollTrigger.create({
      trigger: card,
      start: 'top 85%',
      onEnter: () => {
        gsap.to(card, {
          scale: 1.03,
          duration: 0.3,
          onComplete: () => {
            gsap.to(card, {
              scale: 1,
              duration: 0.2
            });
          }
        });
      },
      once: true // Only trigger once
    });
  });
});


  // PREMIUM LOCALITIES SECTION
  gsap.from('.bg-gradient-to-br.from-blue-900', {
    scrollTrigger: {
      trigger: '.bg-gradient-to-br.from-blue-900',
      start: 'top 70%',
      toggleActions: 'play none none none'
    },
    duration: 1.2,
    opacity: 0,
    y: 60,
    ease: 'power2.out'
  });

  gsap.from('.bg-gradient-to-br.from-blue-900 h2', {
    scrollTrigger: {
      trigger: '.bg-gradient-to-br.from-blue-900 h2',
      start: 'top 80%',
      toggleActions: 'play none none none'
    },
    duration: 0.8,
    opacity: 0,
    y: 30,
    ease: 'back.out'
  });

  gsap.from('.bg-gradient-to-br.from-blue-900 p', {
    scrollTrigger: {
      trigger: '.bg-gradient-to-br.from-blue-900 p',
      start: 'top 80%',
      toggleActions: 'play none none none'
    },
    duration: 0.8,
    opacity: 0,
    y: 20,
    delay: 0.2,
    ease: 'power3.out'
  });

  // LOCALITIES CARDS ANIMATION
  gsap.utils.toArray('.bg-white.rounded-xl.overflow-hidden').forEach((locality, i) => {
    gsap.from(locality, {
      scrollTrigger: {
        trigger: locality,
        start: 'top 80%',
        end: 'top 60%',
        scrub: 1,
        toggleActions: 'play none none none'
      },
      duration: 1,
      opacity: 0,
      x: i % 2 === 0 ? -50 : 50,
      delay: 0.1,
      ease: 'power3.out'
    });
  });

  // STATISTICS SECTION
  gsap.from('.mt-12.bg-white.bg-opacity-10', {
    scrollTrigger: {
      trigger: '.mt-12.bg-white.bg-opacity-10',
      start: 'top 80%',
      
      end: 'top 60%',
      scrub: 1,
      toggleActions: 'play none none none'
    },
    duration: 1,
    opacity: 0,
    y: 40,
    ease: 'power3.out'
  });

  gsap.utils.toArray('.bg-white.bg-opacity-20').forEach((stat, i) => {
    gsap.from(stat, {
      scrollTrigger: {
        trigger: stat,
        start: 'top 85%',
        toggleActions: 'play none none none'
      },
      duration: 0.6,
      opacity: 0,
      y: 30,
      delay: 0.3 + (i * 0.1),
      ease: 'back.out'
    });
  });

  // CALL TO ACTION BUTTON ANIMATION
  gsap.from('.inline-block.bg-yellow-500', {
    scrollTrigger: {
      trigger: '.inline-block.bg-yellow-500',
      start: 'top 85%',
      toggleActions: 'play none none none'
    },
    duration: 0.8,
    opacity: 0,
    scale: 0.8,
    ease: 'elastic.out(1, 0.5)',
    delay: 0.5
  });

  // PROPERTY CATEGORIES SECTION
  gsap.set('.browse', { 
    opacity: 0,
    y: 40
  });
  
  // Then create the animation to show the element
  gsap.to('.browse', {
    scrollTrigger: {
      trigger: '.browse',
      start: 'top 85%', // Start a bit earlier
      end: 'top 60%', // End a bit later
      scrub:2,
      toggleActions: 'play none none reverse',
    },
    duration: 1,
    opacity: 1,
    y: 0,
    ease: 'power3.out',
    onComplete: function() {
      // Force the element to stay visible after animation completes
      gsap.set('.browse', { opacity: 1, y: 0, clearProps: "transform" });
    }
  });

  // PROPERTY CATEGORY CARDS
  gsap.utils.toArray('.relative.group.overflow-hidden').forEach((category, i) => {
    gsap.from(category, {
      scrollTrigger: {
        trigger: category,
        start: 'top 85%',
        toggleActions: 'play none none none'
      },
      duration: 0.8,
      opacity: 0,
      y: 40,
      delay: i * 0.1,
      ease: 'power3.out'
    });
  });

  // RECENTLY SOLD PROPERTIES SECTION
  gsap.from('.recentlysold', {
    scrollTrigger: {
      trigger: '.recentlysold',
      start: 'top 80%',
      end: 'top 60%',
      scrub: 2,
      toggleActions: 'play none none none'
    },
    duration: 1,
    opacity: 0,
    y: 40,
    ease: 'power3.out'
  });

  // SOLD PROPERTY CARDS
  gsap.utils.toArray('.bg-white.rounded-lg.overflow-hidden').forEach((card, i) => {
    gsap.from(card, {
      scrollTrigger: {
        trigger: card,
        start: 'top 85%',
        toggleActions: 'play none none none'
      },
      duration: 0.7,
      opacity: 0,
      y: 30,
      delay: i * 0.15,
      ease: 'back.out(1.4)'
    });
  });

  // Add hover animations for property cards
  const propertyCards = document.querySelectorAll('.property-card');
  propertyCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
      gsap.to(card, {
        duration: 0.3,
        y: -10,
        boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
        ease: 'power2.out'
      });
    });
    
    card.addEventListener('mouseleave', () => {
      gsap.to(card, {
        duration: 0.3,
        y: 0,
        boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
        ease: 'power2.out'
      });
    });
  });

  // Add hover animations for category cards
  const categoryCards = document.querySelectorAll('.relative.group.overflow-hidden');
  categoryCards.forEach(card => {
    const image = card.querySelector('img');
    
    card.addEventListener('mouseenter', () => {
      gsap.to(image, {
        duration: 0.8,
        scale: 1.1,
        ease: 'power2.out'
      });
    });
    
    card.addEventListener('mouseleave', () => {
      gsap.to(image, {
        duration: 0.8,
        scale: 1,
        ease: 'power2.out'
      });
    });
  });

  // Add parallax effect on scroll for background images
  gsap.utils.toArray('.relative.group.overflow-hidden img').forEach(img => {
    gsap.to(img, {
      scrollTrigger: {
        trigger: img,
        start: 'top bottom',
        end: 'bottom top',
        scrub: true
      },
      y: '15%',
      ease: 'none'
    });
  });

  // Fancy animation for "SOLD" labels
  gsap.utils.toArray('.absolute.top-0.right-0.bg-red-600').forEach(label => {
    gsap.from(label, {
      scrollTrigger: {
        trigger: label,
        start: 'top 85%',
      },
      duration: 0.6,
      opacity: 0,
      scale: 0,
      rotate: -45,
      transformOrigin: 'center',
      ease: 'back.out(1.7)',
      delay: 0.5
    });
  });

  // Add smooth scroll to section anchors
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      const target = document.querySelector(targetId);
      if (target) {
        gsap.to(window, {
          duration: 1,
          scrollTo: {
            y: target,
            offsetY: 50
          },
          ease: 'power3.inOut'
        });
      }
    });
  });
});