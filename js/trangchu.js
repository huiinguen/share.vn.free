document.addEventListener('DOMContentLoaded', function() {
    // Dữ liệu ảnh cho carousel (Bạn có thể thay đổi đường dẫn và số lượng ảnh ở đây)
    const carouselImages = [
        'images/anh1.jpg',
        'images/anh2.jpg',
        'images/anh3.jpg',
        'images/anh4.jpg',
        'images/anh5.jpg'
    ];
    let currentSlide = 0;
    let slideInterval; // Biến để lưu trữ interval tự động chuyển slide

    // Selectors updated for the 'top-image-carousel'
    const carouselInner = document.querySelector('.top-image-carousel .carousel-inner');
    const prevBtn = document.querySelector('.top-image-carousel .carousel-control.prev');
    const nextBtn = document.querySelector('.top-image-carousel .carousel-control.next');
    const carouselDotsContainer = document.querySelector('.top-image-carousel .carousel-dots');


    // =====================================
    // Carousel Logic
    // =====================================

    function initializeCarousel() {
        if (!carouselInner || carouselImages.length === 0) return;

        // Thêm ảnh vào carousel
        carouselImages.forEach((imageSrc, index) => {
            const item = document.createElement('div');
            item.classList.add('carousel-item');
            item.innerHTML = `<img src="${imageSrc}" alt="Carousel image ${index + 1}">`;
            carouselInner.appendChild(item);
        });

        // Thêm chấm điều hướng
        if (carouselDotsContainer) {
            carouselImages.forEach((_, index) => {
                const dot = document.createElement('div');
                dot.classList.add('dot');
                dot.addEventListener('click', () => {
                    currentSlide = index;
                    updateCarousel();
                    resetSlideInterval();
                });
                carouselDotsContainer.appendChild(dot);
            });
        }

        // Xử lý nút điều hướng
        if (prevBtn) {
            prevBtn.addEventListener('click', () => {
                currentSlide = (currentSlide - 1 + carouselImages.length) % carouselImages.length;
                updateCarousel();
                resetSlideInterval();
            });
        }
        if (nextBtn) {
            nextBtn.addEventListener('click', () => {
                nextSlide(); // Call nextSlide for the next button
                resetSlideInterval();
            });
        }

        // Hàm chuyển đến slide tiếp theo
        function nextSlide() {
            currentSlide = (currentSlide + 1) % carouselImages.length;
            updateCarousel();
        }

        // Hàm cập nhật hiển thị carousel
        function updateCarousel() {
            const offset = -currentSlide * 100; // Mỗi slide chiếm 100% chiều rộng
            carouselInner.style.transform = `translateX(${offset}%)`;

            document.querySelectorAll('.top-image-carousel .carousel-dots .dot').forEach((dot, index) => {
                dot.classList.toggle('active', index === currentSlide);
            });
        }

        // Tự động chuyển slide
        function startSlideInterval() {
            slideInterval = setInterval(() => {
                nextSlide();
            }, 5000); // Tự động chuyển sau 5 giây
        }

        function resetSlideInterval() {
            clearInterval(slideInterval);
            startSlideInterval();
        }

        updateCarousel(); // Hiển thị slide đầu tiên
        startSlideInterval(); // Bắt đầu tự động chuyển slide
    }

    // =====================================
    // Logic hiển thị sản phẩm nổi bật
    // =====================================

    const featuredProductGrid = document.getElementById('featuredProductGrid');

    function displayFeaturedProducts() {
        if (!allProducts || allProducts.length === 0 || !featuredProductGrid) return;
        
        // Lấy 4 sản phẩm mới nhất hoặc bất kỳ sản phẩm nào bạn muốn nổi bật
        const featuredProducts = allProducts.slice(0, 4); 

        featuredProducts.forEach(product => {
            const productCard = document.createElement('a');
            productCard.href = `sanpham_chitiet.html?id=${product.id}`;
            productCard.classList.add('product-card');

            const priceClass = product.price === 0 ? 'free' : '';
            const priceText = product.price === 0 ? 'Miễn phí' : formatCurrency(product.price);

            productCard.innerHTML = `
                <div class="product-image">
                    <img src="${product.image || placeholderImage}" alt="${product.name}">
                </div>
                <div class="product-info">
                    <h3>${product.name}</h3>
                    <p class="price ${priceClass}">${priceText}</p>
                </div>
            `;
            featuredProductGrid.appendChild(productCard);
        });
    }

    // Gọi hàm hiển thị sản phẩm nổi bật khi DOM tải xong
    displayFeaturedProducts();

    // Khởi tạo carousel khi DOM đã tải
    initializeCarousel();
});