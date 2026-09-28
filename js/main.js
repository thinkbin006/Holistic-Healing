// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        
        // Only handle anchor links that aren't service details
        if (href === '#' || href.startsWith('#home') || 
            href.startsWith('#services') || 
            href.startsWith('#about') || 
            href.startsWith('#contact')) {
            e.preventDefault();
            
            document.querySelector(href).scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Mobile menu toggle (if implemented later)
// ...