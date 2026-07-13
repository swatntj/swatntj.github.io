const header = document.querySelector("[data-header]");
const menuButton = document.querySelector("[data-menu-button]");
const nav = document.querySelector("[data-nav]");
const counters = document.querySelectorAll("[data-counter]");
const revealItems = document.querySelectorAll(".reveal");
const tabButtons = document.querySelectorAll("[data-tab-target]");
const tabPanels = document.querySelectorAll("[data-tab-panel]");
const rotator = document.querySelector("[data-rotator]");
const themeToggle = document.querySelector("[data-theme-toggle]");
const langButtons = document.querySelectorAll("[data-lang-btn]");
const lightbox = document.querySelector("[data-lightbox]");
const lightboxImage = lightbox?.querySelector("img");
const lightboxClose = document.querySelector("[data-lightbox-close]");
const heroTracks = document.querySelectorAll("[data-gfx-hero-track]");
const gfxGallery = document.querySelector("[data-gfx-gallery]");
const screenGuard = document.querySelector("[data-screen-guard]");

const translations = {
  pt: {
    skip: "Pular para conteúdo",
    nav_systems: "GFX",
    nav_services: "Serviços",
    nav_terms: "Termos",
    hire: "Contratar",
    view_portfolio: "Ver portfólio",
    view_work_first: "Ver trabalhos antes",
    status_open: "Comissões abertas",
    hero_title_1: "GFX que vende o jogo.",
    hero_title_2: "Antes mesmo do player entrar.",
    hero_sub: "Sou o Lucas, SWATDev. Crio banners, icons, thumbnails e identidade visual para Roblox e Discord com visual limpo, forte e pronto para passar confiança.",
    stat_visits: "visitas em projetos atendidos",
    stat_community: "comunidade alcançada",
    stat_since: "criando visual desde",
    discord_status: "Open Commission",
    discord_role: "Operations Coordinator @ NightWalk",
    discord_about: "https://swatntj.github.io/",
    bio_eyebrow: "Biografia",
    bio_title: "Eu sou o SWATDev.",
    bio_p1: "Faço GFX para projetos Roblox que precisam parecer profissionais logo no primeiro clique: banner, icon, thumbnail, capa de comunidade e artes para divulgação.",
    bio_p2: "Meu foco é deixar a arte com presença, contraste e acabamento. Nada de imagem vazia só para preencher espaço: cada peça precisa vender o jogo, o grupo ou a ideia.",
    portfolio_eyebrow: "Portfólio",
    portfolio_title: "Portfólio.",
    portfolio_sub: "Alguns trabalhos visuais para Roblox, Discord e comunidades. Clica nas imagens para abrir maior.",
    protect_note: "Previews protegidos contra download direto, clique direito e arrastar imagem.",
    tab_systems: "GFX",
    card_locker_title: "Banner Roblox",
    card_locker_text: "Arte de impacto para divulgação.",
    card_weapon_title: "Icon design",
    card_weapon_text: "Leitura forte em tamanho pequeno.",
    card_heli_title: "Thumbnail",
    card_heli_text: "Composição pensada para clique.",
    card_weather_title: "Capa de comunidade",
    card_weather_text: "Visual limpo para Discord e grupos.",
    card_electrician_title: "Identidade visual",
    card_electrician_text: "Peças combinando entre si.",
    card_parachute_title: "Assinatura visual",
    card_parachute_text: "Banner com presença e acabamento.",
    card_robbery_title: "Arte promocional",
    card_robbery_text: "Chamada visual para produto ou lançamento.",
    card_hair_title: "Avatar / perfil",
    card_hair_text: "Imagem de perfil com personalidade.",
    services_eyebrow: "Serviços",
    services_title: "Artes que já chegam prontas para postar.",
    services_sub: "Você manda a ideia, referência, nome do projeto e o estilo. Eu monto uma arte com cara de marca, não só uma imagem jogada com efeito por cima.",
    service_gameplay_title: "Banners e capas",
    service_gameplay: "Banner para Discord, perfil, servidor, grupo Roblox, divulgação e assinatura visual.",
    service_ui_title: "Icons e thumbnails",
    service_ui: "Ícone e thumb com contraste, leitura rápida e aparência mais vendável na primeira olhada.",
    service_bots_title: "Identidade visual",
    service_bots: "Paleta, estilo, composição e peças combinando para o projeto não parecer montado aos pedaços.",
    service_perf_title: "Artes para venda",
    service_perf: "Imagens para loja, anúncio, comissão, gamepass, produto e chamada de compra.",
    process_eyebrow: "Como funciona",
    process_title: "Pedido simples, entrega alinhada.",
    process_sub: "Você manda o tema, medidas, referências e onde a arte vai ser usada. Eu fecho o visual contigo antes de finalizar.",
    step_1: "<strong>Briefing</strong> tema, texto, tamanho e referências.",
    step_2: "<strong>Direção</strong> defino composição, cores e impacto visual.",
    step_3: "<strong>Polimento</strong> luz, contraste, recorte e acabamento.",
    step_4: "<strong>Entrega</strong> arquivo final pronto para postar ou usar no jogo.",
    chat_open: "Aberto",
    chat_1: "preciso de um banner e um icon para meu jogo, consegue?",
    chat_2: "consigo sim. me manda o nome, estilo, cores e umas referências que você curte.",
    chat_3: "mandeii. queria algo dark, limpo e com cara profissional.",
    chat_4: "fechado. vou montar uma prévia com foco em contraste, leitura e presença.",
    chat_input: "Mensagem para #ticket-swatdev",
    pricing_eyebrow: "Pacotes",
    pricing_title: "Pacotes de GFX.",
    pricing_sub: "O valor depende da complexidade, prazo e quantidade de peças. Antes de começar eu confirmo tudo para não ficar dúvida.",
    price_basic: "Starter",
    price_basic_title: "Ícone ou avatar",
    price_quote: "Sob consulta",
    price_basic_1: "Icon para Roblox, Discord ou perfil",
    price_basic_2: "Ajuste de cor, texto e composição",
    price_basic_3: "Entrega rápida com briefing fechado",
    price_popular: "Mais pedido",
    price_full: "Promo",
    price_full_title: "Banner + Ícone",
    price_full_1: "Pacote com visual combinando",
    price_full_2: "Banner e ícone prontos para divulgação",
    price_full_3: "Melhor escolha para lançar projeto",
    price_ops: "Brand",
    price_ops_title: "Pack divulgação",
    price_ops_1: "Banner, thumbnail e peça promocional",
    price_ops_2: "Visual para comunidade ou lançamento",
    price_ops_3: "Pronto para Discord, Roblox e anúncios",
    payment_label: "Pagamentos",
    payment_title: "Formas de pagamento",
    payment_quote: "Combinado no orçamento",
    payment_pix: "Pix (Instantâneo)",
    payment_robux: "Robux (Game Payments) com taxa inclusa",
    payment_mercado: "Mercado Pago",
    payment_transfer: "Transferência (BR)",
    payment_before: "Tudo confirmado antes do início.",
    terms_eyebrow: "Termos e Condições",
    terms_title: "Antes de fechar projeto.",
    terms_intro: "Estes termos deixam o combinado claro para os dois lados. Ao iniciar um pedido comigo, você confirma que leu e concorda com as condições abaixo.",
    terms_scope_title: "1. Escopo",
    terms_scope_text: "O pedido começa depois que estilo, texto, tamanho, prazo e formato de entrega estiverem definidos. Mudanças grandes fora do combinado podem alterar prazo e valor.",
    terms_payment_title: "2. Pagamento",
    terms_payment_text: "Aceito Pix, Robux, Mercado Pago e transferência. Pagamentos em Robux devem considerar a taxa inclusa. Em pedidos maiores, posso pedir sinal para reservar agenda.",
    terms_delivery_title: "3. Entrega",
    terms_delivery_text: "A entrega inclui a arte final no formato combinado, pronta para usar em Roblox, Discord ou divulgação. O prazo depende do briefing e das respostas.",
    terms_revisions_title: "4. Revisões",
    terms_revisions_text: "Ajustes pequenos dentro do escopo estão inclusos. Trocar totalmente o estilo, texto principal ou direção visual após aprovação conta como extra.",
    terms_refund_title: "5. Reembolso",
    terms_refund_text: "Não há reembolso para trabalho já iniciado ou entregue. Situações antes do início real são analisadas caso a caso, com transparência.",
    terms_use_title: "6. Uso e créditos",
    terms_use_text: "Você pode usar a entrega no projeto combinado. Posso mostrar imagens ou trechos no portfólio, exceto quando houver acordo de sigilo antes do início.",
    contact_eyebrow: "Contato",
    contact_title: "Quer uma arte com presença?",
    contact_sub: "Me chama com o nome do projeto, estilo que você quer e onde a arte vai ser usada. Eu te passo o caminho e o orçamento direto.",
    footer_text: "GFX, banners, icons e identidade visual desde 2025."
  },
  en: {
    skip: "Skip to content",
    nav_systems: "GFX",
    nav_services: "Services",
    nav_terms: "Terms",
    hire: "Hire",
    view_portfolio: "View portfolio",
    view_work_first: "View work first",
    status_open: "Commissions open",
    hero_title_1: "GFX that sells the game.",
    hero_title_2: "Before the player even joins.",
    hero_sub: "I am Lucas, SWATDev. I create banners, icons, thumbnails and visual identity for Roblox and Discord with a clean, strong look built to create trust.",
    stat_visits: "visits on projects served",
    stat_community: "community reached",
    stat_since: "creating visuals since",
    discord_status: "Open Commission",
    discord_role: "Operations Coordinator @ NightWalk",
    discord_about: "https://swatntj.github.io/",
    bio_eyebrow: "Biography",
    bio_title: "I am SWATDev.",
    bio_p1: "I create GFX for Roblox projects that need to look professional from the first click: banners, icons, thumbnails, community covers and promo art.",
    bio_p2: "My focus is presence, contrast and finish. No empty image just to fill space: every piece needs to sell the game, group or idea.",
    portfolio_eyebrow: "Portfolio",
    portfolio_title: "Portfolio.",
    portfolio_sub: "Visual work for Roblox, Discord and communities. Click the images to open them larger.",
    protect_note: "Protected previews against direct download, right click and image dragging.",
    tab_systems: "GFX",
    card_locker_title: "Roblox banner",
    card_locker_text: "High-impact promo artwork.",
    card_weapon_title: "Icon design",
    card_weapon_text: "Strong readability at small sizes.",
    card_heli_title: "Thumbnail",
    card_heli_text: "Composition built for clicks.",
    card_weather_title: "Community cover",
    card_weather_text: "Clean visuals for Discord and groups.",
    card_electrician_title: "Visual identity",
    card_electrician_text: "Pieces that match each other.",
    card_parachute_title: "Signature banner",
    card_parachute_text: "A banner with presence and finish.",
    card_robbery_title: "Promo art",
    card_robbery_text: "Visual callout for a product or launch.",
    card_hair_title: "Avatar / profile",
    card_hair_text: "Profile image with personality.",
    services_eyebrow: "Services",
    services_title: "Artwork ready to post.",
    services_sub: "You send the idea, references, project name and style. I build artwork that feels like a brand, not just an image with effects on top.",
    service_gameplay_title: "Banners and covers",
    service_gameplay: "Banners for Discord, profiles, servers, Roblox groups, promotions and visual signatures.",
    service_ui_title: "Icons and thumbnails",
    service_ui: "Icons and thumbs with contrast, fast readability and a more sellable first impression.",
    service_bots_title: "Visual identity",
    service_bots: "Palette, style, composition and matching pieces so the project does not feel patched together.",
    service_perf_title: "Sales artwork",
    service_perf: "Images for shops, ads, commissions, gamepasses, products and purchase callouts.",
    process_eyebrow: "How it works",
    process_title: "Simple order, aligned delivery.",
    process_sub: "You send the theme, size, references and where the art will be used. I align the look with you before finishing.",
    step_1: "<strong>Briefing</strong> theme, text, size and references.",
    step_2: "<strong>Direction</strong> composition, colors and visual impact.",
    step_3: "<strong>Polish</strong> lighting, contrast, cutout and finish.",
    step_4: "<strong>Delivery</strong> final file ready to post or use in-game.",
    chat_open: "Open",
    chat_1: "I need a banner and an icon for my game, can you do it?",
    chat_2: "yes. send me the name, style, colors and a few references you like.",
    chat_3: "sent. I wanted something dark, clean and professional.",
    chat_4: "done. I will make a preview focused on contrast, readability and presence.",
    chat_input: "Message #ticket-swatdev",
    pricing_eyebrow: "Packages",
    pricing_title: "GFX packages.",
    pricing_sub: "Price depends on complexity, deadline and number of pieces. Before starting, I confirm everything clearly.",
    price_basic: "Starter",
    price_basic_title: "Icon or avatar",
    price_quote: "By quote",
    price_basic_1: "Icon for Roblox, Discord or profile",
    price_basic_2: "Color, text and composition adjustment",
    price_basic_3: "Fast delivery with a clear brief",
    price_popular: "Most requested",
    price_full: "Promo",
    price_full_title: "Banner + Icon",
    price_full_1: "Package with matching visuals",
    price_full_2: "Banner and icon ready for promotion",
    price_full_3: "Best choice to launch a project",
    price_ops: "Brand",
    price_ops_title: "Promotion pack",
    price_ops_1: "Banner, thumbnail and promo piece",
    price_ops_2: "Visuals for community or launch",
    price_ops_3: "Ready for Discord, Roblox and ads",
    payment_label: "Payments",
    payment_title: "Payment methods",
    payment_quote: "Confirmed in the quote",
    payment_pix: "Pix (Instant)",
    payment_robux: "Robux (Game Payments) with fee included",
    payment_mercado: "Mercado Pago",
    payment_transfer: "Bank transfer (BR)",
    payment_before: "Everything is confirmed before the start.",
    terms_eyebrow: "Terms and Conditions",
    terms_title: "Before closing a project.",
    terms_intro: "These terms keep the agreement clear for both sides. By starting an order with me, you confirm that you have read and accepted the conditions below.",
    terms_scope_title: "1. Scope",
    terms_scope_text: "The order starts after style, text, size, deadline and delivery format are defined. Major changes outside the agreement may change the deadline and price.",
    terms_payment_title: "2. Payment",
    terms_payment_text: "I accept Pix, Robux, Mercado Pago and bank transfer. Robux payments must include the fee. For larger orders, I may request an upfront deposit to reserve the schedule.",
    terms_delivery_title: "3. Delivery",
    terms_delivery_text: "Delivery includes the final artwork in the agreed format, ready for Roblox, Discord or promotion. The deadline depends on the brief and responses.",
    terms_revisions_title: "4. Revisions",
    terms_revisions_text: "Small adjustments within the scope are included. Fully changing the style, main text or visual direction after approval counts as extra.",
    terms_refund_title: "5. Refunds",
    terms_refund_text: "There are no refunds for work already started or delivered. Situations before real work begins are reviewed case by case, with transparency.",
    terms_use_title: "6. Usage and credits",
    terms_use_text: "You may use the delivery in the agreed project. I may show images or snippets in my portfolio unless confidentiality is agreed before starting.",
    contact_eyebrow: "Contact",
    contact_title: "Want artwork with presence?",
    contact_sub: "Send me the project name, the style you want and where the art will be used. I will give you the direction and quote directly.",
    footer_text: "GFX, banners, icons and visual identity since 2025."
  }
};

