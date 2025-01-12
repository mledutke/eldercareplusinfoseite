document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('.section');
    const prevBtn = document.querySelector('.nav-button.prev');
    const nextBtn = document.querySelector('.nav-button.next');
    let currentSection = 0;

    // Show first section by default
    sections[currentSection].classList.add('active');

    // Update navigation buttons visibility
    function updateNavigation() {
        prevBtn.style.opacity = currentSection === 0 ? '0.5' : '1';
        prevBtn.style.cursor = currentSection === 0 ? 'not-allowed' : 'pointer';
        
        nextBtn.style.opacity = currentSection === sections.length - 1 ? '0.5' : '1';
        nextBtn.style.cursor = currentSection === sections.length - 1 ? 'not-allowed' : 'pointer';
    }

    // Initial button state
    updateNavigation();

    // Navigation button click handlers
    prevBtn.addEventListener('click', function() {
        if (currentSection > 0) {
            sections[currentSection].classList.remove('active');
            currentSection--;
            sections[currentSection].classList.add('active');
            updateNavigation();
        }
    });

    nextBtn.addEventListener('click', function() {
        if (currentSection < sections.length - 1) {
            sections[currentSection].classList.remove('active');
            currentSection++;
            sections[currentSection].classList.add('active');
            updateNavigation();
        }
    });

    // Handle keyboard navigation
    document.addEventListener('keydown', function(e) {
        if (e.key === 'ArrowDown' || e.key === 'ArrowRight') {
            e.preventDefault();
            if (currentSection < sections.length - 1) {
                sections[currentSection].classList.remove('active');
                currentSection++;
                sections[currentSection].classList.add('active');
                updateNavigation();
            }
        } else if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') {
            e.preventDefault();
            if (currentSection > 0) {
                sections[currentSection].classList.remove('active');
                currentSection--;
                sections[currentSection].classList.add('active');
                updateNavigation();
            }
        }
    });
}); 