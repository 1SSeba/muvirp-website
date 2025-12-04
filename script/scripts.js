const menuBtn = document.getElementById('menuBtn');
const sideMenu = document.getElementById('sideMenu');
const menuOverlay = document.getElementById('menuOverlay');
const closeBtn = document.getElementById('closeBtn');

function openMenu() { 
  sideMenu.classList.add('active'); 
  menuOverlay.classList.add('active'); 
}

function closeMenu() { 
  sideMenu.classList.remove('active'); 
  menuOverlay.classList.remove('active'); 
}

menuBtn.addEventListener('click', openMenu);
closeBtn.addEventListener('click', closeMenu);
menuOverlay.addEventListener('click', closeMenu);

const termsBtn = document.getElementById('termsBtn');
const termsModal = document.getElementById('termsModal');
const closeModal = document.getElementById('closeModal');

termsBtn.addEventListener('click', () => { 
  termsModal.style.display = 'flex'; 
});

closeModal.addEventListener('click', () => { 
  termsModal.style.display = 'none'; 
});

termsModal.addEventListener('click', (e) => { 
  if(e.target === termsModal) termsModal.style.display = 'none'; 
});

const sections = document.querySelectorAll('section');

function activateVisibleSections() {
  sections.forEach(s => { 
    if (s.getBoundingClientRect().top < window.innerHeight - 100) {
      s.classList.add('active'); 
    }
  });
}

window.addEventListener('load', activateVisibleSections);

window.addEventListener('scroll', activateVisibleSections);

particlesJS("particles-js", {
  "particles": {
    "number": { "value": 120, "density": { "enable": true, "value_area": 900 } },
    "color": { "value": ["#ff6ec7","#7c3aed","#ff4d6d"] },
    "shape": { "type": "circle" },
    "opacity": { 
      "value": 0.7, 
      "random": true, 
      "anim": { "enable": true, "speed": 0.6, "opacity_min":0.2, "sync": false } 
    },
    "size": { 
      "value": 4, 
      "random": true, 
      "anim": { "enable": true, "speed": 2, "size_min":1, "sync": false } 
    },
    "line_linked": { 
      "enable": true, 
      "distance": 160, 
      "color": "#003cbdff", 
      "opacity": 0.35, 
      "width": 1 
    },
    "move": { 
      "enable": true, 
      "speed": 2.5, 
      "direction": "none", 
      "random": true, 
      "straight": false, 
      "out_mode": "out", 
      "bounce": false, 
      "attract": { "enable": true, "rotateX": 600, "rotateY": 1200 } 
    }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": { "enable": true, "mode": "grab" },
      "onclick": { "enable": true, "mode": "push" },
      "resize": true
    },
    "modes": {
      "grab": { "distance": 160, "line_linked": { "opacity": 0.7 } },
      "push": { "particles_nb": 6 }
    }
  },
  "retina_detect": true
});
