document.addEventListener('DOMContentLoaded', function() {
    const allProductGrid = document.getElementById('allProductGrid');
    const categoryFilterContainer = document.getElementById('categoryFilter');
    const searchInput = document.getElementById('searchInput');
    const sortBySelect = document.getElementById('sortBy');
    const paginationControls = document.getElementById('paginationControls');

    const productsPerPage = 8;
    let currentPage = 1;
    let currentFilters = {
        category: 'all', // Thay đổi mặc định thành 'all'
        subCategory: null,
        searchTerm: '',
        sortBy: 'newest'
    };
    let filteredProducts = [];
    let searchTimeout;

    const filterToggleBtn = document.getElementById('filterToggle');
    const sidebarFilters = document.getElementById('sidebarFilters');
    const closeFilterBtn = document.getElementById('closeFilterBtn');
    const sidebarOverlay = document.getElementById('sidebarOverlay');

    if (typeof allProducts === 'undefined' || allProducts.length === 0) {
        if (allProductGrid) {
            allProductGrid.innerHTML = "<p>Không có sản phẩm nào để hiển thị. Vui lòng kiểm tra lại dữ liệu.</p>";
        }
        return;
    }
    function createCategoryMenu() {
    if (!categoryFilterContainer) return;
    const categories = [...new Set(allProducts.map(p => p.category))];
    let html = `
        <li class="category-item all-products-item">
            <label>
                <input type="radio" name="category" value="all">
                Tất cả sản phẩm
            </label>
        </li>
    `;
    categories.forEach(category => {
        html += `<li class="category-item" data-category="${category}">
                    <div class="category-title">
                        <label>
                            <input type="radio" name="category" value="${category}">
                            ${category}
                        </label>
                        <i class="fas fa-chevron-right toggle-icon"></i>
                    </div>
                    <ul class="subcategory-list">
                    </ul>
                </li>`;
    });
    categoryFilterContainer.innerHTML = html;
}

    // --- Bổ sung: Hàm cập nhật URL ---
    function updateUrl() {
        const urlParams = new URLSearchParams();
        if (currentFilters.category) urlParams.set('category', currentFilters.category);
        if (currentFilters.subCategory) urlParams.set('subCategory', currentFilters.subCategory);
        if (currentFilters.searchTerm) urlParams.set('search', currentFilters.searchTerm);
        if (currentFilters.sortBy) urlParams.set('sortBy', currentFilters.sortBy);
        if (currentPage > 1) urlParams.set('page', currentPage);
        
        window.history.replaceState({}, '', `sanpham.html?${urlParams.toString()}`);
    }

    // --- Bổ sung: Hàm khôi phục bộ lọc từ URL ---
    function restoreFiltersFromUrl() {
        const urlParams = new URLSearchParams(window.location.search);
        currentFilters.category = urlParams.get('category') || null;
        currentFilters.subCategory = urlParams.get('subCategory') || null;
        currentFilters.searchTerm = urlParams.get('search') || '';
        currentFilters.sortBy = urlParams.get('sortBy') || 'newest';
        currentPage = parseInt(urlParams.get('page')) || 1;

        if (searchInput) searchInput.value = currentFilters.searchTerm;
        if (sortBySelect) sortBySelect.value = currentFilters.sortBy;

        // Cập nhật giao diện của các radio button
        if (categoryFilterContainer) {
            // Đóng tất cả các subcategory ban đầu
            document.querySelectorAll('.category-item.expanded').forEach(item => item.classList.remove('expanded'));
            
            const categoryRadio = categoryFilterContainer.querySelector(`input[name="category"][value="${currentFilters.category}"]`);
            if (categoryRadio) {
                categoryRadio.checked = true;
                categoryRadio.closest('.category-item').classList.add('expanded'); // Mở mục cha
            }
            
            const subCategoryRadio = categoryFilterContainer.querySelector(`input[name="subCategory"][value="${currentFilters.subCategory}"]`);
            if (subCategoryRadio) {
                subCategoryRadio.checked = true;
                subCategoryRadio.closest('.category-item').classList.add('expanded'); // Mở mục cha
            }
        }
    }

    function displayProducts(products, page) {
        if (!allProductGrid) return;

         allProductGrid.innerHTML = '';
    const start = (page - 1) * productsPerPage;
    const end = start + productsPerPage;
    const productsToDisplay = products.slice(start, end);

        if (productsToDisplay.length === 0) {
            allProductGrid.innerHTML = '<p class="loading-text">Không tìm thấy sản phẩm nào phù hợp.</p>';
            return;
        }

        productsToDisplay.forEach(product => {
            const currentUrlParams = new URLSearchParams(window.location.search);
            const productLink = `sanpham_chitiet.html?id=${product.id}&${currentUrlParams.toString()}`;
            
            const productCard = document.createElement('a');
            productCard.href = productLink;
            productCard.classList.add('product-card');

            const priceClass = product.price === 0 ? 'free' : '';
            const priceText = product.price === 0 ? 'Miễn phí' : formatCurrency(product.price);

            // Cấu trúc mới: Icon + Tiêu đề
            let iconClass = 'fa-share-alt'; // Icon mặc định
            if (product.subCategory === 'Tiktok') {
                iconClass = 'fa-brands fa-tiktok';
            } else if (product.subCategory === 'Facebook') {
                iconClass = 'fa-brands fa-facebook-f';
            } else if (product.subCategory === 'Instagram') {
                iconClass = 'fa-brands fa-instagram';
            }
            
            productCard.innerHTML = `
                <h3 class="san-pham__title">${product.name}</h3>
                <div class="product-info-bottom">
                    <p class="price ${priceClass}">${priceText}</p>
                </div>
            `;
            allProductGrid.appendChild(productCard);
        });
    }

    function setupPagination(products) {
        if (!paginationControls) return;
        paginationControls.innerHTML = '';
        const hasFilters = currentFilters.category || currentFilters.subCategory || currentFilters.searchTerm;
        if (!hasFilters) return;

        const pageCount = Math.ceil(products.length / productsPerPage);
        if (pageCount <= 1) return;

        const prevBtn = document.createElement('button');
        prevBtn.textContent = 'Trước';
        prevBtn.disabled = currentPage === 1;
        prevBtn.addEventListener('click', () => {
            currentPage--;
            updateUrl();
            filterAndSortProducts();
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
        paginationControls.appendChild(prevBtn);

        for (let i = 1; i <= pageCount; i++) {
            const pageBtn = document.createElement('button');
            pageBtn.textContent = i;
            if (i === currentPage) {
                pageBtn.classList.add('active');
            }
            pageBtn.addEventListener('click', () => {
                currentPage = i;
                updateUrl();
                filterAndSortProducts();
                window.scrollTo({ top: 0, behavior: 'smooth' });
            });
            paginationControls.appendChild(pageBtn);
        }

        const nextBtn = document.createElement('button');
        nextBtn.textContent = 'Sau';
        nextBtn.disabled = currentPage === pageCount;
        nextBtn.addEventListener('click', () => {
            currentPage++;
            updateUrl();
            filterAndSortProducts();
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
        paginationControls.appendChild(nextBtn);
    }
    
    function filterAndSortProducts() {
        let results = [...allProducts];

        if (currentFilters.category && currentFilters.category !== 'all') {
            results = results.filter(p => p.category === currentFilters.category);
        }
        if (currentFilters.subCategory) {
            results = results.filter(p => p.subCategory === currentFilters.subCategory);
        }

        if (currentFilters.searchTerm) {
            const searchTermLower = currentFilters.searchTerm.toLowerCase();
            results = results.filter(p =>
                p.name.toLowerCase().includes(searchTermLower) ||
                (p.description && p.description.toLowerCase().includes(searchTermLower)) ||
                (p.category && p.category.toLowerCase().includes(searchTermLower))
            );
        }

        if (currentFilters.sortBy) {
            switch (currentFilters.sortBy) {
                case 'price-asc':
                    results.sort((a, b) => a.price - b.price);
                    break;
                case 'price-desc':
                    results.sort((a, b) => b.price - a.price);
                    break;
                case 'newest':
                default:
                    results.sort((a, b) => b.id - a.id);
                    break;
            }
        }

        filteredProducts = results;
        displayProducts(filteredProducts, currentPage);
        setupPagination(filteredProducts);
    }

    function setupCategoryFilters() {
        if (!categoryFilterContainer) return;
        categoryFilterContainer.innerHTML = '';
        
        const categoriesWithSub = {};
        allProducts.forEach(p => {
            if (!categoriesWithSub[p.category]) {
                categoriesWithSub[p.category] = new Set();
            }
            if (p.subCategory) {
                categoriesWithSub[p.category].add(p.subCategory);
            }
        });

        for (const category in categoriesWithSub) {
            const categoryLi = document.createElement('li');
            categoryLi.classList.add('category-item');
            
            const isCategoryActive = currentFilters.category === category;
            if (isCategoryActive) {
                categoryLi.classList.add('expanded');
            }

            const categoryTitleDiv = document.createElement('div');
            categoryTitleDiv.classList.add('category-title');
            categoryTitleDiv.innerHTML = `
                <label>
                    <input type="radio" name="category" value="${category}" ${isCategoryActive ? 'checked' : ''}>
                    ${category}
                </label>
                <i class="fas fa-chevron-right toggle-icon"></i>
            `;
            categoryLi.appendChild(categoryTitleDiv);

            if (categoriesWithSub[category].size > 0) {
                const subCategoryUl = document.createElement('ul');
                subCategoryUl.classList.add('subcategory-list');
                categoriesWithSub[category].forEach(subCat => {
                    const subCategoryLi = document.createElement('li');
                    const isSubCategoryActive = currentFilters.subCategory === subCat;
                    subCategoryLi.innerHTML = `
                        <label>
                            <input type="radio" name="subCategory" value="${subCat}" ${isSubCategoryActive ? 'checked' : ''}>
                            ${subCat}
                        </label>
                    `;
                    subCategoryUl.appendChild(subCategoryLi);
                });
                categoryLi.appendChild(subCategoryUl);

                categoryTitleDiv.addEventListener('click', (e) => {
                    const targetInput = e.target.closest('label')?.querySelector('input');
                    if (!targetInput || targetInput.name !== 'category') {
                        document.querySelectorAll('.category-item').forEach(item => {
                            if (item !== categoryLi) {
                                item.classList.remove('expanded');
                            }
                        });
                        categoryLi.classList.toggle('expanded');
                        e.stopPropagation();
                    }
                });
            }
            categoryFilterContainer.appendChild(categoryLi);
        }
    }

    function initializeFilters() {
        restoreFiltersFromUrl(); // Khôi phục trạng thái từ URL khi tải trang
        setupCategoryFilters();
        
        if (categoryFilterContainer) {
            categoryFilterContainer.addEventListener('change', (e) => {
                const target = e.target;
                if (target.name === 'category') {
                    currentFilters.category = target.value;
                    currentFilters.subCategory = null; 
                    const subRadios = categoryFilterContainer.querySelectorAll('input[name="subCategory"]');
                    subRadios.forEach(radio => radio.checked = false);
                } else if (target.name === 'subCategory') {
                    currentFilters.subCategory = target.value;
                    const parentCategory = target.closest('.category-item').querySelector('input[type="radio"]').value;
                    currentFilters.category = parentCategory;
                    target.closest('.category-item').querySelector('input[type="radio"]').checked = true;
                }
                currentPage = 1;
                updateUrl();
                filterAndSortProducts();
            });
        }
        
        if (searchInput) {
            searchInput.addEventListener('input', () => {
                clearTimeout(searchTimeout);
                searchTimeout = setTimeout(() => {
                    currentFilters.searchTerm = searchInput.value.trim();
                    currentPage = 1;
                    updateUrl();
                    filterAndSortProducts();
                }, 300);
            });
        }
        if (sortBySelect) {
            sortBySelect.addEventListener('change', () => {
                currentFilters.sortBy = sortBySelect.value;
                currentPage = 1;
                updateUrl();
                filterAndSortProducts();
            });
        }
        
        filterAndSortProducts();
    }

    function openSidebar() {
        sidebarFilters.classList.add('active');
        sidebarOverlay.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    function closeSidebar() {
        sidebarFilters.classList.remove('active');
        sidebarOverlay.classList.remove('active');
        document.body.style.overflow = '';
    }

    if (filterToggleBtn) {
        filterToggleBtn.addEventListener('click', openSidebar);
    }

    if (closeFilterBtn) {
        closeFilterBtn.addEventListener('click', closeSidebar);
    }

    if (sidebarOverlay) {
        sidebarOverlay.addEventListener('click', closeSidebar);
    }

    initializeFilters();
});

// Hàm format tiền tệ (cần thêm vào)
function formatCurrency(price) {
    return price.toLocaleString('vi-VN') + 'đ';
}