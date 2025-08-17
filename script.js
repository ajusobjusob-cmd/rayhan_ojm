// Language Management
let currentLanguage = 'en';

// Admin Authentication
let isAdminAuthenticated = false;
const ADMIN_PASSWORD = 'OJM_UAE_2024';

// Website content structure - all editable
let websiteContent = {
    // Site configuration
    siteInfo: {
        title: {
            en: 'Rayhan Jusob - OJM Youth Leader Secretary UAE',
            pt: 'Rayhan Jusob - Secretário da Juventude OJM EAU'
        },
        description: {
            en: 'Official website of Rayhan Jusob, Youth Leader Secretary of OJM (Organização da Juventude Moçambicana) in the UAE.',
            pt: 'Website oficial de Rayhan Jusob, Secretário da Juventude da OJM (Organização da Juventude Moçambicana) nos EAU.'
        }
    },
    
    // Hero section content
    hero: {
        profileImage: 'https://lookaside.instagram.com/seo/google_widget/crawler/?media_id=3441697353890352934',
        name: {
            en: 'Rayhan Jusob',
            pt: 'Rayhan Jusob'
        },
        title: {
            en: 'OJM Youth Leader Secretary - UAE',
            pt: 'Secretário da Juventude OJM - EAU'
        },
        description: {
            en: 'Empowering Mozambican youth in the UAE through innovative leadership, dynamic community building, and meaningful cultural preservation initiatives.',
            pt: 'Capacitando jovens moçambicanos nos EAU através de liderança inovadora, construção dinâmica de comunidade e iniciativas significativas de preservação cultural.'
        },
        badge: {
            en: 'Youth Leadership Excellence',
            pt: 'Excelência em Liderança Juvenil'
        },
        buttons: {
            primary: {
                en: 'Explore My Work',
                pt: 'Explore Meu Trabalho'
            },
            secondary: {
                en: 'Let\'s Connect',
                pt: 'Vamos Conectar'
            }
        }
    },
    
    // About section content
    about: {
        title: {
            en: 'About Rayhan',
            pt: 'Sobre Rayhan'
        },
        subtitle: {
            en: 'A dynamic leader transforming youth engagement across the UAE',
            pt: 'Um líder dinâmico transformando o engajamento juvenil nos EAU'
        },
        biography: {
            title: {
                en: 'Leadership Journey',
                pt: 'Jornada de Liderança'
            },
            content: {
                en: 'As the Youth Leader Secretary of OJM (Organização da Juventude Moçambicana) in the UAE, Rayhan Jusob has pioneered innovative approaches to youth empowerment, creating lasting impact through strategic community engagement and cultural preservation initiatives.',
                pt: 'Como Secretário da Juventude da OJM (Organização da Juventude Moçambicana) nos EAU, Rayhan Jusob foi pioneiro em abordagens inovadoras para o empoderamento juvenil, criando impacto duradouro através de engajamento comunitário estratégico e iniciativas de preservação cultural.'
            }
        },
        timeline: [
            {
                year: '2023',
                title: {
                    en: 'OJM Youth Secretary Appointment',
                    pt: 'Nomeação como Secretário da Juventude OJM'
                },
                description: {
                    en: 'Began transformative leadership role, launching comprehensive youth engagement programs across multiple emirates',
                    pt: 'Iniciou papel de liderança transformadora, lançando programas abrangentes de engajamento juvenil em múltiplos emirados'
                }
            },
            {
                year: '2024',
                title: {
                    en: 'Regional Impact Expansion',
                    pt: 'Expansão do Impacto Regional'
                },
                description: {
                    en: 'Successfully scaled OJM initiatives across all seven emirates, establishing sustainable community networks',
                    pt: 'Expandiu com sucesso as iniciativas da OJM em todos os sete emirados, estabelecendo redes comunitárias sustentáveis'
                }
            },
            {
                year: '2025',
                title: {
                    en: 'Excellence Recognition',
                    pt: 'Reconhecimento de Excelência'
                },
                description: {
                    en: 'Recognized for outstanding youth leadership and community impact, setting new standards for diaspora engagement',
                    pt: 'Reconhecido pela liderança juvenil excepcional e impacto comunitário, estabelecendo novos padrões para engajamento da diáspora'
                }
            }
        ],
        statistics: [
            {
                number: '500+',
                label: {
                    en: 'Youth Members',
                    pt: 'Membros Jovens'
                },
                description: {
                    en: 'Active community participants',
                    pt: 'Participantes ativos da comunidade'
                }
            },
            {
                number: '25+',
                label: {
                    en: 'Events Organized',
                    pt: 'Eventos Organizados'
                },
                description: {
                    en: 'Successful community gatherings',
                    pt: 'Encontros comunitários bem-sucedidos'
                }
            },
            {
                number: '7',
                label: {
                    en: 'Emirates Reached',
                    pt: 'Emirados Alcançados'
                },
                description: {
                    en: 'Complete UAE coverage',
                    pt: 'Cobertura completa dos EAU'
                }
            }
        ]
    },
    
    // Organization section content
    organization: {
        title: {
            en: 'OJM - Organização da Juventude Moçambicana',
            pt: 'OJM - Organização da Juventude Moçambicana'
        },
        subtitle: {
            en: 'Strengthening youth leadership and cultural identity across the diaspora',
            pt: 'Fortalecendo a liderança juvenil e identidade cultural na diáspora'
        },
        logo: 'logo.png',
        description: {
            en: 'The UAE chapter of OJM represents the dynamic voice of Mozambican youth in the Emirates, fostering leadership development, cultural preservation, and community engagement through innovative programs and initiatives.',
            pt: 'O capítulo dos EAU da OJM representa a voz dinâmica da juventude moçambicana nos Emirados, promovendo o desenvolvimento de liderança, preservação cultural e engajamento comunitário através de programas e iniciativas inovadoras.'
        },
        features: [
            {
                icon: 'fas fa-crown',
                title: {
                    en: 'Youth Leadership',
                    pt: 'Liderança Juvenil'
                },
                description: {
                    en: 'Developing the next generation of Mozambican leaders through mentorship and training programs',
                    pt: 'Desenvolvendo a próxima geração de líderes moçambicanos através de programas de mentoria e treinamento'
                }
            },
            {
                icon: 'fas fa-globe-africa',
                title: {
                    en: 'Cultural Heritage',
                    pt: 'Patrimônio Cultural'
                },
                description: {
                    en: 'Preserving and celebrating Mozambican traditions, language, and values in the UAE diaspora',
                    pt: 'Preservando e celebrando as tradições, língua e valores moçambicanos na diáspora dos EAU'
                }
            },
            {
                icon: 'fas fa-handshake',
                title: {
                    en: 'Community Building',
                    pt: 'Construção Comunitária'
                },
                description: {
                    en: 'Creating strong networks and support systems for Mozambican youth across all emirates',
                    pt: 'Criando redes fortes e sistemas de apoio para jovens moçambicanos em todos os emirados'
                }
            },
            {
                icon: 'fas fa-lightbulb',
                title: {
                    en: 'Innovation',
                    pt: 'Inovação'
                },
                description: {
                    en: 'Embracing modern approaches to youth engagement while honoring traditional values',
                    pt: 'Abraçando abordagens modernas para o engajamento juvenil enquanto honra valores tradicionais'
                }
            }
        ]
    },
    
    // Contact section content
    contact: {
        title: {
            en: 'Let\'s Work Together',
            pt: 'Vamos Trabalhar Juntos'
        },
        subtitle: {
            en: 'Ready to collaborate on youth empowerment and community building initiatives?',
            pt: 'Pronto para colaborar em iniciativas de empoderamento juvenil e construção comunitária?'
        },
        info: {
            email: 'rayhan.jusob@ojm-uae.org',
            instagram: '@rayhan_jusob',
            linkedin: 'Rayhan Jusob'
        }
    }
};

