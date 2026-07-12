// Ano no rodapé
document.getElementById('year').textContent = new Date().getFullYear();

// Menu mobile
const navToggle = document.getElementById('navToggle');
const navLinks = document.querySelector('.nav__links');

navToggle.addEventListener('click', () => {
  const isOpen = navLinks.classList.toggle('is-open');
  navToggle.setAttribute('aria-expanded', isOpen);
});

navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('is-open');
    navToggle.setAttribute('aria-expanded', 'false');
  });
});

// Revelar secções ao rolar a página
const revealTargets = document.querySelectorAll(
  '.section__head, .about, .skills, .projects, .contact, .hero__text, .hero__portrait'
);
revealTargets.forEach(el => el.classList.add('reveal'));

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });

revealTargets.forEach(el => observer.observe(el));

// Formulário de contacto (demonstração — sem envio real)
const form = document.getElementById('contactForm');
const status = document.getElementById('contactStatus');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const nome = form.nome.value.trim();

  if (!form.checkValidity()) {
    status.textContent = '// preencha todos os campos correctamente.';
    return;
  }

  status.textContent = `// obrigado, ${nome}! Esta é uma demonstração — ligue este formulário a um serviço de email (ex: Formspree) ou a um backend para receber mensagens reais.`;
  form.reset();
});

const nomes = "Felizardo Lázaro Matola";
const elemento = document.getElementById("texto-digitado");
let i = 0;
