// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const href = this.getAttribute('href');
        // Only scroll if the href is not just '#'
        if (href !== '#') {
            document.querySelector(href).scrollIntoView({
                behavior: 'smooth'
            });
        }
        // Close mobile menu if open
        if (document.querySelector('.nav-links').classList.contains('active')) {
            toggleMenu();
        }
    });
});

// Hamburger menu functionality
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

function toggleMenu() {
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('active');
}

hamburger.addEventListener('click', toggleMenu);


// Navbar scroll effect
const nav = document.querySelector('nav');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll <= 0) {
        nav.style.boxShadow = 'none';
    } else {
        nav.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
    }
    
    lastScroll = currentScroll;
});

// Animate elements on scroll
const animateOnScroll = () => {
    const elements = document.querySelectorAll('.project-card, .skill-item, .cert-card, .section-title');
    
    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementBottom = element.getBoundingClientRect().bottom;
        
        if (elementTop < window.innerHeight && elementBottom > 0) {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }
    });
};

// Initial setup for scroll animations
document.addEventListener('DOMContentLoaded', () => {
    const elements = document.querySelectorAll('.project-card, .skill-item, .cert-card, .section-title');
    elements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'all 0.6s ease';
    });
    
    animateOnScroll();
});

window.addEventListener('scroll', animateOnScroll);

// Form submission animation
const form = document.querySelector('.contact-form');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const submitBtn = form.querySelector('.submit-btn');
    submitBtn.innerHTML = 'Sending...';
    submitBtn.style.background = '#666';
    
    // Simulate form submission
    setTimeout(() => {
        submitBtn.innerHTML = 'Message Sent!';
        submitBtn.style.background = '#4CAF50';
        form.reset();
        
        setTimeout(() => {
            submitBtn.innerHTML = 'Send Message';
            submitBtn.style.background = '';
        }, 3000);
    }, 1500);
});

// Animate skill progress bars
const animateSkills = () => {
    const skillItems = document.querySelectorAll('.skill-item');
    skillItems.forEach(item => {
        const progress = item.querySelector('.skill-progress');
        const width = progress.style.width;
        progress.style.width = '0';
        setTimeout(() => {
            progress.style.width = width;
        }, 200);
    });
};

// Trigger skill animation when skills section is in view
const skillsSection = document.querySelector('.skills-section');
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            animateSkills();
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

observer.observe(skillsSection);