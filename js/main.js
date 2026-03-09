// ============================================
// SURE TRAVEL AGENCY — Main JavaScript v8
// ============================================

const EMAILJS_PUBLIC_KEY       = 'YOUR_PUBLIC_KEY';
const EMAILJS_SERVICE_ID       = 'YOUR_SERVICE_ID';
const EMAILJS_CONTACT_TEMPLATE = 'YOUR_CONTACT_TEMPLATE_ID';
const EMAILJS_BOOKING_TEMPLATE = 'YOUR_BOOKING_TEMPLATE_ID';

document.addEventListener('DOMContentLoaded', function () {

  if (typeof emailjs !== 'undefined') {
    emailjs.init(EMAILJS_PUBLIC_KEY);
  }

  // ---- Hamburger Menu ----
  const hamburger = document.getElementById('hamburger');
  const navMenu   = document.getElementById('nav-menu');

  if (hamburger && navMenu) {
    hamburger.addEventListener('click', function () {
      const isOpen = navMenu.classList.toggle('open');
      hamburger.setAttribute('aria-expanded', isOpen);
      // Animate hamburger to X
      const spans = hamburger.querySelectorAll('span');
      if (isOpen) {
        spans[0].style.transform = 'translateY(7px) rotate(45deg)';
        spans[1].style.opacity   = '0';
        spans[2].style.transform = 'translateY(-7px) rotate(-45deg)';
      } else {
        spans[0].style.transform = '';
        spans[1].style.opacity   = '';
        spans[2].style.transform = '';
      }
    });

    // Close nav when clicking a nav link (mobile)
    navMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('open');
        hamburger.setAttribute('aria-expanded', 'false');
        const spans = hamburger.querySelectorAll('span');
        spans[0].style.transform = '';
        spans[1].style.opacity   = '';
        spans[2].style.transform = '';
      });
    });

    // Close nav on outside click
    document.addEventListener('click', function (e) {
      if (!hamburger.contains(e.target) && !navMenu.contains(e.target)) {
        navMenu.classList.remove('open');
        hamburger.setAttribute('aria-expanded', 'false');
        const spans = hamburger.querySelectorAll('span');
        spans[0].style.transform = '';
        spans[1].style.opacity   = '';
        spans[2].style.transform = '';
      }
    });

    // Close on Escape
    document.addEventListener('keydown', function(e) {
      if (e.key === 'Escape') {
        navMenu.classList.remove('open');
        hamburger.setAttribute('aria-expanded', 'false');
      }
    });
  }

  // ---- Active Nav Link ----
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('nav a').forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPage || href === ('../pages/' + currentPage)) {
      link.classList.add('active');
    }
  });

  // ---- FAQ Accordion ----
  document.querySelectorAll('.faq-question').forEach(btn => {
    btn.addEventListener('click', function () {
      const item   = this.closest('.faq-item');
      const isOpen = item.classList.contains('open');
      document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('open'));
      if (!isOpen) item.classList.add('open');
    });
  });

  // ---- Trip type toggle (Booking page) ----
  const toggleBtns      = document.querySelectorAll('.toggle-btn');
  const returnDateGroup = document.getElementById('return-date-group');

  toggleBtns.forEach(btn => {
    btn.addEventListener('click', function () {
      toggleBtns.forEach(b => b.classList.remove('active'));
      this.classList.add('active');
      if (returnDateGroup) {
        returnDateGroup.style.display = this.dataset.type === 'return' ? 'flex' : 'none';
      }
    });
  });

  // ---- Contact Form (support.html) ----
  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
      e.preventDefault();
      const btn          = contactForm.querySelector('button[type="submit"]');
      const originalText = btn.textContent;
      btn.textContent    = 'Sending...';
      btn.disabled       = true;

      const fields = contactForm.querySelectorAll('input, textarea');
      const templateParams = {
        from_name:  fields[0]?.value || '',
        from_email: fields[1]?.value || '',
        subject:    fields[2]?.value || 'Contact Form',
        message:    fields[3]?.value || '',
      };

      emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_CONTACT_TEMPLATE, templateParams)
        .then(() => {
          btn.textContent  = '✓ Message sent! We\'ll reply within 30 minutes.';
          btn.style.background = '#10b981';
          contactForm.reset();
          setTimeout(() => { btn.textContent = originalText; btn.style.background = ''; btn.disabled = false; }, 5000);
        })
        .catch(() => {
          const mailto = 'mailto:suretravelagency9@gmail.com?subject=' + encodeURIComponent(templateParams.subject) + '&body=' + encodeURIComponent('From: ' + templateParams.from_name + '\n' + templateParams.message);
          window.location.href = mailto;
          btn.textContent = originalText;
          btn.disabled = false;
        });
    });
  }

  // ---- Scroll-reveal animations ----
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity   = '1';
          entry.target.style.transform = 'translateY(0)';
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.08 });

    document.querySelectorAll(
      '.service-card, .why-item, .testimonial-card, .payment-card, .founder-card, .bible-card, .mv-card'
    ).forEach(el => {
      el.style.opacity    = '0';
      el.style.transform  = 'translateY(20px)';
      el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
      observer.observe(el);
    });
  }

  // ---- Sticky header shadow ----
  window.addEventListener('scroll', function () {
    const header = document.querySelector('header');
    if (header) {
      header.style.boxShadow = window.scrollY > 20 ? '0 4px 24px rgba(0,0,0,0.3)' : 'none';
    }
  }, { passive: true });

});

// ---- Autocomplete helper (used in booking.html) ----
function makeAutocomplete(input, data, labelFn) {
  if (!input || !data) return;
  labelFn = labelFn || (item => typeof item === 'string' ? item : item.city + ', ' + item.country);

  let dropdown = null;

  function closeDropdown() {
    if (dropdown) { dropdown.remove(); dropdown = null; }
  }

  input.addEventListener('input', function () {
    closeDropdown();
    const q = this.value.trim().toLowerCase();
    if (q.length < 2) return;
    const matches = data.filter(item => {
      const label = labelFn(item).toLowerCase();
      return label.includes(q);
    }).slice(0, 8);
    if (!matches.length) return;

    const wrap = input.closest('[style*="position"]') || input.parentElement;
    if (!wrap.style.position) wrap.style.position = 'relative';

    dropdown = document.createElement('ul');
    dropdown.className = 'autocomplete-dropdown';
    matches.forEach(item => {
      const li = document.createElement('li');
      li.textContent = labelFn(item);
      li.addEventListener('mousedown', e => {
        e.preventDefault();
        input.value = labelFn(item);
        closeDropdown();
      });
      dropdown.appendChild(li);
    });
    wrap.appendChild(dropdown);
  });

  document.addEventListener('click', e => {
    if (!input.contains(e.target)) closeDropdown();
  });
}
