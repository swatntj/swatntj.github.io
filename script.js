const stats = document.querySelectorAll(".stat");
const counters = document.querySelectorAll(".counter");
const revealElements = document.querySelectorAll(".reveal");
const grid = document.querySelector(".hero-grid");
const cards = document.querySelectorAll(".stat-card, .contact-card");

const translations = {
    pt: {
        nav_about: "Sobre",
        nav_projects: "Projetos",
        nav_gfx: "GFX",
        nav_contact: "Contato",

        hero_tag: "ROBLOX DEVELOPER • SYSTEM BUILDER",
        hero_sub: "Desenvolvendo sistemas no Roblox Studio, focado em performance, design e experiências imersivas com Lua / Luau.",
        hero_visits: "Total de visitas em jogos",
        hero_experience: "Experiência",
        hero_experience_value: "1 ano",
        hero_community: "Comunidade",
        hero_areas: "Áreas",

        about_title: "Sobre",
        about_ghost: "mim",
        about_text: "Me chamo Lucas, tenho 16 anos e desenvolvo em Lua no Roblox Studio há cerca de 1 ano, criando sistemas completos, bem organizados e que conseguem crescer sem virar bagunça.\n\nTambém trabalho com UI, animações e scripts, então acabo cuidando tanto da parte visual quanto da lógica do jogo, deixando tudo mais fluido e agradável de jogar.\n\nJá tenho prática com estrutura de sistemas, organização de código e otimização de desempenho, sempre tentando manter tudo leve, funcional e com um padrão mais profissional.",

        about_card_experience: "Experiência",
        about_card_experience_value: "1 ano",
        about_card_visits: "Total de Visitas",
        about_card_community: "Comunidade",
        about_card_specialty: "Especialidade",
        about_card_specialty_value: "Sistemas Roblox",
        about_status: "Status",
        about_status_value: "Disponível",
        about_status_online: "Online",

        studios_ghost: "Grupos",
        studio_badge: "Ativo",
        studio_desc: "Um dos grupos mais conhecidos e responsável por desenvolver roleplay brasileiro, focado principalmente em experiências de simulação militar.",
        studio_area_title: "Área de atuação",
        studio_area_desc: "Desenvolvimento de sistemas, UI e mecânicas voltadas para jogos de simulação.",
        studio_specialty_title: "Especialidade",
        studio_specialty_desc: "Sistemas Roblox, scripting em Luau, animações e interfaces.",

        stack_specialties: "Especialidades",

        systems_title: "Sistemas",
        systems_ghost: "Desenvolvidos",

        system_locker_title: "Sistema de Armário Militar",
        system_locker_desc: "Sistema de fardamento com seleção de uniformes e salvamento de preferências.",

        system_weapons_title: "Sistema de Armas",
        system_weapons_desc: "Sistema completo com validação, segurança e suporte multiplayer.",

        system_jump_title: "Sistema de Salto",
        system_jump_desc: "Sistema de paraquedismo com física e animações realistas.",

        system_robbery_title: "Sistema de Roubo ao Posto",
        system_robbery_desc: "Assalto com NPCs, interação e recompensas.",

        system_barber_title: "Sistema de Corte de Cabelo",
        system_barber_desc: "Trabalho com NPC interativo e seleção de estilos de cabelo.",

        system_electrician_title: "Sistema de Eletricista",
        system_electrician_desc: "Sistema de trabalho com reparos e interação com o mapa.",

        system_weather_title: "Sistema de Clima Dinâmico",
        system_weather_desc: "Ciclo dia/noite, chuva e comandos para controle do clima.",

        system_helicopter_title: "Sistema de Helicóptero",
        system_helicopter_desc: "Sistema de voo com suporte mobile e física avançada.",

        system_group_title: "Sistema de Grupo Integrado",
        system_group_desc: "Bot que permite promover, rebaixar e gerenciar membros integrado ao Roblox.",

        system_sales_title: "Sistema de Vendas Automatizado",
        system_sales_desc: "Sistema com bot, vendas automáticas e entrega de produtos/gamepasses.",

        gfx_sub: "Trabalhos visuais desenvolvidos para comunidades, projetos militares e experiências Roblox.",
        gfx_identity: "Identidade Visual",

        contact_title: "Contrate",
        contact_ghost: "-me",
        contact_sub: "Aberto para projetos, parcerias e desenvolvimento de sistemas no Roblox.",
        contact_available: "Disponível",
        contact_availability: "Disponibilidade",
        contact_availability_value: "Projetos & Sistemas Roblox",
        contact_specialties: "Especialidades",

        payment_title: "Pagamentos",
        payment_instant: "(Instantâneo)",
        payment_transfer: "(BR)",

        footer_text: "construindo desde 2025"
    },

    en: {
        nav_about: "About",
        nav_projects: "Projects",
        nav_gfx: "GFX",
        nav_contact: "Contact",

        hero_tag: "ROBLOX DEVELOPER • SYSTEM BUILDER",
        hero_sub: "Developing Roblox Studio systems focused on performance, design, and immersive experiences with Lua / Luau.",
        hero_visits: "Total game visits",
        hero_experience: "Experience",
        hero_experience_value: "1 year",
        hero_community: "Community",
        hero_areas: "Areas",

        about_title: "About",
        about_ghost: "me",
        about_text: "My name is Lucas, I am 16 years old, and I have been developing with Lua in Roblox Studio for around 1 year, creating complete, well-organized systems that can scale without becoming messy.\n\nI also work with UI, animations, and scripts, so I handle both the visual side and the game logic, making everything smoother and more enjoyable to play.\n\nI already have experience with system structure, code organization, and performance optimization, always trying to keep everything lightweight, functional, and with a more professional standard.",

        about_card_experience: "Experience",
        about_card_experience_value: "1 year",
        about_card_visits: "Total Visits",
        about_card_community: "Community",
        about_card_specialty: "Specialty",
        about_card_specialty_value: "Roblox Systems",
        about_status: "Status",
        about_status_value: "Available",
        about_status_online: "Online",

        studios_ghost: "Groups",
        studio_badge: "Active",
        studio_desc: "One of the most recognized groups, responsible for developing Brazilian roleplay experiences, mainly focused on military simulation.",
        studio_area_title: "Field of work",
        studio_area_desc: "Development of systems, UI, and mechanics focused on simulation games.",
        studio_specialty_title: "Specialty",
        studio_specialty_desc: "Roblox systems, Luau scripting, animations, and interfaces.",

        stack_specialties: "Specialties",

        systems_title: "Systems",
        systems_ghost: "Developed",

        system_locker_title: "Military Locker System",
        system_locker_desc: "Uniform system with outfit selection and preference saving.",

        system_weapons_title: "Weapon System",
        system_weapons_desc: "Complete system with validation, security, and multiplayer support.",

        system_jump_title: "Parachute System",
        system_jump_desc: "Skydiving system with realistic physics and animations.",

        system_robbery_title: "Gas Station Robbery System",
        system_robbery_desc: "Robbery system with NPCs, interaction, and rewards.",

        system_barber_title: "Haircut System",
        system_barber_desc: "Job system with interactive NPC and hairstyle selection.",

        system_electrician_title: "Electrician System",
        system_electrician_desc: "Job system with repairs and map interaction.",

        system_weather_title: "Dynamic Weather System",
        system_weather_desc: "Day/night cycle, rain, and commands to control the weather.",

        system_helicopter_title: "Helicopter System",
        system_helicopter_desc: "Flight system with mobile support and advanced physics.",

        system_group_title: "Integrated Group System",
        system_group_desc: "Bot that allows promoting, demoting, and managing members integrated with Roblox.",

        system_sales_title: "Automated Sales System",
        system_sales_desc: "System with bot, automatic sales, and product/gamepass delivery.",

        gfx_sub: "Visual works developed for communities, military projects, and Roblox experiences.",
        gfx_identity: "Visual Identity",

        contact_title: "Hire",
        contact_ghost: "Me",
        contact_sub: "Open for projects, partnerships, and Roblox system development.",
        contact_available: "Available",
        contact_availability: "Availability",
        contact_availability_value: "Roblox Projects & Systems",
        contact_specialties: "Specialties",

        payment_title: "Payments",
        payment_instant: "(Instant)",
        payment_transfer: "(BR Transfer)",

        footer_text: "building since 2025"
    }
};