// Portfolio data structure (Combined Activities & Gallery)
const portfolioData = [
    {
        id: 1,
        title: {
            en: 'OJM Leadership Recognition Ceremony',
            pt: 'Cerimônia de Reconhecimento de Liderança OJM'
        },
        description: {
            en: 'Celebrating achievements in youth leadership and community impact at the annual OJM recognition ceremony.',
            pt: 'Celebrando conquistas em liderança juvenil e impacto comunitário na cerimônia anual de reconhecimento da OJM.'
        },
        image: 'https://lookaside.instagram.com/seo/google_widget/crawler/?media_id=3486128604946120801',
        category: 'events',
        date: '2024-12-15',
        type: {
            en: 'Leadership Event',
            pt: 'Evento de Liderança'
        }
    },
    {
        id: 2,
        title: {
            en: 'Youth Empowerment Workshop Series',
            pt: 'Série de Workshops de Empoderamento Juvenil'
        },
        description: {
            en: 'Comprehensive training program designed to develop leadership skills and professional competencies among Mozambican youth.',
            pt: 'Programa de treinamento abrangente projetado para desenvolver habilidades de liderança e competências profissionais entre jovens moçambicanos.'
        },
        image: 'https://lookaside.instagram.com/seo/google_widget/crawler/?media_id=3200134353565264772',
        category: 'programs',
        date: '2024-11-20',
        type: {
            en: 'Educational Program',
            pt: 'Programa Educacional'
        }
    },
    {
        id: 3,
        title: {
            en: 'VII OJM National Conference Representation',
            pt: 'Representação na VII Conferência Nacional da OJM'
        },
        description: {
            en: 'Representing the UAE chapter at the national OJM conference, sharing innovative youth engagement strategies.',
            pt: 'Representando o capítulo dos EAU na conferência nacional da OJM, compartilhando estratégias inovadoras de engajamento juvenil.'
        },
        image: 'https://lookaside.instagram.com/seo/google_widget/crawler/?media_id=3673876897995685330',
        category: 'events',
        date: '2024-10-10',
        type: {
            en: 'National Conference',
            pt: 'Conferência Nacional'
        }
    },
    {
        id: 4,
        title: {
            en: 'Community Engagement Initiative',
            pt: 'Iniciativa de Engajamento Comunitário'
        },
        description: {
            en: 'Building stronger connections within the Mozambican diaspora through interactive community engagement sessions.',
            pt: 'Construindo conexões mais fortes dentro da diáspora moçambicana através de sessões interativas de engajamento comunitário.'
        },
        image: 'https://lookaside.instagram.com/seo/google_widget/crawler/?media_id=3441697353898781847',
        category: 'community',
        date: '2024-09-05',
        type: {
            en: 'Community Program',
            pt: 'Programa Comunitário'
        }
    },
    {
        id: 5,
        title: {
            en: 'Cultural Heritage Celebration',
            pt: 'Celebração do Patrimônio Cultural'
        },
        description: {
            en: 'Annual celebration of Mozambican independence and cultural heritage, bringing together the entire UAE diaspora.',
            pt: 'Celebração anual da independência moçambicana e patrimônio cultural, reunindo toda a diáspora dos EAU.'
        },
        image: 'https://lookaside.instagram.com/seo/google_widget/crawler/?media_id=2569217801332852980',
        category: 'culture',
        date: '2024-06-25',
        type: {
            en: 'Cultural Event',
            pt: 'Evento Cultural'
        }
    },
    {
        id: 6,
        title: {
            en: 'OJM UAE Chapter Strategic Planning',
            pt: 'Planejamento Estratégico do Capítulo OJM EAU'
        },
        description: {
            en: 'Strategic planning session to develop innovative approaches for youth empowerment and community building.',
            pt: 'Sessão de planejamento estratégico para desenvolver abordagens inovadoras para empoderamento juvenil e construção comunitária.'
        },
        image: 'https://lookaside.instagram.com/seo/google_widget/crawler/?media_id=3673679724841261824',
        category: 'programs',
        date: '2024-08-15',
        type: {
            en: 'Strategic Planning',
            pt: 'Planejamento Estratégico'
        }
    },
    {
        id: 7,
        title: {
            en: 'FRELIMO Leadership Delegation Meeting',
            pt: 'Reunião com Delegação de Liderança da FRELIMO'
        },
        description: {
            en: 'High-level meeting with FRELIMO leadership to discuss youth diaspora engagement and future collaboration strategies.',
            pt: 'Reunião de alto nível com a liderança da FRELIMO para discutir engajamento da diáspora juvenil e estratégias de colaboração futura.'
        },
        image: 'https://lookaside.instagram.com/seo/google_widget/crawler/?media_id=3699122866462729292',
        category: 'events',
        date: '2024-01-20',
        type: {
            en: 'Official Meeting',
            pt: 'Reunião Oficial'
        }
    },
    {
        id: 8,
        title: {
            en: 'Youth Network Expansion Program',
            pt: 'Programa de Expansão da Rede Juvenil'
        },
        description: {
            en: 'Expanding OJM youth networks across all seven emirates through targeted outreach and engagement programs.',
            pt: 'Expandindo redes juvenis da OJM em todos os sete emirados através de programas direcionados de alcance e engajamento.'
        },
        image: 'https://lookaside.instagram.com/seo/google_widget/crawler/?media_id=2569217801316195214',
        category: 'programs',
        date: '2024-07-30',
        type: {
            en: 'Network Expansion',
            pt: 'Expansão de Rede'
        }
    }
];

// News data structure
const newsData = [
    {
        id: 1,
        title: {
            en: "OJM UAE Chapter Launches Revolutionary Youth Mentorship Program",
            pt: "Capítulo OJM EAU Lança Programa Revolucionário de Mentoria Juvenil"
        },
        excerpt: {
            en: "A comprehensive mentorship initiative connecting experienced professionals with young Mozambicans in the UAE, creating pathways for career advancement and leadership development.",
            pt: "Uma iniciativa abrangente de mentoria conectando profissionais experientes com jovens moçambicanos nos EAU, criando caminhos para avanço na carreira e desenvolvimento de liderança."
        },
        date: "2024-03-15",
        image: "https://via.placeholder.com/400x250/FFD700/1a1a1a?text=Mentorship+Program",
        category: {
            en: "Program Launch",
            pt: "Lançamento de Programa"
        }
    },
    {
        id: 2,
        title: {
            en: "Record-Breaking Cultural Heritage Festival Celebrates Mozambican Identity",
            pt: "Festival de Patrimônio Cultural Bate Recordes Celebrando Identidade Moçambicana"
        },
        excerpt: {
            en: "Over 800 attendees celebrated Mozambican culture with traditional music, dance, cuisine, and storytelling, marking the largest diaspora gathering in UAE history.",
            pt: "Mais de 800 participantes celebraram a cultura moçambicana com música, dança, culinária e narrativas tradicionais, marcando o maior encontro da diáspora na história dos EAU."
        },
        date: "2024-02-28",
        image: "https://via.placeholder.com/400x250/FF3D3D/ffffff?text=Cultural+Festival",
        category: {
            en: "Cultural Event",
            pt: "Evento Cultural"
        }
    },
    {
        id: 3,
        title: {
            en: "Innovation in Youth Leadership: Digital Engagement Platform Launched",
            pt: "Inovação em Liderança Juvenil: Plataforma Digital de Engajamento Lançada"
        },
        excerpt: {
            en: "OJM UAE introduces cutting-edge digital platform for virtual workshops, networking, and skill development, reaching youth across all seven emirates.",
            pt: "OJM EAU introduz plataforma digital de ponta para workshops virtuais, networking e desenvolvimento de habilidades, alcançando jovens em todos os sete emirados."
        },
        date: "2024-01-20",
        image: "https://via.placeholder.com/400x250/FF8C42/ffffff?text=Digital+Platform",
        category: {
            en: "Innovation",
            pt: "Inovação"
        }
    }
];

// Initialize the website
document.addEventListener('DOMContentLoaded', function() {
    loadStoredContent();
    initializeLanguage();
    initializePortfolio();
    initializeNews();
    initializeNavigation();
    initializeContactForm();
    initializePortfolioLightbox();
    initializeAnimations();
    updateAllContent();
});

// Language Management Functions
function toggleLanguage() {
    currentLanguage = currentLanguage === 'en' ? 'pt' : 'en';
    updateLanguage();
    localStorage.setItem('preferredLanguage', currentLanguage);
}

function initializeLanguage() {
    const savedLanguage = localStorage.getItem('preferredLanguage');
    if (savedLanguage) {
        currentLanguage = savedLanguage;
    }
    updateLanguage();
}

function updateLanguage() {
    // Update HTML lang attribute
    document.documentElement.setAttribute('lang', currentLanguage);
    document.documentElement.setAttribute('data-lang', currentLanguage);
    
    // Update language toggle button
    const langText = document.getElementById('langText');
    if (langText) {
        langText.textContent = currentLanguage === 'en' ? 'PT' : 'EN';
    }
    
    // Update all translatable elements
    const translatableElements = document.querySelectorAll('[data-en][data-pt]');
    translatableElements.forEach(element => {
        const text = element.getAttribute(`data-${currentLanguage}`);
        if (text) {
            element.textContent = text;
        }
    });
    
    // Update form placeholders and labels
    updateFormLanguage();
    
    // Update dynamic content
    updatePortfolioDisplay();
    updateNewsDisplay();
    updateAllContent();
}

function updateFormLanguage() {
    const nameLabel = document.querySelector('label[for="name"]');
    const emailLabel = document.querySelector('label[for="email"]');
    const subjectLabel = document.querySelector('label[for="subject"]');
    const messageLabel = document.querySelector('label[for="message"]');
    
    if (nameLabel) nameLabel.textContent = currentLanguage === 'en' ? 'Your Name' : 'Seu Nome';
    if (emailLabel) emailLabel.textContent = currentLanguage === 'en' ? 'Your Email' : 'Seu Email';
    if (subjectLabel) subjectLabel.textContent = currentLanguage === 'en' ? 'Subject' : 'Assunto';
    if (messageLabel) messageLabel.textContent = currentLanguage === 'en' ? 'Your Message' : 'Sua Mensagem';
    
    // Update placeholders
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const subjectInput = document.getElementById('subject');
    const messageInput = document.getElementById('message');
    
    if (nameInput) nameInput.placeholder = currentLanguage === 'en' ? 'Enter your full name' : 'Digite seu nome completo';
    if (emailInput) emailInput.placeholder = currentLanguage === 'en' ? 'your.email@example.com' : 'seu.email@exemplo.com';
    if (subjectInput) subjectInput.placeholder = currentLanguage === 'en' ? 'What would you like to discuss?' : 'Sobre o que gostaria de conversar?';
    if (messageInput) messageInput.placeholder = currentLanguage === 'en' ? 'Share your thoughts, ideas, or collaboration proposals...' : 'Compartilhe seus pensamentos, ideias ou propostas de colaboração...';
}

