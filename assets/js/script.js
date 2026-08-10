// 1. DADOS: separar conteúdo da interface facilita adicionar novas matérias.
const articles = {
  feira: {
    category: 'Empreendedorismo',
    title: '3ª Feira da Mulher Empreendedora fortalece negócios e conexões em Itapetininga',
    lead: 'A programação reuniu artesãs, empreendedoras e mulheres interessadas em fortalecer seus negócios por meio de conhecimento, networking e visibilidade.',
    image: 'assets/images/feira-empreendedora.png',
    alt: 'Mulheres reunidas em evento de empreendedorismo em Itapetininga',
    copy: `<p>A Casa da Mulher, em Itapetininga, recebeu no dia 23 de março a 3ª Feira da Mulher Empreendedora, com o tema “Moda Autoral e Artesanal”, e o encontro “Todos por Elas”.</p><p>Promovido pela Secretaria de Políticas Públicas para Mulheres, o evento contou com exposição de produtos, peças artesanais e trabalhos desenvolvidos por empreendedoras locais. A programação também trouxe a palestra “Marketing Digital e Posicionamento”, com estratégias para fortalecer marcas e ampliar a presença no mercado.</p><p>O encontro teve ainda a participação do grupo Mulheres Entusiastas e do Sebrae Sorocaba, contribuindo para a troca de experiências e oportunidades. A iniciativa reforçou a importância de espaços voltados à autonomia financeira, ao desenvolvimento profissional e ao protagonismo feminino no município.</p>`
  },
  festival: {
    category: 'Agenda local',
    title: 'Primeiro Festival de Flashback promove música, dança e solidariedade em Itapetininga',
    lead: 'Uma tarde dedicada aos sucessos das décadas de 1970, 1980 e 1990 quer unir entretenimento, convivência e responsabilidade social.',
    image: 'assets/images/festival-flashback.png',
    alt: 'Cartaz do Primeiro Festival Flashback de Itapetininga',
    copy: `<p>Itapetininga será palco do Primeiro Festival de Flashback, encontro preparado para quem gosta dos grandes clássicos e das memórias afetivas dos tradicionais bailes.</p><p>Com caráter solidário e sem fins lucrativos, o festival convida o público a doar voluntariamente um litro de leite. As arrecadações serão destinadas ao Fundo Social de Solidariedade de Itapetininga e poderão beneficiar famílias em situação de vulnerabilidade.</p><p>A realização é da Coach Renatinha, em parceria com a Família Flashback, grupo que atua na valorização da dança, da música e dos encontros comunitários. A proposta é criar momentos de integração e alegria entre diferentes gerações.</p>`
  },
  maria: {
    category: 'Direitos',
    title: 'Lei Maria da Penha completa 20 anos como símbolo da luta pelo fim da violência contra a mulher',
    lead: 'Sancionada em 7 de agosto de 2006, a Lei nº 11.340 marcou uma mudança decisiva no enfrentamento à violência doméstica e familiar no Brasil.',
    image: 'assets/images/maria-da-penha.png',
    alt: 'Retrato de Maria da Penha',
    copy: `<p>A legislação nasceu da luta da biofarmacêutica Maria da Penha Maia Fernandes, que sobreviveu a duas tentativas de feminicídio praticadas pelo então marido e transformou sua história em mobilização por justiça.</p><p>A lei estabeleceu mecanismos específicos para prevenir, coibir e punir a violência contra a mulher, além de garantir medidas protetivas de urgência às vítimas.</p><p>Ao longo de duas décadas, contribuiu para ampliar o debate sobre violência de gênero, fortalecer a rede de atendimento e incentivar políticas públicas. O aniversário reforça que informação, acolhimento e acesso aos canais de proteção continuam essenciais.</p>`
  },
  fluxo: {
    category: 'Capacitação',
    title: 'Oficina gratuita ensina empreendedores a organizar o fluxo de caixa em Itapetininga',
    lead: 'A capacitação “Faça Fluxo de Caixa e saiba para onde vai seu dinheiro” será realizada em 26 de agosto, das 13h às 17h.',
    image: 'assets/images/oficina-fluxo-caixa.png',
    alt: 'Cartaz da oficina de fluxo de caixa',
    copy: `<p>A iniciativa é promovida pelo Sebrae Itapetininga, em parceria com a Prefeitura, por meio da Secretaria de Trabalho e Desenvolvimento Econômico, e conta com apoio da Associação Comercial, do Sindicato Rural e do Sincomercio.</p><p>Os participantes aprenderão a acompanhar receitas e despesas, identificar a situação financeira da empresa, analisar resultados e tomar decisões com mais segurança e planejamento.</p><p>A oficina será na Rua Monsenhor Soares, nº 251, no Centro. A participação é gratuita e as vagas são limitadas. Inscrições pelos telefones (15) 3272-9218 e (15) 99643-9081, de segunda a sexta, das 9h às 17h.</p>`,
    action: `<a class="button button-primary" href="https://forms.gle/K26nAidXnS6TxNJp6" target="_blank" rel="noopener noreferrer">Acessar formulário de inscrição ↗</a>`
  },
  bufala: {
    category: 'Oportunidade',
    title: 'Curso sobre derivados do leite de búfala abre inscrições para mulheres em Itapetininga',
    lead: 'Capacitação prática oferece uma nova qualificação profissional e possibilidades de geração de renda para mulheres.',
    image: 'assets/images/curso-leite-bufala.png',
    alt: 'Cartaz do curso de derivados do leite de búfala',
    copy: `<p>A iniciativa é promovida pela Secretaria de Políticas Públicas para Mulheres de Itapetininga, em parceria com o Sebrae Sorocaba e o SENAI, com apoio da Secretaria de Agricultura e do Sindicato Rural.</p><p>Durante as aulas, as participantes aprenderão técnicas de processamento do leite de búfala e produção de diferentes derivados, conhecendo características, formas de utilização e possibilidades de comercialização.</p><p>O curso acontece de 27 de agosto a 8 de setembro, de terça a sexta-feira, das 8h às 12h, no CEPROM, localizado na Rua Agenor Vieira de Moraes, 135, Jardim Vieira de Moraes.</p>`
  }
};

