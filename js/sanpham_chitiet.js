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
    } else {
        productDetailContainer.innerHTML = '<p class="error-text">Không tìm thấy sản phẩm.</p>';
    }

    function displayProductDetails(prod) {
        let actionSectionHtml = '';

        if (prod.price === 0 && prod.resourceLink) {
            actionSectionHtml = `
                <div class="product-actions">
                    <a href="${prod.resourceLink}" class="cta-button" target="_blank" rel="noopener noreferrer">Tải Xuống Tài Nguyên</a>
                </div>
            `;
        } else if (prod.price > 0) {
            actionSectionHtml = `
                <div class="product-actions">
                    <div class="contact-info-block">
                        <p>Để trao đổi hoặc mua hàng, vui lòng liên hệ:</p>
                        <p><i class="fas fa-phone"></i> Zalo: 0966030929(CODE,SHARE TN)</p>
                        <p><i class="fas fa-phone"></i> Zalo: 0961430850(MXH)</p>
                    </div>
                </div>
            `;
        } else {
             actionSectionHtml = `
                <div class="product-actions">
                    <p class="error-text">Sản phẩm này không có đường dẫn tài nguyên.</p>
                </div>
            `;
        }

        const galleryHtml = prod.images_gallery.map(imgSrc => `
            <img src="${imgSrc}" alt="${prod.name} thumbnail" onclick="changeMainImage('${imgSrc}')">
        `).join('');

        const productHtml = `
            <div class="product-gallery">
                <div class="main-image-container">
                    <img src="${prod.image}" alt="${prod.name}" id="mainProductImage">
                </div>
                <div class="thumbnail-images">
                    ${galleryHtml}
                </div>
            </div>
            <div class="product-details-content">
                <h1>${prod.name}</h1>
                <p class="category">Danh mục: ${prod.category}</p>
                <p class="price ${prod.price === 0 ? 'free' : ''}">Giá: ${prod.price === 0 ? 'Miễn phí' : formatCurrency(prod.price)}</p>
                <h2>Mô tả sản phẩm</h2>
                <p>${prod.description}</p>
                ${actionSectionHtml}
            </div>
        `;
        productDetailContainer.innerHTML = productHtml;

        const firstThumbnail = document.querySelector('.thumbnail-images img');
        if (firstThumbnail) {
            firstThumbnail.classList.add('active');
        }
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