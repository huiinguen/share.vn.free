// js/main.js

document.addEventListener('DOMContentLoaded', function() {
    console.log("Trang web đã tải xong!");

    // Xử lý active link trên navbar
    const navLinks = document.querySelectorAll('.nav-links a');
    const currentPath = window.location.pathname.split("/").pop();

    navLinks.forEach(link => {
        const linkPath = link.getAttribute('href').split("/").pop();
        if (linkPath === currentPath || (currentPath === '' && linkPath === 'index.html')) {
            link.classList.add('active');
        }
    });

    // Smooth scroll
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            if(targetElement){
                targetElement.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    // Logic cho Hamburger Menu
    const hamburgerMenu = document.getElementById('hamburgerMenu');
    const mainNavLinks = document.querySelector('.navbar .nav-links'); 

    if (hamburgerMenu && mainNavLinks) {
        hamburgerMenu.addEventListener('click', function() {
            mainNavLinks.classList.toggle('active');
            hamburgerMenu.classList.toggle('open'); 
        });

        mainNavLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                mainNavLinks.classList.remove('active');
                hamburgerMenu.classList.remove('open');
            });
        });
    } else {
        console.warn("Hamburger menu or main navigation links not found. Mobile menu functionality might be impaired.");
    }
});
// Xử lý active link trên navbar
const navLinks = document.querySelectorAll('.nav-links a');
const currentPath = window.location.pathname.split("/").pop();

navLinks.forEach(link => {
    const linkPath = link.getAttribute('href').split("/").pop();
    // Bổ sung điều kiện cho trang note.html
    if (linkPath === currentPath || (currentPath === '' && linkPath === 'index.html')) {
        link.classList.add('active');
    }
});
// Hàm formatCurrency đã có
function formatCurrency(amount) {
    return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(amount);
}