// Portfolio Functions
function initializePortfolio() {
    updatePortfolioDisplay();
    initializePortfolioFilter();
}

function updatePortfolioDisplay(filter = 'all') {
    const portfolioGrid = document.getElementById('portfolioGrid');
    if (!portfolioGrid) return;
    
    portfolioGrid.innerHTML = '';
    
    const filteredItems = filter === 'all' 
        ? portfolioData 
        : portfolioData.filter(item => item.category === filter);
    
    filteredItems.forEach(item => {
        const portfolioItem = document.createElement('div');
        portfolioItem.className = 'portfolio-item';
        portfolioItem.setAttribute('data-category', item.category);
        
        const title = item.title[currentLanguage] || item.title.en;
        const description = item.description[currentLanguage] || item.description.en;
        const type = item.type[currentLanguage] || item.type.en;
        const formattedDate = new Date(item.date).toLocaleDateString(
            currentLanguage === 'pt' ? 'pt-BR' : 'en-US',
            { year: 'numeric', month: 'long', day: 'numeric' }
        );
        
        portfolioItem.innerHTML = `
            <div class="portfolio-image">
                <img src="${item.image}" alt="${title}" loading="lazy">
                <div class="portfolio-overlay">
                    <i class="fas fa-search-plus"></i>
                </div>
            </div>
            <div class="portfolio-content">
                <div class="portfolio-category">${type}</div>
                <h3 class="portfolio-title">${title}</h3>
                <p class="portfolio-description">${description}</p>
                <div class="portfolio-meta">
                    <span><i class="fas fa-calendar"></i> ${formattedDate}</span>
                    <span><i class="fas fa-tag"></i> ${item.category}</span>
                </div>
            </div>
        `;
        
        portfolioItem.addEventListener('click', () => openPortfolioLightbox(item));
        portfolioGrid.appendChild(portfolioItem);
    });
}

function initializePortfolioFilter() {
    const filterBtns = document.querySelectorAll('.filter-btn');
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Remove active class from all buttons
            filterBtns.forEach(b => b.classList.remove('active'));
            // Add active class to clicked button
            btn.classList.add('active');
            
            // Filter portfolio items
            const filter = btn.getAttribute('data-filter');
            updatePortfolioDisplay(filter);
        });
    });
}

// News Functions
function initializeNews() {
    updateNewsDisplay();
}

function updateNewsDisplay() {
    const newsGrid = document.getElementById('newsGrid');
    if (!newsGrid) return;
    
    newsGrid.innerHTML = '';
    
    newsData.forEach(article => {
        const newsCard = document.createElement('div');
        newsCard.className = 'news-card';
        
        const title = article.title[currentLanguage] || article.title.en;
        const excerpt = article.excerpt[currentLanguage] || article.excerpt.en;
        const category = article.category[currentLanguage] || article.category.en;
        const formattedDate = new Date(article.date).toLocaleDateString(
            currentLanguage === 'pt' ? 'pt-BR' : 'en-US',
            { year: 'numeric', month: 'long', day: 'numeric' }
        );
        
        newsCard.innerHTML = `
            <div class="news-image">
                <img src="${article.image}" alt="${title}" loading="lazy">
            </div>
            <div class="news-content">
                <div class="news-date">
                    <i class="fas fa-calendar-alt"></i>
                    ${formattedDate}
                </div>
                <h3 class="news-title">${title}</h3>
                <p class="news-excerpt">${excerpt}</p>
                <a href="#" class="news-link">
                    ${currentLanguage === 'en' ? 'Read More' : 'Leia Mais'}
                    <i class="fas fa-arrow-right"></i>
                </a>
            </div>
        `;
        
        newsGrid.appendChild(newsCard);
    });
}

// Navigation Functions
function initializeNavigation() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    
    if (hamburger && navMenu) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });
    }
    
    // Close mobile menu when clicking on a link
    const navLinks = document.querySelectorAll('.nav-menu a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });
    
    // Smooth scrolling for navigation links
    const smoothScrollLinks = document.querySelectorAll('a[href^="#"]');
    smoothScrollLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                const offsetTop = targetElement.offsetTop - 80; // Account for fixed navbar
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Update navbar on scroll
    let lastScrollTop = 0;
    const navbar = document.querySelector('.navbar');
    
    window.addEventListener('scroll', () => {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        if (scrollTop > lastScrollTop && scrollTop > 100) {
            // Scrolling down
            navbar.style.transform = 'translateY(-100%)';
        } else {
            // Scrolling up
            navbar.style.transform = 'translateY(0)';
        }
        
        lastScrollTop = scrollTop;
    });
    
    // Hero scroll indicator
    const scrollIndicator = document.querySelector('.scroll-indicator');
    if (scrollIndicator) {
        scrollIndicator.addEventListener('click', () => {
            const aboutSection = document.getElementById('about');
            if (aboutSection) {
                aboutSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
    }
}

// Contact Form Functions
function initializeContactForm() {
    const contactForm = document.getElementById('contactForm');
    if (!contactForm) return;
    
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        handleContactSubmission(contactForm);
    });
}

function handleContactSubmission(form) {
    const formData = new FormData(form);
    const data = {
        name: formData.get('name'),
        email: formData.get('email'),
        subject: formData.get('subject'),
        message: formData.get('message'),
        timestamp: new Date().toISOString()
    };
    
    // Store submission locally (in a real implementation, this would be sent to a server)
    const submissions = JSON.parse(localStorage.getItem('contactSubmissions') || '[]');
    submissions.push(data);
    localStorage.setItem('contactSubmissions', JSON.stringify(submissions));
    
    // Show success message
    const successMessage = currentLanguage === 'en' 
        ? 'Thank you! Your message has been sent successfully. I will get back to you soon.'
        : 'Obrigado! Sua mensagem foi enviada com sucesso. Entrarei em contato em breve.';
    
    alert(successMessage);
    form.reset();
}

// Portfolio Lightbox Functions
function initializePortfolioLightbox() {
    const lightbox = document.getElementById('portfolioLightbox');
    const lightboxClose = document.querySelector('.lightbox-close');
    
    if (lightboxClose) {
        lightboxClose.addEventListener('click', closePortfolioLightbox);
    }
    
    if (lightbox) {
        lightbox.addEventListener('click', (e) => {
            if (e.target === lightbox) {
                closePortfolioLightbox();
            }
        });
    }
    
    // ESC key to close lightbox
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closePortfolioLightbox();
        }
    });
}

function openPortfolioLightbox(item) {
    const lightbox = document.getElementById('portfolioLightbox');
    const lightboxImage = document.getElementById('lightboxImage');
    const lightboxTitle = document.getElementById('lightboxTitle');
    const lightboxDescription = document.getElementById('lightboxDescription');
    const lightboxCategory = document.getElementById('lightboxCategory');
    const lightboxDate = document.getElementById('lightboxDate');
    
    if (lightbox && lightboxImage && lightboxTitle && lightboxDescription) {
        const title = item.title[currentLanguage] || item.title.en;
        const description = item.description[currentLanguage] || item.description.en;
        const type = item.type[currentLanguage] || item.type.en;
        const formattedDate = new Date(item.date).toLocaleDateString(
            currentLanguage === 'pt' ? 'pt-BR' : 'en-US',
            { year: 'numeric', month: 'long', day: 'numeric' }
        );
        
        lightboxImage.src = item.image;
        lightboxImage.alt = title;
        lightboxTitle.textContent = title;
        lightboxDescription.textContent = description;
        if (lightboxCategory) lightboxCategory.textContent = type;
        if (lightboxDate) lightboxDate.textContent = formattedDate;
        
        lightbox.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
}

function closePortfolioLightbox() {
    const lightbox = document.getElementById('portfolioLightbox');
    if (lightbox) {
        lightbox.classList.remove('active');
        document.body.style.overflow = '';
    }
}

// Animation Functions
function initializeAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Add animation classes to elements
    const animatedElements = document.querySelectorAll('.portfolio-item, .news-card, .feature-card, .impact-card, .contact-card, .timeline-item');
    animatedElements.forEach((el, index) => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = `opacity 0.6s ease-out ${index * 0.1}s, transform 0.6s ease-out ${index * 0.1}s`;
        observer.observe(el);
    });
}

// Content update functions
function updateAllContent() {
    updateHeroContent();
    updateAboutContent();
    updateOrganizationContent();
    updateContactContent();
    updateSiteInfo();
}

function updateHeroContent() {
    const heroTitle = document.querySelector('.hero-title span');
    const heroSubtitle = document.querySelector('.hero-subtitle span');
    const heroDescription = document.querySelector('.hero-description span');
    const heroImage = document.querySelector('.hero-img');
    const heroBadge = document.querySelector('.hero-badge span');
    const primaryBtn = document.querySelector('.hero-buttons .btn-primary span');
    const secondaryBtn = document.querySelector('.hero-buttons .btn-secondary span');
    
    if (heroTitle) heroTitle.textContent = websiteContent.hero.name[currentLanguage];
    if (heroSubtitle) heroSubtitle.textContent = websiteContent.hero.title[currentLanguage];
    if (heroDescription) heroDescription.textContent = websiteContent.hero.description[currentLanguage];
    if (heroImage) heroImage.src = websiteContent.hero.profileImage;
    if (heroBadge) heroBadge.textContent = websiteContent.hero.badge[currentLanguage];
    if (primaryBtn) primaryBtn.textContent = websiteContent.hero.buttons.primary[currentLanguage];
    if (secondaryBtn) secondaryBtn.textContent = websiteContent.hero.buttons.secondary[currentLanguage];
}

