/* ===================================================================
   PORTFOLIO MAIN JAVASCRIPT
=================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Dynamic Year in Footer
  const yearElement = document.getElementById('currentYear');
  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }

  // 2. Typewriter Effect
  const words = [
    'Java Full Stack Developer',
    'React & Spring Boot Developer',
    'Software Developer',
    'Building Practical Web Apps'
  ];
  let wordIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  const typeSpeed = 100;
  const deleteSpeed = 50;
  const delayBetweenWords = 1500;
  const typedTextEl = document.getElementById('typedText');

  function typeEffect() {
    if (!typedTextEl) return;
    const currentWord = words[wordIndex];

    if (isDeleting) {
      typedTextEl.textContent = currentWord.substring(0, charIndex - 1);
      charIndex--;
    } else {
      typedTextEl.textContent = currentWord.substring(0, charIndex + 1);
      charIndex++;
    }

    let currentSpeed = isDeleting ? deleteSpeed : typeSpeed;

    if (!isDeleting && charIndex === currentWord.length) {
      currentSpeed = delayBetweenWords;
      isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      wordIndex = (wordIndex + 1) % words.length;
      currentSpeed = 400;
    }

    setTimeout(typeEffect, currentSpeed);
  }

  typeEffect();

  // 3. Dark / Light Theme Toggle (Desktop & Mobile)
  const themeToggleBtn = document.getElementById('themeToggle');
  const themeToggleMobile = document.getElementById('themeToggleMobile');
  const themeIcon = document.getElementById('themeIcon');
  const themeIconMobile = document.getElementById('themeIconMobile');
  const currentTheme = localStorage.getItem('portfolio-theme') || 'dark';

  function applyTheme(theme) {
    if (theme === 'light') {
      document.documentElement.setAttribute('data-theme', 'light');
      localStorage.setItem('portfolio-theme', 'light');
      if (themeIcon) themeIcon.className = 'bi bi-sun-fill';
      if (themeIconMobile) themeIconMobile.className = 'bi bi-sun-fill';
    } else {
      document.documentElement.removeAttribute('data-theme');
      localStorage.setItem('portfolio-theme', 'dark');
      if (themeIcon) themeIcon.className = 'bi bi-moon-stars-fill';
      if (themeIconMobile) themeIconMobile.className = 'bi bi-moon-stars-fill';
    }
  }

  // Initial apply
  applyTheme(currentTheme);

  function toggleThemeAction() {
    const isLight = document.documentElement.getAttribute('data-theme') === 'light';
    applyTheme(isLight ? 'dark' : 'light');
  }

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', toggleThemeAction);
  }
  if (themeToggleMobile) {
    themeToggleMobile.addEventListener('click', toggleThemeAction);
  }

  // 4. Navbar active link highlight on scroll & auto close on mobile
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
  const navbarCollapse = document.querySelector('.navbar-collapse');

  function updateActiveNavLink() {
    const scrollY = window.pageYOffset;

    sections.forEach(current => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop - 120;
      const sectionId = current.getAttribute('id');

      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        navLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${sectionId}`) {
            link.classList.add('active');
          }
        });
      }
    });
  }

  window.addEventListener('scroll', updateActiveNavLink);

  // Close mobile nav when clicking a link
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      if (navbarCollapse && navbarCollapse.classList.contains('show')) {
        const bsCollapse = bootstrap.Collapse.getInstance(navbarCollapse);
        if (bsCollapse) {
          bsCollapse.hide();
        }
      }
    });
  });

  // 5. Back to Top Button
  const backToTopBtn = document.getElementById('backToTop');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 400) {
      backToTopBtn?.classList.add('show');
    } else {
      backToTopBtn?.classList.remove('show');
    }
  });

  if (backToTopBtn) {
    backToTopBtn.addEventListener('click', (e) => {
      e.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }

  // 6. Project Filter Logic
  const filterBtns = document.querySelectorAll('.filter-btn');
  const projectItems = document.querySelectorAll('.project-item');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filterValue = btn.getAttribute('data-filter');

      projectItems.forEach(item => {
        if (filterValue === 'all' || item.getAttribute('data-category') === filterValue) {
          item.style.display = 'block';
          setTimeout(() => {
            item.style.opacity = '1';
            item.style.transform = 'scale(1)';
          }, 50);
        } else {
          item.style.opacity = '0';
          item.style.transform = 'scale(0.95)';
          setTimeout(() => {
            item.style.display = 'none';
          }, 250);
        }
      });
    });
  });

  // 7. Prepare an email draft for a direct user click
  const contactForm = document.getElementById('contactForm');
  const sendEmailBtn = document.getElementById('sendEmailBtn');

  if (contactForm && sendEmailBtn) {
    function updateEmailLink() {
      const name = document.getElementById('senderName')?.value || '';
      const email = document.getElementById('senderEmail')?.value || '';
      const subject = document.getElementById('senderSubject')?.value || 'Portfolio message';
      const message = document.getElementById('senderMessage')?.value || '';
      const body = `From: ${name}\nReply to: ${email}\n\n${message}`;
      sendEmailBtn.href = `mailto:vaishnavishelke0405@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    }

    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      sendEmailBtn.focus();
    });
    contactForm.addEventListener('input', updateEmailLink);
    sendEmailBtn.addEventListener('click', (e) => {
      if (!contactForm.reportValidity()) {
        e.preventDefault();
      }
    });

    updateEmailLink();
  }

  // 8. Quick WhatsApp Form direct sender helper
  const sendWhatsAppBtn = document.getElementById('sendWhatsAppBtn');
  if (sendWhatsAppBtn) {
    sendWhatsAppBtn.addEventListener('click', () => {
      const name = document.getElementById('senderName')?.value || 'Friend';
      const message = document.getElementById('senderMessage')?.value || 'Hello! I saw your portfolio.';
      const phone = '917822831312';
      const text = encodeURIComponent(`Hi, I'm ${name}! ${message}`);
      window.open(`https://wa.me/${phone}?text=${text}`, '_blank');
    });
  }
});
