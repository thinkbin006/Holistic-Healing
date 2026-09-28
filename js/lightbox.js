// Lightbox functionality
document.addEventListener('DOMContentLoaded', function() {
    const lightbox = document.getElementById('certificate-lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const lightboxCaption = document.getElementById('lightbox-caption');
    const certificateCards = document.querySelectorAll('.certificate-card');
    const closeLightbox = document.querySelector('.lightbox-close');
    
    // Certificate data
    const certificates = {
        1: {
            img: 'images/certificates/numerology-cert.jpg',
            title: 'Master Numerologist Certificate',
            description: 'This certification recognizes completion of advanced numerology training and practical application. Issued by the International Numerology Institute.'
        },
        2: {
            img: 'images/certificates/reiki-cert.jpg',
            title: 'Reiki Master Teacher Certificate',
            description: 'Reiki Master level certification through the Usui Reiki Ryoho System. This certification qualifies the holder to teach Reiki to others.'
        },
        3: {
            img: 'images/certificates/chakra-cert.jpg',
            title: 'Chakra Healing Specialist',
            description: 'Certification in advanced chakra balancing techniques from the Energy Medicine Institute. Includes expertise in energy diagnosis and correction.'
        }
    };
    
    // Open lightbox when certificate is clicked
    certificateCards.forEach(card => {
        card.addEventListener('click', () => {
            const certId = card.getAttribute('data-certificate');
            const cert = certificates[certId];
            
            if (cert) {
                lightboxImg.src = cert.img;
                lightboxImg.alt = cert.title;
                lightboxCaption.textContent = cert.title;
                
                lightbox.classList.add('active');
                document.body.style.overflow = 'hidden';
            }
        });
    });
    
    // Close lightbox
    closeLightbox.addEventListener('click', () => {
        lightbox.classList.remove('active');
        document.body.style.overflow = 'auto';
    });
    
    // Close lightbox when clicking outside the content
    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) {
            lightbox.classList.remove('active');
            document.body.style.overflow = 'auto';
        }
    });
    
    // Close lightbox with Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && lightbox.classList.contains('active')) {
            lightbox.classList.remove('active');
            document.body.style.overflow = 'auto';
        }
    });
});