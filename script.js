// ============================================
// AUTHORS DATA
// ============================================
Show less
const AUTHORS = [
  {
    id: 'zo',
    initials: 'ZO',
    color: '#e8e4df',
    name: 'Zane Ozoliņa',
    year: 1992,
    city: 'Tukums',
    genre: 'Dabas fotogrāfija un portreti',
    bio: 'Piedalīšanās 2 Tukuma fotogrāfu radošās apvienības izstādēs.',
    links: {
      facebook: 'https://www.facebook.com/share/1EuSpVwKWJ/?mibextid=wwXIfr',
      instagram: 'https://www.instagram.com/zane.margo'
    }
  },
  {
    id: 'ej',
    initials: 'EJ',
    color: '#dfe4e8',
    name: 'Edgars Juka',
    year: 1983,
    city: 'Tukums',
    genre: 'Māksla, ainava, pilsētvide, portreti, reportāža',
    bio: 'Fotogrāfēju, vairākas izstādes, vairākas publikācijas grāmatās.',
    links: {
      facebook: 'https://www.facebook.com/Edgars.Juka',
      instagram: 'https://www.instagram.com/fotokadri'
    }
  },
  {
    id: 'dl',
    initials: 'DL',
    color: '#e4e8df',
    name: 'Dace Laukmane',
    year: 1972,
    city: 'Tukums',
    genre: 'Daba, ainava, ceļojumi · iPhone photography',
    bio: '2. vieta starptautiskajā foto konkursā "SIGN OF THE TIMES". Kurzemes fotodienu 2024 konkurss "Ūdensceļš" — darbs iekļuvis 25 labāko vidū. Starptautiskā fotogrāfijas konkursa 35AWARDS atzinības. Fotokluba "Divas Upes" dalībniece.',
    links: {
      facebook: 'https://www.facebook.com/dace.laukmane',
      instagram: 'https://www.instagram.com/dace_laukmane/',
      linkedin: 'https://www.linkedin.com/in/dace-laukmane/',
      other: 'https://35awards.com'
    }
  },
  {
    id: 'mz',
    initials: 'MZ',
    color: '#e8dfdf',
    name: 'Mārcis Zeiferts',
    year: 1974,
    city: 'Tukums',
    genre: 'Daba, pilsētvide, portreti',
    bio: 'Mārcis Zeiferts dzimis Rīgā (1974). Aktīvi dokumentē kultūras un sabiedriskās dzīves notikumus Tukuma novadā — laikmetīgās dejas kamerfestivālu "Atspulgs kustībā", starptautisko baleta festivālu "Kurzemes klasika", Rožu svētkus un citus pasākumus. 1. vieta "Leica Camera" konkursā "Mazāk ir vairāk" (2025). Personālizstāde "Baleta valdzinājumā" (2025).',
    links: {
      facebook: 'https://www.facebook.com/marcis.zeiferts',
      instagram: 'https://www.instagram.com/marciszeiferts/',
      linkedin: 'https://www.linkedin.com/in/mārcis-zeiferts-64a30b27a',
      website: 'https://lightinspiration.lv'
    }
  },
  {
    id: 'zb',
    initials: 'ŽB',
    color: '#dfe4e4',
    name: 'Žanis Bezmers',
    year: 1945,
    city: 'Tukums',
    genre: 'Ainava, pilsētas ainava, ielu foto',
    bio: 'Vairāk nekā 50 gadu pieredze fotogrāfijā. Pirmā personālizstāde 1974. gadā kopā ar gleznotāju Jāni Eltermani. Jubilejas izstāde "Pieskares punkti aizgājušajam laikam" Madonas muzejā (2015). Divu autoru izstāde "Ekspogrāfs un Svecene" kopā ar Gunu Rozi-Tamuli galerijā "Durvis" Tukumā (2025).',
    links: {
      facebook: 'https://www.facebook.com/zbezmers',
      other: 'https://www.flickr.com/photos/zbezmers/'
    }
  },
  {
    id: 'mb',
    initials: 'MB',
    color: '#e4dfe8',
    name: 'Mareks Bērziņš',
    year: 1982,
    city: 'Tukums / Drammen, Norvēģija',
    genre: 'Dažādi žanri',
    bio: 'Piedalījies 2 grupu izstādēs kopā ar Tukuma novada fotogrāfu apvienību. "Vislabākais sasniegums ir, kad cilvēki tev nāk klāt uz ielas un stāsta, cik ļoti viņiem patīk manas bildes."',
    links: {
      facebook: 'https://www.facebook.com/share/1CFqVTLGiy/',
      instagram: 'https://www.instagram.com/mb_photography_art'
    }
  },
  {
    id: 'jb',
    initials: 'JB',
    color: '#e8e8df',
    name: 'Jānis Bešta',
    year: 1981,
    city: 'Tukums',
    genre: 'Sporta fotogrāfija',
    bio: 'Fotogrāfs, kura uzmanības centrā ir sports un kustības dinamika, īpaši motokross. Darbi skatāmi Tukuma izstādēs. Turpina aktīvi attīstīt savu radošo darbību, dokumentējot sacensību atmosfēru un sportistu aizrautību.',
    links: {
      facebook: 'https://www.facebook.com/janis.besta'
    }
  },
  {
    id: 'ad',
    initials: 'AD',
    color: '#dfe8e4',
    name: 'Aivis Dornis',
    year: 1980,
    city: 'Engure',
    genre: 'Portreta fotogrāfija',
    bio: 'Sasniegumi vēl tikai priekšā.',
    links: {
      facebook: 'https://www.facebook.com/@ADBDfoto',
      instagram: 'https://www.instagram.com/adbdfoto',
      website: 'https://www.adbdfoto.com'
    }
  },
  {
    id: 'ug',
    initials: 'UG',
    color: '#e4e4e8',
    name: 'Uģis Grantiņš',
    year: 1971,
    city: 'Tukums',
    genre: 'Cilvēks',
    bio: 'Fotogrāfiju redzu kā radošu tiltu starp cilvēkiem, vietām un notikumiem — kā iespēju saglabāt to, kas vērtīgs šodien un atmiņās būs vēl vērtīgāks rīt.',
    links: {
      facebook: 'https://www.facebook.com/ugis.grantins',
      instagram: 'https://www.instagram.com/ugrantins/',
      other: 'https://gurushots.com/ugrantins/photos'
    }
  },
  {
    id: 'aj',
    initials: 'AJ',
    color: '#e8e4e4',
    name: 'Alise Jurēvica',
    year: 1997,
    city: 'Tukums',
    genre: 'Sieviešu un pāru buduārs',
    bio: 'Individuālās fotosesijas. Fotoprojekts "PĒC", kas rezultējies 3 personālizstādēs un tiks izstādīts dažādās Latvijas pilsētās arī turpmāk. 2 grupu izstādes kopā ar Tukuma novada fotogrāfiem. 1 izstāde duetā ar citu fotogrāfi.',
    links: {
      facebook: 'https://www.facebook.com/alis.ephotography1',
      instagram: 'https://www.instagram.com/alis.ephotography'
    }
  },
  {
    id: 'zh',
    initials: 'ZH',
    color: '#dfe4e8',
    name: 'Zane Hartmane',
    year: 1994,
    city: 'Tukums',
    genre: 'Sieviešu portreti, ģimenes portreti',
    bio: 'RAW Fotostudijas izveide (2023). Tukuma 2. vidusskolas foto pulciņa vadītāja (2023–šobrīd). Tukuma novada domes apbalvojums "Radošā Izaugsme 2024". Izstādes "Mirkļu mozaīka" (2025) un "Vibrācijas" (2025) dalībniece.',
    links: {
      facebook: 'https://www.facebook.com/mszeinz',
      instagram: 'https://www.instagram.com/mszeinz.photography/',
      linkedin: 'https://www.linkedin.com/in/zane-hartmane/',
      website: 'https://www.rawvibesonly.com'
    }
  }
];
// ============================================
// GENERATE AUTHOR CARDS
// ============================================
const authorsGrid = document.querySelector('.authors-grid');
if (authorsGrid) {
  authorsGrid.innerHTML = AUTHORS.map(a => `
    <article class="author-card" data-author-id="${a.id}" tabindex="0" role="button" aria-label="${a.name}">
      <div class="author-photo" style="background:${a.color};">
        <span>${a.initials}</span>
      </div>
      <div class="author-info">
        <h3>${a.name}</h3>
        <p>${a.genre}</p>
      </div>
      <span class="author-card-hint">Skatīt profilu →</span>
    </article>
  `).join('');
}
// ============================================
// AUTHOR MODAL
// ============================================
const modal = document.getElementById('authorModal');
const modalClose = document.getElementById('modalClose');
const modalBackdrop = document.getElementById('modalBackdrop');
const LINK_LABELS = {
  facebook: 'Facebook',
  instagram: 'Instagram',
  linkedin: 'LinkedIn',
  website: 'Mājaslapa',
  other: 'Citas saites'
};
function openModal(author) {
  document.getElementById('modalPhoto').style.background = author.color;
  document.getElementById('modalPhoto').textContent = author.initials;
  document.getElementById('modalName').textContent = author.name;
  document.getElementById('modalGenre').textContent = author.genre;
  document.getElementById('modalMeta').textContent = `Dzimis ${author.year} · ${author.city}`;
  document.getElementById('modalBio').textContent = author.bio;
  const linksEl = document.getElementById('modalLinks');
  linksEl.innerHTML = Object.entries(author.links || {})
    .map(([key, url]) =>
      `<a href="${url}" target="_blank" rel="noopener noreferrer" class="modal-link">${LINK_LABELS[key] || key}</a>`
    ).join('');
  modal.classList.add('open');
  modal.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
  modalClose.focus();
}
function closeModal() {
  modal.classList.remove('open');
  modal.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
}
if (authorsGrid) {
  authorsGrid.addEventListener('click', e => {
    const card = e.target.closest('.author-card');
    if (!card) return;
    const author = AUTHORS.find(a => a.id === card.dataset.authorId);
    if (author) openModal(author);
  });
  authorsGrid.addEventListener('keydown', e => {
    if (e.key === 'Enter' || e.key === ' ') {
      const card = e.target.closest('.author-card');
      if (!card) return;
      e.preventDefault();
      const author = AUTHORS.find(a => a.id === card.dataset.authorId);
      if (author) openModal(author);
    }
  });
}
modalClose.addEventListener('click', closeModal);
modalBackdrop.addEventListener('click', closeModal);
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });
// ============================================
// NAVBAR
// ============================================
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
const authorSelect = document.getElementById('authorFilter');
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
if (genreFilter) {
  genreFilter.addEventListener('click', e => {
    const btn = e.target.closest('.filter-btn');
    if (!btn) return;
    genreFilter.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    activeGenre = btn.dataset.genre;
    applyFilter();
  });
}
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
document.querySelectorAll(revealTargets.join(',')).forEach(el => {
  el.classList.add('reveal');
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