function updateHeader() {
  header?.classList.toggle("scrolled", window.scrollY > 10);
}

function animateCounter(counter) {
  const target = Number(counter.dataset.counter || 0);
  const duration = 1150;
  const startedAt = performance.now();

  function tick(now) {
    const progress = Math.min((now - startedAt) / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    counter.textContent = Math.floor(target * eased);
    if (progress < 1) requestAnimationFrame(tick);
  }

  requestAnimationFrame(tick);
}

const counterObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;
    animateCounter(entry.target);
    observer.unobserve(entry.target);
  });
}, { threshold: 0.55 });

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) entry.target.classList.add("in-view");
  });
}, { threshold: 0.12 });

function activateTab(target) {
  tabButtons.forEach((item) => {
    item.classList.toggle("active", item.dataset.tabTarget === target);
  });

  tabPanels.forEach((panel) => {
    const isActive = panel.dataset.tabPanel === target;
    panel.classList.toggle("active", isActive);
    if (isActive) panel.querySelectorAll(".reveal").forEach((item) => item.classList.add("in-view"));
  });
}

function openLightbox(src, alt) {
  if (!lightbox || !lightboxImage) return;
  lightboxImage.src = src;
  lightboxImage.alt = alt || "Preview do projeto";
  lightbox.classList.add("open");
  lightbox.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
}

