// ===== Mobile Menu Toggle =====
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');
menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

// ===== Contact Form Handling =====
const form = document.getElementById('contact-form');
const statusText = document.querySelector('.form-status');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  statusText.textContent = "Sending message...";
  statusText.style.color = "#0097a7";

  // Simulated delay (replace with actual backend endpoint later)
  setTimeout(() => {
    statusText.textContent = "Message sent successfully!";
    statusText.style.color = "#00bcd4";
    form.reset();
  }, 1500);
});
