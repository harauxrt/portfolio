// Données des projets
const projects = [
    {
        id: 1,
        title: "Projet Télécom Antennes",
        images: ["images/a.jpg", "images/b.jpg", "images/c.jpg"],
        description: "Installation d'une antenne hélicoïdale pour la réception de signaux satellitaires, réalisée dans le cadre de la SAÉ 3.ROM.04. Ce projet visait à capter, traiter et décoder les signaux APT à 137 MHz émis par les satellites NOAA (National Oceanic and Atmospheric Administration). L’objectif était de récupérer des images météorologiques transmises en direct par ces satellites. Nous avons utilisé un module SDR (clé USB RTL2832) couplé à une antenne hélicoïdale quadrifilaire pour cette opération.",
        technologies: ["Satdump", "SDRSharp", "WxtoImg"],
        pdfFile: "1.pdf"
    },
    {
        id: 2,
        title: "Projet Raspberry",
        images: ["images/d.jpg", "images/e.jpg", "images/f.jpg"],
        description: "Projet d’initiation aux réseaux et à l’embarqué avec une Raspberry Pi 4 Model B : configuration réseau, contrôle de LED via GPIO, lecture et transmission de données d’un capteur DHT22 en MQTT, dans le cadre de la SAÉ 1.02.",
        technologies: ["Thonny", "Debian"],
        pdfFile: "2.pdf"
    },
    {
        id: 3,
        title: "Refonte de l'infrastructure réseau et mise en place d’une solution multimédia",
        images: ["images/1.png", "images/2.png", "images/3.png"],
        description: "Refonte du réseau de MediaStream Solutions : virtualisation avec Proxmox, pare-feu pfSense, NAS, VLAN, et déploiement d’un LMS Moodle sur 7 sites à La Réunion et à Mayotte.",
        technologies: ["VLAN", "Pare-feu"],
        pdfFile: "3.pdf"
    },
    {
        id: 4,
        title: "Construire un réseau informatique pour une petite structure",
        images: ["images/11.png", "images/14.png", "images/12.png", "images/13.png"],
        description: "Dans le cadre de notre formation en <strong>Réseaux et Télécommunications</strong>, nous avons réalisé un projet visant à concevoir et mettre en place un réseau informatique pour une petite structure. Ce projet a pour objectif de répondre aux besoins d'une entreprise ou d'une organisation en matière de connectivité, de sécurité et de gestion des équipements informatiques.",
        technologies: ["pfSense", "DHCP", "DMZ"],
        pdfFile: "p4.pdf"
    },
];


let currentSlide = 0;
let autoSlideInterval;
let currentProject = null;

function generateProjectsGrid() {
    const grid = document.getElementById('projectsGrid');

    projects.forEach(project => {
        const projectCard = document.createElement('div');
        projectCard.className = 'project-card fade-in-up';
        projectCard.onclick = () => openProjectModal(project);

        projectCard.innerHTML = `
            <div class="project-image-container">
                <div class="carousel">
                    ${project.images.map((img, index) => `
                        <div class="carousel-slide ${index === 0 ? 'active' : ''}">
                            <img src="${img}" alt="${project.title}">
                        </div>
                    `).join('')}
                </div>
            </div>
            <div class="project-info">
                <h3>${project.title}</h3>
                <div class="tech-tags">
                    ${project.technologies.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
                </div>
                <p class="project-description">${project.description}</p>
            </div>
        `;

        grid.appendChild(projectCard);
        startAutoSlide(projectCard.querySelector('.carousel'));
    });
}

function startAutoSlide(carousel) {
    const slides = carousel.querySelectorAll('.carousel-slide');
    let currentIndex = 0;

    setInterval(() => {
        slides[currentIndex].classList.remove('active');
        currentIndex = (currentIndex + 1) % slides.length;
        slides[currentIndex].classList.add('active');
    }, 3000);
}

