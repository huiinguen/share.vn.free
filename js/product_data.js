var allProducts = [
    /*
    {
        id: 2,                // vị trí id
        name: '',             // tên sản phẩm
        price: 0,             // giá
        images_gallery: ['images/py.jpg', 'images/placeholder.png', 'images/placeholder.png'],// ảnh
        category: '',         // thư mục mẹ
        subCategory: '',      // thư mục con
        resourceLink: '' ,    // link
        description: '',      // mô tả
        functions: '',        // chức năng
        status: '',           // Các trạng thái khác
    },
    */
    {
        id: 1, // vị trí id
        name: 'Sourcode web bán hàng(php)',// tên sản phẩm
        price: 0, // giá
        images_gallery: ['images/py.jpg', 'images/placeholder.png', 'images/placeholder.png'],// ảnh
        category: 'Tài Nguyên', // thư mục mẹ
        subCategory: 'Lập trình', // thư mục con
        resourceLink: 'https://drive.google.com/file/d/1bjGwV6-9t8tHG64jWE_ddd3X_xvurkiW/view?fbclid=IwY2xjawMKzSVleHRuA2FlbQIxMABicmlkETEwbHFWSHpyRVloVXVHSXNTAR7MIoPcrzvNch_DPzf6LYmIbMl7B-EUmlO6J6KVv1QW-2FmZGlW8g0VSO86Dg_aem_qFU4bP_1FQBxSy28zYCy_w',
        description: 'Mô tả chi tiết về sourcode web bán hàng...', // mô tả
        functions: 'Quản lý sản phẩm, đơn hàng, khách hàng; giỏ hàng, thanh toán.', // chức năng
        status: 'Vẫn cập nhật', // Các trạng thái khác: 'Hết cập nhật', 'Đã ngừng', v.v.
    },
    {
        id: 2,
        name: 'Source Code TDS TIKTOK,FB',
        price: 0,
        images_gallery: ['images/flappybird_code.jpg'],
        category: 'Tài Nguyên',
        subCategory: 'Lập trình',
        description: '',
        resourceLink: 'https://drive.google.com/drive/u/0/folders/1-bHlCbRAO1XG_6c6vS4MQ6z60yi8IyNF',
    },
    {
        id: 3,
        name: 'Locket Gold config 1',
        price: 0,
        images_gallery: ['images/locket.jpg'],
        category: 'Tài Nguyên',
        subCategory: 'Mod(app,module...)',// Mục con mới
        description: '',
        resourceLink: 'https://raw.githubusercontent.com/hvbstar/coderhvb/main/Locket_Gold_HVB.sgmodule'
    },
    {
        id: 4,
        name: 'Locket Gold config 2',
        price: 0,
        images_gallery: ['images/locket.jpg'],
        category: 'Tài Nguyên',
        subCategory: 'Mod(app,module...)',// Mục con mới
        description: '',
        resourceLink: 'https://raw.githubusercontent.com/vuong2023/shad/main/modules/Locket_ohb.sgmodule'
    },
    {
        id: 5,
        name: 'Tải Shadowrocket',
        price: 0,
        images_gallery: ['images/shadow.jpg'],
        category: 'Tài Nguyên',
        subCategory: 'Mod(app,module...)', // Mục con mới
        description: '',
        resourceLink: 'https://idapple.csadata4g.me/'
    },
    {
        id: 6,
        name: 'Module YouTube Premium',
        price: 0,
        images_gallery: ['images/yt.jpg'],
        category: 'Tài Nguyên',
        subCategory: 'Mod(app,module...)',// Mục con mới
        description: '',
        resourceLink: 'https://raw.githubusercontent.com/quocchienn/YouTubePIP/refs/heads/YouTube%2B%2B/YouTubefix3.conf'
    },
    {
        id: 6,
        name: 'Link YouTube Premium',
        price: 0,
        images_gallery: ['images/yt.jpg'],
        category: 'Tài Nguyên',
        subCategory: 'Mod(app,module...)',// Mục con mới
        description: '',
        resourceLink: 'https://raw.githubusercontent.com/vuong2023/shad/main/modules/Locket_ohb.sgmodule'
    },
    {
        id: 8,
        name: 'Spotify Config',
        price: 0,
        images_gallery: ['images/spotify.jpg'],
        category: 'Tài Nguyên',
        subCategory: 'Mod(app,module...)',// Mục con mới
        description: '',
        resourceLink: 'https://raw.githubusercontent.com/quocchienn/1in1/refs/heads/main/Spotify.conf'
    },
    {
        id: 9,
        name: 'Spotify Module',
        price: 0,
        images_gallery: ['images/spotify.jpg'],
        category: 'Tài Nguyên',
        subCategory: 'Mod(app,module...)',// Mục con mới
        description: '',
        resourceLink: 'https://raw.githubusercontent.com/quocchienn/1in1/refs/heads/main/Spotify.module'
    },
    {
        id: 10,
        name: 'SoundCloud',
        price: 0,
        images_gallery: ['images/'],
        category: 'Tài Nguyên',
        subCategory: 'Mod(app,module...)', // Mục con mới
        description: '',
        resourceLink: 'https://raw.githubusercontent.com/vantuan380/vantuan/refs/heads/main/soundcloud.module'
    },
    {
        id: 11,
        name: 'Module Tổng Hợp',
        price: 0,
        images_gallery: ['images/shadow.jpg'],
        category: 'Tài Nguyên',
        subCategory: 'Mod(app,module...)',// Mục con mới
        description: '',
        resourceLink: 'https://raw.githubusercontent.com/quocchienn/Make/refs/heads/crack/ALL_Lucky_VP3.modules'
    },
    {
        id: 12,
        name: 'meitu module',
        price: 0,
        images_gallery: ['images/'],
        category: 'Tài Nguyên',
        subCategory: 'Mod(app,module...)',// Mục con mới
        description: '',
        resourceLink: 'https://raw.githubusercontent.com/vantuan380/vantuan/refs/heads/main/Meitu.module'
    },
    {
        id: 13,
        name: 'Lightroom 2',
        price: 0,
        images_gallery: ['images/'],
        category: 'Tài Nguyên',
        subCategory: 'Mod(app,module...)',// Mục con mới
        description: 'cre: whatshub',
        resourceLink: 'https://whatshub.top/module/lightroom.module'
    },
    {
        id: 14,
        name: 'Lightroom',
        price: 0,
        images_gallery: ['images/'],
        category: 'Tài Nguyên',
        subCategory: 'Mod(app,module...)',// Mục con mới
        description: '',
        resourceLink: 'https://raw.githubusercontent.com/vantuan380/phonton/refs/heads/main/lightroom.module'
    },
    {
        id: 15,
        name: 'Kho Ipa vn',
        price: 0,
        images_gallery: ['images/'],
        category: 'Tài Nguyên',
        subCategory: 'Mod(app,module...)',
        description: '',
        resourceLink: 'https://ios.codevn.net/'
    },
    {
        id: 16,
        name: 'sourcode html/css/js',
        price: 0,
        images_gallery: ['images/'],
        category: 'Tài Nguyên',
        subCategory: 'Lập trình',
        resourceLink: 'https://uiverse.io/buttons',
        description: '',
    },
    {
        id: 17,
        name: 'Icon cho html',
        price: 0,
        images_gallery: ['images/'],
        category: 'Tài Nguyên',
        subCategory: 'Lập trình',
        description: '',
        resourceLink: 'https://fontawesome.com/icons?o=r'
    },
    {
        id: 18,
        name: 'python(pdf)',
        price: 0,
        images_gallery: ['images/'],
        category: 'Tài Nguyên',
        subCategory: 'Lập trình',
        description: '',
        resourceLink: 'https://drive.google.com/drive/u/0/folders/1XxvRMSDA-KgfRL8oC-vLkbUpM8Tdcq3o'
    },
    {
        id: 19,
        name: 'Tổng hợp python,c,php,java,...',
        price: 0,
        images_gallery: ['images/'],
        category: 'Tài Nguyên',
        subCategory: 'Lập trình',
        description: '',
        resourceLink: 'https://github.com/orgs/TheAlgorithms/repositories?q=sort%3Astars&utm_source=j2team&utm_medium=url_shortener&utm_campaign=The-Algorithms'
    },
    {
        id: 20,
        name: 'kho phần mềm',
        price: 0,
        images_gallery: ['images/'],
        category: 'Tài Nguyên',
        subCategory: 'Mod(app,module...)', // Mục con mới
        description: '',
        resourceLink: 'https://www.hoanghaopc.com/trang-ch%E1%BB%A7'
    },
    {
        id: 21,
        name: 'KHÓA HỌC HUY QUẦN HOA',
        price: 0,
        images_gallery: ['images/'],
        category: 'Tài Nguyên',
        subCategory: 'Khóa học', // Mục con mới
        description: '',
        resourceLink: 'https://drive.google.com/drive/folders/1ZaS5kstFSNlxms07pQHL7d8q5ENY5W-G'
    },
    {
        id: 22,
        name: 'khóa reup tiktok',
        price: 0,
        images_gallery: ['images/'],
        category: 'Tài Nguyên',
        subCategory: 'Khóa học', // Mục con mới
        description: '',
        resourceLink: 'https://drive.google.com/drive/folders/1QLbk4yfZ5VLhuzYDhQAhmI2f36SwXQlh'
    },
    {
        id: 23,
        name: 'c/c++',
        price: 0,
        images_gallery: ['images/'],
        category: 'Tài Nguyên',
        subCategory: 'Lập trình',
        description: '',
        resourceLink: 'https://github.com/codetoanbug/Tai_Lieu_cpp?fbclid=IwY2xjawMXhipleHRuA2FlbQIxMABicmlkETF2dExOd0dleDNqOXpvN3NhAR7nufqhYr2PkFKl0XguRztCOJYDdGstgYvzCiUcm_ZSRAIy38WVpXlix7BLAg_aem_4nAlqQmR77lKAF6eDCsTjw'
    },
    {
        id: 24,
        name: 'câu hỏi javascript',
        price: 0,
        images_gallery: ['images/'],
        category: 'Tài Nguyên',
        subCategory: 'Lập trình',
        description: '',
        resourceLink: 'https://github.com/lydiahallie/javascript-questions/blob/master/vi-VI/README-vi.md?fbclid=IwY2xjawMXiZ5leHRuA2FlbQIxMABicmlkETF2dExOd0dleDNqOXpvN3NhAR43ecPpe7NEEKGa-hpapFJeNnBsNRrKFms35NTx87rJlcw9APWIwad9XFrkqg_aem_X6xueb_8bw_j7OLguSZtZA'
    },
    {
        id: 25,
        name: 'kho code thuật toán',
        price: 0,
        images_gallery: ['images/'],
        category: 'Tài Nguyên',
        subCategory: 'Lập trình',
        description: '',
        resourceLink: 'https://github.com/MAZHARMIK/Interview_DS_Algo?fbclid=IwY2xjawMXiiFleHRuA2FlbQIxMABicmlkETF2dExOd0dleDNqOXpvN3NhAR7nufqhYr2PkFKl0XguRztCOJYDdGstgYvzCiUcm_ZSRAIy38WVpXlix7BLAg_aem_4nAlqQmR77lKAF6eDCsTjw'
    },
    {
        id: 26,
        name: 'Mod locket gold ipa',
        price: 0,
        images_gallery: ['images/'],
        category: 'Tài Nguyên',
        subCategory: 'Mod(app,module...)', // Mục con mới
        description: 'làm theo video',
        resourceLink: 'https://www.tiktok.com/@hyper_astear.17/video/7541007421255257352'
    },
    {
        id: 27,
        name: 'Mod capcut ipa',
        price: 0,
        images_gallery: ['images/'],
        category: 'Tài Nguyên',
        subCategory: 'Mod(app,module...)', // Mục con mới
        description: 'làm theo video mod locket gold ipa để tải ksign và nhập ipa capcut vô ksign để dùng capcut',
        resourceLink: 'https://ipaomtk.com/capcut-ipa/'
    },
    {
        id: 30,
        name: 'module locket gold 1',
        price: 0,
        images_gallery: ['images/'],
        category: 'Tài Nguyên',
        subCategory: 'Mod(app,module...)',// Mục con mới
        description: '',
        resourceLink: 'https://raw.githubusercontent.com/NightmarketServer/Locket/refs/heads/main/Locket-V4.module'
    },
    {
        id: 31,
        name: 'Tool full tính năng cho IT',
        price: 0,
        images_gallery: ['images/'],
        category: 'Tài Nguyên',
        subCategory: 'Công cụ', // Mục con mới
        description: 'tổng hợp nhiều tính năng đỉnh cho người thích mày mò,IT,sáng tạo.',
        resourceLink: 'https://it-tools.tech/'
    },
    {
        id: 32,
        name: 'sourcode tool full tính năng IT',
        price: 0,
        images_gallery: ['images/'],
        category: 'Tài Nguyên',
        subCategory: 'Lập trình',
        description: '',
        resourceLink: 'https://github.com/CorentinTh/it-tools/tree/main'
    },
    {
        id: 33,
        name: 'Nhóm share sourcode đa ngôn ngữ',
        price: 0,
        images_gallery: ['images/'],
        category: 'Tài Nguyên',
        subCategory: 'Lập trình',
        description: '',
        resourceLink: 'https://www.messenger.com/channel/codetoanbug'
    },


    {
        id: 40,
        name: 'tut thuê tick xanh fb',
        price: 0,
        images_gallery: ['images/'],
        category: 'Tài Nguyên',
        subCategory: 'Khóa học',
        description: '',
        resourceLink: 'https://docs.google.com/document/d/13fcIsgVpZWXAPbdRYZR5yhCYJ8Zyw2rNOdNbZeIdkRs/edit?tab=t.0#heading=h.ezhl5ec3e9jy'
    },
    {
        id: 41,
        name: 'capcut pro mod androi',
        price: 0,
        images_gallery: ['images/locket.jpg'],
        category: 'Tài Nguyên',
        subCategory: 'Mod(app,module...)',// Mục con mới
        description: '',
        resourceLink: 'https://gocmod.com/capcut-pro-apk/'
    },
    {
        id: 42,
        name: 'khóa học capcut',
        price: 0,
        images_gallery: ['images/'],
        category: 'Tài Nguyên',
        subCategory: 'Khóa học',
        description: '',
        resourceLink: 'https://drive.google.com/drive/folders/1FNNweSUKpAYYx9BOPh9ZN0D3RfXnJy9Q'
    },
    {
        id: 43,
        name: 'tiktok beta',
        price: 0,
        images_gallery: ['images/'],
        category: 'Tài Nguyên',
        subCategory: 'Khóa học',
        description: '',
        resourceLink: 'https://drive.google.com/drive/folders/136c-IJJobaVaq_dmyE9o2svj4GX49F4v'
    },
    {
        id: 44,
        name: 'ngâm tick xanh',
        price: 0,
        images_gallery: ['images/'],
        category: 'Tài Nguyên',
        subCategory: 'Khóa học',
        description: '',
        resourceLink: 'https://docs.google.com/spreadsheets/d/1cM32swSy-hXu7ypQqqD7jmDiOMdJfW_JWFIJqGMHQKs/edit?gid=0#gid=0'
    },
    {
        id: 46,
        name: 'đăng ảnh/video locket',
        price: 0,
        images_gallery: ['images/locket.jpg'],
        category: 'Tài Nguyên',
        subCategory: 'Mod(app,module...)',// Mục con mới
        description: '',
        resourceLink: 'locket.top'
    },
    {
        id: 47,
        name: 'đăng ảnh/video/quay video locket',
        price: 0,
        images_gallery: ['images/locket.jpg'],
        category: 'Tài Nguyên',
        subCategory: 'Mod(app,module...)',// Mục con mới
        description: '',
        resourceLink: 'https://locket-dio.com/'
    },
    {
        id: 48,
        name: 'Khóa học shoppe',
        price: 0,
        images_gallery: ['images/'],
        category: 'Tài Nguyên',
        subCategory: 'Khóa học',
        description: '',
        resourceLink: 'https://drive.google.com/drive/folders/1lQpnZoyG7hI-V57xOtn9-qOGfL5yoLq4'
    },
    {
        id: 49,
        name: 'App mmo',
        price: 400000,
        images_gallery: ['images/1.png','images/3.png','images/4.png','images/5.png'],
        category: 'MUA BÁN',
        subCategory: 'App',
        description: 'tặng free 2 ngày,random 1 tháng(10 slot/ mỗi đợt)',
        functions: 'edit video(cắt,lặp,lọc,thêm viền,thay nhạc nền...) ',
        resourceLink: 'https://drive.google.com/drive/folders/1atEA3Un5yVtgeG02ObMQCUn1jZ1GGYz2?usp=sharing',
    },
    {
        id: 50,
        name: 'Ksign,Esign,...bypass',
        price: 0,
        images_gallery: ['images/'],
        category: 'Tài Nguyên',
        subCategory: 'Mod(app,module...)',
        description: '',
        status: '', // Các trạng thái
        functions: '',
        resourceLink: 'https://khoindvn.io.vn/'
    },
    {
        id: 51,
        name: 'Chạy quảng cáo tiktok',
        price: 0,
        images_gallery: ['images/'],
        category: 'Tài Nguyên',
        subCategory: 'Khóa học', // Mục con mới
        description: '',
        resourceLink: 'https://drive.google.com/drive/folders/1-d_zpGlu8ma4mnFXvXw_5m1_5VEso2t7',
    },
    {
        id: 52,
        name: 'tiktok shop ',
        price: 0,
        images_gallery: ['images/'],
        category: 'Tài Nguyên',
        subCategory: 'Khóa học', // Mục con mới
        description: '',
        resourceLink: 'https://drive.google.com/drive/folders/1kKu-Ln2CMlmm05TRSRd1-1B0DTNzuU0I',
    },
      {
        id: 53,
        name: 'Học java',
        price: 0,
        images_gallery: ['images/flappybird_code.jpg'],
        category: 'Tài Nguyên',
        subCategory: 'Lập trình',
        description: '',
        resourceLink: 'https://github.com/codetoanbug/Java-HIT-2019?fbclid=IwY2xjawMf-S9leHRuA2FlbQIxMABicmlkETFSWEFMY0pqTHVMeHVmRURnAR4wz8RubAqFwosvS2RjPnWTDN5wksIDYyQdEdxNsoVqYNgjMnetdLCskNohMA_aem_5PuTCslE3DpGBiNb1SQIpg',
    },
    {
        id: 54,
        name: 'sourcode mục "học java"',
        price: 0,
        images_gallery: ['images/flappybird_code.jpg'],
        category: 'Tài Nguyên',
        subCategory: 'Lập trình',
        description: '',
        resourceLink: 'https://github.com/codetoanbug/Java-PTIT?fbclid=IwY2xjawMf-XlleHRuA2FlbQIxMABicmlkETFSWEFMY0pqTHVMeHVmRURnAR4CSbJZbvlJmzVh2GRwp_w_2zuhmtoT35FViCmOwjP15emA8sdv8AYCpvdvQw_aem_eSbL5JLxmxGysWh9dZ8Vpg',
    },      
    {
        id: 55,
        name: 'học python',
        price: 0,
        images_gallery: ['images/flappybird_code.jpg'],
        category: 'Tài Nguyên',
        subCategory: 'Lập trình',
        description: '',
        resourceLink: 'https://github.com/codetoanbug/pytutor?fbclid=IwY2xjawMf-iZleHRuA2FlbQIxMABicmlkETFSWEFMY0pqTHVMeHVmRURnAR4Zlaq9aSsL6R55wcwIEXp0dNxyXaVO1tl94gCvBWXegx7v2b7DB1eb0TFwzA_aem_5NeJJ4WIk08ZmQ6_TQnu6Q',
    },
        {
        id: 56,
        name: 'photoshop 2021 mod',
        price: 0,
        images_gallery: ['images/locket.jpg'],
        category: 'Tài Nguyên',
        subCategory: 'Mod(app,module...)',// Mục con mới
        description: '',
        resourceLink: 'https://drive.google.com/drive/folders/143gIjNgJd096-w7XF8xDNBJtsbzuASZU'
    },
       {
        id: 57,
        name: 'KHÓA HỌC CHAT GPT',
        price: 0,
        images_gallery: ['images/'],
        category: 'Tài Nguyên',
        subCategory: 'Khóa học', // Mục con mới
        description: '',
        resourceLink: 'https://drive.google.com/drive/folders/17OmUO45MVdow04ahkvtad2c5Up-cjnMU'
    },
        {
        id: 58, // vị trí id
        name: 'Lập trình DOT NET(ytb)',// tên sản phẩm
        price: 0, // giá
        images_gallery: ['images/py.jpg', 'images/placeholder.png', 'images/placeholder.png'],// ảnh
        category: 'Tài Nguyên', // thư mục mẹ
        subCategory: 'Lập trình', // thư mục con
        resourceLink: 'https://www.youtube.com/playlist?list=PLRLJQuuRRcFnwlQxGeVSVv-z_5tFwAh0j',
    },
    {
        id: 59, // vị trí id
        name: 'Lập trình JAVA 2019',// tên sản phẩm
        price: 0, // giá
        images_gallery: ['images/py.jpg', 'images/placeholder.png', 'images/placeholder.png'],// ảnh
        category: 'Tài Nguyên', // thư mục mẹ
        subCategory: 'Lập trình', // thư mục con
        resourceLink: 'https://github.com/codetoanbug/Java-HIT-2019?fbclid=IwY2xjawMukXtleHRuA2FlbQIxMABicmlkETFwVXBnQ3VidzkycG9KeDRJAR4cPRfvHE9ENUUbDeYUxeC_s9OYKQa06yY9gv7rbdQ6rgo24H1nG1Ploa7nXQ_aem_AkO0-mANdDzsxzPLGOz2dQ',
    },
    {
        id: 60, // vị trí id
        name: 'Lập trình JAVA(file code)',// tên sản phẩm
        price: 0, // giá
        images_gallery: ['images/py.jpg', 'images/placeholder.png', 'images/placeholder.png'],// ảnh
        category: 'Tài Nguyên', // thư mục mẹ
        subCategory: 'Lập trình', // thư mục con
        resourceLink: 'https://github.com/codetoanbug/Java-PTIT?fbclid=IwY2xjawMukW1leHRuA2FlbQIxMABicmlkETFwVXBnQ3VidzkycG9KeDRJAR6etAqx7kKEsJpFeEDLrPP-HqKtrhkKTJutRfAeQiwQGbguoccXtTtKjy9rbQ_aem_YD-DJ8Ra0_K4XEoNtRc2YQ',
    },


];

const placeholderImage = 'images/placeholder.png';
allProducts.forEach(product => {
    if (!product.image) product.image = placeholderImage;
    if (!product.images_gallery || product.images_gallery.length === 0) {
        product.images_gallery = [product.image || placeholderImage];
    }
    product.images_gallery = product.images_gallery.map(img => img || placeholderImage);
});