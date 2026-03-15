// =============================================
// NAV — scroll effect
// =============================================
window.addEventListener('scroll', () => {
  const nav = document.getElementById('navbar');
  const scrollTop = document.getElementById('scrollTop');

  if (window.scrollY > 50) {
    nav.classList.add('scrolled');
    scrollTop.classList.add('visible');
  } else {
    nav.classList.remove('scrolled');
    scrollTop.classList.remove('visible');
  }
});

// =============================================
// FADE IN — intersection observer
// =============================================
const fadeObserver = new IntersectionObserver((entries) => {
  entries.forEach(el => {
    if (el.isIntersecting) {
      el.target.classList.add('visible');
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.fade-in, .timeline-item').forEach(el => {
  fadeObserver.observe(el);
});

// =============================================
// PROJECT FILTER
// =============================================
function filterProjects(cat, btn) {
  document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');

  document.querySelectorAll('.project-card').forEach(card => {
    if (cat === 'all' || card.dataset.category === cat) {
      card.style.display = 'block';
    } else {
      card.style.display = 'none';
    }
  });
}

// =============================================
// CONTACT FORM — submit feedback
// =============================================
function handleSubmit() {
  const btn = document.querySelector('.btn-send');
  btn.textContent = 'Enviando...';
  btn.disabled = true;

  setTimeout(() => {
    btn.textContent = '✓ Mensagem enviada!';
    btn.style.background = '#10b981';

    setTimeout(() => {
      btn.textContent = 'Enviar mensagem →';
      btn.style.background = '';
      btn.disabled = false;
    }, 3000);
  }, 1200);
}

// =============================================
// MOBILE MENU — toggle
// =============================================
function toggleMenu() {
  const links = document.querySelector('.nav-links');

  if (links.style.display === 'flex') {
    links.style.display = 'none';
  } else {
    links.style.display = 'flex';
    links.style.flexDirection = 'column';
    links.style.position = 'absolute';
    links.style.top = '100%';
    links.style.left = '0';
    links.style.right = '0';
    links.style.background = 'rgba(10,10,15,0.98)';
    links.style.padding = '1rem 1.5rem 1.5rem';
    links.style.borderBottom = '1px solid var(--border)';
  }
}

// =============================================
// TYPING EFFECT — hero name
// =============================================
const names = ['Seu Nome', 'Developer', 'Arquiteto', 'Engenheiro'];
let nameIdx = 0;
let charIdx = 0;
let deleting = false;
const nameEl = document.getElementById('hero-name');

function typeEffect() {
  const current = names[nameIdx];

  if (!deleting) {
    nameEl.textContent = current.substring(0, charIdx + 1);
    charIdx++;
    if (charIdx === current.length) {
      deleting = true;
      setTimeout(typeEffect, 2000);
      return;
    }
  } else {
    nameEl.textContent = current.substring(0, charIdx - 1);
    charIdx--;
    if (charIdx === 0) {
      deleting = false;
      nameIdx = (nameIdx + 1) % names.length;
    }
  }

  setTimeout(typeEffect, deleting ? 60 : 100);
}

setTimeout(typeEffect, 1000);