// 2. MENU MOBILE: alterna uma classe CSS e mantém o estado acessível.
const menuButton = document.querySelector('.menu-button');
const nav = document.querySelector('.main-nav');
menuButton.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', open);
  menuButton.setAttribute('aria-label', open ? 'Fechar menu' : 'Abrir menu');
});
nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  nav.classList.remove('open'); menuButton.setAttribute('aria-expanded', 'false');
}));

// 3. BUSCA E FILTROS: os cards são filtrados sem recarregar a página.
const searchPanel = document.querySelector('.search-panel');
const searchInput = document.querySelector('#site-search');
document.querySelector('.search-toggle').addEventListener('click', () => {
  searchPanel.hidden = false; searchInput.focus();
});
document.querySelector('.search-close').addEventListener('click', () => {
  searchPanel.hidden = true; searchInput.value = ''; filterCards();
});

let activeFilter = 'all';
const cards = [...document.querySelectorAll('.news-card')];
const filters = document.querySelectorAll('.filter');
filters.forEach(button => button.addEventListener('click', () => {
  activeFilter = button.dataset.filter;
  filters.forEach(item => { item.classList.toggle('active', item === button); item.setAttribute('aria-pressed', item === button); });
  filterCards();
}));
searchInput.addEventListener('input', filterCards);

function normalize(value) { return value.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase(); }
function filterCards() {
  const term = normalize(searchInput.value.trim());
  let visible = 0;
  cards.forEach(card => {
    const categories = card.dataset.category.split(' ');
    const content = normalize(`${card.dataset.search} ${card.textContent}`);
    const matches = (activeFilter === 'all' || categories.includes(activeFilter)) && (!term || content.includes(term));
    card.classList.toggle('hidden-card', !matches);
    if (matches) visible++;
  });
  document.querySelector('.empty-state').hidden = visible !== 0;
  if (term) document.querySelector('#noticias').scrollIntoView({behavior:'smooth'});
}

// 4. MODAL: um único componente recebe o conteúdo da matéria selecionada.
const modal = document.querySelector('.article-modal');
document.querySelectorAll('[data-open-article]').forEach(button => button.addEventListener('click', () => {
  const article = articles[button.dataset.openArticle];
  document.querySelector('#modal-category').textContent = article.category;
  document.querySelector('#modal-title').textContent = article.title;
  document.querySelector('#modal-lead').textContent = article.lead;
  document.querySelector('#modal-copy').innerHTML = article.copy;
  document.querySelector('#modal-action').innerHTML = article.action || '';
  const image = document.querySelector('#modal-image'); image.src = article.image; image.alt = article.alt;
  modal.showModal(); document.body.classList.add('modal-open');
}));
function closeModal() { modal.close(); document.body.classList.remove('modal-open'); }
document.querySelector('.modal-close').addEventListener('click', closeModal);
modal.addEventListener('click', event => { if (event.target === modal) closeModal(); });
modal.addEventListener('close', () => document.body.classList.remove('modal-open'));

