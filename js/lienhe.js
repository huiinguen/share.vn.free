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

    const copyMessage = document.getElementById('copy-message');

    // Mảng chứa thông tin của các số Zalo
    const zaloContacts = [
        {
            contactId: 'zalo-contact-1',
            numberId: 'zaloNumber-1',
            fullNumber: '0966030929',
            note: '(Admin)'
        },
        {
            contactId: 'zalo-contact-2',
            numberId: 'zaloNumber-2',
            fullNumber: '0961430850', // Thay bằng số điện thoại đầy đủ của bạn
            note: '(MHX)'
        }
    ];

    // Lặp qua mảng và thêm sự kiện cho từng số Zalo
    zaloContacts.forEach(zalo => {
        const zaloContactElement = document.getElementById(zalo.contactId);
        const zaloNumberElement = document.getElementById(zalo.numberId);

        if (zaloContactElement && zaloNumberElement) {
            zaloContactElement.addEventListener('click', function() {
                // Hiển thị số đầy đủ và ghi chú
                zaloNumberElement.textContent = zalo.fullNumber + ' ' + zalo.note;
                
                // Sao chép số điện thoại vào clipboard
                navigator.clipboard.writeText(zalo.fullNumber).then(() => {
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
});