function closeLightbox() {
  if (!lightbox || !lightboxImage) return;
  lightbox.classList.remove("open");
  lightbox.setAttribute("aria-hidden", "true");
  lightboxImage.src = "";
  document.body.style.overflow = "";
}

function classifyImageFrame(image, frame) {
  if (!image.naturalWidth || !image.naturalHeight) return;

  const ratio = image.naturalWidth / image.naturalHeight;
  frame.classList.toggle("square", ratio >= 0.82 && ratio <= 1.18);
  frame.classList.toggle("portrait", ratio < 0.82);
  frame.classList.toggle("landscape", ratio > 1.18);
}

function attachPreviewCard(card) {
  if (card.dataset.previewReady === "true") return;
  card.dataset.previewReady = "true";

  const image = card.querySelector("img");
  card.addEventListener("click", () => openLightbox(card.dataset.preview, image?.alt));
  card.addEventListener("keydown", (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      openLightbox(card.dataset.preview, image?.alt);
    }
  });
}

function getGfxAssets() {
  const assets = Array.isArray(window.SWAT_GFX_ASSETS) ? window.SWAT_GFX_ASSETS : [];
  return assets.filter((item) => item?.src).map((item, index) => ({
    src: item.src,
    title: item.title || `GFX ${index + 1}`
  }));
}