function updateAboutContent() {
    const aboutTitle = document.querySelector('#about .section-header h2');
    const aboutSubtitle = document.querySelector('#about .section-header p');
    const biographyTitle = document.querySelector('.bio-card h3');
    const biographyContent = document.querySelector('.bio-card p');
    
    if (aboutTitle) aboutTitle.textContent = websiteContent.about.title[currentLanguage];
    if (aboutSubtitle) aboutSubtitle.textContent = websiteContent.about.subtitle[currentLanguage];
    if (biographyTitle) biographyTitle.textContent = websiteContent.about.biography.title[currentLanguage];
    if (biographyContent) biographyContent.textContent = websiteContent.about.biography.content[currentLanguage];
    
    // Update timeline
    const timelineItems = document.querySelectorAll('.timeline-item');
    timelineItems.forEach((item, index) => {
        if (websiteContent.about.timeline[index]) {
            const titleElement = item.querySelector('.timeline-content h4');
            const contentElement = item.querySelector('.timeline-content p');
            if (titleElement) titleElement.textContent = websiteContent.about.timeline[index].title[currentLanguage];
            if (contentElement) contentElement.textContent = websiteContent.about.timeline[index].description[currentLanguage];
        }
    });
    
    // Update statistics
    const impactCards = document.querySelectorAll('.impact-card');
    impactCards.forEach((card, index) => {
        if (websiteContent.about.statistics[index]) {
            const numberElement = card.querySelector('.impact-number');
            const labelElement = card.querySelector('.impact-label');
            const descElement = card.querySelector('.impact-desc');
            if (numberElement) numberElement.textContent = websiteContent.about.statistics[index].number;
            if (labelElement) labelElement.textContent = websiteContent.about.statistics[index].label[currentLanguage];
            if (descElement) descElement.textContent = websiteContent.about.statistics[index].description[currentLanguage];
        }
    });
}

function updateOrganizationContent() {
    const orgTitle = document.querySelector('#organization .section-header h2');
    const orgSubtitle = document.querySelector('#organization .section-header p');
    const orgLogo = document.getElementById('orgLogo');
    const orgDescription = document.getElementById('orgDescription');
    
    if (orgTitle) orgTitle.textContent = websiteContent.organization.title[currentLanguage];
    if (orgSubtitle) orgSubtitle.textContent = websiteContent.organization.subtitle[currentLanguage];
    if (orgLogo) orgLogo.src = websiteContent.organization.logo;
    if (orgDescription) orgDescription.textContent = websiteContent.organization.description[currentLanguage];
    
    // Update feature cards
    const featureCards = document.querySelectorAll('.feature-card');
    featureCards.forEach((card, index) => {
        if (websiteContent.organization.features[index]) {
            const titleElement = card.querySelector('h4');
            const descriptionElement = card.querySelector('p');
            const iconElement = card.querySelector('.feature-icon i');
            
            if (titleElement) titleElement.textContent = websiteContent.organization.features[index].title[currentLanguage];
            if (descriptionElement) descriptionElement.textContent = websiteContent.organization.features[index].description[currentLanguage];
            if (iconElement) iconElement.className = websiteContent.organization.features[index].icon;
        }
    });
}

function updateContactContent() {
    const contactTitle = document.querySelector('#contact .section-header h2');
    const contactSubtitle = document.querySelector('#contact .section-header p');
    
    if (contactTitle) contactTitle.textContent = websiteContent.contact.title[currentLanguage];
    if (contactSubtitle) contactSubtitle.textContent = websiteContent.contact.subtitle[currentLanguage];
}

function updateSiteInfo() {
    document.title = websiteContent.siteInfo.title[currentLanguage];
    
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
        metaDescription = document.createElement('meta');
        metaDescription.name = 'description';
        document.head.appendChild(metaDescription);
    }
    metaDescription.content = websiteContent.siteInfo.description[currentLanguage];
}

// Admin Panel Functions
function toggleAdmin() {
    if (!isAdminAuthenticated) {
        authenticateAdmin();
        return;
    }
    
    const adminPanel = document.getElementById('adminPanel');
    if (adminPanel) {
        adminPanel.classList.toggle('active');
    }
}

function authenticateAdmin() {
    const password = prompt('🔐 Enter admin password to access website editor:');
    
    if (password === ADMIN_PASSWORD) {
        isAdminAuthenticated = true;
        const adminPanel = document.getElementById('adminPanel');
        if (adminPanel) {
            adminPanel.classList.add('active');
        }
        
        initializeAdminTabs();
        loadAdminData();
        showAlert('✅ Welcome to the Website Editor!', 'success');
    } else if (password !== null) {
        showAlert('❌ Wrong password! Try again.', 'error');
    }
}

// Initialize Admin Tabs
function initializeAdminTabs() {
    const tabs = document.querySelectorAll('.admin-tab');
    const contents = document.querySelectorAll('.admin-tab-content');
    
    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            // Remove active class from all tabs and contents
            tabs.forEach(t => t.classList.remove('active'));
            contents.forEach(c => c.classList.remove('active'));
            
            // Add active class to clicked tab
            tab.classList.add('active');
            
            // Show corresponding content
            const targetTab = tab.getAttribute('data-tab');
            const targetContent = document.getElementById(targetTab + 'Tab');
            if (targetContent) {
                targetContent.classList.add('active');
            }
        });
    });
}

// Enhanced admin function to load all data
function loadAdminData() {
    loadHeroData();
    loadAboutData();
    loadPortfolioData();
    loadOrganizationData();
    loadNewsData();
    loadContactData();
    loadNavigationData();
}

// Load Hero section data
function loadHeroData() {
    document.getElementById('heroProfileImage').value = websiteContent.hero.profileImage || '';
    document.getElementById('heroName').value = websiteContent.hero.name.en || '';
    document.getElementById('heroTitleEn').value = websiteContent.hero.title.en || '';
    document.getElementById('heroTitlePt').value = websiteContent.hero.title.pt || '';
    document.getElementById('heroBadgeEn').value = websiteContent.hero.badge.en || '';
    document.getElementById('heroBadgePt').value = websiteContent.hero.badge.pt || '';
    document.getElementById('heroDescEn').value = websiteContent.hero.description.en || '';
    document.getElementById('heroDescPt').value = websiteContent.hero.description.pt || '';
    
    // Load statistics
    if (websiteContent.about && websiteContent.about.statistics) {
        const stats = websiteContent.about.statistics;
        if (stats[0]) {
            document.getElementById('stat1Number').value = stats[0].number || '';
            document.getElementById('stat1LabelEn').value = stats[0].label.en || '';
            document.getElementById('stat1LabelPt').value = stats[0].label.pt || '';
        }
        if (stats[1]) {
            document.getElementById('stat2Number').value = stats[1].number || '';
            document.getElementById('stat2LabelEn').value = stats[1].label.en || '';
            document.getElementById('stat2LabelPt').value = stats[1].label.pt || '';
        }
        if (stats[2]) {
            document.getElementById('stat3Number').value = stats[2].number || '';
            document.getElementById('stat3LabelEn').value = stats[2].label.en || '';
            document.getElementById('stat3LabelPt').value = stats[2].label.pt || '';
        }
    }
}

// Save Hero section changes
function saveHeroChanges() {
    const profileImage = document.getElementById('heroProfileImage').value.trim();
    const name = document.getElementById('heroName').value.trim();
    const titleEn = document.getElementById('heroTitleEn').value.trim();
    const titlePt = document.getElementById('heroTitlePt').value.trim();
    const badgeEn = document.getElementById('heroBadgeEn').value.trim();
    const badgePt = document.getElementById('heroBadgePt').value.trim();
    const descEn = document.getElementById('heroDescEn').value.trim();
    const descPt = document.getElementById('heroDescPt').value.trim();
    
    // Update website content
    if (profileImage) websiteContent.hero.profileImage = profileImage;
    if (name) {
        websiteContent.hero.name.en = name;
        websiteContent.hero.name.pt = name;
    }
    if (titleEn) websiteContent.hero.title.en = titleEn;
    if (titlePt) websiteContent.hero.title.pt = titlePt;
    if (badgeEn) websiteContent.hero.badge.en = badgeEn;
    if (badgePt) websiteContent.hero.badge.pt = badgePt;
    if (descEn) websiteContent.hero.description.en = descEn;
    if (descPt) websiteContent.hero.description.pt = descPt;
    
    // Update statistics
    websiteContent.about.statistics[0].number = document.getElementById('stat1Number').value || '500+';
    websiteContent.about.statistics[0].label.en = document.getElementById('stat1LabelEn').value || 'Youth Empowered';
    websiteContent.about.statistics[0].label.pt = document.getElementById('stat1LabelPt').value || 'Jovens Capacitados';
    
    websiteContent.about.statistics[1].number = document.getElementById('stat2Number').value || '25+';
    websiteContent.about.statistics[1].label.en = document.getElementById('stat2LabelEn').value || 'Events Led';
    websiteContent.about.statistics[1].label.pt = document.getElementById('stat2LabelPt').value || 'Eventos Liderados';
    
    websiteContent.about.statistics[2].number = document.getElementById('stat3Number').value || '7';
    websiteContent.about.statistics[2].label.en = document.getElementById('stat3LabelEn').value || 'Emirates';
    websiteContent.about.statistics[2].label.pt = document.getElementById('stat3LabelPt').value || 'Emirados';
    
    // Update hero image if changed
    if (profileImage) {
        const heroImg = document.querySelector('.hero-img');
        if (heroImg) heroImg.src = profileImage;
    }
    
    saveStoredContent();
    updateAllContent();
    showAlert('🎯 Hero section updated successfully!', 'success');
}

