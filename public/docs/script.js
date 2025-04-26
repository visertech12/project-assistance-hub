
// Search functionality with improved animation
const searchInput = document.getElementById('searchInput');
const navLinks = document.querySelectorAll('.nav-links a');

searchInput.addEventListener('input', (e) => {
    const searchTerm = e.target.value.toLowerCase();
    
    navLinks.forEach(link => {
        const text = link.textContent.toLowerCase();
        const parent = link.parentElement;
        
        if (text.includes(searchTerm)) {
            parent.style.display = 'block';
            parent.style.animation = 'fadeIn 0.3s ease-out';
        } else {
            parent.style.animation = 'fadeOut 0.3s ease-out';
            setTimeout(() => {
                parent.style.display = 'none';
            }, 300);
        }
    });
});

// Enhanced smooth scrolling with highlight effect
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth'
            });
            
            // Update active state with animation
            navLinks.forEach(link => {
                link.classList.remove('active');
                link.style.animation = '';
            });
            this.classList.add('active');
            this.style.animation = 'scaleIn 0.3s ease-out';
            
            // Add highlight effect to target section
            targetElement.style.animation = 'none';
            targetElement.offsetHeight; // Trigger reflow
            targetElement.style.animation = 'highlight 1s ease-out';
        }
    });
});

// Active section highlighting based on scroll position
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    
    sections.forEach(section => {
        const rect = section.getBoundingClientRect();
        const link = document.querySelector(`a[href="#${section.id}"]`);
        
        if (rect.top <= 150 && rect.bottom >= 150) {
            navLinks.forEach(l => l.classList.remove('active'));
            if (link) {
                link.classList.add('active');
                link.style.animation = 'scaleIn 0.3s ease-out';
            }
        }
    });
});

// Mobile menu toggle with animation
let isMobileMenuOpen = false;

function createMobileMenuToggle() {
    const toggle = document.createElement('button');
    toggle.className = 'menu-toggle';
    toggle.innerHTML = '☰';

    document.body.appendChild(toggle);

    toggle.addEventListener('click', () => {
        isMobileMenuOpen = !isMobileMenuOpen;
        const sidebar = document.querySelector('.sidebar');
        sidebar.classList.toggle('active');
        toggle.innerHTML = isMobileMenuOpen ? '✕' : '☰';
        
        // Add slide animation
        sidebar.style.animation = isMobileMenuOpen 
            ? 'slideInLeft 0.3s ease-out'
            : 'slideInRight 0.3s ease-out';
    });

    // Handle screen size changes
    const mediaQuery = window.matchMedia('(max-width: 768px)');
    function handleScreenSize(e) {
        toggle.style.display = e.matches ? 'block' : 'none';
        if (!e.matches) {
            isMobileMenuOpen = false;
            document.querySelector('.sidebar').classList.remove('active');
        }
    }
    mediaQuery.addListener(handleScreenSize);
    handleScreenSize(mediaQuery);
}

// Initialize mobile menu
createMobileMenuToggle();

// File structure animations
document.addEventListener('DOMContentLoaded', () => {
    const fileItems = document.querySelectorAll('.file-item');
    
    // Stagger the animation of file items
    fileItems.forEach((item, index) => {
        item.style.animationDelay = `${index * 100}ms`;
    });
    
    // Add hover animations
    fileItems.forEach(item => {
        item.addEventListener('mouseenter', () => {
            item.style.transform = 'translateX(10px) scale(1.02)';
        });
        
        item.addEventListener('mouseleave', () => {
            item.style.transform = 'translateX(0) scale(1)';
        });
    });
});

// Add intersection observer for scroll animations
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'fadeIn 0.5s ease-out forwards';
        }
    });
}, {
    threshold: 0.1
});

document.querySelectorAll('section').forEach(section => {
    observer.observe(section);
});
