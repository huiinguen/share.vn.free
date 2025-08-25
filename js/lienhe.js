document.addEventListener('DOMContentLoaded', function() {
    const shareWebLink = document.getElementById('shareWebLink');

    if (shareWebLink) {
        shareWebLink.addEventListener('click', function() {
            const currentUrl = window.location.href;

            navigator.clipboard.writeText(currentUrl).then(() => {
                alert('Đường dẫn trang đã được sao chép vào clipboard!');
            }).catch(err => {
                console.error('Không thể sao chép: ', err);
                alert('Lỗi khi sao chép đường dẫn. Vui lòng thử lại.');
            });
        });
    }

    const zaloContact = document.getElementById('zalo-contact');
    const zaloNumber = document.getElementById('zaloNumber');
    const copyMessage = document.getElementById('copy-message');
    const fullZaloNumber = '0966030929'; // Số điện thoại đầy đủ

    if (zaloContact) {
        zaloContact.addEventListener('click', function() {
            // Hiển thị số điện thoại đầy đủ
            zaloNumber.textContent = fullZaloNumber;

            // Sao chép số điện thoại vào clipboard
            navigator.clipboard.writeText(fullZaloNumber).then(() => {
                // Hiển thị thông báo và tự đóng sau 1.2s
                copyMessage.classList.add('show');
                setTimeout(() => {
                    copyMessage.classList.remove('show');
                }, 1200);
            }).catch(err => {
                console.error('Không thể sao chép số điện thoại: ', err);
                alert('Lỗi khi sao chép số điện thoại. Vui lòng thử lại.');
            });
        });
    }
});
