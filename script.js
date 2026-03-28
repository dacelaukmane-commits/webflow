// NAVBAR
// ============================================
Show less
const navbar = document.getElementById('navbar');
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 10);
});
hamburger.addEventListener('click', () => {
  const open = navLinks.classList.toggle('open');
  hamburger.setAttribute('aria-expanded', open);
  document.body.style.overflow = open ? 'hidden' : '';
});
navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
    document.body.style.overflow = '';
  });
});
// Active nav highlight on scroll
const sections = document.querySelectorAll('section[id]');
const navItems = navLinks.querySelectorAll('a');
const sectionObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      navItems.forEach(a => {
        a.classList.toggle('active', a.getAttribute('href') === `#${entry.target.id}`);
      });
    }
  });
}, { threshold: 0.35 });
sections.forEach(s => sectionObserver.observe(s));
// ============================================
// WORKS FILTER
// ============================================
const genreFilter = document.getElementById('genreFilter');
const authorSelect = document.getElementById('authorSelect') || document.getElementById('authorFilter');
const workItems = document.querySelectorAll('.work-item');
let activeGenre = 'all';
let activeAuthor = 'all';
function applyFilter() {
  workItems.forEach(item => {
    const genreMatch = activeGenre === 'all' || item.dataset.genre === activeGenre;
    const authorMatch = activeAuthor === 'all' || item.dataset.author === activeAuthor;
    item.classList.toggle('hidden', !(genreMatch && authorMatch));
  });
}
genreFilter.addEventListener('click', e => {
  const btn = e.target.closest('.filter-btn');
  if (!btn) return;
  genreFilter.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  activeGenre = btn.dataset.genre;
  applyFilter();
});
if (authorSelect) {
  authorSelect.addEventListener('change', () => {
    activeAuthor = authorSelect.value;
    applyFilter();
  });
}
// ============================================
// EXHIBITIONS TABS
// ============================================
const exhTabs = document.querySelectorAll('.exh-tab');
const exhPanels = document.querySelectorAll('.exh-panel');
exhTabs.forEach(tab => {
  tab.addEventListener('click', () => {
    exhTabs.forEach(t => t.classList.remove('active'));
    exhPanels.forEach(p => p.classList.add('hidden'));
    tab.classList.add('active');
    const panel = document.getElementById(`tab-${tab.dataset.tab}`);
    if (panel) panel.classList.remove('hidden');
  });
});
// ============================================
// CONTACT FORM
// ============================================
const form = document.getElementById('contactForm');
const successMsg = document.getElementById('formSuccess');
form.addEventListener('submit', e => {
  e.preventDefault();
  const name = form.name.value.trim();
  const email = form.email.value.trim();
  const message = form.message.value.trim();
  if (!name || !email || !message) return;
  const submitBtn = form.querySelector('button[type="submit"]');
  submitBtn.textContent = 'Sūta...';
  submitBtn.disabled = true;
  setTimeout(() => {
    form.reset();
    submitBtn.textContent = 'Nosūtīt';
    submitBtn.disabled = false;
    successMsg.classList.add('visible');
    setTimeout(() => successMsg.classList.remove('visible'), 6000);
  }, 1000);
});
// ============================================
// SCROLL REVEAL
// ============================================
const revealTargets = [
  '.section-header',
  '.author-card',
  '.work-item',
  '.exh-item',
  '.archive-year-group',
  '.press-card',
  '.press-contact',
  '.contact-left',
  '.contact-form',
  '.map-placeholder'
];
document.querySelectorAll(revealTargets.join(',')).forEach((el, i) => {
  el.classList.add('reveal');
  // slight stagger for grid children
  const parent = el.parentElement;
  if (parent && (parent.classList.contains('authors-grid') || parent.classList.contains('works-grid') || parent.classList.contains('press-grid'))) {
    const siblings = Array.from(parent.children);
    el.style.transitionDelay = `${siblings.indexOf(el) * 0.05}s`;
  }
});
const revealObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      revealObserver.unobserve(entry.target);
    }
  });
