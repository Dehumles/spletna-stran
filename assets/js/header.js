// Function to initialize header scripts
function initHeaderScripts() {
  const header = document.querySelector('.navbar');
  const toggleButton = document.querySelector('.navbar-toggler');
  const navLinks = document.querySelectorAll('.nav-link');

  // Change navbar background on scroll
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      header.classList.add('navbar-scrolled');
    } else {
      header.classList.remove('navbar-scrolled');
    }
  });

  // Close mobile menu when a link is clicked
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      if (window.innerWidth < 992) {
        toggleButton.click();
      }
    });
  });

  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
}

// Call initHeaderScripts when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', initHeaderScripts);