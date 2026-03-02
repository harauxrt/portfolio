// Données des projets
const projects = [
    {
        id: 1,
        title: "Projet Télécom Antennes",
        title_en: "Telecom Antennas Project",
        images: ["images/a.jpg", "images/b.jpg", "images/c.jpg"],
        description: "Installation d'une antenne hélicoïdale pour la réception de signaux satellitaires, réalisée dans le cadre de la SAÉ 3.ROM.04. Ce projet visait à capter, traiter et décoder les signaux APT à 137 MHz émis par les satellites NOAA (National Oceanic and Atmospheric Administration). L’objectif était de récupérer des images météorologiques transmises en direct par ces satellites. Nous avons utilisé un module SDR (clé USB RTL2832) couplé à une antenne hélicoïdale quadrifilaire pour cette opération.",
        description_en: "Installation of a helical antenna to receive satellite signals, carried out as part of SAÉ 3.ROM.04. The goal was to capture, process, and decode 137 MHz APT signals transmitted by NOAA (National Oceanic and Atmospheric Administration) satellites, in order to retrieve live weather images. We used an SDR module (RTL2832 USB dongle) combined with a quadrifilar helical antenna.",
        technologies: ["Satdump", "SDRSharp", "WxtoImg"],
        pdfFile: "1.pdf"
    },
    {
        id: 2,
        title: "Projet Raspberry",
        title_en: "Raspberry Pi Project",
        images: ["images/d.jpg", "images/e.jpg", "images/f.jpg"],
        description: "Projet d’initiation aux réseaux et à l’embarqué avec une Raspberry Pi 4 Model B : configuration réseau, contrôle de LED via GPIO, lecture et transmission de données d’un capteur DHT22 en MQTT, dans le cadre de la SAÉ 1.02.",
        description_en: "Introductory networking and embedded project using a Raspberry Pi 4 Model B: network configuration, LED control via GPIO, reading and sending DHT22 sensor data over MQTT, as part of SAÉ 1.02.",
        technologies: ["Thonny", "Debian"],
        pdfFile: "2.pdf"
    },
    {
        id: 3,
        title: "Refonte de l'infrastructure réseau et mise en place d’une solution multimédia",
        title_en: "Network infrastructure redesign and multimedia solution deployment",
        images: ["images/1.png", "images/2.png", "images/3.png"],
        description: "Refonte du réseau de MediaStream Solutions : virtualisation avec Proxmox, pare-feu pfSense, NAS, VLAN, et déploiement d’un LMS Moodle sur 7 sites à La Réunion et à Mayotte.",
        description_en: "Redesign of MediaStream Solutions' network: virtualization with Proxmox, pfSense firewall, NAS, VLANs, and deployment of a Moodle LMS across 7 sites in Réunion and Mayotte.",
        technologies: ["VLAN", "Pare-feu"],
        pdfFile: "3.pdf"
    },
    {
        id: 4,
        title: "Construire un réseau informatique pour une petite structure",
        title_en: "Building a computer network for a small organization",
        images: ["images/11.png", "images/14.png", "images/12.png", "images/13.png"],
        description: "Dans le cadre de notre formation en <strong>Réseaux et Télécommunications</strong>, nous avons réalisé un projet visant à concevoir et mettre en place un réseau informatique pour une petite structure. Ce projet a pour objectif de répondre aux besoins d'une entreprise ou d'une organisation en matière de connectivité, de sécurité et de gestion des équipements informatiques.",
        description_en: "As part of our <strong>Networks and Telecommunications</strong> program, we designed and deployed a computer network for a small organization. The project aimed to meet real-world needs for connectivity, security, and IT equipment management.",
        technologies: ["pfSense", "DHCP", "DMZ"],
        pdfFile: "p4.pdf"
    },
];



// =========================================================
// I18N (FR / EN)
// =========================================================
let currentLang = localStorage.getItem('selected-lang') || 'fr';

