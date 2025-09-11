document.addEventListener('DOMContentLoaded', function() {
    const sectionTitle = document.querySelector('.section-title');
    const eventsTableContainer = document.querySelector('.events-table-container');

    // Intersection Observer cho tiêu đề và bảng
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.3 // Kích hoạt khi 30% của phần tử hiển thị
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    if (sectionTitle) {
        observer.observe(sectionTitle);
    }
    
    if (eventsTableContainer) {
        observer.observe(eventsTableContainer);
    }
});