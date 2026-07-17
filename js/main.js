// ===== Mobile menu =====
const burger = document.getElementById('navBurger');
const links = document.getElementById('navLinks');

burger.addEventListener('click', () => {
  const open = links.classList.toggle('open');
  burger.classList.toggle('open', open);
  burger.setAttribute('aria-expanded', String(open));
});

// Close the mobile menu when a link is tapped
links.addEventListener('click', (e) => {
  if (e.target.tagName === 'A') {
    links.classList.remove('open');
    burger.classList.remove('open');
    burger.setAttribute('aria-expanded', 'false');
  }
});

// ===== Scroll reveal =====
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in');
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12 }
);
document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));

// ===== Contact form → WhatsApp =====
document.getElementById('contactForm').addEventListener('submit', (e) => {
  e.preventDefault();
  const f = new FormData(e.target);
  const text =
    `Hello MezaTap! 👋\n` +
    `Name: ${f.get('name')}\n` +
    `Venue: ${f.get('venue')}\n` +
    `Phone: ${f.get('phone')}\n` +
    (f.get('message') ? `Message: ${f.get('message')}` : `I'd like a free demo.`);
  window.open('https://wa.me/254798700024?text=' + encodeURIComponent(text), '_blank');
});