function apply_translation_text(element, value){
    if(!element || !value) return;

    element.innerHTML = "";

    const parts = value.split("\n");

    parts.forEach((part, index) => {
        if(index > 0){
            element.appendChild(document.createElement("br"));
        }

        element.appendChild(document.createTextNode(part));
    });
}

function set_language(lang){
    const selected_language = translations[lang] ? lang : "pt";

    localStorage.setItem("site_language", selected_language);
    document.documentElement.lang = selected_language === "pt" ? "pt-BR" : "en";

    document.querySelectorAll(".lang-btn").forEach(btn => {
        btn.classList.toggle("active", btn.dataset.lang === selected_language);
    });

    const text = translations[selected_language];

    document.querySelectorAll("[data-i18n]").forEach(element => {
        const key = element.dataset.i18n;

        if(text[key]){
            apply_translation_text(element, text[key]);
        }
    });

    restart_hero_typing(selected_language);
}

function restart_hero_typing(lang){
    const element = document.querySelector(".hero-tag");
    if(!element) return;

    const text = translations[lang].hero_tag;
    let i = 0;

    element.innerHTML = "";

    const typing = () => {
        if(i < text.length){
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(typing, 30);
        }
    };

    typing();
}

function animateNumber(el, end, duration, suffix = ""){
    if(!el) return;

    const startTime = performance.now();

    function update(time){
        const progress = Math.min((time - startTime) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);

        const value = Math.floor(eased * end);
        el.textContent = value + suffix;

        if(progress < 1){
            requestAnimationFrame(update);
        }
    }

    requestAnimationFrame(update);
}

