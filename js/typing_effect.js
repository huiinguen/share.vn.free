document.addEventListener('DOMContentLoaded', function() {
    const typedTextElement = document.getElementById('typedText');
    const cursorElement = document.getElementById('cursor');

    // Mảng chứa các dòng văn bản bạn muốn gõ
const textLines = [
  "✨ Chào mừng bạn đến với ChiaSe.VN ✨",
  "",
  "Tại đây, chúng tôi mong muốn mang đến cho bạn một không gian nơi tri thức được kết nối và lan tỏa.",
  "",
  "Khi ghé thăm ChiaSe.VN, bạn sẽ tìm thấy:",
  "- 🌐 Các source code và template website đa dạng.",
  "- 📚 Tài liệu học tập, kiến thức hữu ích được chia sẻ từ cộng đồng.",
  "- 🛒 Những sản phẩm thanh lý chất lượng, giá trị cho học tập và công việc.",
  "",
  "🚀 Hãy bắt đầu hành trình khám phá ngay hôm nay cùng chúng tôi.",
  "👉 Nhấn 'Vào trang chính' để bắt đầu trải nghiệm!"
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