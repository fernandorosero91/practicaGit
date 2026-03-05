// Main JavaScript for MercadoLibre Clone
console.log('JavaScript loaded!');

// Carousel functionality - Ultra Simple Version
window.addEventListener('load', function() {
    console.log('Window loaded, starting carousel...');
    
    const slides = document.querySelectorAll('.carousel-slide');
    const indicators = document.querySelectorAll('.indicator');
    const nextBtn = document.getElementById('nextBtn');
    const prevBtn = document.getElementById('prevBtn');
    
    console.log('Found', slides.length, 'slides');
    console.log('Found', indicators.length, 'indicators');
    
    if (slides.length === 0) {
        console.error('ERROR: No slides found!');
        return;
    }
    
    let currentIndex = 0;
    let autoPlayInterval;
    
    // Function to show a specific slide
    function showSlide(index) {
        console.log('Showing slide:', index);
        
        // Hide all slides
        slides.forEach(function(slide) {
            slide.classList.remove('active');
        });
        
        // Hide all indicators
        indicators.forEach(function(indicator) {
            indicator.classList.remove('active');
        });
        
        // Show current slide
        slides[index].classList.add('active');
        
        // Show current indicator
        if (indicators[index]) {
            indicators[index].classList.add('active');
        }
        
        currentIndex = index;
    }
    
    // Function to go to next slide
    function nextSlide() {
        let next = currentIndex + 1;
        if (next >= slides.length) {
            next = 0;
        }
        showSlide(next);
    }
    
    // Function to go to previous slide
    function prevSlide() {
        let prev = currentIndex - 1;
        if (prev < 0) {
            prev = slides.length - 1;
        }
        showSlide(prev);
    }
    
    // Start auto-play
    function startAutoPlay() {
        console.log('Starting auto-play...');
        stopAutoPlay();
        autoPlayInterval = setInterval(function() {
            console.log('Auto-advancing to next slide...');
            nextSlide();
        }, 5000);
    }
    
    // Stop auto-play
    function stopAutoPlay() {
        if (autoPlayInterval) {
            clearInterval(autoPlayInterval);
        }
    }
    
    // Next button
    if (nextBtn) {
        nextBtn.addEventListener('click', function() {
            console.log('Next button clicked');
            nextSlide();
            startAutoPlay();
        });
    }
    
    // Previous button
    if (prevBtn) {
        prevBtn.addEventListener('click', function() {
            console.log('Previous button clicked');
            prevSlide();
            startAutoPlay();
        });
    }
    
    // Indicator clicks
    indicators.forEach(function(indicator, index) {
        indicator.addEventListener('click', function() {
            console.log('Indicator', index, 'clicked');
            showSlide(index);
            startAutoPlay();
        });
    });
    
    // Pause on hover
    const carouselContainer = document.querySelector('.carousel-container');
    if (carouselContainer) {
        carouselContainer.addEventListener('mouseenter', function() {
            console.log('Mouse entered - pausing');
            stopAutoPlay();
        });
        
        carouselContainer.addEventListener('mouseleave', function() {
            console.log('Mouse left - resuming');
            startAutoPlay();
        });
    }
    
    // Initialize
    showSlide(0);
    startAutoPlay();
    console.log('Carousel initialized successfully!');
});

// Benefits scroll functionality
window.addEventListener('load', function() {
    const benefitsGrid = document.querySelector('.benefits-grid');
    const prevBtn = document.getElementById('benefitsPrev');
    const nextBtn = document.getElementById('benefitsNext');
    
    if (benefitsGrid && prevBtn && nextBtn) {
        prevBtn.addEventListener('click', function() {
            benefitsGrid.scrollBy({
                left: -280,
                behavior: 'smooth'
            });
        });
        
        nextBtn.addEventListener('click', function() {
            benefitsGrid.scrollBy({
                left: 280,
                behavior: 'smooth'
            });
        });
        
        // Hide/show buttons based on scroll position
        function updateScrollButtons() {
            const scrollLeft = benefitsGrid.scrollLeft;
            const maxScroll = benefitsGrid.scrollWidth - benefitsGrid.clientWidth;
            
            prevBtn.style.opacity = scrollLeft > 0 ? '1' : '0.3';
            prevBtn.style.pointerEvents = scrollLeft > 0 ? 'auto' : 'none';
            
            nextBtn.style.opacity = scrollLeft < maxScroll - 10 ? '1' : '0.3';
            nextBtn.style.pointerEvents = scrollLeft < maxScroll - 10 ? 'auto' : 'none';
        }
        
        benefitsGrid.addEventListener('scroll', updateScrollButtons);
        updateScrollButtons();
    }
});

// Offers scroll functionality
window.addEventListener('load', function() {
    const offersScroll = document.querySelector('.offers-scroll');
    const offersPrev = document.getElementById('offersPrev');
    const offersNext = document.getElementById('offersNext');
    
    if (offersScroll && offersPrev && offersNext) {
        offersPrev.addEventListener('click', function() {
            offersScroll.scrollBy({
                left: -240,
                behavior: 'smooth'
            });
        });
        
        offersNext.addEventListener('click', function() {
            offersScroll.scrollBy({
                left: 240,
                behavior: 'smooth'
            });
        });
        
        // Update button visibility
        function updateOffersButtons() {
            const scrollLeft = offersScroll.scrollLeft;
            const maxScroll = offersScroll.scrollWidth - offersScroll.clientWidth;
            
            offersPrev.style.opacity = scrollLeft > 0 ? '1' : '0.3';
            offersPrev.style.pointerEvents = scrollLeft > 0 ? 'auto' : 'none';
            
            offersNext.style.opacity = scrollLeft < maxScroll - 10 ? '1' : '0.3';
            offersNext.style.pointerEvents = scrollLeft < maxScroll - 10 ? 'auto' : 'none';
        }
        
        offersScroll.addEventListener('scroll', updateOffersButtons);
        updateOffersButtons();
    }
});

