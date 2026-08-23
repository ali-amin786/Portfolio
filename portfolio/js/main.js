gsap.registerPlugin(ScrollTrigger);

const scrollContainer = document.querySelector('.scroll-container');

/* ==========================================
   HERO — entrance animation
   ========================================== */
gsap.from('.hero-title', {
  opacity: 0, y: 30, duration: 1.2, ease: 'power3.out', delay: 0.3
});

gsap.from('.section-hero .section-footer', {
  opacity: 0, y: 20, duration: 0.8, ease: 'power2.out', delay: 0.8
});

/* ==========================================
   ABOUT — stagger left + right blocks
   ========================================== */
gsap.from('.about-left', {
  scrollTrigger: {
    trigger: '#about',
    scroller: scrollContainer,
    start: 'top 70%',
    toggleActions: 'play none none none'
  },
  opacity: 0, x: -40, duration: 1, ease: 'power3.out'
});

gsap.from('.about-right .about-block', {
  scrollTrigger: {
    trigger: '#about',
    scroller: scrollContainer,
    start: 'top 70%',
    toggleActions: 'play none none none'
  },
  opacity: 0, y: 25, duration: 0.8, stagger: 0.12, ease: 'power3.out', delay: 0.2
});

gsap.from('.skill-item', {
  scrollTrigger: {
    trigger: '.skills-block',
    scroller: scrollContainer,
    start: 'top 85%',
    toggleActions: 'play none none none'
  },
  opacity: 0, scale: 0.8, duration: 0.5, stagger: 0.06, ease: 'back.out(1.7)', delay: 0.3
});

/* ==========================================
   WORK — title fade + cards stagger
   ========================================== */
gsap.set('.work-title', { y: 20 });

gsap.to('.work-title', {
  scrollTrigger: {
    trigger: '#work',
    scroller: scrollContainer,
    start: 'top 60%',
    toggleActions: 'play none none none'
  },
  opacity: 1, y: 0, duration: 1, ease: 'power3.out'
});

gsap.to('.project-card', {
  scrollTrigger: {
    trigger: '#work',
    scroller: scrollContainer,
    start: 'top 50%',
    toggleActions: 'play none none none'
  },
  opacity: 1, y: 0, duration: 0.6, stagger: 0.12, ease: 'power3.out', delay: 0.25
});

/* ==========================================
   REVIEWS — title + cards
   ========================================== */
gsap.set('.reviews-title', { y: 20 });

gsap.to('.reviews-title', {
  scrollTrigger: {
    trigger: '#reviews',
    scroller: scrollContainer,
    start: 'top 65%',
    toggleActions: 'play none none none'
  },
  opacity: 1, y: 0, duration: 1, ease: 'power3.out'
});

gsap.from('.review-card', {
  scrollTrigger: {
    trigger: '#reviews',
    scroller: scrollContainer,
    start: 'top 55%',
    toggleActions: 'play none none none'
  },
  opacity: 0, scale: 0.95, duration: 0.5, stagger: 0.04, ease: 'power2.out', delay: 0.2
});

/* ==========================================
   MY APPROACH — title + cards stagger
   ========================================== */
gsap.set('.approach-title', { y: 20 });

gsap.to('.approach-title', {
  scrollTrigger: {
    trigger: '#approach',
    scroller: scrollContainer,
    start: 'top 65%',
    toggleActions: 'play none none none'
  },
  opacity: 1, y: 0, duration: 1, ease: 'power3.out'
});

gsap.to('.approach-card', {
  scrollTrigger: {
    trigger: '#approach',
    scroller: scrollContainer,
    start: 'top 55%',
    toggleActions: 'play none none none'
  },
  opacity: 1, y: 0, duration: 0.6, stagger: 0.2, ease: 'power3.out', delay: 0.2
});

/* ==========================================
   CONTACT + SOCIAL — combined final section
   ========================================== */
gsap.set('.contact-heading', { y: 25 });

gsap.to('.contact-heading', {
  scrollTrigger: {
    trigger: '#contact',
    scroller: scrollContainer,
    start: 'top 60%',
    toggleActions: 'play none none none'
  },
  opacity: 1, y: 0, duration: 1, ease: 'power3.out'
});

gsap.to('.contact-social-link', {
  scrollTrigger: {
    trigger: '#contact',
    scroller: scrollContainer,
    start: 'top 55%',
    toggleActions: 'play none none none'
  },
  opacity: 1, x: 0, duration: 0.5, stagger: 0.1, ease: 'power3.out', delay: 0.3
});

gsap.to('.contact-grow-title', {
  scrollTrigger: {
    trigger: '#contact',
    scroller: scrollContainer,
    start: 'top 55%',
    toggleActions: 'play none none none'
  },
  opacity: 1, duration: 0.8, ease: 'power2.out', delay: 0.2
});

gsap.to('.contact-grow-text', {
  scrollTrigger: {
    trigger: '#contact',
    scroller: scrollContainer,
    start: 'top 50%',
    toggleActions: 'play none none none'
  },
  opacity: 1, duration: 0.8, ease: 'power2.out', delay: 0.35
});

gsap.to('.contact-grow-list', {
  scrollTrigger: {
    trigger: '#contact',
    scroller: scrollContainer,
    start: 'top 48%',
    toggleActions: 'play none none none'
  },
  opacity: 1, duration: 0.8, ease: 'power2.out', delay: 0.45
});

gsap.to('.contact-cta', {
  scrollTrigger: {
    trigger: '#contact',
    scroller: scrollContainer,
    start: 'top 45%',
    toggleActions: 'play none none none'
  },
  opacity: 1, y: 0, duration: 0.7, ease: 'power3.out', delay: 0.55
});
