const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('#site-nav');
const header = document.querySelector('.site-header');

toggle?.addEventListener('click', () => {
  const open = toggle.getAttribute('aria-expanded') === 'true';
  toggle.setAttribute('aria-expanded', String(!open));
  nav.classList.toggle('open', !open);
  document.body.classList.toggle('menu-open', !open);
});

nav?.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  toggle?.setAttribute('aria-expanded', 'false');
  nav.classList.remove('open');
  document.body.classList.remove('menu-open');
}));

addEventListener('scroll', () => header?.classList.toggle('scrolled', scrollY > 110), { passive: true });
document.querySelector('#year').textContent = new Date().getFullYear();