// Update offers scroll to use new class
window.addEventListener('load', function() {
    const offersScroll = document.querySelector('.offers-scroll-main');
    const offersPrev = document.getElementById('offersPrev');
    const offersNext = document.getElementById('offersNext');
    
    if (offersScroll && offersPrev && offersNext) {
        offersPrev.addEventListener('click', function() {
            offersScroll.scrollBy({
                left: -240,
                behavior: 'smooth'
            });
        });
        
        offersNext.addEventListener('click', function() {
            offersScroll.scrollBy({
                left: 240,
                behavior: 'smooth'
            });
        });
        
        // Update button visibility
        function updateOffersButtons() {
            const scrollLeft = offersScroll.scrollLeft;
            const maxScroll = offersScroll.scrollWidth - offersScroll.clientWidth;
            
            offersPrev.style.opacity = scrollLeft > 0 ? '1' : '0.3';
            offersPrev.style.pointerEvents = scrollLeft > 0 ? 'auto' : 'none';
            
            offersNext.style.opacity = scrollLeft < maxScroll - 10 ? '1' : '0.3';
            offersNext.style.pointerEvents = scrollLeft < maxScroll - 10 ? 'auto' : 'none';
        }
        
        offersScroll.addEventListener('scroll', updateOffersButtons);
        updateOffersButtons();
    }
});

// Sample developer portfolios data
const developers = [
    {
        name: "Desarrollador 1",
        role: "Full Stack Developer",
        description: "Especializado en desarrollo web moderno con experiencia en aplicaciones escalables.",
        services: [
            "Desarrollo Frontend",
            "Desarrollo Backend",
            "Diseño de APIs REST"
        ],
        technologies: ["JavaScript", "React", "Node.js", "MongoDB"],
        github: "https://github.com/dev1"
    },
    {
        name: "Desarrollador 2",
        role: "Frontend Developer",
        description: "Experto en crear interfaces de usuario atractivas y responsivas.",
        services: [
            "Diseño UI/UX",
            "Desarrollo React",
            "Optimización Web"
        ],
        technologies: ["HTML", "CSS", "JavaScript", "Vue.js"],
        github: "https://github.com/dev2"
    },
    {
        name: "Desarrollador 3",
        role: "Backend Developer",
        description: "Especialista en arquitectura de servidores y bases de datos.",
        services: [
            "Desarrollo de APIs",
            "Gestión de Bases de Datos",
            "Arquitectura Cloud"
        ],
        technologies: ["Python", "Django", "PostgreSQL", "AWS"],
        github: "https://github.com/dev3"
    },
    {
        name: "Desarrollador 4",
        role: "DevOps Engineer",
        description: "Enfocado en automatización, CI/CD y gestión de infraestructura.",
        services: [
            "Automatización",
            "CI/CD Pipelines",
            "Gestión de Contenedores"
        ],
        technologies: ["Docker", "Kubernetes", "Jenkins", "Terraform"],
        github: "https://github.com/dev4"
    }
];

// Function to create portfolio cards
function createPortfolioCard(dev, index) {
    const initial = dev.name.charAt(dev.name.length - 1);
    const colors = [
        'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
        'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
        'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)'
    ];
    
    return `
        <div class="portfolio-card">
            <div class="portfolio-avatar" style="background: ${colors[index]}">
                ${initial}
            </div>
            <h3>${dev.name}</h3>
            <p class="portfolio-role">${dev.role}</p>
            <p class="portfolio-description">${dev.description}</p>
            
            <div class="portfolio-services">
                <h4>Servicios</h4>
                <ul>
                    ${dev.services.map(service => `<li>• ${service}</li>`).join('')}
                </ul>
            </div>
            
            <div class="portfolio-tech">
                <h4>Tecnologías</h4>
                <div class="tech-tags">
                    ${dev.technologies.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
                </div>
            </div>
            
            <a href="${dev.github}" class="portfolio-github" target="_blank">Ver GitHub</a>
        </div>
    `;
}

// Load portfolios on page load
window.addEventListener('load', function() {
    const portfolioGrid = document.getElementById('portfolioGrid');
    
    if (portfolioGrid) {
        portfolioGrid.innerHTML = developers.map((dev, index) => createPortfolioCard(dev, index)).join('');
    }
    
    // Search functionality
    const searchInput = document.querySelector('.search-input');
    const searchButton = document.querySelector('.search-button');
    
    if (searchButton) {
        searchButton.addEventListener('click', function() {
            const searchTerm = searchInput.value.trim();
            if (searchTerm) {
                alert(`Buscando: ${searchTerm}`);
            }
        });
    }
    
    if (searchInput) {
        searchInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                const searchTerm = searchInput.value.trim();
                if (searchTerm) {
                    alert(`Buscando: ${searchTerm}`);
                }
            }
        });
    }
    
    // Add smooth scroll behavior
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});

// Handle cart icon click
document.addEventListener('click', function(e) {
    if (e.target.closest('.cart-icon')) {
        e.preventDefault();
        alert('Carrito de compras - Funcionalidad por implementar');
    }
});

// Handle offer card clicks
document.addEventListener('click', function(e) {
    const offerCard = e.target.closest('.offer-card');
    if (offerCard && !e.target.closest('a')) {
        console.log('Producto seleccionado');
    }
});
