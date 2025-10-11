// --- 1. Global function: Format currency (Có thể gọi từ bên ngoài nếu cần) ---
function formatCurrency(price) {
  // Đảm bảo là số, nếu không thì trả về chuỗi rỗng
  if (typeof price !== "number") return "";
  return price.toLocaleString("vi-VN", { style: "currency", currency: "VND" });
}

// --- 2. Global function: Change main image on thumbnail click (Cần được gọi trực tiếp từ HTML onclick) ---
function changeMainImage(newImageUrl) {
  const mainImage = document.getElementById("mainProductImage");
  if (mainImage) {
    mainImage.src = newImageUrl;
    document.querySelectorAll(".thumbnail-images img").forEach((thumb) => {
      thumb.classList.remove("active");
      // So sánh dựa trên tên file để đảm bảo tính linh hoạt
      const newImageFileName = newImageUrl.substring(
        newImageUrl.lastIndexOf("/") + 1
      );
      const thumbFileName = thumb.src.substring(thumb.src.lastIndexOf("/") + 1);
      if (thumbFileName === newImageFileName) {
        thumb.classList.add("active");
      }
    });
  }
}

document.addEventListener("DOMContentLoaded", function () {
  const productDetailContainer = document.getElementById(
    "productDetailContainer"
  );
  const urlParams = new URLSearchParams(window.location.search);
  const productId = parseInt(urlParams.get("id"));

  // Kiểm tra tính hợp lệ của dữ liệu
  if (!productDetailContainer) {
    console.error("Product detail container not found!");
    return;
  }
  // allProducts được giả định là biến global từ product_data.js
  if (isNaN(productId) || typeof allProducts === "undefined") {
    productDetailContainer.innerHTML =
      '<p class="error-text">ID sản phẩm không hợp lệ hoặc dữ liệu sản phẩm chưa sẵn sàng.</p>';
    return;
  }

  const product = allProducts.find((p) => p.id === productId);

  if (product) {
    displayProductDetails(product);
    setupSocialShare(product);
    // Bắt đầu đếm ngược sale nếu có (Yêu cầu 4)
    if (product.salePrice && product.saleEndDate) {
      startSaleCountdown(product.saleEndDate);
    }
  } else {
    productDetailContainer.innerHTML =
      '<p class="error-text">Không tìm thấy sản phẩm.</p>';
  }

  // --- Helper function: Render Star Rating (Yêu cầu 3 - Sao có màu) ---
  function renderStarRating(rating) {
    if (typeof rating !== "number" || rating < 0 || rating > 5) return "";
    const fullStars = Math.floor(rating);
    // Dùng nửa sao nếu rating nằm giữa [X.25, X.75]
    const hasHalfStar = rating % 1 >= 0.25 && rating % 1 <= 0.75;
    let html = "";

    for (let i = 0; i < 5; i++) {
      if (i < fullStars) {
        html += '<i class="fas fa-star filled"></i>'; // Sao đầy
      } else if (i === fullStars && hasHalfStar) {
        html += '<i class="fas fa-star-half-alt filled"></i>'; // Nửa sao
      } else {
        html += '<i class="far fa-star"></i>'; // Sao rỗng
      }
    }
    return `<div class="star-rating" title="${rating.toFixed(
      1
    )} / 5 sao">${html}</div>`;
  }

  // --- Helper function: Sale Countdown Timer (Yêu cầu 4 - Thời hạn sale) ---
  function startSaleCountdown(endDateString) {
    const countdownElement = document.getElementById("saleCountdownTimer");
    if (!countdownElement) return;

    // Chuyển đổi chuỗi ngày thành timestamp
    const endDate = new Date(endDateString).getTime();
    let countdownInterval;

    const updateCountdown = () => {
      const now = new Date().getTime();
      const distance = endDate - now;

      if (distance < 0) {
        countdownElement.innerHTML = "Ưu đãi đã kết thúc!";
        // Dừng bộ đếm khi hết hạn
        clearInterval(countdownInterval);
        return;
      }

      // Tính toán Ngày, Giờ, Phút, Giây
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      // Hiển thị gọn gàng hơn: Ngày (N), Giờ (G), Phút (P), Giây (S)
      countdownElement.innerHTML = `
                Thời hạn sale: 
                <span title="Ngày">${days} N</span> 
                <span title="Giờ">${hours} G</span> 
                <span title="Phút">${minutes} P</span> 
                <span title="Giây">${seconds} S</span>
            `;
    };

    countdownInterval = setInterval(updateCountdown, 1000);
    updateCountdown(); // Chạy lần đầu tiên ngay lập tức
  }

  // --- Main function: Display Product Details (Yêu cầu 1, 2, 4, 5) ---
  function displayProductDetails(prod) {
    // Yêu cầu 1: Chuyển chức năng thành danh sách gạch đầu dòng (bullet point)
    const functionsListHtml = prod.functions
      ? `
                <div class="product-details-section">
                    <h2><i class="fas fa-check-circle"></i> Tính năng nổi bật</h2>
                    <ul class="professional-list">
                        ${prod.functions
                          .split("\n")
                          .map((func) => `<li>${func.trim()}</li>`)
                          .join("")}
                    </ul>
                </div>
              `
      : "";

    // Xử lý giá tiền (Yêu cầu 4)
    let priceHtml = "";
    if (prod.price === 0) {
      priceHtml = `<p class="product-price price-free">Giá: <span>Miễn phí</span></p>`;
    } else if (prod.salePrice && prod.salePrice < prod.price) {
      // Giá có sale: hiển thị giá gốc gạch ngang và giá sale nổi bật
      priceHtml = `
                <div class="price-block">
                    <p class="product-price original-price on-sale">
                        <i class="fas fa-tag"></i> 
                        ${formatCurrency(prod.price)}
                    </p>
                    <p class="product-price sale-price">
                        Giá ưu đãi: <span>${formatCurrency(
                          prod.salePrice
                        )}</span>
                    </p>
                    <p id="saleCountdownTimer" class="sale-countdown"></p>
                </div>
            `;
    } else {
      // Chỉ hiển thị giá gốc
      priceHtml = `
                <p class="product-price">Giá: <span>${formatCurrency(
                  prod.price
                )}</span></p>
            `;
    }

    // Xử lý section hành động (CTA)
    let actionSectionHtml = "";

    // Chỉ hiển thị khu vực actions nếu có link tải hoặc sản phẩm có giá
    if (prod.resourceLink || prod.price > 0) {
      actionSectionHtml += '<div class="product-actions">';

      // Nút chính: Tải xuống hoặc Liên hệ
      if (prod.resourceLink) {
        actionSectionHtml += `
            <a href="${prod.resourceLink}" class="cta-button" target="_blank" rel="noopener noreferrer">
                <i class="fas fa-download"></i> Tải Xuống Tài Nguyên
            </a>
        `;
      } else if (prod.price > 0 && !prod.resourceLink) {
        actionSectionHtml += `
        `;
      }

      // --- LOGIC ĐÃ SỬA ---
      // Chỉ thêm các nút Giỏ hàng nếu sản phẩm không miễn phí (giá > 0)
      if (prod.price > 0) {
        actionSectionHtml += `
            <button id="addToCartBtn" class="cta-button add-to-cart-btn">
                <i class="fas fa-cart-plus"></i> Thêm vào giỏ hàng
            </button>
            <a href="giohang.html" class="cta-button view-cart-btn">
                <i class="fas fa-shopping-cart"></i> Xem giỏ hàng
            </a>
        `;
      }

      actionSectionHtml += "</div>"; // Đóng thẻ div product-actions
    }

    // Thẻ rating và version (Yêu cầu 2, 3)
    const ratingHtml = prod.rating ? renderStarRating(prod.rating) : "";
    const versionHtml = prod.version
      ? `<p class="product-version" title="Phiên bản cập nhật"><i class="fas fa-code-branch"></i> Phiên bản: **${prod.version}**</p>`
      : "";

    // Thẻ status
    const statusHtml = prod.status
      ? `<span class="product-status status-${prod.status
          .toLowerCase()
          .replace(
            /\s/g,
            "-"
          )}" title="Trạng thái cập nhật"><i class="fas fa-info-circle"></i> ${
          prod.status
        }</span>`
      : "";

    // Yêu cầu 5: Sắp xếp lại bố cục hiển thị chuyên nghiệp hơn
    const productHtml = `
            <div class="product-gallery">
                <div class="main-image-container">
                    <img id="mainProductImage" src="${
                      prod.images_gallery[0]
                    }" alt="${prod.name}">
                </div>
                <div class="thumbnail-images">
                    ${prod.images_gallery
                      .map(
                        (img) => `
                        <img src="${img}" alt="Thumbnail" 
                             onclick="changeMainImage('${img}')" 
                             class="${
                               img === prod.images_gallery[0] ? "active" : ""
                             }">
                    `
                      )
                      .join("")}
                </div>
            </div>

            <div class="product-info-content">
                <h1 class="product-title">${prod.name}</h1>
                
                <div class="meta-info-group">
                    ${ratingHtml}
                    ${versionHtml}
                    ${statusHtml}
                </div>
                
                <hr class="separator"/>

                ${priceHtml}

                ${actionSectionHtml}

                <hr class="separator"/>

                <div class="product-details-section">
                    <h2><i class="fas fa-align-left"></i> Mô tả chi tiết</h2>
                    <p class="product-description-text">${
                      prod.description || "Không có mô tả chi tiết."
                    }</p>
                </div>

                ${functionsListHtml}
                
                <hr class="separator"/>

                <div class="social-share-section">
                    <h4>Chia sẻ sản phẩm này</h4>
                    <div class="social-share-buttons">
                        <a href="#" data-share-platform="messenger" class="share-button messenger" title="Chia sẻ qua Messenger"><i class="fab fa-facebook-messenger"></i></a> 
                        <a href="#" data-share-platform="telegram" class="share-button telegram" title="Chia sẻ qua Telegram"><i class="fab fa-telegram-plane"></i></a>
                        <a href="#" data-share-platform="copylink" class="share-button copylink" title="Sao chép đường link"><i class="fas fa-copy"></i></a>
                    </div>
                    <span id="copyFeedback" class="copy-feedback-hidden"></span>
                </div>
            </div>
        `;
    productDetailContainer.innerHTML = productHtml;
  }

  // --- Social Share Logic (Giữ nguyên) ---
  function setupSocialShare(product) {
    const shareButtons = document.querySelectorAll(
      ".social-share-buttons .share-button"
    );
    const productUrl = window.location.href;
    const productTitle = product.name;

    shareButtons.forEach((button) => {
      button.addEventListener("click", function (e) {
        e.preventDefault();
        const platform = this.getAttribute("data-share-platform");
        let shareUrl = "";

        switch (platform) {
          case "telegram":
            shareUrl = `https://t.me/share/url?url=${encodeURIComponent(
              productUrl
            )}&text=${encodeURIComponent(productTitle)}`;
            break;
          case "messenger":
            // Sử dụng liên kết sharer để đảm bảo hoạt động tốt hơn
            shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
              productUrl
            )}`;
            break;
          case "copylink":
            const copyFeedbackElement = document.getElementById("copyFeedback");

            navigator.clipboard
              .writeText(productUrl)
              .then(() => {
                // 1. Loại bỏ alert
                // alert("Đã sao chép đường link sản phẩm!");

                // 2. Hiển thị thông báo phản hồi trực quan
                if (copyFeedbackElement) {
                  copyFeedbackElement.textContent = "Đã sao chép!";
                  copyFeedbackElement.classList.remove("copy-feedback-hidden");
                  copyFeedbackElement.classList.add("copy-feedback-visible");

                  // Tự động ẩn sau 3 giây
                  setTimeout(() => {
                    copyFeedbackElement.classList.remove(
                      "copy-feedback-visible"
                    );
                    copyFeedbackElement.classList.add("copy-feedback-hidden");
                  }, 3000);
                }
              })
              .catch((err) => {
                console.error("Không thể sao chép đường link: ", err);
                // Giữ lại alert cho trường hợp lỗi,
                // hoặc thay bằng thông báo lỗi trực quan nếu muốn chuyên nghiệp hơn
                alert(
                  "Không thể sao chép đường link. Vui lòng sao chép thủ công."
                );
              });
            return; // Thoát vì đã xử lý sao chép

          default:
            // Bỏ qua các platform khác (Zalo, Tiktok, Twitter,...)
            return;
        }

        if (shareUrl) {
          window.open(
            shareUrl,
            "_blank",
            "width=600,height=400,resizable=yes,scrollbars=yes"
          );
        }
      });
    });
  }

  // --- Logic cập nhật nút Quay lại ---
  const backButton = document.querySelector(".fixed-back-btn");
  if (backButton) {
    // Lấy tất cả các tham số từ URL, ngoại trừ 'id' của sản phẩm hiện tại
    const params = new URLSearchParams(window.location.search);
    params.delete("id");
    const queryString = params.toString();

    // Gán lại đường dẫn, giúp người dùng quay lại trang danh sách sản phẩm trước đó với bộ lọc đã chọn
    backButton.href = `sanpham.html${queryString ? "?" + queryString : ""}`;
  }
  // --- Logic Giỏ hàng: Thêm vào Giỏ ---
  const addToCartBtn = document.getElementById("addToCartBtn");
  if (addToCartBtn && product) {
    addToCartBtn.addEventListener("click", () => {
      // Kiểm tra xem CartManager đã được tải chưa
      if (typeof CartManager === "undefined") {
        alert(
          "Lỗi: Không tìm thấy logic Giỏ hàng. Vui lòng kiểm tra lại file giohang.js"
        );
        return;
      }

      // Lấy ID sản phẩm hiện tại
      const productId = product.id;

      // Gọi hàm thêm vào giỏ hàng
      const success = CartManager.addToCart(productId, 1);

      if (success) {
        showToast(`Đã thêm "${product.name}" vào giỏ hàng!`);
        addToCartBtn.textContent = "Đã Thêm!";
        setTimeout(() => {
          addToCartBtn.innerHTML =
            '<i class="fas fa-shopping-cart"></i> Thêm vào Giỏ Hàng';
        }, 1500);
      }
    });
  }
});
function showToast(message) {
  // Nếu chưa có container, tạo mới
  let toastContainer = document.getElementById("toastContainer");
  if (!toastContainer) {
    toastContainer = document.createElement("div");
    toastContainer.id = "toastContainer";
    toastContainer.style.position = "fixed";
    toastContainer.style.bottom = "20px";
    toastContainer.style.right = "20px";
    toastContainer.style.zIndex = "9999";
    document.body.appendChild(toastContainer);
  }

  // Tạo thông báo
  const toast = document.createElement("div");
  toast.textContent = message;
  toast.style.background = "#333";
  toast.style.color = "#fff";
  toast.style.padding = "10px 15px";
  toast.style.marginTop = "8px";
  toast.style.borderRadius = "8px";
  toast.style.boxShadow = "0 2px 6px rgba(0,0,0,0.3)";
  toast.style.opacity = "0";
  toast.style.transition = "opacity 0.3s ease";

  toastContainer.appendChild(toast);
  setTimeout(() => (toast.style.opacity = "1"), 50);
  setTimeout(() => {
    toast.style.opacity = "0";
    setTimeout(() => toast.remove(), 300);
  }, 2500);
}