// Load About section data
function loadAboutData() {
    document.getElementById('aboutTitleEn').value = websiteContent.about.title.en || '';
    document.getElementById('aboutTitlePt').value = websiteContent.about.title.pt || '';
    document.getElementById('aboutSubtitleEn').value = websiteContent.about.subtitle.en || '';
    document.getElementById('aboutSubtitlePt').value = websiteContent.about.subtitle.pt || '';
    document.getElementById('aboutBioEn').value = websiteContent.about.biography.content.en || '';
    document.getElementById('aboutBioPt').value = websiteContent.about.biography.content.pt || '';
    
    loadTimelineEvents();
}

// Load timeline events
function loadTimelineEvents() {
    const container = document.getElementById('timelineEvents');
    if (!container) return;
    
    container.innerHTML = '';
    
    websiteContent.about.timeline.forEach((event, index) => {
        const eventDiv = document.createElement('div');
        eventDiv.className = 'timeline-item-editor';
        eventDiv.innerHTML = `
            <button class="item-delete-btn" onclick="deleteTimelineEvent(${index})">×</button>
            <input type="text" placeholder="Year" value="${event.year}" onchange="updateTimelineEvent(${index}, 'year', this.value)">
            <input type="text" placeholder="Title (English)" value="${event.title.en}" onchange="updateTimelineEvent(${index}, 'title.en', this.value)">
            <input type="text" placeholder="Título (Português)" value="${event.title.pt}" onchange="updateTimelineEvent(${index}, 'title.pt', this.value)">
            <textarea placeholder="Description (English)" onchange="updateTimelineEvent(${index}, 'description.en', this.value)">${event.description.en}</textarea>
            <textarea placeholder="Descrição (Português)" onchange="updateTimelineEvent(${index}, 'description.pt', this.value)">${event.description.pt}</textarea>
        `;
        container.appendChild(eventDiv);
    });
}

// Add timeline event
function addTimelineEvent() {
    const newEvent = {
        year: new Date().getFullYear().toString(),
        title: {
            en: 'New Achievement',
            pt: 'Nova Conquista'
        },
        description: {
            en: 'Description of this achievement...',
            pt: 'Descrição desta conquista...'
        }
    };
    
    websiteContent.about.timeline.push(newEvent);
    loadTimelineEvents();
    showAlert('➕ Timeline event added!', 'success');
}

// Update timeline event
function updateTimelineEvent(index, field, value) {
    if (field.includes('.')) {
        const [parent, child] = field.split('.');
        websiteContent.about.timeline[index][parent][child] = value;
    } else {
        websiteContent.about.timeline[index][field] = value;
    }
    saveStoredContent();
}

// Delete timeline event
function deleteTimelineEvent(index) {
    if (confirm('🗑️ Delete this timeline event?')) {
        websiteContent.about.timeline.splice(index, 1);
        loadTimelineEvents();
        saveStoredContent();
        showAlert('🗑️ Timeline event deleted!', 'success');
    }
}

// Save About section changes
function saveAboutChanges() {
    websiteContent.about.title.en = document.getElementById('aboutTitleEn').value || 'About Rayhan';
    websiteContent.about.title.pt = document.getElementById('aboutTitlePt').value || 'Sobre Rayhan';
    websiteContent.about.subtitle.en = document.getElementById('aboutSubtitleEn').value || '';
    websiteContent.about.subtitle.pt = document.getElementById('aboutSubtitlePt').value || '';
    websiteContent.about.biography.content.en = document.getElementById('aboutBioEn').value || '';
    websiteContent.about.biography.content.pt = document.getElementById('aboutBioPt').value || '';
    
    saveStoredContent();
    updateAllContent();
    showAlert('👤 About section updated successfully!', 'success');
}

// Load Portfolio data
function loadPortfolioData() {
    document.getElementById('portfolioTitleEn').value = 'Leadership Portfolio';
    document.getElementById('portfolioTitlePt').value = 'Portfólio de Liderança';
    loadExistingPhotos();
}

// Enhanced portfolio item addition
function addPortfolioItem() {
    const imageUrl = document.getElementById('newPortfolioImage').value.trim();
    const titleEn = document.getElementById('newPortfolioTitleEn').value.trim();
    const titlePt = document.getElementById('newPortfolioTitlePt').value.trim();
    const descEn = document.getElementById('newPortfolioDescEn').value.trim();
    const descPt = document.getElementById('newPortfolioDescPt').value.trim();
    const category = document.getElementById('newPortfolioCategory').value;
    const typeEn = document.getElementById('newPortfolioTypeEn').value.trim();
    const typePt = document.getElementById('newPortfolioTypePt').value.trim();
    const date = document.getElementById('newPortfolioDate').value;
    
    if (!imageUrl || !titleEn || !titlePt) {
        showAlert('⚠️ Please fill in image URL and both titles', 'warning');
        return;
    }
    
    const newItem = {
        id: Date.now(),
        title: { en: titleEn, pt: titlePt },
        description: { en: descEn || titleEn, pt: descPt || titlePt },
        image: imageUrl,
        category: category,
        date: date || new Date().toISOString().split('T')[0],
        type: { en: typeEn || category, pt: typePt || category }
    };
    
    portfolioData.push(newItem);
    
    // Clear form
    document.getElementById('newPortfolioImage').value = '';
    document.getElementById('newPortfolioTitleEn').value = '';
    document.getElementById('newPortfolioTitlePt').value = '';
    document.getElementById('newPortfolioDescEn').value = '';
    document.getElementById('newPortfolioDescPt').value = '';
    document.getElementById('newPortfolioTypeEn').value = '';
    document.getElementById('newPortfolioTypePt').value = '';
    document.getElementById('newPortfolioDate').value = '';
    
    updatePortfolioDisplay();
    loadExistingPhotos();
    saveStoredContent();
    showAlert('🎉 Portfolio item added!', 'success');
}

// Load Organization data
function loadOrganizationData() {
    document.getElementById('orgLogoUrl').value = websiteContent.organization.logo || '';
    document.getElementById('orgTitleEn').value = websiteContent.organization.title.en || '';
    document.getElementById('orgTitlePt').value = websiteContent.organization.title.pt || '';
    document.getElementById('orgDescEn').value = websiteContent.organization.description.en || '';
    document.getElementById('orgDescPt').value = websiteContent.organization.description.pt || '';
    
    loadOrgFeatures();
}

// Load organization features
function loadOrgFeatures() {
    const container = document.getElementById('orgFeatures');
    if (!container) return;
    
    container.innerHTML = '';
    
    websiteContent.organization.features.forEach((feature, index) => {
        const featureDiv = document.createElement('div');
        featureDiv.className = 'feature-item-editor';
        featureDiv.innerHTML = `
            <button class="item-delete-btn" onclick="deleteOrgFeature(${index})">×</button>
            <input type="text" placeholder="Icon (fas fa-icon)" value="${feature.icon}" onchange="updateOrgFeature(${index}, 'icon', this.value)">
            <input type="text" placeholder="Title (English)" value="${feature.title.en}" onchange="updateOrgFeature(${index}, 'title.en', this.value)">
            <input type="text" placeholder="Título (Português)" value="${feature.title.pt}" onchange="updateOrgFeature(${index}, 'title.pt', this.value)">
            <textarea placeholder="Description (English)" onchange="updateOrgFeature(${index}, 'description.en', this.value)">${feature.description.en}</textarea>
            <textarea placeholder="Descrição (Português)" onchange="updateOrgFeature(${index}, 'description.pt', this.value)">${feature.description.pt}</textarea>
        `;
        container.appendChild(featureDiv);
    });
}

// Add organization feature
function addOrgFeature() {
    const newFeature = {
        icon: 'fas fa-star',
        title: { en: 'New Feature', pt: 'Nova Característica' },
        description: { en: 'Description...', pt: 'Descrição...' }
    };
    
    websiteContent.organization.features.push(newFeature);
    loadOrgFeatures();
    showAlert('➕ Organization feature added!', 'success');
}

// Update organization feature
function updateOrgFeature(index, field, value) {
    if (field.includes('.')) {
        const [parent, child] = field.split('.');
        websiteContent.organization.features[index][parent][child] = value;
    } else {
        websiteContent.organization.features[index][field] = value;
    }
    saveStoredContent();
}

// Delete organization feature
function deleteOrgFeature(index) {
    if (confirm('🗑️ Delete this feature?')) {
        websiteContent.organization.features.splice(index, 1);
        loadOrgFeatures();
        saveStoredContent();
        showAlert('🗑️ Feature deleted!', 'success');
    }
}

