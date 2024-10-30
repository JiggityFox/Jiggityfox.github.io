// Initialize Lucide icons
lucide.createIcons();

// Get DOM elements
const menuButton = document.getElementById('menuButton');
const mobileMenu = document.getElementById('mobileMenu');
const navItems = document.querySelectorAll('.nav-item');
const sections = document.querySelectorAll('.section-content');

// Toggle mobile menu
menuButton.addEventListener('click', () => {
    const menuIcon = menuButton.querySelector('i');
    if (mobileMenu.classList.contains('hidden')) {
        mobileMenu.classList.remove('hidden');
        menuIcon.setAttribute('data-lucide', 'x');
    } else {
        mobileMenu.classList.add('hidden');
        menuIcon.setAttribute('data-lucide', 'menu');
    }
    lucide.createIcons();
});

// Handle section navigation
function showSection(sectionId) {
    // Update navigation items
    navItems.forEach(item => {
        if (item.dataset.section === sectionId) {
            item.classList.add('active');
        } else {
            item.classList.remove('active');
        }
    });

    // Update sections
    sections.forEach(section => {
        if (section.id === sectionId) {
            section.classList.remove('hidden');
            setTimeout(() => section.classList.add('visible'), 100);
        } else {
            section.classList.remove('visible');
            section.classList.add('hidden');
        }
    });

    // Close mobile menu
    mobileMenu.classList.add('hidden');
    menuButton.querySelector('i').setAttribute('data-lucide', 'menu');
    lucide.createIcons();
}

// Add click handlers to navigation items
navItems.forEach(item => {
    item.addEventListener('click', () => showSection(item.dataset.section));
});

// Show initial section
showSection('projects');
