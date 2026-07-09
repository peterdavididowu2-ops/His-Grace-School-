/**
 * His Grace School - Core JS
 * Traditional static website script
 */

document.addEventListener('DOMContentLoaded', () => {
  setupMobileMenu();
  setupContactForm();
  setupHeaderScroll();
});

/**
 * Handle mobile menu toggle across pages
 */
function setupMobileMenu() {
  const menuButton = document.getElementById('mobile-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  
  if (!menuButton || !mobileMenu) return;

  const menuOpenIcon = document.getElementById('menu-open-icon');
  const menuCloseIcon = document.getElementById('menu-close-icon');

  menuButton.addEventListener('click', () => {
    const isExpanded = menuButton.getAttribute('aria-expanded') === 'true';
    
    // Toggle state
    menuButton.setAttribute('aria-expanded', !isExpanded);
    mobileMenu.classList.toggle('hidden');
    
    // Toggle icons
    if (menuOpenIcon && menuCloseIcon) {
      menuOpenIcon.classList.toggle('hidden');
      menuCloseIcon.classList.toggle('hidden');
    }
  });
}

/**
 * Handle form submission seamlessly with interactive messages
 */
function setupContactForm() {
  const contactForm = document.getElementById('contact-form');
  const formSuccessState = document.getElementById('form-success-state');
  
  if (!contactForm) return;

  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

    // Basic Validation
    const name = document.getElementById('fullName')?.value;
    const phone = document.getElementById('phoneNumber')?.value;
    const message = document.getElementById('detailedMessage')?.value;

    if (!name || !phone || !message) {
      alert('Please fill in all required fields (Name, Phone Number, and Message).');
      return;
    }

    const submitBtn = contactForm.querySelector('button[type="submit"]');
    if (submitBtn) {
      submitBtn.disabled = true;
      submitBtn.innerText = 'Transmitting Message...';
    }

    // Simulate API submission delay
    setTimeout(() => {
      if (formSuccessState) {
        contactForm.classList.add('hidden');
        formSuccessState.classList.remove('hidden');
      } else {
        alert('Thank you for contacting His Grace School! Your message has been submitted.');
        contactForm.reset();
        if (submitBtn) {
          submitBtn.disabled = false;
          submitBtn.innerHTML = `<span>Submit Inquiry</span>`;
        }
      }
    }, 1200);
  });

  // Re-enable form reset
  const resetBtn = document.getElementById('form-reset-btn');
  if (resetBtn && formSuccessState && contactForm) {
    resetBtn.addEventListener('click', () => {
      formSuccessState.classList.add('hidden');
      contactForm.classList.remove('hidden');
      contactForm.reset();
      const submitBtn = contactForm.querySelector('button[type="submit"]');
      if (submitBtn) {
        submitBtn.disabled = false;
        submitBtn.innerHTML = `
          <span>Submit Inquiry</span>
          <svg class="h-4 w-4 ml-2 inline" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 19l7-7 7 7M5 5l7 7-7 7" />
          </svg>
        `;
      }
    });
  }
}

/**
 * Handle sticky header visual style adjustments on scroll
 */
function setupHeaderScroll() {
  const header = document.querySelector('header');
  if (!header) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 20) {
      header.classList.add('shadow-md');
    } else {
      header.classList.remove('shadow-md');
    }
  });
}
