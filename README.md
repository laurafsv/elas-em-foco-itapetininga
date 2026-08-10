# Elas em Foco — Itapetininga

Portal editorial responsivo sobre empreendedorismo feminino, capacitação, direitos e agenda local em Itapetininga.

🔗 **Site:** https://laurafsv.github.io/elas-em-foco-itapetininga/

## Tecnologias

- **HTML5:** estrutura e semântica;
- **CSS3:** identidade visual, responsividade e animações;
- **JavaScript:** dados, eventos, filtros e interatividade;
- **GitHub Pages:** hospedagem estática gratuita.

O projeto não usa framework. Isso é intencional: HTML, CSS e JavaScript nativos atendem às necessidades com carregamento rápido e deixam os fundamentos mais fáceis de estudar.

## Funcionalidades

- busca e filtros por categoria;
- matérias completas em modal;
- identidade visual vetorial com monograma inspirado em foco e movimento;
- animações acionadas durante a rolagem;
- indicador de progresso da página e da leitura;
- menu com seção ativa e versão mobile;
- contador animado e parallax suave no destaque;
- botão de voltar ao topo;
- assinatura editorial, tempo de leitura e compartilhamento de matérias;
- respeito à preferência de movimento reduzido;
- formulário demonstrativo de newsletter.

## Estrutura

```text
.
├── index.html                 # Conteúdo e estrutura semântica
├── assets
│   ├── css/style.css         # Layout, cores e animações
│   ├── js/script.js          # Comportamentos e matérias
│   └── images/               # Imagens e logo SVG
├── .nojekyll                 # Publicação direta no GitHub Pages
└── README.md
```

## Como o projeto funciona

### 1. HTML: estrutura

O `index.html` possui elementos semânticos como `header`, `nav`, `main`, `section`, `article`, `aside` e `footer`. Eles ajudam navegadores, mecanismos de busca e tecnologias assistivas a entender a página.

As matérias visíveis são cards. Os textos completos são exibidos em um único elemento `dialog`, preenchido pelo JavaScript conforme o botão selecionado.

### 2. CSS: apresentação

As cores ficam em variáveis dentro de `:root`:

```css
:root {
  --wine: #5b214e;
  --coral: #ee775f;
  --paper: #fffcf8;
}
```

Assim, alterar a identidade visual não exige procurar a mesma cor em todo o arquivo. O layout usa Grid e Flexbox. As regras `@media` reorganizam os elementos para tablets e celulares.

A classe `.reveal` começa invisível e deslocada. Quando o JavaScript adiciona `.is-visible`, o CSS cria a transição de entrada.

### 3. JavaScript: comportamento

O arquivo `script.js` está dividido em blocos numerados e comentados.

- **DOM:** `querySelector` e `querySelectorAll` localizam elementos da página;
- **eventos:** `addEventListener` reage a clique, digitação, rolagem e movimento do mouse;
- **classes:** `classList` conecta o comportamento JavaScript aos estilos CSS;
- **dados:** o objeto `articles` concentra o conteúdo das matérias;
- **IntersectionObserver:** detecta quando elementos e seções entram na tela;
- **Web APIs:** `dialog`, `matchMedia`, `scrollTo` e `setInterval` criam interações sem bibliotecas.
- **Web Share API:** abre o compartilhamento nativo no celular e usa a área de transferência como alternativa no desktop.

### 4. Identidade visual em SVG

A logo está em `assets/images/logo-elas-em-foco.svg`. SVG é um formato vetorial descrito por código: continua nítido em qualquer tamanho, pesa pouco e pode ser usado como logo e favicon. A identidade adota um monograma editorial clássico: a letra “E” em serifada itálica dentro de um círculo vinho, acompanhada pelo nome e pela localização do portal.

### Exemplo: filtro

Cada card possui `data-category`. Ao clicar em um filtro, o JavaScript compara a categoria escolhida e adiciona ou remove a classe que esconde o card.

```js
const matches = activeFilter === 'all' || categories.includes(activeFilter);
card.classList.toggle('hidden-card', !matches);
```

### Exemplo: animação ao rolar

```js
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add('is-visible');
  });
});
```

Isso é mais eficiente do que executar cálculos pesados continuamente no evento de rolagem.

## Como executar localmente

Na pasta do projeto, execute:

```bash
python -m http.server 8000
```

Depois, abra `http://localhost:8000`.

## Roteiro de estudo sugerido

1. Abra o `index.html` e relacione cada seção com o que aparece na tela.
2. Altere as variáveis de cor do CSS e observe o resultado.
3. Use o inspetor do navegador para adicionar e remover classes.
4. Coloque `console.log()` dentro de um evento de clique.
5. Cadastre uma nova matéria no objeto `articles` e crie seu card no HTML.
6. Tente criar uma nova categoria de filtro.
7. Substitua o formulário demonstrativo por um serviço ou backend somente depois de dominar o fluxo atual.

## Acessibilidade

O projeto contém link para pular ao conteúdo, textos alternativos, atributos ARIA, navegação por teclado e suporte a `prefers-reduced-motion`. Animação deve complementar a experiência, nunca impedir o acesso ao conteúdo.

## Observação

O formulário é demonstrativo e não armazena dados. As matérias e fotografias foram fornecidas para a composição deste projeto de portfólio.
