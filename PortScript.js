// Scroll to Top Button
const scrollToTop = document.getElementById('scrollToTop');

window.addEventListener('scroll', () => {
  scrollToTop.style.display = window.scrollY > 400 ? 'block' : 'none';
});

scrollToTop.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Prevent contact form from refreshing page
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    alert("Thank you! Your message has been received.");
    contactForm.reset();
  });
};
