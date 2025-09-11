document.addEventListener('DOMContentLoaded', function () {
    const productDetailContainer = document.getElementById('productDetailContainer');
    const urlParams = new URLSearchParams(window.location.search);
    const productId = parseInt(urlParams.get('id'));

    if (!productDetailContainer) {
        console.error("Product detail container not found!");
        return;
    }

    if (isNaN(productId) || !allProducts) {
        productDetailContainer.innerHTML = '<p class="error-text">ID sản phẩm không hợp lệ hoặc dữ liệu sản phẩm chưa sẵn sàng.</p>';
        return;
    }

    const product = allProducts.find(p => p.id === productId);

    if (product) {
        displayProductDetails(product);
        setupSocialShare(product); // Gọi hàm setup chia sẻ sau khi hiển thị chi tiết sản phẩm
    } else {
        productDetailContainer.innerHTML = '<p class="error-text">Không tìm thấy sản phẩm.</p>';
    }

    function displayProductDetails(prod) {
  // Xử lý section hành động: luôn hiển thị nút Tải Xuống nếu có resourceLink
    let actionSectionHtml = '';
    if (prod.resourceLink) {
        actionSectionHtml = `
            <div class=\"product-actions\">
                <a href=\"${prod.resourceLink}\" class=\"cta-button\" target=\"_blank\" rel=\"noopener noreferrer\">
                    <i class=\"fas fa-download\"></i> Tải Xuống Tài Nguyên
                </a>
            </div>
        `;
    } else if (prod.price > 0) {
        actionSectionHtml = `
            <div class="product-actions">
                <a href="lienhe.html" class="cta-button" target="_blank" rel="noopener noreferrer">
                    <i class="fas fa-info-circle"></i> Liên Hệ Mua Hàng
                </a>
            </div>
        `;
    }

    // Xử lý các thông tin phụ nếu có
    const descriptionHtml = prod.description ? `<p>${prod.description}</p>` : '';
    const functionsHtml = prod.functions ? `
        <h2>Chức năng</h2>
        <p>${prod.functions}</p>
    ` : '';
    const statusHtml = prod.status ? `
        <h2>Trạng thái</h2>
        <p>${prod.status}</p>
    ` : '';

    const productHtml = `
        <div class="product-gallery">
            <div class="main-image-container">
                <img id="mainProductImage" src="${prod.images_gallery[0]}" alt="${prod.name}">
            </div>
            <div class="thumbnail-images">
                ${prod.images_gallery.map(img => `<img src="${img}" alt="Thumbnail" onclick="changeMainImage('${img}')">`).join('')}
            </div>
        </div>

        <div class="product-info-content">
            <h1 class="product-title">${prod.name}</h1>
            <p class="product-price">Giá: <span class="${prod.price === 0 ? 'free' : ''}">${prod.price === 0 ? 'Miễn phí' : formatCurrency(prod.price)}</span></p>

            <div class="product-info-box">
                <h2>Mô tả</h2>
                ${descriptionHtml}
            </div>

            <div class="product-info-box">
                <div class="info-group">
                    ${functionsHtml}
                </div>
                <div class="info-group">
                    ${statusHtml}
                </div>
            </div>

            ${actionSectionHtml}

            <div class="social-share-section">
                <h4>Chia sẻ sản phẩm này</h4>
                <div class="social-share-buttons">
                    <a href="#" class="share-button messenger" data-platform="messenger" aria-label="Chia sẻ qua Messenger">
                        <i class="fab fa-facebook-messenger"></i>
                    </a>
                    <a href="#" class="share-button zalo" data-platform="zalo" aria-label="Chia sẻ qua Zalo">
                        <img src="images/zalo.png" alt="Zalo" class="zalo-icon">
                    </a>
                    <a href="#" class="share-button telegram" data-platform="telegram" aria-label="Chia sẻ qua Telegram">
                        <i class="fab fa-telegram-plane"></i>
                    </a>
                </div>
            </div>
            </div>
    `;
    productDetailContainer.innerHTML = productHtml;

    // Đặt ảnh thumbnail đầu tiên làm active
    const firstThumbnail = document.querySelector('.thumbnail-images img');
    if (firstThumbnail) {
        firstThumbnail.classList.add('active');
    }
}
    
    // Hàm mới: Setup Social Share
    function setupSocialShare(product) {
        const shareButtons = document.querySelectorAll('.social-share-buttons .share-button');
        const pageUrl = window.location.href;
        const shareTitle = "Sản phẩm: " + product.name;
        const shareText = "Hãy xem sản phẩm này tại: " + pageUrl;

        shareButtons.forEach(button => {
            button.addEventListener('click', (e) => {
                e.preventDefault();
                const platform = button.getAttribute('data-platform');
                let shareUrl = '';
                
                switch (platform) {
                    case 'messenger':
                        shareUrl = `https://www.facebook.com/dialog/send?link=${encodeURIComponent(pageUrl)}&app_id=275571618212648`;
                        break;
                    case 'zalo':
                        shareUrl = `https://zalo.me/share?url=${encodeURIComponent(pageUrl)}&content=${encodeURIComponent(shareTitle)}`;
                        break;
                    case 'telegram':
                        shareUrl = `https://t.me/share/url?url=${encodeURIComponent(pageUrl)}&text=${encodeURIComponent(shareTitle)}`;
                        break;
                    case 'tiktok':
                        alert('TikTok không hỗ trợ API chia sẻ trực tiếp trên web. Bạn có thể sao chép đường link và chia sẻ thủ công.');
                        return;
                    default:
                        return;
                }
                
                if (shareUrl) {
                    window.open(shareUrl, '_blank', 'width=600,height=400,resizable=yes,scrollbars=yes');
                }
            });
        });
    }

    // --- Bổ sung: Logic cập nhật nút Quay lại ---
    const backButton = document.querySelector('.fixed-back-btn');
    if (backButton) {
        // Lấy tất cả các tham số từ URL, ngoại trừ 'id' của sản phẩm hiện tại
        const params = new URLSearchParams(window.location.search);
        params.delete('id');
        const queryString = params.toString();
        
        // Gán lại đường dẫn với các tham số đã lọc
        backButton.href = `sanpham.html${queryString ? '?' + queryString : ''}`;
    }
});

function changeMainImage(newImageUrl) {
    const mainImage = document.getElementById('mainProductImage');
    if (mainImage) {
        mainImage.src = newImageUrl;
        document.querySelectorAll('.thumbnail-images img').forEach(thumb => {
            thumb.classList.remove('active');
            if (thumb.src.endsWith(newImageUrl.substring(newImageUrl.lastIndexOf('/') + 1))) {
                thumb.classList.add('active');
            }
        });
    }
}