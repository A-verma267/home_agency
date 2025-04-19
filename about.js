// Make sure you've included the GSAP library in your HTML
// <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>
// <script src="https://cdnjs.cloudflare.com/lib/gsap/3.12.2/ScrollTrigger.min.js"></script>

document.addEventListener('DOMContentLoaded', () => {
    // Register the ScrollTrigger plugin
    gsap.registerPlugin(ScrollTrigger);
    
    // Page Title Animation
    gsap.from('.aboutpremium', {
      y: -50,
      opacity: 0,
      duration: 1,
      ease: 'power3.out'
    });
    
    gsap.from('.aboutp', {
      y: 30,
      opacity: 0,
      duration: 1,
      delay: 0.3,
      ease: 'power2.out'
    });
    
    // Company History & Mission Section
    const ourStorySection = gsap.timeline({
      scrollTrigger: {
        trigger: '.history',
        start: 'top 80%',
        end: 'center 60%',
        toggleActions: 'play none none none',
        scrubing:true
      }
    });
    
    ourStorySection
      .from('.story', {
        x: -100,
        opacity: 0,
        duration: 1,
        ease: 'power2.out'
      })
      .from('.bottomline', {
        width: 0,
        duration: 0.6,
        ease: 'power1.out'
      }, '-=0.5')
      .from('.historyp', {
        y: 30,
        opacity: 0,
        stagger: 0.2,
        duration: 0.8,
        ease: 'power1.out'
      }, '-=0.3')
      .from('.mission', {
        y: 50,
        opacity: 0,
        duration: 0.8,
        ease: 'back.out(1.4)'
      }, '-=0.4')
      .from('.imagehistory', {
        scale: 0.8,
        opacity: 0,
        rotation: -3,
        duration: 1.2,
        ease: 'elastic.out(1, 0.5)'
      }, '-=1');
    
    // Meet Our Team Section
    const teamSection = gsap.timeline({
      scrollTrigger: {
        trigger: '.team',
        start: 'top 75%',
        end: 'top 60%',
        toggleActions: 'play none none none',
        scrub: 2
      }
    });
    
    teamSection
      .from('.team h2', {
        scale: 0.5,
        opacity: 0,
        duration: 1,
        ease: 'back.out(1.7)'
      })
      .from('.teamline', {
        width: 0,
        duration: 0.6,
        ease: 'power1.out'
      }, '-=0.5')
      .from('.teamexperienced', {
        y: 30,
        opacity: 0,
        duration: 0.2,
        ease: 'power2.out'
      }, '-=0.3');
    
    // Team Members Staggered Animation
    gsap.from('.teammembers', {
      y: 100,
      opacity: 0,
      stagger: 0.15,
      duration: 0.2,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: '.bg-gray-50.mt-\\[49px\\] .md\\:grid-cols-4',
        start: 'top 80%',
        end: 'top 60%',
        toggleActions: 'play none none none',
        // scrub: 1
      }
    });
    
    // Additional animations for team member cards
    const teamCards = document.querySelectorAll('.bg-gray-50.mt-\\[49px\\] .md\\:grid-cols-4 > div');
    teamCards.forEach((card, index) => {
      // Team member photo reveal
      gsap.fromTo(card.querySelector('img'), 
        { scale: 1.3, opacity: 0 },
        { 
          scale: 1, 
          opacity: 1, 
          duration: 1,
          delay: 0.15 * index + 0.5,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: card,
            start: 'top 80%',
            toggleActions: 'play none none none',
          }
        }
      );
      
      // Social icons animation
      const socialIcons = card.querySelectorAll('.flex.justify-center a');
      gsap.fromTo(socialIcons,
        { scale: 0, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          stagger: 0.1,
          duration: 0.4,
          delay: 0.15 * index + 0.8,
          ease: 'back.out(2)',
          scrollTrigger: {
            trigger: card,
            start: 'top 75%',
            toggleActions: 'play none none none'
          }
        }
      );
    });
    
    // Achievements & Certifications Section
    const achievementsSection = gsap.timeline({
      scrollTrigger: {
        trigger: '.py-16.bg-blue-900',
        start: 'top 75%',
        end: 'top 60%',
        toggleActions: 'play none none none',
        scrub:2
      }
    });
    
    achievementsSection
      .from('.py-16.bg-blue-900 h2', {
        y: -50,
        filter: 'blur(10px)',
        opacity: 0,
        duration: 1,
        ease: 'power2.out'
      })
      .from('.py-16.bg-blue-900 .w-24.h-1.bg-yellow-500.mx-auto', {
        width: 0,
        duration: 0.6,
        ease: 'power1.out'
      }, '-=0.5');
    
    // Awards animation with bounce effect
    gsap.from('.py-16.bg-blue-900 .fas.fa-trophy', {
      x: -50,
      opacity: 0,
      stagger: 0.2,
      duration: 0.6,
      ease: 'back.out(1.7)',
      scrollTrigger: {
        trigger: '.py-16.bg-blue-900 ul',
        start: 'top 85%',
        toggleActions: 'play none none none',
      }
    });
    
    gsap.from('.py-16.bg-blue-900 li div', {
      x: 30,
      opacity: 0,
      stagger: 0.2,
      duration: 0.6,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: '.py-16.bg-blue-900 ul',
        start: 'top 85%',
        toggleActions: 'play none none none',
      }
    });
    
    // Certifications grid with flip animation
    gsap.from('.py-16.bg-blue-900 .grid-cols-2 > div', {
      scale: 0,
      opacity: 0,
      stagger: 0.2,
      duration: 0.8,
      rotationX: 90,
      transformOrigin: 'center top',
      ease: 'back.out(1.4)',
      scrollTrigger: {
        trigger: '.py-16.bg-blue-900 .grid-cols-2',
        start: 'top 80%',
        toggleActions: 'play none none none'
      }
    });
    
    // Testimonials Section
    const testimonialSection = gsap.timeline({
      scrollTrigger: {
        trigger: '.py-16.mt-\\[64px\\]',
        start: 'top 75%',
        end:'top 50%',
        toggleActions: 'play none none none',
        scrub:1,
      }
    });
    
    testimonialSection
      .from('.py-16.mt-\\[64px\\] h2', {
        scale: 1.5,
        opacity: 0,
        duration: 1.2,
        ease: 'power3.out'
      })
      .from('.py-16.mt-\\[64px\\] .w-24.h-1.bg-yellow-500.mx-auto', {
        width: 0,
        duration: 0.6,
        ease: 'power1.out'
      }, '-=0.8');
    
    // Testimonial cards with staggered reveal
    gsap.from('.py-16.mt-\\[64px\\] .md\\:grid-cols-3 > div', {
      y: 80,
      opacity: 0,
      stagger: 0.3,
      duration: 0.8,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: '.py-16.mt-\\[64px\\] .md\\:grid-cols-3',
        start: 'top 80%',
        toggleActions: 'play none none none'
      }
    });
    
    // Star rating animation
    gsap.from('.py-16.mt-\\[64px\\] .fas.fa-star', {
      scale: 0,
      opacity: 0,
      stagger: 0.05,
      duration: 0.3,
      ease: 'back.out(3)',
      scrollTrigger: {
        trigger: '.py-16.mt-\\[64px\\] .md\\:grid-cols-3',
        start: 'center 80%',
        toggleActions: 'play none none none'
      }
    });
    
    // Call to Action Section
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
      
    
    // Add hover animations for team cards and CTA buttons
    const teamMemberCards = document.querySelectorAll('.bg-gray-50.mt-\\[49px\\] .md\\:grid-cols-4 > div');
    teamMemberCards.forEach(card => {
      const image = card.querySelector('img');
      
      card.addEventListener('mouseenter', () => {
        gsap.to(image, {
          scale: 1.1,
          duration: 0.4
        });
        
        gsap.to(card, {
          y: -10,
          boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
          duration: 0.3
        });
      });
      
      card.addEventListener('mouseleave', () => {
        gsap.to(image, {
          scale: 1,
          duration: 0.4
        });
        
        gsap.to(card, {
          y: 0,
          boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
          duration: 0.3
        });
      });
    });
    
    // CTA buttons hover effect
    const ctaButtons = document.querySelectorAll('.py-16.w-\\[60\\%\\] a');
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
  });