// Save Organization changes
function saveOrganizationChanges() {
    const logoUrl = document.getElementById('orgLogoUrl').value.trim();
    
    if (logoUrl) websiteContent.organization.logo = logoUrl;
    websiteContent.organization.title.en = document.getElementById('orgTitleEn').value || '';
    websiteContent.organization.title.pt = document.getElementById('orgTitlePt').value || '';
    websiteContent.organization.description.en = document.getElementById('orgDescEn').value || '';
    websiteContent.organization.description.pt = document.getElementById('orgDescPt').value || '';
    
    // Update logo if changed
    if (logoUrl) {
        const orgLogos = document.querySelectorAll('.org-logo, .nav-logo-img, .badge-logo');
        orgLogos.forEach(logo => logo.src = logoUrl);
    }
    
    saveStoredContent();
    updateAllContent();
    showAlert('🏢 Organization updated successfully!', 'success');
}

// Load News data
function loadNewsData() {
    document.getElementById('newsSectionTitleEn').value = 'News & Announcements';
    document.getElementById('newsSectionTitlePt').value = 'Notícias e Anúncios';
    loadExistingNews();
}

// Enhanced news addition
function addNews() {
    const titleEn = document.getElementById('newsTitle').value.trim();
    const titlePt = document.getElementById('newsTitlePt').value.trim();
    const contentEn = document.getElementById('newsContent').value.trim();
    const contentPt = document.getElementById('newsContentPt').value.trim();
    const imageUrl = document.getElementById('newsImage').value.trim();
    const categoryEn = document.getElementById('newsCategoryEn').value.trim();
    const categoryPt = document.getElementById('newsCategoryPt').value.trim();
    
    if (!titleEn || !titlePt || !contentEn || !contentPt) {
        showAlert('⚠️ Please fill in all text fields', 'warning');
        return;
    }
    
    const newNews = {
        id: Date.now(),
        title: { en: titleEn, pt: titlePt },
        excerpt: { en: contentEn, pt: contentPt },
        date: new Date().toISOString().split('T')[0],
        image: imageUrl || "https://via.placeholder.com/400x250/FFD700/1a1a1a?text=News",
        category: { 
            en: categoryEn || "Update", 
            pt: categoryPt || "Atualização" 
        }
    };
    
    newsData.unshift(newNews);
    
    // Clear form
    document.getElementById('newsTitle').value = '';
    document.getElementById('newsTitlePt').value = '';
    document.getElementById('newsContent').value = '';
    document.getElementById('newsContentPt').value = '';
    document.getElementById('newsImage').value = '';
    document.getElementById('newsCategoryEn').value = '';
    document.getElementById('newsCategoryPt').value = '';
    
    updateNewsDisplay();
    loadExistingNews();
    saveStoredContent();
    showAlert('📰 News added successfully!', 'success');
}

// Load Contact data
function loadContactData() {
    document.getElementById('contactTitleEn').value = websiteContent.contact.title.en || '';
    document.getElementById('contactTitlePt').value = websiteContent.contact.title.pt || '';
    document.getElementById('contactSubtitleEn').value = websiteContent.contact.subtitle.en || '';
    document.getElementById('contactSubtitlePt').value = websiteContent.contact.subtitle.pt || '';
    document.getElementById('contactEmail').value = websiteContent.contact.info.email || '';
    document.getElementById('contactInstagram').value = websiteContent.contact.info.instagram || '';
    document.getElementById('contactLinkedin').value = websiteContent.contact.info.linkedin || '';
    document.getElementById('contactLinkedinUrl').value = 'https://linkedin.com/in/rayhan-jusob-68913b233';
}

// Save Contact changes
function saveContactChanges() {
    websiteContent.contact.title.en = document.getElementById('contactTitleEn').value || 'Let\'s Work Together';
    websiteContent.contact.title.pt = document.getElementById('contactTitlePt').value || 'Vamos Trabalhar Juntos';
    websiteContent.contact.subtitle.en = document.getElementById('contactSubtitleEn').value || '';
    websiteContent.contact.subtitle.pt = document.getElementById('contactSubtitlePt').value || '';
    websiteContent.contact.info.email = document.getElementById('contactEmail').value || '';
    websiteContent.contact.info.instagram = document.getElementById('contactInstagram').value || '';
    websiteContent.contact.info.linkedin = document.getElementById('contactLinkedin').value || '';
    
    saveStoredContent();
    updateAllContent();
    showAlert('📞 Contact information updated!', 'success');
}

// Load Navigation data
function loadNavigationData() {
    document.getElementById('navSiteTitle').value = websiteContent.siteInfo.title.en || '';
    document.getElementById('footerCopyrightEn').value = 'All rights reserved.';
    document.getElementById('footerCopyrightPt').value = 'Todos os direitos reservados.';
    
    loadNavMenuItems();
}

// Load navigation menu items
function loadNavMenuItems() {
    const container = document.getElementById('navMenuItems');
    if (!container) return;
    
    const defaultMenuItems = [
        { en: 'Home', pt: 'Início', href: '#home' },
        { en: 'About', pt: 'Sobre', href: '#about' },
        { en: 'Portfolio', pt: 'Portfólio', href: '#portfolio' },
        { en: 'Organization', pt: 'Organização', href: '#organization' },
        { en: 'News', pt: 'Notícias', href: '#news' },
        { en: 'Contact', pt: 'Contato', href: '#contact' }
    ];
    
    container.innerHTML = '';
    
    defaultMenuItems.forEach((item, index) => {
        const itemDiv = document.createElement('div');
        itemDiv.className = 'nav-item-editor';
        itemDiv.innerHTML = `
            <input type="text" placeholder="Text (English)" value="${item.en}" onchange="updateNavMenuItem(${index}, 'en', this.value)">
            <input type="text" placeholder="Texto (Português)" value="${item.pt}" onchange="updateNavMenuItem(${index}, 'pt', this.value)">
            <input type="text" placeholder="Link" value="${item.href}" onchange="updateNavMenuItem(${index}, 'href', this.value)">
        `;
        container.appendChild(itemDiv);
    });
}

// Save Navigation changes
function saveNavigationChanges() {
    const siteTitle = document.getElementById('navSiteTitle').value;
    if (siteTitle) {
        websiteContent.siteInfo.title.en = siteTitle;
        websiteContent.siteInfo.title.pt = siteTitle;
        document.title = siteTitle;
    }
    
    saveStoredContent();
    updateAllContent();
    showAlert('🧭 Navigation updated successfully!', 'success');
}

function editContent() {
    if (!isAdminAuthenticated) {
        alert(currentLanguage === 'en' ? 'Access denied.' : 'Acesso negado.');
        return;
    }
    
    const sections = [
        { key: 'hero', name: currentLanguage === 'en' ? 'Hero Section' : 'Seção Principal' },
        { key: 'about', name: currentLanguage === 'en' ? 'About Section' : 'Seção Sobre' },
        { key: 'organization', name: currentLanguage === 'en' ? 'Organization Section' : 'Seção Organização' },
        { key: 'contact', name: currentLanguage === 'en' ? 'Contact Section' : 'Seção Contato' },
        { key: 'siteInfo', name: currentLanguage === 'en' ? 'Site Information' : 'Informações do Site' }
    ];
    
    let sectionChoice = '';
    sections.forEach((section, index) => {
        sectionChoice += `${index + 1}. ${section.name}\n`;
    });
    
    const choice = prompt(
        `${currentLanguage === 'en' ? 'Select section to edit:' : 'Selecione a seção para editar:'}\n${sectionChoice}`
    );
    
    const sectionIndex = parseInt(choice) - 1;
    if (sectionIndex >= 0 && sectionIndex < sections.length) {
        const selectedSection = sections[sectionIndex];
        const currentContent = JSON.stringify(websiteContent[selectedSection.key], null, 2);
        
        const newContent = prompt(
            `${currentLanguage === 'en' ? 'Edit' : 'Editar'} ${selectedSection.name}:\n\n${currentLanguage === 'en' ? 'Current content:' : 'Conteúdo atual:'}\n${currentContent}\n\n${currentLanguage === 'en' ? 'Enter new content (JSON format):' : 'Digite novo conteúdo (formato JSON):'}`
        );
        
        if (newContent) {
            try {
                const parsedContent = JSON.parse(newContent);
                websiteContent[selectedSection.key] = parsedContent;
                saveWebsiteContent();
                updateAllContent();
                
                const successMessage = currentLanguage === 'en'
                    ? 'Content updated successfully!'
                    : 'Conteúdo atualizado com sucesso!';
                alert(successMessage);
            } catch (error) {
                const errorMessage = currentLanguage === 'en'
                    ? 'Invalid JSON format. Please check your input.'
                    : 'Formato JSON inválido. Verifique sua entrada.';
                alert(errorMessage);
            }
        }
    }
}

function managePortfolio() {
    if (!isAdminAuthenticated) {
        alert(currentLanguage === 'en' ? 'Access denied.' : 'Acesso negado.');
        return;
    }
    
    const action = prompt(
        currentLanguage === 'en'
            ? 'Portfolio action (add/remove/edit/list):'
            : 'Ação do portfólio (adicionar/remover/editar/listar):'
    );
    
    if (action === 'add' || action === 'adicionar') {
        const titleEn = prompt('Title (English):');
        const titlePt = prompt('Título (Português):');
        const descEn = prompt('Description (English):');
        const descPt = prompt('Descrição (Português):');
        const imageUrl = prompt('Image URL:');
        const category = prompt('Category (events/programs/community/culture):');
        const typeEn = prompt('Type (English):');
        const typePt = prompt('Tipo (Português):');
        
        if (titleEn && titlePt && descEn && descPt && imageUrl && category && typeEn && typePt) {
            const newItem = {
                id: Date.now(),
                title: { en: titleEn, pt: titlePt },
                description: { en: descEn, pt: descPt },
                image: imageUrl,
                category: category,
                date: new Date().toISOString().split('T')[0],
                type: { en: typeEn, pt: typePt }
            };
            
            portfolioData.push(newItem);
            savePortfolioData();
            updatePortfolioDisplay();
            
            const successMessage = currentLanguage === 'en'
                ? 'Portfolio item added!'
                : 'Item do portfólio adicionado!';
            alert(successMessage);
        }
    }
    // Add more portfolio management functions here (remove, edit, list)
}