function openProjectModal(project) {
    currentProject = project;
    currentSlide = 0;
    const modal = document.getElementById('projectModal');
    const modalCarousel = document.getElementById('modalCarousel');
    const projectDetails = document.getElementById('projectDetails');

    modalCarousel.innerHTML = project.images.map((img, index) => `
        <div class="modal-slide ${index === 0 ? 'active' : ''}">
            <img src="${img}" alt="${project.title}">
        </div>
    `).join('');

    projectDetails.innerHTML = `
  <h2>${project.title}</h2>
  <div class="tech-tags">
    ${project.technologies.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
  </div>
  <p>${project.description}</p>
<a href="docs/${project.pdfFile}" target="_blank" class="project-modal-button">Voir le projet complet</a>
`;




    modal.classList.add('active');
    startModalAutoSlide();
}

function closeProjectModal() {
    const modal = document.getElementById('projectModal');
    modal.classList.remove('active');
    clearInterval(autoSlideInterval);
}

function changeSlide(direction) {
    const slides = document.querySelectorAll('.modal-slide');
    slides[currentSlide].classList.remove('active');

    currentSlide = (currentSlide + direction + slides.length) % slides.length;
    slides[currentSlide].classList.add('active');
}

function startModalAutoSlide() {
    clearInterval(autoSlideInterval);
    autoSlideInterval = setInterval(() => {
        changeSlide(1);
    }, 20000);
}

function toggleEducationModal() {
    const modal = document.getElementById('educationModal');
    modal.classList.toggle('active');
}

function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    section.scrollIntoView({ behavior: 'smooth' });
}

function handleSubmit(event) {
    event.preventDefault();
    const form = event.target;
    const submitButton = form.querySelector('button[type="submit"]');

    submitButton.disabled = true;
    submitButton.classList.add('submitted');
    submitButton.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M20 6L9 17l-5-5"/>
        </svg>
        Message envoyé
    `;

    setTimeout(() => {
        form.reset();
        submitButton.disabled = false;
        submitButton.classList.remove('submitted');
        submitButton.innerHTML = `
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <line x1="22" y1="2" x2="11" y2="13"></line>
                <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
            </svg>
            Envoyer le message
        `;
    }, 2000);
}

document.addEventListener('DOMContentLoaded', () => {
    generateProjectsGrid();

    const fadeInElements = document.querySelectorAll('.fade-in-up');
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
            }
        });
    }, { threshold: 0.2 });

    fadeInElements.forEach(el => observer.observe(el));
});

window.onclick = function(event) {
    const educationModal = document.getElementById('educationModal');
    const projectModal = document.getElementById('projectModal');

    if (event.target === educationModal) toggleEducationModal();
    if (event.target === projectModal) closeProjectModal();
};


// Sélectionner tous les titres h2 dans les sections spécifiques
const titles = document.querySelectorAll('.about h2, .hero h2, .projects h2, .contact h2, .philosophy-section h2, .experience h2');
// Ajouter un écouteur d'événements pour chaque titre
titles.forEach(title => {
    title.addEventListener('mouseover', () => {
        // Arrêter l'animation
        title.style.animation = 'none';
        title.offsetHeight; // Reforcer le reflow pour redémarrer l'animation
        title.style.animation = 'slide 3s infinite'; // Relancer l'animation
    });
});




// Initialiser les carrousels de la section Expérience
// On utilise la même fonction startAutoSlide que pour les projets
document.addEventListener('DOMContentLoaded', () => {
    const experienceCarousels = document.querySelectorAll('.experience-carousel');
    experienceCarousels.forEach(carousel => {
        startAutoSlide(carousel);
    });
});


// GESTION DU MODE SOMBRE / CLAIR
const themeBtn = document.getElementById('theme-toggle');
const body = document.body;

// 1. Vérifier si l'utilisateur a déjà choisi un thème auparavant
const savedTheme = localStorage.getItem('selected-theme');

// Si "light" était sauvegardé, on l'active tout de suite
if (savedTheme === 'light') {
    body.classList.add('light-mode');
}

// 2. Écouter le clic sur le bouton
themeBtn.addEventListener('click', () => {
    // Basculer la classe 'light-mode'
    body.classList.toggle('light-mode');
    
    // Sauvegarder le choix dans le navigateur
    if (body.classList.contains('light-mode')) {
        localStorage.setItem('selected-theme', 'light');
    } else {
        localStorage.setItem('selected-theme', 'dark');
    }
});


