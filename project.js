// ===== Mobile Menu Toggle =====
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

// ===== Fade-in Animation on Scroll =====
const projectCards = document.querySelectorAll('.project-card');

window.addEventListener('scroll', () => {
  projectCards.forEach(card => {
    const cardTop = card.getBoundingClientRect().top;
    if (cardTop < window.innerHeight - 100) {
      card.style.opacity = 1;
      card.style.transform = 'translateY(0)';
    }
  });
});
