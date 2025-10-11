document.addEventListener('DOMContentLoaded', function() {
    
    // Gọi các hàm hiển thị nội dung ngay sau khi DOM được tải
    displayFeaturedProducts();
    displayLatestPosts();
    
    // =====================================
    // Logic hiển thị sản phẩm nổi bật (Đã thay đổi cho SWIPER)
    // =====================================
    function displayFeaturedProducts() {
        const featuredProductGrid = document.getElementById('featuredProductGrid');
        if (!featuredProductGrid) return;
        
        if (typeof allProducts === 'undefined' || allProducts.length === 0) {
            featuredProductGrid.innerHTML = "<p>Không có sản phẩm để hiển thị.</p>";
            return;
        }
        
        // Lấy tối đa 8 sản phẩm nổi bật
        const featuredProducts = allProducts.slice(0, 8); 

        let productsHtml = '';
        featuredProducts.forEach(product => {
            const priceClass = product.price === 0 ? 'free' : '';
            const priceText = product.price === 0 ? 'Miễn phí' : formatCurrency(product.price);
            const imageSrc = product.images_gallery && product.images_gallery.length > 0 ? product.images_gallery[0] : 'images/placeholder.png';

            // Mỗi sản phẩm là một Swiper Slide
            productsHtml += `
                <div class="swiper-slide">
                    <a href="sanpham_chitiet.html?id=${product.id}" class="product-card no-image-border">
                        <div class="product-image">
                            <img src="${imageSrc}" alt="${product.name}">
                        </div>
                        <div class="product-info">
                            <h3>${product.name}</h3>
                            <p class="price ${priceClass}">${priceText}</p>
                        </div>
                    </a>
                </div>
            `;
        });
        featuredProductGrid.innerHTML = productsHtml;
        
        // Khởi tạo Swiper sau khi nội dung đã được thêm vào DOM
        initProductSwiper();
    }
    
    // =====================================
    // Logic khởi tạo Swiper Carousel
    // =====================================
    function initProductSwiper() {
        const productSwiperElement = document.getElementById('featuredProductSwiper');
        if (!productSwiperElement) return;

        const featuredProductSwiper = new Swiper(productSwiperElement, {
            // Tốc độ trượt
            speed: 600,
            // Khoảng cách giữa các slide
            spaceBetween: 25, 
            // Vòng lặp vô tận (tùy chọn)
            loop: true, 
            
            // Số lượng slide hiển thị trên màn hình
            slidesPerView: 1, 

            // Cấu hình Responsive: thay đổi slidesPerView theo kích thước màn hình
            breakpoints: {
                // Khi chiều rộng màn hình >= 640px
                640: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                },
                // Khi chiều rộng màn hình >= 1024px
                1024: {
                    slidesPerView: 4,
                    spaceBetween: 30,
                }
            },

            // Thêm phân trang (dấu chấm)
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },

            // Thêm nút điều hướng (mũi tên)
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
        });
    }

    // =====================================
    // Logic hiển thị bài blog mới nhất (KHÔNG ĐỔI)
    // =====================================
    function displayLatestPosts() {
        const latestBlogGrid = document.getElementById('latestBlogGrid');
        if (!latestBlogGrid) return;

        if (typeof blogPosts === 'undefined' || blogPosts.length === 0) {
            latestBlogGrid.innerHTML = "<p>Không có bài viết nào để hiển thị.</p>";
            return;
        }

        const latestPosts = blogPosts.slice(0, 3);
        
        let postsHtml = '';
        latestPosts.forEach(post => {
            postsHtml += `
                <a href="blog_chitiet.html?id=${post.id}" class="post-card">
                    <img src="${post.image}" alt="${post.title}" class="post-image">
                    <div class="post-content">
                        <h3>${post.title}</h3>
                        <p>${post.summary}</p>
                    </div>
                </a>
            `;
        });
        latestBlogGrid.innerHTML = postsHtml;
    }

    // =============================================================
    // Logic cho hiệu ứng chuyển động khi cuộn trang (KHÔNG ĐỔI)
    // =============================================================
    const animatedSections = document.querySelectorAll('.animate-section');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1
    });

    animatedSections.forEach(section => {
        observer.observe(section);
    });

});

// Hàm format tiền tệ
function formatCurrency(price) {
    if (typeof price !== 'number') return price;
    return price.toLocaleString('vi-VN') + 'đ';
}