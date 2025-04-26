
// Enhanced search functionality with debounce
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

// Search functionality with improved animation
const searchInput = document.getElementById('searchInput');
const navLinks = document.querySelectorAll('.nav-links a');

const performSearch = debounce((e) => {
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
}, 250);

searchInput.addEventListener('input', performSearch);

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

// Active section highlighting based on scroll position with Intersection Observer
const observerOptions = {
    threshold: 0.2,
    rootMargin: '-20% 0px -20% 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const id = entry.target.id;
            const link = document.querySelector(`a[href="#${id}"]`);
            if (link) {
                navLinks.forEach(l => l.classList.remove('active'));
                link.classList.add('active');
                link.style.animation = 'scaleIn 0.3s ease-out';
            }
        }
    });
}, observerOptions);

document.querySelectorAll('section').forEach(section => {
    observer.observe(section);
});

// Enhanced mobile menu toggle with gesture support
let isMobileMenuOpen = false;
let touchStartX = 0;
let touchEndX = 0;

function createMobileMenuToggle() {
    const toggle = document.createElement('button');
    toggle.className = 'menu-toggle';
    toggle.innerHTML = '☰';
    document.body.appendChild(toggle);

    toggle.addEventListener('click', toggleMobileMenu);

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

function toggleMobileMenu() {
    const sidebar = document.querySelector('.sidebar');
    isMobileMenuOpen = !isMobileMenuOpen;
    sidebar.classList.toggle('active');
    this.innerHTML = isMobileMenuOpen ? '✕' : '☰';
    
    sidebar.style.animation = isMobileMenuOpen 
        ? 'slideInLeft 0.3s ease-out'
        : 'slideOutLeft 0.3s ease-out';
}

// Add touch gesture support
document.addEventListener('touchstart', e => {
    touchStartX = e.touches[0].clientX;
});

document.addEventListener('touchend', e => {
    touchEndX = e.changedTouches[0].clientX;
    handleSwipeGesture();
});

function handleSwipeGesture() {
    const swipeDistance = touchEndX - touchStartX;
    const sidebar = document.querySelector('.sidebar');
    const menuToggle = document.querySelector('.menu-toggle');
    
    if (Math.abs(swipeDistance) > 50) { // Minimum swipe distance
        if (swipeDistance > 0 && !isMobileMenuOpen) {
            // Swipe right to open
            isMobileMenuOpen = true;
            sidebar.classList.add('active');
            menuToggle.innerHTML = '✕';
        } else if (swipeDistance < 0 && isMobileMenuOpen) {
            // Swipe left to close
            isMobileMenuOpen = false;
            sidebar.classList.remove('active');
            menuToggle.innerHTML = '☰';
        }
    }
}

// File structure animations with staggered effect
document.addEventListener('DOMContentLoaded', () => {
    const fileItems = document.querySelectorAll('.file-item');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                entry.target.style.animation = `slideUpFade 0.5s ease-out ${index * 0.1}s forwards`;
            }
        });
    }, { threshold: 0.1 });
    
    fileItems.forEach(item => {
        observer.observe(item);
        
        // Add hover interactions
        item.addEventListener('mouseenter', () => {
            item.style.transform = 'translateY(-5px) scale(1.02)';
        });
        
        item.addEventListener('mouseleave', () => {
            item.style.transform = 'translateY(0) scale(1)';
        });
    });
});

// Initialize
createMobileMenuToggle();

