document.addEventListener('DOMContentLoaded', function() {
    const shareWebGroup = document.getElementById('shareWebGroup');

    if (shareWebGroup) {
        shareWebGroup.addEventListener('click', function() {
            const currentUrl = window.location.href;

            navigator.clipboard.writeText(currentUrl).then(() => {
                alert('Đường dẫn trang đã được sao chép vào clipboard!');
            }).catch(err => {
                console.error('Không thể sao chép: ', err);
                alert('Lỗi khi sao chép đường dẫn. Vui lòng thử lại.');
            });
        });
    }
});