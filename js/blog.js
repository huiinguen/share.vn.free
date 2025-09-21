document.addEventListener('DOMContentLoaded', function() {
    const blogPostGrid = document.getElementById('blogPostGrid');
    const blogCategoriesList = document.getElementById('blogCategories');
    const blogSearchInput = document.getElementById('blogSearchInput');
    const blogPagination = document.getElementById('blogPagination');
    const postCountElement = document.getElementById('postCount');

    const postsPerPage = 6;
    let currentPage = 1;
    let currentCategory = 'all';
    let searchTerm = '';
    let filteredPosts = [];

    // Check if blogPosts data is available
    if (typeof blogPosts === 'undefined' || blogPosts.length === 0) {
        if (blogPostGrid) {
            blogPostGrid.innerHTML = "<p>Không có bài viết nào để hiển thị.</p>";
        }
        return;
    }

    // --- Core Logic for Filtering and Rendering ---
    function filterAndRenderPosts() {
        const lowerSearchTerm = searchTerm.toLowerCase();

        filteredPosts = blogPosts.filter(post => {
            const matchesCategory = (currentCategory === 'all' || post.category === currentCategory);
            const matchesSearch = post.title.toLowerCase().includes(lowerSearchTerm) ||
                                  post.summary.toLowerCase().includes(lowerSearchTerm);
            return matchesCategory && matchesSearch;
        });

        const totalPages = Math.ceil(filteredPosts.length / postsPerPage);
        const startIndex = (currentPage - 1) * postsPerPage;
        const paginatedPosts = filteredPosts.slice(startIndex, startIndex + postsPerPage);

        renderPosts(paginatedPosts);
        renderPagination(totalPages);
        renderPostCount(filteredPosts.length);
    }

    // --- Render Functions ---
    function renderPostCount(count) {
        if (postCountElement) {
            postCountElement.textContent = `Số bài viết: ${count}`;
        }
    }

    function renderPosts(postsToRender) {
        blogPostGrid.innerHTML = ''; // Clear previous posts
        if (postsToRender.length === 0) {
            blogPostGrid.innerHTML = "<p>Không tìm thấy bài viết nào.</p>";
            return;
        }

        postsToRender.forEach(post => {
            const postCard = document.createElement('a');
            postCard.href = `blog_chitiet.html?id=${post.id}`; // Tạm thời dùng anchor link, có thể nâng cấp thành trang chi tiết sau
            postCard.classList.add('post-card');
            postCard.innerHTML = `
                <img src="${post.image}" alt="${post.title}" class="post-image">
                <div class="post-content">
                    <div class="post-meta">
                        <span><i class="fas fa-calendar-alt"></i> ${post.date}</span>
                        <span><i class="fas fa-tags"></i> ${post.category}</span>
                    </div>
                    <h3>${post.title}</h3>
                    <p>${post.summary}</p>
                    <span class="post-read-more">Đọc thêm <i class="fas fa-arrow-right"></i></span>
                </div>
            `;
            blogPostGrid.appendChild(postCard);
        });
    }

    function renderPagination(totalPages) {
        blogPagination.innerHTML = '';
        if (totalPages <= 1) return;

        for (let i = 1; i <= totalPages; i++) {
            const pageBtn = document.createElement('button');
            pageBtn.textContent = i;
            pageBtn.classList.add('pagination-btn');
            if (i === currentPage) {
                pageBtn.classList.add('active');
            }
            pageBtn.addEventListener('click', () => {
                currentPage = i;
                filterAndRenderPosts();
                window.scrollTo({ top: 0, behavior: 'smooth' });
            });
            blogPagination.appendChild(pageBtn);
        }
    }

    function renderCategories() {
        const uniqueCategories = ['all', ...new Set(blogPosts.map(post => post.category))];
        blogCategoriesList.innerHTML = '';
        uniqueCategories.forEach(cat => {
            const listItem = document.createElement('li');
            const link = document.createElement('a');
            link.href = '#';
            link.textContent = cat === 'all' ? 'Tất cả' : cat;
            link.dataset.category = cat;
            if (cat === currentCategory) {
                link.classList.add('active');
            }
            link.addEventListener('click', (e) => {
                e.preventDefault();
                currentCategory = cat;
                currentPage = 1;
                filterAndRenderPosts();
                document.querySelectorAll('#blogCategories a').forEach(a => a.classList.remove('active'));
                link.classList.add('active');
            });
            listItem.appendChild(link);
            blogCategoriesList.appendChild(listItem);
        });
    }

    // --- Event Listeners ---
    let searchTimeout;
    if (blogSearchInput) {
        blogSearchInput.addEventListener('input', () => {
            clearTimeout(searchTimeout);
            searchTimeout = setTimeout(() => {
                searchTerm = blogSearchInput.value.trim();
                currentPage = 1;
                filterAndRenderPosts();
            }, 300);
        });
    }

    // --- Initial Load ---
    renderCategories();
    filterAndRenderPosts();
// --- Logic cho Responsive Sidebar ---
    const filterToggleBtn = document.getElementById('filterToggle');
    const sidebarFilters = document.getElementById('sidebarFilters');
    const closeFilterBtn = document.getElementById('closeFilterBtn');
    const sidebarOverlay = document.getElementById('sidebarOverlay');

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
});