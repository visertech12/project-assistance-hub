
// Search functionality
const searchInput = document.getElementById('searchInput');
const navLinks = document.querySelectorAll('.nav-links a');

searchInput.addEventListener('input', (e) => {
    const searchTerm = e.target.value.toLowerCase();
    
    navLinks.forEach(link => {
        const text = link.textContent.toLowerCase();
        if (text.includes(searchTerm)) {
            link.style.display = 'block';
        } else {
            link.style.display = 'none';
        }
    });
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth'
            });
            
            // Update active state
            navLinks.forEach(link => link.classList.remove('active'));
            this.classList.add('active');
        }
    });
});

// Active section highlighting based on scroll
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    
    sections.forEach(section => {
        const rect = section.getBoundingClientRect();
        const link = document.querySelector(`a[href="#${section.id}"]`);
        
        if (rect.top <= 150 && rect.bottom >= 150) {
            navLinks.forEach(l => l.classList.remove('active'));
            if (link) link.classList.add('active');
        }
    });
});

// Mobile menu toggle
let isMobileMenuOpen = false;

function createMobileMenuToggle() {
    const toggle = document.createElement('button');
    toggle.className = 'menu-toggle';
    toggle.innerHTML = '☰';
    toggle.style.cssText = `
        background: var(--primary);
        color: white;
        border: none;
        padding: 0.5rem 1rem;
        border-radius: 4px;
        cursor: pointer;
        display: none;
    `;

    document.body.appendChild(toggle);

    toggle.addEventListener('click', () => {
        isMobileMenuOpen = !isMobileMenuOpen;
        const sidebar = document.querySelector('.sidebar');
        sidebar.classList.toggle('active');
        toggle.innerHTML = isMobileMenuOpen ? '✕' : '☰';
    });

    // Show/hide toggle based on screen size
    const mediaQuery = window.matchMedia('(max-width: 768px)');
    function handleScreenSize(e) {
        toggle.style.display = e.matches ? 'block' : 'none';
    }
    mediaQuery.addListener(handleScreenSize);
    handleScreenSize(mediaQuery);
}

createMobileMenuToggle();
