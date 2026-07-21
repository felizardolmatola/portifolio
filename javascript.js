document.addEventListener('DOMContentLoaded', () => {
  const navToggle = document.getElementById('navToggle');
  const navLinks = document.querySelector('.nav__links');
  const header = document.querySelector('.nav');

  // 1. Toggle do menu Mobile
  if (navToggle && navLinks) {
    navToggle.addEventListener('click', () => {
      const isExpanded = navToggle.getAttribute('aria-expanded') === 'true';
      navToggle.setAttribute('aria-expanded', !isExpanded);
      navLinks.classList.toggle('nav__links--open');
      navToggle.classList.toggle('nav__toggle--active');
    });

    // 2. Fechar menu ao clicar em um link
    document.querySelectorAll('.nav__links a').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('nav__links--open');
        navToggle.classList.remove('nav__toggle--active');
        navToggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // 3. Efeito de fundo no Header ao rolar a página
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      header?.classList.add('nav--scrolled');
    } else {
      header?.classList.remove('nav--scrolled');
    }
  });
});

document.addEventListener('DOMContentLoaded', () => {
  const typewriterElement = document.getElementById('typewriter');

  // Frases que serão digitadas em sequência
  const frases = [
    "Felizardo Lázaro Matola",
    "Desenvolvedor Fullstack",
    "Desenvolvedor Web"
  ];

  let fraseIndex = 0;
  let charIndex = 0;
  let isDeleting = false;

  function digitarEfeito() {
    const fraseAtual = frases[fraseIndex];

    if (isDeleting) {
      // Apaga letra por letra
      typewriterElement.textContent = fraseAtual.substring(0, charIndex - 1);
      charIndex--;
    } else {
      // Digita letra por letra
      typewriterElement.textContent = fraseAtual.substring(0, charIndex + 1);
      charIndex++;
    }

    // Velocidade de digitação (mais rápida ao apagar)
    let velocidade = isDeleting ? 50 : 100;

    // Quando termina de digitar a frase completa
    if (!isDeleting && charIndex === fraseAtual.length) {
      velocidade = 2000; // Pausa de 2 segundos antes de começar a apagar
      isDeleting = true;
    } 
    // Quando termina de apagar a frase
    else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      fraseIndex = (fraseIndex + 1) % frases.length; // Passa para a próxima frase
      velocidade = 500; // Pausa rápida antes de digitar a próxima
    }

    setTimeout(digitarEfeito, velocidade);
  }

  // Inicia a animação se o elemento existir
  if (typewriterElement) {
    digitarEfeito();
  }
});

  const badgeDisponibilidade = document.getElementById('badge-disponibilidade');
 
  if (badgeDisponibilidade) {
    const dataLimiteStr = badgeDisponibilidade.dataset.disponivelAte;
    const dataLimite = dataLimiteStr ? new Date(`${dataLimiteStr}T23:59:59`) : null;
    const hoje = new Date();
 
    const disponivel = !dataLimite || hoje <= dataLimite;
 
    const ponto = badgeDisponibilidade.querySelector('.ponto-verde');
    const texto = badgeDisponibilidade.querySelector('.texto-status');
 
    if (!disponivel) {
      ponto.classList.add('ponto-offline');
      texto.textContent = 'Indisponível no momento';
    } else {
      ponto.classList.remove('ponto-offline');
      texto.textContent = 'Disponível para novos projetos';
    }
  }
 


