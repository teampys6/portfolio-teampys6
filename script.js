const navEl = document.querySelector('.nav');
const hamburgerEl = document.querySelector('.hamburger');
window.sr = ScrollReveal({ reset: true })

sr.reveal('#home', { 
    duration: 1000,
    scale: 0.1,
})

sr.reveal('#about', { 
  duration: 1000,
  scale: 0.1,
})

sr.reveal('#contacts', { 
  duration: 1000,
  scale: 0.1,
})

sr.reveal('#projects', { 
  duration: 1000,
  scale: 0.1,
})

sr.reveal('#skills', { 
  duration: 1000,
  distance: '40px',
})

hamburgerEl.addEventListener('click', () => {
  navEl.classList.toggle('nav--open');
  hamburgerEl.classList.toggle('hamburger--open');
});

navEl.addEventListener('click', () => {
  navEl.classList.remove('nav--open');
  hamburgerEl.classList.remove('hamburger--open');
});