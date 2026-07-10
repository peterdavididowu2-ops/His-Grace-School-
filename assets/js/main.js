/**
 * His Grace School - Core JS
 * Traditional static website script
 */

document.addEventListener('DOMContentLoaded', () => {
  setupMobileMenu();
  setupContactForm();
  setupHeaderScroll();
  setupHeroSlider();
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

/**
 * Handle automatic and interactive fade slider for the hero section
 */
function setupHeroSlider() {
  const slides = document.querySelectorAll('.hero-slide');
  const dots = document.querySelectorAll('.slider-dot');
  const prevBtn = document.getElementById('slider-prev');
  const nextBtn = document.getElementById('slider-next');

  if (slides.length === 0) return;

  let currentSlide = 0;
  let slideInterval = null;
  const intervalTime = 6000; // Transition every 6 seconds

  function showSlide(index) {
    // Wrap index around boundaries
    if (index >= slides.length) {
      currentSlide = 0;
    } else if (index < 0) {
      currentSlide = slides.length - 1;
    } else {
      currentSlide = index;
    }

    // Hide all slides and reset dot styles
    slides.forEach((slide) => {
      slide.style.opacity = '0';
      slide.style.zIndex = '0';
    });
    dots.forEach((dot) => {
      dot.className = 'slider-dot w-3 h-3 rounded-full bg-white/40 hover:bg-white/70 transition-all duration-300';
    });

    // Show current slide
    slides[currentSlide].style.opacity = '1';
    slides[currentSlide].style.zIndex = '1';

    // Highlight current dot
    if (dots[currentSlide]) {
      dots[currentSlide].className = 'slider-dot w-3 h-3 rounded-full bg-white transition-all duration-300 ring-2 ring-primary/20';
    }
  }

  function nextSlide() {
    showSlide(currentSlide + 1);
  }

  function prevSlide() {
    showSlide(currentSlide - 1);
  }

  function startAutoSlide() {
    stopAutoSlide();
    slideInterval = setInterval(nextSlide, intervalTime);
  }

  function stopAutoSlide() {
    if (slideInterval) {
      clearInterval(slideInterval);
    }
  }

  // Next and Previous controls
  if (nextBtn) {
    nextBtn.addEventListener('click', () => {
      nextSlide();
      startAutoSlide(); // Reset timer
    });
  }

  if (prevBtn) {
    prevBtn.addEventListener('click', () => {
      prevSlide();
      startAutoSlide(); // Reset timer
    });
  }

  // Dot navigation
  dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
      showSlide(index);
      startAutoSlide(); // Reset timer
    });
  });

  // Start slideshow
  showSlide(currentSlide);
  startAutoSlide();
}

