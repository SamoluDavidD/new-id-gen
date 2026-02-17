// ===== Mobile Menu Toggle =====
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});
// Close menu when a link is clicked (for better UX on mobile)
navLinks.addEventListener('click', (e) => {
  if (e.target.tagName === 'A') {   
    navLinks.classList.remove('active');
  } 
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

revealElements.forEach(el => {
  observer.observe(el);
}); 

// ===== Page Loader =====
window.addEventListener('load', () => {
  const loader = document.getElementById('loader');
  loader.classList.add('fade-out');
  setTimeout(() => {
    loader.style.display = 'none';
  }, 500); // Match this duration with the CSS animation duration
}); 

