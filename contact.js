

document.addEventListener('DOMContentLoaded', function() {
    // Register ScrollTrigger plugin
    gsap.registerPlugin(ScrollTrigger);
    
    // Initialize smooth scrolling
    let smoothScroll = {
      el: document.body,
      smooth: 15,
      smoothTouch: 0.1
    };
    
    // Hero Section animations
    gsap.from('.relative.text-white h1', {
      scrollTrigger: {
        trigger: '.relative.text-white',
        start: 'top 80%',
        scrub:2,
      },
      y: 50,
      opacity: 0,
      duration: 1.2,
      ease: 'power3.out'
    });
    
    gsap.from('.relative.text-white p', {
      scrollTrigger: {
        trigger: '.relative.text-white',
        start: 'top 70%',
      },
      y: 30,
      opacity: 0,
      duration: 1.2,
      delay: 0.3,
      ease: 'power3.out'
    });
    
    // Let's Connect section animations
    gsap.from('.text-connect', {
      scrollTrigger: {
        trigger: '.text-connect',
        start: 'top 85%',
      },
      y: 40,
      opacity: 0,
      duration: 1,
      ease: 'back.out(1.7)'
    });
    
    gsap.from('.w-24.h-1.bg-yellow-500', {
      scrollTrigger: {
        trigger: '.w-24.h-1.bg-yellow-500',
        start: 'top 90%',
      },
      scaleX: 0,
      transformOrigin: 'left center',
      duration: 1.2,
      ease: 'power3.out'
    });
    
    // Contact info items staggered animation
    gsap.from('.space-y-6 .flex.items-center', {
      scrollTrigger: {
        trigger: '.space-y-6',
        start: 'top 80%',
        end:'top 60%',
        scrub: 2,
      },
      y: 30,
      opacity: 0,
      stagger: 0.2,
      duration: 0.8,
      ease: 'power2.out'
    });
    
    // Social media icons animation
    gsap.from('.flex.space-x-4.w-\\[36\\%\\]', {
      scrollTrigger: {
        trigger: '.flex.space-x-4.w-\\[36\\%\\]',
        start: 'top 85%',
        end:'top 70%',
        scrub: 2,
      },
      scale: 0.5,
      opacity: 0,
      duration: 0.8,
      ease: 'back.out(1.7)'
    });
    
    // Contact form animation
    gsap.from('.bg-white.rounded-2xl.shadow-xl', {
      scrollTrigger: {
        trigger: '.bg-white.rounded-2xl.shadow-xl',
        start: 'top 75%',
      },
      y: 50,
      opacity: 0,
      duration: 1,
      ease: 'power3.out'
    });
    
    // Form elements staggered animation
    gsap.from('.bg-white.rounded-2xl.shadow-xl form > div', {
      scrollTrigger: {
        trigger: '.bg-white.rounded-2xl.shadow-xl',
        start: 'top 70%',
      },
      y: 20,
      opacity: 0,
      stagger: 0.15,
      duration: 0.7,
      ease: 'power2.out'
    });
    
    // Our Offices heading animation
    gsap.from('.text-office', {
      scrollTrigger: {
        trigger: '.text-office',
        start: 'top 85%',
        end: 'top 70%',
        scrub:2,
      },
      y: 40,
      opacity: 0,
      duration: 1,
      ease: 'back.out(1.7)'
    });
    
    // Office cards animation
    gsap.from('.grid.grid-cols-1.md\\:grid-cols-2.lg\\:grid-cols-3 > div', {
      scrollTrigger: {
        trigger: '.grid.grid-cols-1.md\\:grid-cols-2.lg\\:grid-cols-3',
        start: 'top 75%',
        end: 'top 60%',
        scrub:2,
      },
      y: 60,
      opacity: 0,
      stagger: 0.2,
      duration: 0.8,
      ease: 'power3.out'
    });
    
    // Working Hours heading animation
    gsap.from('.text-4xl.bg-gradient-to-br.bg-clip-text.text-transparent', {
      scrollTrigger: {
        trigger: '.text-4xl.bg-gradient-to-br.bg-clip-text.text-transparent',
        start: 'top 85%',
        end: 'top 70%',
        scrub:2,
      },
      y: 30,
      opacity: 0,
      duration: 1,
      ease: 'back.out(1.7)'
    });
    
    // Working hours content animation
    gsap.from('.rounded-lg.shadow-lg.p-8.border.border-solid', {
      scrollTrigger: {
        trigger: '.rounded-lg.shadow-lg.p-8.border.border-solid',
        start: 'top 80%',
        
      },
      scale: 0.9,
      opacity: 0,
      duration: 1,
      ease: 'power3.out'
    });
    
    // Working hours rows animation
    gsap.from('.space-y-4 .flex.justify-between', {
      scrollTrigger: {
        trigger: '.space-y-4',
        start: 'top 80%',
        end: 'top 65%',
        scrub:2,
      },
      x: -30,
      opacity: 0,
      stagger: 0.2,
      duration: 0.7,
      ease: 'power2.out'
    });
    
    // FAQ section images animation
    gsap.from('.w-\\[427\\.388px\\]', {
      scrollTrigger: {
        trigger: '.w-\\[100\\%\\].h-\\[455\\.675px\\]',
        start: 'top 75%',
        end: 'top 60%',
        scrub:2,
      },
      x: -100,
      y: -50,
      opacity: 0,
      duration: 1.2,
      ease: 'power3.out'
    });
    
    gsap.from('.w-\\[356\\.15px\\]', {
      scrollTrigger: {
        trigger: '.w-\\[100\\%\\].h-\\[455\\.675px\\]',
        start: 'top 75%',
        end: 'top 60%',
        scrub:2,
      },
      x: 100,
      y: 50,
      opacity: 0,
      duration: 1.2,
      ease: 'power3.out'
    });
    
    // FAQ heading animation
    gsap.from('#faq-section h2', {
      scrollTrigger: {
        trigger: '#faq-section',
        start: 'top 85%',
        end: 'top 65%',
        scrub:2,
      },
      y: 40,
      opacity: 0,
      duration: 1,
      ease: 'back.out(1.7)'
    });
    
    // FAQ items staggered animation
    gsap.from('.bg-white.rounded-lg.shadow-md', {
      scrollTrigger: {
        trigger: '#faq-section',
        start: 'top 75%',
        end: 'top 60%',
        scrub:2,
      },
      y: 40,
      opacity: 0,
      stagger: 0.2,
      duration: 0.8,
      ease: 'power3.out'
    });
  
    // Add hover animations for interactive elements
    
    // Social media icons hover effect
    document.querySelectorAll('.flex.space-x-4 a').forEach(icon => {
      icon.addEventListener('mouseenter', () => {
        gsap.to(icon, {
          scale: 1.2,
          duration: 0.3,
          ease: 'power2.out'
        });
      });
      
      icon.addEventListener('mouseleave', () => {
        gsap.to(icon, {
          scale: 1,
          duration: 0.3,
          ease: 'power2.out'
        });
      });
    });
    
    // Submit button hover effect
    const submitButton = document.querySelector('button[type="submit"]');
    if (submitButton) {
      submitButton.addEventListener('mouseenter', () => {
        gsap.to(submitButton, {
          backgroundColor: '#1e40af',
          scale: 1.03,
          duration: 0.3
        });
      });
      
      submitButton.addEventListener('mouseleave', () => {
        gsap.to(submitButton, {
          backgroundColor: '#1e3a8a',
          scale: 1,
          duration: 0.3
        });
      });
    }
    
    // Add parallax effect to hero section
    gsap.to('.absolute.inset-0.z-[-1] img', {
      scrollTrigger: {
        trigger: '.relative.text-white',
        start: 'top top',
        end: 'bottom top',
        scrub: true
      },
      y: 100,
      ease: 'none'
    });
  
    // Add a scroll-to-top button that appears after scrolling down
    const body = document.querySelector('body');
    const scrollTopBtn = document.createElement('button');
    scrollTopBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
    scrollTopBtn.className = 'fixed bottom-6 right-6 bg-blue-800 text-white p-4 rounded-full shadow-lg opacity-0 z-50';
    body.appendChild(scrollTopBtn);
    
    scrollTopBtn.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
    
    gsap.to(scrollTopBtn, {
      scrollTrigger: {
        trigger: 'body',
        start: '200 top',
        end: '200 top',
        toggleActions: 'play none none reverse'
      },
      opacity: 1,
      duration: 0.3
    });
  });