function createGfxImage(asset, options = {}) {
  const image = document.createElement("img");
  image.src = asset.src;
  image.alt = asset.title;
  image.decoding = "async";
  image.loading = options.loading || "lazy";
  image.draggable = false;
  return image;
}

function renderGfxAssets() {
  const assets = getGfxAssets();
  if (!assets.length) return;

  heroTracks.forEach((track, trackIndex) => {
    track.innerHTML = "";
    const shiftedAssets = assets.slice(trackIndex).concat(assets.slice(0, trackIndex));
    const repeatedAssets = Array.from({ length: 4 }, () => shiftedAssets).flat();

    repeatedAssets.forEach((asset) => {
      const image = createGfxImage(asset, { loading: "eager" });
      track.appendChild(image);
    });
  });

  if (!gfxGallery) return;

  gfxGallery.innerHTML = "";
  const minimumLoops = Math.max(2, Math.ceil(10 / assets.length));
  const galleryAssets = Array.from({ length: minimumLoops }, () => assets).flat();

  galleryAssets.forEach((asset) => {
    const frame = document.createElement("button");
    frame.className = "gfx-frame";
    frame.type = "button";
    frame.dataset.preview = asset.src;
    frame.setAttribute("aria-label", `Abrir ${asset.title}`);

    const image = createGfxImage(asset);
    image.addEventListener("load", () => classifyImageFrame(image, frame), { once: true });

    frame.appendChild(image);
    gfxGallery.appendChild(frame);
    attachPreviewCard(frame);
  });
}