function manageNews() {
    if (!isAdminAuthenticated) {
        alert(currentLanguage === 'en' ? 'Access denied.' : 'Acesso negado.');
        return;
    }
    
    const action = prompt(
        currentLanguage === 'en'
            ? 'News action (add/remove/edit/list):'
            : 'Ação de notícias (adicionar/remover/editar/listar):'
    );
    
    if (action === 'add' || action === 'adicionar') {
        const titleEn = prompt('Title (English):');
        const titlePt = prompt('Título (Português):');
        const excerptEn = prompt('Excerpt (English):');
        const excerptPt = prompt('Resumo (Português):');
        const imageUrl = prompt('Image URL:');
        const categoryEn = prompt('Category (English):');
        const categoryPt = prompt('Categoria (Português):');
        
        if (titleEn && titlePt && excerptEn && excerptPt && imageUrl && categoryEn && categoryPt) {
            const newArticle = {
                id: Date.now(),
                title: { en: titleEn, pt: titlePt },
                excerpt: { en: excerptEn, pt: excerptPt },
                date: new Date().toISOString().split('T')[0],
                image: imageUrl,
                category: { en: categoryEn, pt: categoryPt }
            };
            
            newsData.unshift(newArticle);
            saveNewsData();
            updateNewsDisplay();
            
            const successMessage = currentLanguage === 'en'
                ? 'News article added!'
                : 'Artigo de notícias adicionado!';
            alert(successMessage);
        }
    }
}

function editHeroImage() {
    if (!isAdminAuthenticated) {
        alert(currentLanguage === 'en' ? 'Access denied.' : 'Acesso negado.');
        return;
    }
    
    const newImageUrl = prompt(
        `${currentLanguage === 'en' ? 'Current profile image URL:' : 'URL da imagem de perfil atual:'}\n${websiteContent.hero.profileImage}\n\n${currentLanguage === 'en' ? 'Enter new image URL:' : 'Digite nova URL da imagem:'}`
    );
    
    if (newImageUrl) {
        websiteContent.hero.profileImage = newImageUrl;
        saveWebsiteContent();
        updateHeroContent();
        
        const successMessage = currentLanguage === 'en'
            ? 'Profile image updated successfully!'
            : 'Imagem de perfil atualizada com sucesso!';
        alert(successMessage);
    }
}

function editOrgLogo() {
    if (!isAdminAuthenticated) {
        alert(currentLanguage === 'en' ? 'Access denied.' : 'Acesso negado.');
        return;
    }
    
    const newLogoUrl = prompt(
        `${currentLanguage === 'en' ? 'Current organization logo:' : 'Logo da organização atual:'}\n${websiteContent.organization.logo}\n\n${currentLanguage === 'en' ? 'Enter new logo URL or filename:' : 'Digite nova URL do logo ou nome do arquivo:'}`
    );
    
    if (newLogoUrl) {
        websiteContent.organization.logo = newLogoUrl;
        saveWebsiteContent();
        updateOrganizationContent();
        
        // Update all logo instances
        const allLogos = document.querySelectorAll('.nav-logo-img, .org-logo, .footer-logo-img');
        allLogos.forEach(logo => {
            logo.src = newLogoUrl;
        });
        
        const successMessage = currentLanguage === 'en'
            ? 'Organization logo updated successfully!'
            : 'Logo da organização atualizado com sucesso!';
        alert(successMessage);
    }
}

function viewStats() {
    if (!isAdminAuthenticated) {
        alert(currentLanguage === 'en' ? 'Access denied.' : 'Acesso negado.');
        return;
    }
    
    const submissions = JSON.parse(localStorage.getItem('contactSubmissions') || '[]');
    const portfolioCount = portfolioData.length;
    const newsCount = newsData.length;
    
    const stats = currentLanguage === 'en' 
        ? `Website Statistics:\n\n• Portfolio Items: ${portfolioCount}\n• News Articles: ${newsCount}\n• Contact Submissions: ${submissions.length}\n• Language: ${currentLanguage.toUpperCase()}\n• Admin Password: ${ADMIN_PASSWORD}`
        : `Estatísticas do Website:\n\n• Itens do Portfólio: ${portfolioCount}\n• Artigos de Notícias: ${newsCount}\n• Submissões de Contato: ${submissions.length}\n• Idioma: ${currentLanguage.toUpperCase()}\n• Senha Admin: ${ADMIN_PASSWORD}`;
    
    alert(stats);
}

function changePassword() {
    if (!isAdminAuthenticated) {
        alert(currentLanguage === 'en' ? 'Access denied.' : 'Acesso negado.');
        return;
    }
    
    const currentPassword = prompt(
        currentLanguage === 'en' ? 'Enter current password:' : 'Digite a senha atual:'
    );
    
    if (currentPassword === (localStorage.getItem('adminPassword') || ADMIN_PASSWORD)) {
        const newPassword = prompt(
            currentLanguage === 'en' ? 'Enter new password:' : 'Digite a nova senha:'
        );
        
        if (newPassword && newPassword.length >= 6) {
            localStorage.setItem('adminPassword', newPassword);
            
            const successMessage = currentLanguage === 'en'
                ? 'Password changed successfully! Please remember your new password.'
                : 'Senha alterada com sucesso! Lembre-se da sua nova senha.';
            alert(successMessage);
        } else {
            const errorMessage = currentLanguage === 'en'
                ? 'Password must be at least 6 characters long.'
                : 'A senha deve ter pelo menos 6 caracteres.';
            alert(errorMessage);
        }
    } else {
        const errorMessage = currentLanguage === 'en'
            ? 'Incorrect current password.'
            : 'Senha atual incorreta.';
        alert(errorMessage);
    }
}

function resetToDefaults() {
    if (!isAdminAuthenticated) {
        alert(currentLanguage === 'en' ? 'Access denied.' : 'Acesso negado.');
        return;
    }
    
    const confirmMessage = currentLanguage === 'en'
        ? 'Are you sure you want to reset all content to defaults? This action cannot be undone.'
        : 'Tem certeza de que deseja redefinir todo o conteúdo para os padrões? Esta ação não pode ser desfeita.';
    
    if (confirm(confirmMessage)) {
        localStorage.removeItem('websiteContent');
        localStorage.removeItem('portfolioData');
        localStorage.removeItem('newsData');
        localStorage.removeItem('contactSubmissions');
        
        // Reload the page to reset everything
        location.reload();
    }
}

function logout() {
    isAdminAuthenticated = false;
    const adminPanel = document.getElementById('adminPanel');
    if (adminPanel) {
        adminPanel.classList.remove('active');
    }
    
    const logoutMessage = currentLanguage === 'en'
        ? 'Logged out successfully.'
        : 'Logout realizado com sucesso.';
    alert(logoutMessage);
}

function updateAdminInfo() {
    const lastLoginElement = document.getElementById('lastLogin');
    const contentCountElement = document.getElementById('contentCount');
    
    if (lastLoginElement) {
        const lastLogin = localStorage.getItem('lastAdminLogin') || 'Never';
        lastLoginElement.textContent = lastLogin;
    }
    
    if (contentCountElement) {
        const totalItems = portfolioData.length + newsData.length;
        contentCountElement.textContent = totalItems;
    }
}