// 5. FORMULÁRIO DEMONSTRATIVO: intercepta o envio sem armazenar dados.
document.querySelector('#newsletter-form').addEventListener('submit', event => {
  event.preventDefault();
  document.querySelector('.form-message').textContent = 'Cadastro simulado com sucesso! Obrigada por acompanhar o projeto.';
  event.target.reset();
});
document.querySelector('#year').textContent = new Date().getFullYear();

// 6. ANIMAÇÕES DE ROLAGEM
// IntersectionObserver observa elementos sem executar cálculos a cada pixel rolado.
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const revealTargets = document.querySelectorAll(
  '.hero-card, .hero-aside, .section-heading, .news-card, .manifesto-grid > div, .newsletter > *'
);

revealTargets.forEach((element, index) => {
  element.classList.add('reveal');
  if (index === 0 || element.matches('.manifesto-grid > div:first-child')) {
    element.classList.add('from-left');
  }
});

if (!reducedMotion && 'IntersectionObserver' in window) {
  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('is-visible');
      observer.unobserve(entry.target); // anima apenas uma vez
    });
  }, { threshold: 0.14 });
  revealTargets.forEach(element => revealObserver.observe(element));
} else {
  revealTargets.forEach(element => element.classList.add('is-visible'));
}

// 7. CABEÇALHO, PROGRESSO DA PÁGINA E BOTÃO DE VOLTAR AO TOPO
const header = document.querySelector('.site-header');
const pageProgress = document.querySelector('.scroll-progress span');
const backToTop = document.querySelector('.back-to-top');

function updatePageScroll() {
  const scrollable = document.documentElement.scrollHeight - window.innerHeight;
  const progress = scrollable > 0 ? window.scrollY / scrollable : 0;
  pageProgress.style.transform = `scaleX(${Math.min(progress, 1)})`;
  header.classList.toggle('scrolled', window.scrollY > 24);
  backToTop.classList.toggle('visible', window.scrollY > 650);
}

window.addEventListener('scroll', updatePageScroll, { passive: true });
updatePageScroll();
backToTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

// 8. NAVEGAÇÃO ATIVA: destaca no menu a seção que está na tela.
const navLinks = [...document.querySelectorAll('.main-nav a[href^="#"]')];
const sections = navLinks.map(link => document.querySelector(link.getAttribute('href'))).filter(Boolean);
if ('IntersectionObserver' in window) {
  const sectionObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      navLinks.forEach(link => {
        link.classList.toggle('active', link.getAttribute('href') === `#${entry.target.id}`);
      });
    });
  }, { rootMargin: '-35% 0px -55%', threshold: 0 });
  sections.forEach(section => sectionObserver.observe(section));
}

// 9. CONTADOR: anima o total de histórias quando o destaque aparece.
const counter = document.querySelector('[data-counter]');
function animateCounter() {
  const target = Number(counter.dataset.counter);
  let current = 0;
  const timer = setInterval(() => {
    current += 1;
    counter.textContent = String(current).padStart(2, '0');
    if (current >= target) clearInterval(timer);
  }, 110);
}
if (reducedMotion) counter.textContent = String(counter.dataset.counter).padStart(2, '0');
else setTimeout(animateCounter, 450);

// 10. PROGRESSO DE LEITURA DENTRO DA MATÉRIA.
const modalProgress = document.querySelector('.modal-progress span');
modal.addEventListener('scroll', () => {
  const scrollable = modal.scrollHeight - modal.clientHeight;
  const progress = scrollable > 0 ? modal.scrollTop / scrollable : 0;
  modalProgress.style.transform = `scaleX(${Math.min(progress, 1)})`;
}, { passive: true });
modal.addEventListener('close', () => {
  modal.scrollTop = 0;
  modalProgress.style.transform = 'scaleX(0)';
});

// 11. PARALLAX SUAVE NO DESTAQUE (somente em dispositivos com mouse).
const heroCard = document.querySelector('.hero-card');
const heroImage = heroCard.querySelector('img');
if (!reducedMotion && window.matchMedia('(pointer: fine)').matches) {
  heroCard.addEventListener('pointermove', event => {
    const box = heroCard.getBoundingClientRect();
    const x = (event.clientX - box.left) / box.width - 0.5;
    const y = (event.clientY - box.top) / box.height - 0.5;
    heroImage.style.transform = `scale(1.035) translate(${x * 8}px, ${y * 8}px)`;
  });
  heroCard.addEventListener('pointerleave', () => { heroImage.style.transform = ''; });
}
