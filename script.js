// Smooth Scroll for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const section = document.querySelector(this.getAttribute('href'));
      if (section) {
        section.scrollIntoView({
          behavior: 'smooth'
        });
      }
    });
  });
  
  // Contact Form Submission Handler
  const contactForm = document.getElementById('contactForm');
  contactForm.addEventListener('submit', function (e) {
    e.preventDefault();
  
    // Capture form inputs
    const name = this.querySelector('input[type="text"]').value;
    const email = this.querySelector('input[type="email"]').value;
    const message = this.querySelector('textarea').value;
  
    // For now, just show a simple alert
    alert(`Thanks, ${name}! Your message has been received.`);
  
    // Clear form fields
    this.reset();
  });
  