function flashScreenGuard() {
  document.body.classList.add("protecting-capture");
  screenGuard?.classList.add("active");

  window.setTimeout(() => {
    document.body.classList.remove("protecting-capture");
    screenGuard?.classList.remove("active");
  }, 1150);
}

function shouldProtectShortcut(event) {
  const key = event.key.toLowerCase();
  const ctrlLike = event.ctrlKey || event.metaKey;

  if (event.key === "PrintScreen") return true;
  if (ctrlLike && ["s", "p", "u"].includes(key)) return true;
  if (ctrlLike && event.shiftKey && ["s", "i", "j", "c"].includes(key)) return true;
  if (event.key === "F12") return true;

  return false;
}

function protectPortfolioPreview() {
  document.addEventListener("contextmenu", (event) => {
    if (event.target.closest(".gfx-strip, .hero-bg, .lightbox")) {
      event.preventDefault();
      flashScreenGuard();
    }
  });

  document.addEventListener("dragstart", (event) => {
    if (event.target.closest(".gfx-strip, .hero-bg, .lightbox")) {
      event.preventDefault();
    }
  });

  document.addEventListener("copy", (event) => {
    if (window.getSelection()?.toString()) return;
    event.preventDefault();
  });

  window.addEventListener("keyup", (event) => {
    if (event.key === "PrintScreen") flashScreenGuard();
  });
}