function exportData() {
    if (!isAdminAuthenticated) {
        alert(currentLanguage === 'en' ? 'Access denied.' : 'Acesso negado.');
        return;
    }
    
    const data = {
        websiteContent: websiteContent,
        portfolioData: portfolioData,
        newsData: newsData,
        contactSubmissions: JSON.parse(localStorage.getItem('contactSubmissions') || '[]'),
        settings: {
            currentLanguage: currentLanguage,
            lastExport: new Date().toISOString(),
            adminPassword: localStorage.getItem('adminPassword') || ADMIN_PASSWORD
        }
    };
    
    const jsonString = JSON.stringify(data, null, 2);
    const blob = new Blob([jsonString], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    
    const a = document.createElement('a');
    a.href = url;
    a.download = `rayhan-jusob-website-backup-${new Date().toISOString().split('T')[0]}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    
    const successMessage = currentLanguage === 'en'
        ? 'Complete website backup exported successfully!'
        : 'Backup completo do website exportado com sucesso!';
    alert(successMessage);
}

function importData() {
    if (!isAdminAuthenticated) {
        alert(currentLanguage === 'en' ? 'Access denied.' : 'Acesso negado.');
        return;
    }
    
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = '.json';
    
    input.onchange = function(event) {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function(e) {
                try {
                    const importedData = JSON.parse(e.target.result);
                    
                    // Import all data types
                    if (importedData.websiteContent) {
                        Object.assign(websiteContent, importedData.websiteContent);
                        saveWebsiteContent();
                    }
                    
                    if (importedData.portfolioData) {
                        portfolioData.length = 0;
                        portfolioData.push(...importedData.portfolioData);
                        savePortfolioData();
                    }
                    
                    if (importedData.newsData) {
                        newsData.length = 0;
                        newsData.push(...importedData.newsData);
                        saveNewsData();
                    }
                    
                    if (importedData.contactSubmissions) {
                        localStorage.setItem('contactSubmissions', JSON.stringify(importedData.contactSubmissions));
                    }
                    
                    // Refresh all content
                    updateAllContent();
                    updatePortfolioDisplay();
                    updateNewsDisplay();
                    updateAdminInfo();
                    
                    const successMessage = currentLanguage === 'en'
                        ? 'Complete website data imported successfully!'
                        : 'Dados completos do website importados com sucesso!';
                    alert(successMessage);
                } catch (error) {
                    const errorMessage = currentLanguage === 'en'
                        ? 'Invalid file format. Please select a valid backup file.'
                        : 'Formato de arquivo inválido. Selecione um arquivo de backup válido.';
                    alert(errorMessage);
                }
            };
            reader.readAsText(file);
        }
    };
    
    input.click();
}

// Data Persistence Functions
function saveWebsiteContent() {
    localStorage.setItem('websiteContent', JSON.stringify(websiteContent));
}

function savePortfolioData() {
    localStorage.setItem('portfolioData', JSON.stringify(portfolioData));
}

function saveNewsData() {
    localStorage.setItem('newsData', JSON.stringify(newsData));
}

function loadStoredContent() {
    // Load website content structure
    const storedWebsiteContent = localStorage.getItem('websiteContent');
    if (storedWebsiteContent) {
        try {
            const parsedWebsiteContent = JSON.parse(storedWebsiteContent);
            Object.assign(websiteContent, parsedWebsiteContent);
        } catch (error) {
            console.warn('Failed to load stored website content:', error);
        }
    }
    
    // Load portfolio data
    const storedPortfolioData = localStorage.getItem('portfolioData');
    if (storedPortfolioData) {
        try {
            const parsedPortfolioData = JSON.parse(storedPortfolioData);
            portfolioData.length = 0;
            portfolioData.push(...parsedPortfolioData);
        } catch (error) {
            console.warn('Failed to load stored portfolio data:', error);
        }
    }
    
    // Load news data
    const storedNewsData = localStorage.getItem('newsData');
    if (storedNewsData) {
        try {
            const parsedNewsData = JSON.parse(storedNewsData);
            newsData.length = 0;
            newsData.push(...parsedNewsData);
        } catch (error) {
            console.warn('Failed to load stored news data:', error);
        }
    }
}

// Utility Functions
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

function throttle(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

// Performance optimizations
const debouncedResize = debounce(() => {
    initializeAnimations();
}, 250);

const throttledScroll = throttle(() => {
    // Handle scroll events for performance
}, 16); // ~60fps

window.addEventListener('resize', debouncedResize);
window.addEventListener('scroll', throttledScroll);

// Error handling
window.addEventListener('error', (e) => {
    console.error('JavaScript error:', e.error);
});

// Analytics tracking (placeholder)
function trackEvent(eventName, parameters = {}) {
    console.log('Event tracked:', eventName, parameters);
    
    if (typeof gtag !== 'undefined') {
        gtag('event', eventName, parameters);
    }
}

// Track page views and interactions
document.addEventListener('DOMContentLoaded', () => {
    trackEvent('page_view', { page_title: document.title });
});

// Track form submissions
document.addEventListener('submit', (e) => {
    if (e.target.id === 'contactForm') {
        trackEvent('form_submit', { form_name: 'contact' });
    }
});

// Track language changes
function trackLanguageChange(newLanguage) {
    trackEvent('language_change', { language: newLanguage });
}

// Update the toggleLanguage function to include tracking
const originalToggleLanguage = toggleLanguage;
toggleLanguage = function() {
    const oldLanguage = currentLanguage;
    originalToggleLanguage();
    if (oldLanguage !== currentLanguage) {
        trackLanguageChange(currentLanguage);
    }
};

// Accessibility improvements
document.addEventListener('keydown', (e) => {
    // Tab navigation for modal
    if (e.key === 'Tab' && document.getElementById('portfolioLightbox').classList.contains('active')) {
        e.preventDefault();
        closePortfolioLightbox();
    }
});

// Add keyboard shortcuts
document.addEventListener('keydown', (e) => {
    if (e.ctrlKey || e.metaKey) {
        switch (e.key) {
            case 'l':
                e.preventDefault();
                toggleLanguage();
                break;
        }
    }
});

// Initialize tooltips
function initializeTooltips() {
    const tooltipElements = document.querySelectorAll('[data-tooltip]');
    tooltipElements.forEach(element => {
        element.addEventListener('mouseenter', showTooltip);
        element.addEventListener('mouseleave', hideTooltip);
    });
}

function showTooltip(e) {
    const tooltip = document.createElement('div');
    tooltip.className = 'tooltip';
    tooltip.textContent = e.target.getAttribute('data-tooltip');
    document.body.appendChild(tooltip);
    
    const rect = e.target.getBoundingClientRect();
    tooltip.style.position = 'absolute';
    tooltip.style.left = rect.left + (rect.width / 2) - (tooltip.offsetWidth / 2) + 'px';
    tooltip.style.top = rect.top - tooltip.offsetHeight - 10 + 'px';
    tooltip.style.background = 'rgba(0, 0, 0, 0.8)';
    tooltip.style.color = 'white';
    tooltip.style.padding = '8px 12px';
    tooltip.style.borderRadius = '6px';
    tooltip.style.fontSize = '14px';
    tooltip.style.zIndex = '9999';
}

function hideTooltip() {
    const tooltip = document.querySelector('.tooltip');
    if (tooltip) {
        tooltip.remove();
    }
}
// Enhanced existing photos loader
function loadExistingPhotos() {
    const container = document.getElementById('existingPhotos');
    if (!container) return;
    
    container.innerHTML = '';
    
    if (portfolioData.length === 0) {
        container.innerHTML = '<p class="helper-text">No photos yet. Add your first photo above! 📸</p>';
        return;
    }
    
    portfolioData.forEach(item => {
        const photoItem = document.createElement('div');
        photoItem.className = 'photo-item';
        photoItem.innerHTML = `
            <img src="${item.image}" alt="${item.title.en}">
            <div class="photo-item-info">
                <h6>${item.title.en}</h6>
                <small>${item.category} • ${item.date}</small>
            </div>
            <button class="delete-photo" onclick="deletePortfolioItem(${item.id})" title="Delete Photo">🗑️</button>
        `;
        container.appendChild(photoItem);
    });
}

// Enhanced existing news loader
function loadExistingNews() {
    const container = document.getElementById('existingNews');
    if (!container) return;
    
    container.innerHTML = '';
    
    if (newsData.length === 0) {
        container.innerHTML = '<p class="helper-text">No news yet. Add your first news above! 📰</p>';
        return;
    }
    
    newsData.forEach(item => {
        const newsItem = document.createElement('div');
        newsItem.className = 'photo-item';
        newsItem.innerHTML = `
            <img src="${item.image}" alt="${item.title.en}" style="width: 80px; height: 60px;">
            <div class="photo-item-info">
                <h6>${item.title.en}</h6>
                <small>${item.date}</small>
            </div>
            <button class="delete-photo" onclick="deleteNews(${item.id})" title="Delete News">🗑️</button>
        `;
        container.appendChild(newsItem);
    });
}

// Delete news function
function deleteNews(id) {
    if (confirm('🗑️ Are you sure you want to delete this news?')) {
        const index = newsData.findIndex(item => item.id === id);
        if (index > -1) {
            newsData.splice(index, 1);
            updateNewsDisplay();
            loadExistingNews();
            saveStoredContent();
            showAlert('🗑️ News deleted successfully!', 'success');
        }
    }
}

// Delete portfolio item function
function deletePortfolioItem(id) {
    if (confirm('🗑️ Are you sure you want to delete this photo?')) {
        const index = portfolioData.findIndex(item => item.id === id);
        if (index > -1) {
            portfolioData.splice(index, 1);
            updatePortfolioDisplay();
            loadExistingPhotos();
            saveStoredContent();
            showAlert('🗑️ Photo deleted successfully!', 'success');
        }
    }
}

// Show alert function
function showAlert(message, type = 'info') {
    // Create alert element
    const alert = document.createElement('div');
    alert.className = `admin-alert alert-${type}`;
    alert.textContent = message;
    alert.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: ${type === 'success' ? '#4CAF50' : type === 'error' ? '#f44336' : '#ff9800'};
        color: white;
        padding: 12px 20px;
        border-radius: 8px;
        z-index: 10000;
        box-shadow: 0 4px 12px rgba(0,0,0,0.15);
        font-weight: 600;
        max-width: 300px;
        word-wrap: break-word;
        animation: slideIn 0.3s ease-out;
    `;
    
    // Add keyframes for animation
    if (!document.getElementById('alertStyles')) {
        const style = document.createElement('style');
        style.id = 'alertStyles';
        style.textContent = `
            @keyframes slideIn {
                from { transform: translateX(100%); opacity: 0; }
                to { transform: translateX(0); opacity: 1; }
            }
        `;
        document.head.appendChild(style);
    }
    
    document.body.appendChild(alert);
    
    // Remove after 3 seconds
    setTimeout(() => {
        if (alert.parentNode) {
            alert.parentNode.removeChild(alert);
        }
    }, 3000);
}