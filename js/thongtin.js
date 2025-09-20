document.addEventListener('DOMContentLoaded', function() {
    console.log("Trang Thông Tin đã được tải.");
    const eventsTitle = document.querySelector('.events-list-section .section-title');
    const eventsTableContainer = document.querySelector('.events-table-container');
    const noteSection = document.getElementById('terms-section');

    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.3
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    if (eventsTitle) {
        observer.observe(eventsTitle);
    }
    
    if (eventsTableContainer) {
        observer.observe(eventsTableContainer);
    }

    if (noteSection) {
        observer.observe(noteSection);
    }
});