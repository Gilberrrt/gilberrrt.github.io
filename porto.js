// Navbar scroll effect
window.addEventListener('scroll', function() {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

  function handleSubmit(e) {
    e.preventDefault(); // stop normal submit
    const form = e.target;

    fetch(form.action, {
      method: 'POST',
      body: new FormData(form),
      headers: {
        'Accept': 'application/json'
      }
    }).then(response => {
      if (response.ok) {
        alert("Thanks! Your message was sent.");
        form.reset(); // clear form fields
      } else {
        alert("Oops! There was a problem submitting your form.");
      }
    }).catch(error => {
      alert("Error submitting form");
    });
  }

const phrases = [
    "Let's Work Together ",         
    "一起合作吧 ",                  
    "Lass uns zusammenarbeiten ",   
    "Ayo kita bekerja sama "        
  ];

  const el = document.getElementById("typewriter");
  let phraseIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  let isEndOfWordPause = false;

  function type() {
    const currentPhrase = phrases[phraseIndex];
    
    if (!isDeleting && charIndex === currentPhrase.length) {
      // PAUSE at end before deleting
      isEndOfWordPause = true;
      setTimeout(() => {
        isDeleting = true;
        isEndOfWordPause = false;
        type();
      }, 1000); // Full pause duration after typing the last letter
      return;
    }

    if (isDeleting && charIndex === 0) {
      // Move to next phrase after delete
      isDeleting = false;
      phraseIndex = (phraseIndex + 1) % phrases.length;
    }

    const updatedText = currentPhrase.substring(0, charIndex);
    el.textContent = updatedText;

    // Update character index
    charIndex += isDeleting ? -1 : 1;

    // Set next speed
    const speed = isDeleting ? 50 : 100;
    if (!isEndOfWordPause) {
      setTimeout(type, speed);
    }
  }

  type();

// Mobile menu toggle (placeholder for mobile menu functionality)
function toggleMobileMenu() {
    // You can implement mobile menu functionality here
    console.log('Mobile menu clicked');
}

// Add animation on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements for animation
document.addEventListener('DOMContentLoaded', () => {
    const animateElements = document.querySelectorAll('.project-card, .skill-card');
    animateElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});