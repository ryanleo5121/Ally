// Header scroll effect and logo click to top
document.addEventListener('DOMContentLoaded', function() {
    const header = document.querySelector('.transparent-header');
    const logoLink = document.querySelector('.logo-link');
    
    // Scroll to top when logo is clicked
    logoLink.addEventListener('click', function(e) {
        e.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    // Add background when scrolled
    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
});