const i18n = {
    fr: {
        nav_about: "À propos",
        nav_experience: "Expérience",
        nav_education: "Formation",
        nav_projects: "Projets",
        nav_documents: "Documents",
        nav_contact: "Contact",

        theme_toggle_aria: "Changer de thème",

        hero_i_am: "Je suis",
        hero_subtitle: "Etudiant en réseaux et télécommunications",
        hero_intro: "Bienvenue sur mon portfolio. <br> Chaque aventure commence par une page blanche. Voici la mienne. Plongez dans mon univers et laissez-vous porter par l’histoire de mon parcours. <br>Rien ne se crée, rien se perd, tout se transforme et je transforme chaque défi en tremplin vers l'excellence.",
        hero_discover: "Découvrez mes projets",

        about_title: "À propos de moi",
        about_text: `Actuellement étudiant en BUT Réseaux et Télécommunications, j'aspire à devenir ingénieur en réseaux et, à terme, créer ma propre entreprise. <br><br>

Mon parcours m'a permis de passer de la découverte des bases (adressage IP, virtualisation classique) à une réelle autonomie technique. Je maîtrise aujourd'hui l'administration de systèmes complexes via la virtualisation et la configuration de topologies avancées.<br><br>

Rigoureux et curieux, je cherche maintenant à consolider mes acquis, notamment sur la sécurisation des serveurs Linux (gestion des logs) et l'approfondissement de mon anglais technique.`,
        about_education_card_title: "Formation",
        about_education_card_school: "Iut Terre sainte Reunion",
        click_more: "Cliquez pour plus d'informations",

        skill_networks_title: "Réseaux & Systemes",
        skill_networks_desc: "TLS & Certificats x.509 <br> Sécurisation serveur apache <br> Configuration serveur : Docker/DHCP/DNS <br> Protocole MPLS/OSPF/BGP",
        skill_pm_title: "Gestion de projet",
        skill_pm_desc: "Cahier des Charges<br>Spécifications Fonctionnelles Détaillées<br>Spécifications Techniques<br>CAPEX et OPEX",
        skill_web_title: "WEB",
        skill_web_desc: "HTML<br>CSS<br>JavaScript<br>PHP<br>Python",
        skill_tools_title: "Logiciels & Os",
        skill_tools_desc: "Drive<br>VirtualBox<br>VMware<br>Packet tracer<br>GNS3<br>Windows (7, 10, 11)<br>Linux<br>IOS",

        interests_title: "Mes intérêts",
        interests_subtitle: "En dehors de mes études, je me consacre à mes passions qui reflètent ma créativité, et l’envie de me dépasser.",
        interest_3d_title: "Impression 3D",
        interest_3d_desc: "Seule l’imagination fixe les limites de ce qui peut être créé.",
        interest_fpv_title: "Drone FPV",
        interest_fpv_desc: "Une liberté totale, guidée par la précision et le contrôle.",
        interest_gym_title: "Musculation",
        interest_gym_desc: "Avoir un mental fort, atteindre ses objectifs et prendre soin de soi.",

        exp_title: "Mon Parcours Professionnel",
        exp1_role: "Alternant Assistant Informatique",
        exp1_item1: "Analyse des besoins utilisateurs",
        exp1_item2: "Mise en place et maintenance de solutions techniques",
        exp1_item3: "Documentation et support utilisateurs",
        exp1_item4: "Supervision",
        exp1_item5: "Communication sociale",
        exp2_role: "Stagiaire à la DSI",
        exp2_item1: "Maintenance informatique et support technique",
        exp2_item2: "Cartographie WiFi et déploiement serveurs",

        edu_title: "Mon Parcours",
        edu1_title: "BUT Reseaux & Telecommunication",
        edu1_desc: "Administration Systèmes & Réseaux.",
        edu2_title: "Prépa TSI",
        edu2_desc: "Mathématiques, Physique & Sciences de l'Ingénieur.",
        edu3_title: "Bac STI2D",
        edu3_honor: "Mention BIEN",
        edu3_desc: "Option SIN (Systèmes d'Information et Numérique).",

        projects_title: "Mes Projets",
        projects_subtitle: "Cliquez sur les projets pour plus de details",
        project_view_full: "${t('project_view_full')}",

        docs_title: "Documents & Certifications",
        docs_subtitle: "Cliquez sur les boutons pour consulter les documents",
        docs_cv: "Mon CV",
        docs_mooc: "MOOC Anssi",

        contact_title: "Me Contacter",
        contact_name_label: "Nom complet",
        contact_name_ph: "Votre nom",
        contact_email_label: "Email",
        contact_email_ph: "votre@email.com",
        contact_message_label: "Message",
        contact_message_ph: "Votre message...",
        contact_send: "Envoyer le message",
        contact_sent: "Message envoyé",

        modal_edu_title: "Présentation BUT R&T",
        modal_edu_text: "Le BUT Réseaux & Télécommunications de l’IUT de La Réunion forme des experts polyvalents en technologies de l’information, maîtrisant la conception, la sécurisation et la gestion des systèmes modernes, avec un fort accent sur la pratique, le travail d’équipe et l’innovation.",
        modal_edu_card1_title: "Administrer les réseaux et l’Internet",
        modal_edu_card1_item1: "en choisissant les solutions et technologies réseaux adaptées",
        modal_edu_card1_item2: "en respectant les principes fondamentaux de la sécurité informatique",
        modal_edu_card1_item3: "en utilisant une approche rigoureuse pour la résolution des dysfonctionnement",
        modal_edu_card1_item4: "en respectant les règles métiers (déontologie, tests, vérifications de conformité)",
        modal_edu_card2_title: "Connecter les entreprises et les usagers",
        modal_edu_card2_item1: "en communiquant avec le client et les différents acteurs impliqués",
        modal_edu_card2_item2: "Implementation d'un container Docker",
        modal_edu_card2_item3: "en choisissant les solutions et technologies adaptées",

        lang_btn: "EN",
        lang_aria: "Traduire le site",
    },
    en: {
        nav_about: "About",
        nav_experience: "Experience",
        nav_education: "Education",
        nav_projects: "Projects",
        nav_documents: "Documents",
        nav_contact: "Contact",

        theme_toggle_aria: "Toggle theme",

        hero_i_am: "I'm",
        hero_subtitle: "Networks and Telecommunications student",
        hero_intro: "Welcome to my portfolio. <br> Every adventure starts with a blank page. Here is mine. Dive into my world and follow the story of my journey. <br>Nothing is created, nothing is lost, everything transforms—and I turn every challenge into a springboard toward excellence.",
        hero_discover: "Discover my projects",

        about_title: "About me",
        about_text: `Currently a student in a Bachelor's program in Networks and Telecommunications, I aspire to become a network engineer and, in the long term, build my own company. <br><br>

My journey took me from learning the fundamentals (IP addressing, classic virtualization) to real technical autonomy. Today, I manage complex systems through virtualization and the configuration of advanced topologies.<br><br>

Detail-oriented and curious, I'm now focused on strengthening my skills—especially Linux server hardening (log management) and improving my technical English.`,
        about_education_card_title: "Education",
        about_education_card_school: "IUT Terre Sainte, Réunion",
        click_more: "Click for more details",

        skill_networks_title: "Networks & Systems",
        skill_networks_desc: "TLS & X.509 Certificates <br> Apache server hardening <br> Server setup: Docker/DHCP/DNS <br> MPLS/OSPF/BGP",
        skill_pm_title: "Project management",
        skill_pm_desc: "Requirements document<br>Detailed functional specs<br>Technical specs<br>CAPEX & OPEX",
        skill_web_title: "Web",
        skill_web_desc: "HTML<br>CSS<br>JavaScript<br>PHP<br>Python",
        skill_tools_title: "Tools & OS",
        skill_tools_desc: "Drive<br>VirtualBox<br>VMware<br>Packet Tracer<br>GNS3<br>Windows (7, 10, 11)<br>Linux<br>IOS",

        interests_title: "Interests",
        interests_subtitle: "Outside my studies, I dedicate time to passions that reflect my creativity and my drive to push myself further.",
        interest_3d_title: "3D Printing",
        interest_3d_desc: "Only imagination sets the limits of what can be created.",
        interest_fpv_title: "FPV Drone",
        interest_fpv_desc: "Total freedom, guided by precision and control.",
        interest_gym_title: "Strength training",
        interest_gym_desc: "Building a strong mindset, reaching goals, and taking care of yourself.",

        exp_title: "Professional journey",
        exp1_role: "IT Assistant (Work-study)",
        exp1_item1: "Analyzing user needs",
        exp1_item2: "Deploying and maintaining technical solutions",
        exp1_item3: "Documentation and user support",
        exp1_item4: "Monitoring",
        exp1_item5: "Internal communication",
        exp2_role: "IT Department Intern",
        exp2_item1: "IT maintenance and technical support",
        exp2_item2: "Wi‑Fi mapping and server deployment",

        edu_title: "Education",
        edu1_title: "B.U.T. Networks & Telecommunications",
        edu1_desc: "Systems & Network Administration.",
        edu2_title: "TSI Preparatory Class",
        edu2_desc: "Mathematics, Physics & Engineering Sciences.",
        edu3_title: "STI2D High School Diploma",
        edu3_honor: "Honors (Good)",
        edu3_desc: "SIN option (Information Systems & Digital).",

        projects_title: "Projects",
        projects_subtitle: "Click on a project to see more details",
        project_view_full: "View full project",

        docs_title: "Documents & Certifications",
        docs_subtitle: "Click the buttons to view the documents",
        docs_cv: "My resume",
        docs_mooc: "ANSSI MOOC",

        contact_title: "Contact me",
        contact_name_label: "Full name",
        contact_name_ph: "Your name",
        contact_email_label: "Email",
        contact_email_ph: "your@email.com",
        contact_message_label: "Message",
        contact_message_ph: "Your message...",
        contact_send: "Send message",
        contact_sent: "Message sent",

        modal_edu_title: "B.U.T. R&T overview",
        modal_edu_text: "The Networks & Telecommunications B.U.T. at the IUT of Réunion trains versatile IT professionals who master the design, security, and management of modern systems, with a strong focus on hands-on practice, teamwork, and innovation.",
        modal_edu_card1_title: "Administer networks and the Internet",
        modal_edu_card1_item1: "by choosing appropriate network solutions and technologies",
        modal_edu_card1_item2: "by following the core principles of cybersecurity",
        modal_edu_card1_item3: "by using a rigorous approach to troubleshoot issues",
        modal_edu_card1_item4: "by respecting professional rules (ethics, testing, compliance checks)",
        modal_edu_card2_title: "Connect companies and users",
        modal_edu_card2_item1: "by communicating with the customer and all stakeholders",
        modal_edu_card2_item2: "Docker container implementation",
        modal_edu_card2_item3: "by choosing appropriate solutions and technologies",

        lang_btn: "FR",
        lang_aria: "Translate the site",
    }
};

