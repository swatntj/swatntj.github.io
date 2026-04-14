const stats = document.querySelectorAll(".stat");
const counters = document.querySelectorAll(".counter");
const revealElements = document.querySelectorAll(".reveal");
const grid = document.querySelector(".hero-grid");
const cards = document.querySelectorAll(".stat-card, .contact-card");

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

    const element = document.querySelector(".hero-tag");
    if(element){
        const text = "Roblox Developer • System Builder";
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

    reveal();
});

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

function animateNumber(el, end, duration, suffix=""){
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

window.addEventListener("scroll", reveal);

window.addEventListener("mousemove", (e) => {
    if(!grid) return;

    const x = (e.clientX / window.innerWidth - 0.5) * 20;
    const y = (e.clientY / window.innerHeight - 0.5) * 20;

    grid.style.transform = `translate(${x}px, ${y}px)`;
});

cards.forEach(card => {
    card.addEventListener("mousemove", (e) => {
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
    anchor.addEventListener("click", function(e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if(target){
            target.scrollIntoView({ behavior: "smooth" });
        }
    });
});

const reveals = document.querySelectorAll(".reveal");

const revealObserver = new IntersectionObserver(entries=>{
    entries.forEach(entry=>{
        if(entry.isIntersecting){
            entry.target.classList.add("show");
            revealObserver.unobserve(entry.target);
        }
    });
},{threshold:0.2});


reveals.forEach(el=>revealObserver.observe(el));

stats.forEach(stat => observer.observe(stat));