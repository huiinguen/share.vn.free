document.addEventListener('DOMContentLoaded', function() {
    
    // =====================================
    // Logic hiển thị sản phẩm nổi bật
    // =====================================
    function displayFeaturedProducts() {
        const featuredProductGrid = document.getElementById('featuredProductGrid');
        if (!featuredProductGrid) return;
        
        if (typeof allProducts === 'undefined' || allProducts.length === 0) {
            featuredProductGrid.innerHTML = "<p>Không có sản phẩm để hiển thị.</p>";
            return;
        }
        
        const featuredProducts = allProducts.slice(0, 8); 

        let productsHtml = '';
        featuredProducts.forEach(product => {
            const priceClass = product.price === 0 ? 'free' : '';
            const priceText = product.price === 0 ? 'Miễn phí' : formatCurrency(product.price);
            const imageSrc = product.images_gallery && product.images_gallery.length > 0 ? product.images_gallery[0] : 'images/placeholder.png';

            productsHtml += `
                <a href="sanpham_chitiet.html?id=${product.id}" class="product-card">
                    <div class="product-image">
                        <img src="${imageSrc}" alt="${product.name}">
                    </div>
                    <div class="product-info">
                        <h3>${product.name}</h3>
                        <p class="price ${priceClass}">${priceText}</p>
                    </div>
                </a>
            `;
        });
        featuredProductGrid.innerHTML = productsHtml;
    }

    // =====================================
    // Logic hiển thị bài blog mới nhất
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

    // Gọi các hàm để hiển thị nội dung
    displayFeaturedProducts();
    displayLatestPosts();


    // =============================================================
    // MỚI: Logic cho hiệu ứng chuyển động khi cuộn trang
    // =============================================================
    const animatedSections = document.querySelectorAll('.animate-section');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            // Khi khối lọt vào màn hình (isIntersecting)
            if (entry.isIntersecting) {
                // Thêm class 'visible' để kích hoạt hiệu ứng trong CSS
                entry.target.classList.add('visible');
                // Dừng theo dõi khối này để hiệu ứng chỉ xảy ra 1 lần
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1 // Kích hoạt khi 10% của khối được nhìn thấy
    });

    // Bắt đầu theo dõi tất cả các khối đã chọn
    animatedSections.forEach(section => {
        observer.observe(section);
    });

});

// Hàm format tiền tệ
function formatCurrency(price) {
    if (typeof price !== 'number') return price;
    return price.toLocaleString('vi-VN') + 'đ';
}