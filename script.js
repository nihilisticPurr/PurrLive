document.addEventListener('DOMContentLoaded', () => {
  const menuToggle = document.getElementById('menu-toggle');
  const navLinks = document.getElementById('nav-links');

  // Toggle navigation menu on mobile
  if (menuToggle && navLinks) {
    menuToggle.addEventListener('click', () => {
      navLinks.classList.toggle('active');
      
      // Update hamburger button symbol based on state
      if (navLinks.classList.contains('active')) {
        menuToggle.textContent = '✕';
      } else {
        menuToggle.textContent = '☰';
      }
    });

    // Close menu when clicking outside
    document.addEventListener('click', (event) => {
      if (!menuToggle.contains(event.target) && !navLinks.contains(event.target)) {
        navLinks.classList.remove('active');
        menuToggle.textContent = '☰';
      }
    });
  }

  // Active page highlights automatically in case URL changes
  const currentPath = window.location.pathname.split('/').pop();
  const links = document.querySelectorAll('.nav-links a');
  
  if (currentPath) {
    links.forEach(link => {
      const href = link.getAttribute('href');
      if (href === currentPath) {
        links.forEach(l => l.classList.remove('active'));
        link.classList.add('active');
      }
    });
  }
});