const reveal = () => {
    const trigger = window.innerHeight * 0.85;

    revealElements.forEach(el => {
        const top = el.getBoundingClientRect().top;

        if(top < trigger){
            el.classList.add("show");
        }
    });
};

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if(!entry.isIntersecting) return;

        const el = entry.target;
        el.classList.add("show");

        const counter = el.querySelector(".counter");

        if(counter){
            const target = parseInt(counter.dataset.target);
            const startTime = performance.now();

            function animate(time){
                const progress = Math.min((time - startTime) / 1400, 1);
                const eased = 1 - Math.pow(1 - progress, 3);

                counter.textContent = Math.floor(eased * target);

                if(progress < 1){
                    requestAnimationFrame(animate);
                }
            }

            requestAnimationFrame(animate);
        }

        observer.unobserve(el);
    });
}, { threshold: 0.4 });

const revealObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            entry.target.classList.add("show");
            revealObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.2 });

window.addEventListener("load", () => {
    const loader = document.getElementById("loader");

    setTimeout(() => {
        if(loader){
            loader.style.opacity = "0";
            loader.style.pointerEvents = "none";
            loader.style.transition = "0.6s";

            setTimeout(() => loader.remove(), 600);
        }
    }, 1800);

    setTimeout(() => {
        animateNumber(document.getElementById("exp"), 5, 1200, " meses");
    }, 500);

    setTimeout(() => {
        animateNumber(document.getElementById("community"), 70, 1500, "K+");
    }, 800);

    const saved_language = localStorage.getItem("site_language") || "pt";
    set_language(saved_language);

    reveal();
});

window.addEventListener("scroll", reveal);

window.addEventListener("mousemove", e => {
    if(!grid) return;

    const x = (e.clientX / window.innerWidth - 0.5) * 20;
    const y = (e.clientY / window.innerHeight - 0.5) * 20;

    grid.style.transform = `translate(${x}px, ${y}px)`;
});

cards.forEach(card => {
    card.addEventListener("mousemove", e => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = -(y - centerY) / 12;
        const rotateY = (x - centerX) / 12;

        card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    });

    card.addEventListener("mouseleave", () => {
        card.style.transform = "rotateX(0) rotateY(0)";
    });
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function(e){
        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if(target){
            target.scrollIntoView({ behavior: "smooth" });
        }
    });
});

document.querySelectorAll(".reveal").forEach(el => {
    revealObserver.observe(el);
});

stats.forEach(stat => {
    observer.observe(stat);
});

document.querySelectorAll(".lang-btn").forEach(btn => {
    btn.addEventListener("click", () => {
        set_language(btn.dataset.lang);
    });
});
