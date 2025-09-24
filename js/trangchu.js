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

            // Thêm class 'no-image-border' để loại bỏ khung ảnh
            productsHtml += `
                <a href="sanpham_chitiet.html?id=${product.id}" class="product-card no-image-border">
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

    // =============================================================
    // Logic cho hiệu ứng chuyển động khi cuộn trang
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

    // =============================================================
    // Logic ẩn loader, hiển thị animation thứ 2 và sau đó là nội dung chính
    // =============================================================
    const loaderContainer = document.getElementById('loaderContainer');
    const spookyHouseContainer = document.getElementById('spookyHouseContainer');
    const mainContent = document.getElementById('mainContent');

    window.addEventListener('load', function() {
        // Sau 3 giây, ẩn loader xe tải và hiển thị hiệu ứng ngôi nhà
        setTimeout(() => {
            loaderContainer.style.opacity = '0';
            setTimeout(() => {
                loaderContainer.classList.add('hidden');
                spookyHouseContainer.classList.remove('hidden');
                spookyHouseContainer.style.opacity = '1';
                
                // Sau 5 giây, ẩn nó và hiển thị nội dung chính
                setTimeout(() => {
                    spookyHouseContainer.style.opacity = '0';
                    setTimeout(() => {
                        spookyHouseContainer.classList.add('hidden');
                        mainContent.classList.remove('hidden');
                        // Gọi các hàm hiển thị nội dung sau khi trang đã tải xong
                        displayFeaturedProducts();
                        displayLatestPosts();
                    }, 500);
                }, 5000);
            }, 500);
        }, 3000);
    });

});

// Hàm format tiền tệ
function formatCurrency(price) {
    if (typeof price !== 'number') return price;
    return price.toLocaleString('vi-VN') + 'đ';
}