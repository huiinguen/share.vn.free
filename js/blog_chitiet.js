document.addEventListener('DOMContentLoaded', function() {
    const blogArticleContainer = document.getElementById('blogArticle');
    const urlParams = new URLSearchParams(window.location.search);
    const postId = parseInt(urlParams.get('id'));

    if (!blogArticleContainer) {
        console.error("Blog article container not found!");
        return;
    }

    if (isNaN(postId) || !blogPosts) {
        blogArticleContainer.innerHTML = '<p class="loading-text">ID bài viết không hợp lệ hoặc dữ liệu chưa sẵn sàng.</p>';
        return;
    }

    const post = blogPosts.find(p => p.id === postId);

    if (post) {
        displayBlogPost(post);
    } else {
        blogArticleContainer.innerHTML = '<p class="loading-text">Không tìm thấy bài viết này.</p>';
    }

    function displayBlogPost(postData) {
        // Xóa nội dung "Đang tải" và hiển thị bài viết
        blogArticleContainer.innerHTML = `
            <div class="blog-header">
                <h1 class="blog-title">${postData.title}</h1>
                <div class="blog-meta">
                    <span><i class="fas fa-calendar-alt"></i> ${postData.date}</span>
                    <span><i class="fas fa-tags"></i> ${postData.category}</span>
                </div>
            </div>
            <div class="blog-content">
                ${postData.content}
            </div>
        `;
    }
});