document.addEventListener('DOMContentLoaded', function() {
    const typedTextElement = document.getElementById('typedText');
    const cursorElement = document.getElementById('cursor');

    // Mảng chứa các dòng văn bản bạn muốn gõ
const textLines = [
        "// Đang khởi động hệ thống...",
        "// Chào mừng bạn đến với ChiaSe.VN",
        "const platform = {",
        "  name: 'ChiaSẻ.VN',",
        "  purpose: 'Kết nối và chia sẻ tri thức',",
        "  slogan: 'Nơi tri thức hội tụ và lan tỏa.'",
        "};",
        "", // Dòng trống để dễ đọc hơn
        "console.log('Chào mừng bạn đến với thế giới của những ý tưởng và tài nguyên.');",
        "console.log('Tại đây, chúng tôi mang đến cho bạn:');",
        "console.log('- Source code, template web đa dạng.');",
        "console.log('- Tài liệu học tập và chia sẻ kiến thức.');",
        "console.log('- Các sản phẩm thanh lý hữu ích.');",
        "",
        "// Hãy bắt đầu hành trình khám phá ngay bây giờ!",
        "// Gõ 'go()' để vào trang chính...",
        "",
        "function go() {",
        "  window.location.href = 'sanpham.html';",
        "}",
        "// Khám phá và đóng góp ngay hôm nay!"
    ];
    
    let lineIndex = 0;
    let charIndex = 0;
    const typingSpeed = 5; // Tốc độ gõ đã được làm NHANH HƠN (milliseconds)
    const lineBreakDelay = 90; // Thời gian chờ trước khi xuống dòng (milliseconds)

    function typeWriter() {
        if (lineIndex < textLines.length) {
            const currentLine = textLines[lineIndex];

            if (charIndex < currentLine.length) {
                typedTextElement.textContent += currentLine.charAt(charIndex);
                charIndex++;
                setTimeout(typeWriter, typingSpeed);
            } else {
                typedTextElement.textContent += '\n';
                lineIndex++;
                charIndex = 0;
                setTimeout(typeWriter, lineBreakDelay);
            }
        } else {
            if (cursorElement) {
                cursorElement.style.animation = 'blink 1s step-end infinite';
            }
        }
    }

    if (typedTextElement) {
        typedTextElement.textContent = '';
        typeWriter();
    }
});