function t(key) {
    return (i18n[currentLang] && i18n[currentLang][key]) || (i18n.fr && i18n.fr[key]) || key;
}

function applyTranslations() {
    // innerHTML translations
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        el.innerHTML = t(key);
    });

    // placeholders
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
        const key = el.getAttribute('data-i18n-placeholder');
        el.setAttribute('placeholder', t(key));
    });

    // aria-labels
    document.querySelectorAll('[data-i18n-aria]').forEach(el => {
        const key = el.getAttribute('data-i18n-aria');
        el.setAttribute('aria-label', t(key));
    });

    // Update html lang attribute
    document.documentElement.setAttribute('lang', currentLang);

    // Update language button label
    const langBtn = document.getElementById('lang-toggle');
    if (langBtn) {
        langBtn.textContent = t('lang_btn');
        langBtn.setAttribute('aria-label', t('lang_aria'));
    }
}

function setLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('selected-lang', currentLang);

    // Re-render UI
    applyTranslations();

    // Re-render projects (dynamic content)
    const grid = document.getElementById('projectsGrid');
    if (grid) {
        grid.innerHTML = '';
        generateProjectsGrid();
    }

    // If a project modal is open, refresh it
    const modal = document.getElementById('projectModal');
    if (modal && modal.classList.contains('active') && currentProject) {
        openProjectModal(currentProject);
    }
}

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
                <h3>${(currentLang === "en" ? project.title_en : project.title)}</h3>
                <div class="tech-tags">
                    ${project.technologies.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
                </div>
                <p class="project-description">${(currentLang === "en" ? project.description_en : project.description)}</p>
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
  <h2>${(currentLang === "en" ? project.title_en : project.title)}</h2>
  <div class="tech-tags">
    ${project.technologies.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
  </div>
  <p>${(currentLang === "en" ? project.description_en : project.description)}</p>
<a href="docs/${project.pdfFile}" target="_blank" class="project-modal-button">${t('project_view_full')}</a>
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
        ${t('contact_sent')}
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
            ${t('contact_send')}
        `;
    }, 2000);
}

document.addEventListener('DOMContentLoaded', () => {
    // Init language
    applyTranslations();
    setLanguage(currentLang);

    const langBtn = document.getElementById('lang-toggle');
    if (langBtn) {
        langBtn.addEventListener('click', () => {
            setLanguage(currentLang === 'fr' ? 'en' : 'fr');
        });
    }

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