function getCurrentLanguage() {
  return document.documentElement.dataset.lang || "pt";
}

function setTheme(theme) {
  const selectedTheme = theme === "light" ? "light" : "dark";
  document.body.dataset.theme = selectedTheme;
  localStorage.setItem("swatdev_theme", selectedTheme);

  if (themeToggle) {
    themeToggle.textContent = selectedTheme === "light" ? "☀" : "☾";
    themeToggle.classList.toggle("active", selectedTheme === "light");
  }

  const themeMeta = document.querySelector('meta[name="theme-color"]');
  themeMeta?.setAttribute("content", selectedTheme === "light" ? "#f3f3f0" : "#030303");
}

function setLanguage(lang) {
  const selectedLang = translations[lang] ? lang : "pt";
  const text = translations[selectedLang];

  document.documentElement.lang = selectedLang === "pt" ? "pt-BR" : "en";
  document.documentElement.dataset.lang = selectedLang;
  localStorage.setItem("swatdev_lang", selectedLang);

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.dataset.i18n;
    if (text[key]) element.innerHTML = text[key];
  });

  langButtons.forEach((button) => {
    button.classList.toggle("active", button.dataset.langBtn === selectedLang);
  });
}

renderGfxAssets();
protectPortfolioPreview();
counters.forEach((counter) => counterObserver.observe(counter));
revealItems.forEach((item) => revealObserver.observe(item));

menuButton?.addEventListener("click", () => {
  nav?.classList.toggle("open");
});

nav?.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    if (link.dataset.navTab) activateTab(link.dataset.navTab);
    nav.classList.remove("open");
  });
});

tabButtons.forEach((button) => {
  button.addEventListener("click", () => activateTab(button.dataset.tabTarget));
});

themeToggle?.addEventListener("click", () => {
  setTheme(document.body.dataset.theme === "light" ? "dark" : "light");
});

langButtons.forEach((button) => {
  button.addEventListener("click", () => setLanguage(button.dataset.langBtn));
});

if (rotator) {
  const words = ["GFX", "Banners", "Icons", "Thumbnails", "Branding"];
  let index = 0;
  window.setInterval(() => {
    index = (index + 1) % words.length;
    rotator.style.opacity = "0";
    window.setTimeout(() => {
      rotator.textContent = words[index];
      rotator.style.opacity = "1";
    }, 180);
  }, 1700);
}

document.querySelectorAll("[data-preview]").forEach(attachPreviewCard);

lightboxClose?.addEventListener("click", closeLightbox);
lightbox?.addEventListener("click", (event) => {
  if (event.target === lightbox) closeLightbox();
});

window.addEventListener("keydown", (event) => {
  if (shouldProtectShortcut(event)) {
    event.preventDefault();
    flashScreenGuard();
    return;
  }

  if (event.key === "Escape") closeLightbox();
});

window.addEventListener("scroll", updateHeader, { passive: true });
setTheme(localStorage.getItem("swatdev_theme") || "dark");
setLanguage(localStorage.getItem("swatdev_lang") || "pt");
updateHeader();
