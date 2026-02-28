// ===== ATTENDRE LE CHARGEMENT COMPLET =====
document.addEventListener('DOMContentLoaded', () => {
    // Initialiser le loader
    initLoader();
    
    // Initialiser toutes les animations
    initReveal();
    initTypewriter();
    initAnalyticPortal();
    initActiveMenu();
    initContactForm();
    initTheme();
});

// ===== LOADER QUANTIQUE =====
function initLoader() {
    const loader = document.getElementById('quantum-loader');
    const text = document.querySelector('.base-text');

    if (!loader) return;

    // On laisse l'animation briller pendant 2.5 secondes
    setTimeout(() => {
        // Déclenchement de la sortie spectaculaire
        if (text) text.classList.add('quantum-exit');
        
        setTimeout(() => {
            loader.style.opacity = '0';
            
            // On libère le site
            setTimeout(() => {
                loader.style.display = 'none';
                document.body.classList.add('site-ready');
            }, 800);
        }, 600);
    }, 2500);
}

// ===== ANIMATION AU SCROLL (REVEAL) =====
function initReveal() {
    const reveals = document.querySelectorAll('.reveal');

    function checkReveal() {
        reveals.forEach(el => {
            const windowHeight = window.innerHeight;
            const revealTop = el.getBoundingClientRect().top;
            const revealPoint = 150;

            if (revealTop < windowHeight - revealPoint) {
                el.classList.add('active');
            }
        });
    }

    // Vérifier au chargement
    checkReveal();

    // Vérifier au scroll
    window.addEventListener('scroll', checkReveal);
}

// ===== MENU ACTIF =====
function initActiveMenu() {
    const sections = document.querySelectorAll('section, .hero');
    const navLinks = document.querySelectorAll('nav a');

    function updateActiveMenu() {
        let current = "";

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            if (window.pageYOffset >= sectionTop - 200) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').includes(current)) {
                link.classList.add('active');
            }
        });
    }

    window.addEventListener('scroll', updateActiveMenu);
    window.addEventListener('load', updateActiveMenu);
}

// ===== EFFET MACHINE À ÉCRIRE =====
function initTypewriter() {
    const typeSpan = document.querySelector('.type-text');
    if (!typeSpan) return;

    const words = ["Développeur Web", "UI/UX Designer", "Freelancer"];
    let wordIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    function typeEffect() {
        const currentWord = words[wordIndex];
        
        if (!isDeleting && charIndex < currentWord.length) {
            // Ajouter un caractère
            typeSpan.textContent += currentWord.charAt(charIndex);
            charIndex++;
            setTimeout(typeEffect, 100);
        } 
        else if (isDeleting && charIndex > 0) {
            // Effacer un caractère
            typeSpan.textContent = currentWord.substring(0, charIndex - 1);
            charIndex--;
            setTimeout(typeEffect, 50);
        } 
        else {
            // Changer de mot
            isDeleting = !isDeleting;
            
            if (!isDeleting) {
                wordIndex = (wordIndex + 1) % words.length;
            }
            
            setTimeout(typeEffect, isDeleting ? 100 : 2000);
        }
    }

    // Démarrer l'effet
    typeEffect();
}

// ===== PORTAL ANALYTIQUE =====
function initAnalyticPortal() {
    const portal = document.querySelector('.analytic-portal');
    if (!portal) return;

    const dataLines = [
        ">>> Fredo.Dev_Profile // Initializing...",
        ">>> Status: Fullstack Dev // Online",
        ">>> Skill_Matrix // Computing...",
        ">>> Experience: 2+ Years // Confirmed",
        ">>> Analyzing: UI/UX & Backend Efficiency",
        ">>> Core_Languages: JS, Python, PHP",
        ">>> Availability: Open for projects",
        ">>> System_Integrity // OK"
    ];

    function animateDataStream() {
        const dataStream = portal.querySelector('.data-stream');
        if (!dataStream) return;

        // Vider le contenu existant
        dataStream.innerHTML = '';

        // Ajouter chaque ligne avec un délai
        dataLines.forEach((line, index) => {
            const p = document.createElement('span');
            p.classList.add('d-line');
            p.textContent = line;
            p.style.animationDelay = (index * 0.1) + 's';
            dataStream.appendChild(p);
        });
    }

    // Observer quand le portal devient visible
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateDataStream();
            }
        });
    }, { threshold: 0.5 });

    observer.observe(portal);
}

// ===== FORMULAIRE DE CONTACT AVEC FORMSPREE =====
function initContactForm() {
    const form = document.querySelector('.edge-form');
    if (!form) return;

    form.addEventListener('submit', (e) => {
        const submitBtn = form.querySelector('.edge-submit');
        const originalText = submitBtn.innerHTML;
        
        // Afficher "ENVOI..." pendant la redirection
        submitBtn.innerHTML = 'ENVOI EN COURS... <i class="fas fa-spinner fa-spin"></i>';
        submitBtn.style.opacity = '0.7';
        
        // Formspree redirigera vers une page de confirmation
        // On laisse le formulaire s'envoyer normalement
    });
}

// ===== GESTION DU THÈME =====
function basculerTheme() {
    const body = document.body;
    const icon = document.getElementById('theme-icon');

    body.classList.toggle('light-mode');

    if (body.classList.contains('light-mode')) {
        icon.classList.replace('fa-sun', 'fa-moon');
        localStorage.setItem('theme', 'light');
    } else {
        icon.classList.replace('fa-moon', 'fa-sun');
        localStorage.setItem('theme', 'dark');
    }
}

function initTheme() {
    if (localStorage.getItem('theme') === 'light') {
        document.body.classList.add('light-mode');
        const icon = document.getElementById('theme-icon');
        if (icon) {
            icon.classList.replace('fa-sun', 'fa-moon');
        }
    }
}

// ===== PARTICULES POUR LE PORTAL (Optionnel) =====
function initPortalParticles() {
    const ring = document.querySelector('.glow-ring');
    if (!ring) return;

    setInterval(() => {
        const line = document.createElement('div');
        line.classList.add('code-line');
        line.style.left = Math.random() * 100 + "%";
        line.textContent = Math.random() > 0.5 ? "0" : "1";
        line.style.position = 'absolute';
        line.style.color = '#ff5e1a';
        line.style.fontSize = '10px';
        line.style.opacity = '0.3';
        line.style.animation = 'floatUp 2s linear forwards';
        
        ring.appendChild(line);
        
        setTimeout(() => line.remove(), 2000);
    }, 100);

    // Ajouter l'animation si elle n'existe pas
    const style = document.createElement('style');
    style.textContent = `
        @keyframes floatUp {
            0% { transform: translateY(0); opacity: 0.3; }
            100% { transform: translateY(-100px); opacity: 0; }
        }
    `;
    document.head.appendChild(style);
}

// Décommente la ligne suivante si tu veux activer les particules
// initPortalParticles();