// ===== Mobile Menu Toggle =====
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');
menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

// ===== Animate Progress Bars on Scroll =====
const progressSpans = document.querySelectorAll('.progress-bar span');

window.addEventListener('scroll', () => {
  progressSpans.forEach(span => {
    const rect = span.getBoundingClientRect().top;
    if (rect < window.innerHeight - 100) {
      span.style.width = span.getAttribute('data-skill') + '%';
    }
  });
});
// ===== Smooth Scrolling for Anchor Links =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {   
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
}   
);
// ===== Scroll Reveal Animations =====
const revealElements = document.querySelectorAll('.reveal');        
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) { 
        entry.target.classList.add('active');   
        observer.unobserve(entry.target); // Optional: Stop observing after reveal
    }   
    }); 
}, { threshold: 0.1 }); // Adjust threshold as needed   