var allProducts = [
    {
        id: 1,
        name: 'App python tổng hợp',
        price: 0,
        images_gallery: ['images/py.jpg', 'images/placeholder.png', 'images/placeholder.png'],
        category: 'Share Tài Nguyên',
        subCategory: 'Lập trình',
        description: 'Chức năng: (1) spam chỉ chuột vào đích  (2) spam dạng ctrl+v  (3) tạo list mail ',
    },
    {
        id: 2,
        name: 'Sourcode web bán hàng(php)',
        price: 0,
        images_gallery: ['images/py.jpg', 'images/placeholder.png', 'images/placeholder.png'],
        category: 'Share Tài Nguyên',
        subCategory: 'Lập trình',
        resourceLink: 'https://drive.google.com/file/d/1bjGwV6-9t8tHG64jWE_ddd3X_xvurkiW/view?fbclid=IwY2xjawMKzSVleHRuA2FlbQIxMABicmlkETEwbHFWSHpyRVloVXVHSXNTAR7MIoPcrzvNch_DPzf6LYmIbMl7B-EUmlO6J6KVv1QW-2FmZGlW8g0VSO86Dg_aem_qFU4bP_1FQBxSy28zYCy_w',
        description: '',
    },
    {
        id: 3,
        name: 'Source Code TDS TIKTOK',
        price: 0,
        images_gallery: ['images/flappybird_code.jpg'],
        category: 'Share Tài Nguyên',
        subCategory: 'Lập trình',
        description: '',
        resourceLink: 'https://drive.google.com/drive/u/0/folders/1-bHlCbRAO1XG_6c6vS4MQ6z60yi8IyNF',
    },
    {
        id: 4,
        name: 'Source Code TDS fb',
        price: 0,
        images_gallery: ['images/locket.jpg'],
        category: 'Share Tài Nguyên',
        subCategory: 'Lập trình',
        resourceLink: 'https://drive.google.com/drive/u/0/folders/1-bHlCbRAO1XG_6c6vS4MQ6z60yi8IyNF',
    },
    {
        id: 5,
        name: 'app c++',
        price: 0,
        images_gallery: ['images/locket.jpg'],
        category: 'Share Tài Nguyên',
        subCategory: 'Lập trình',
    },
    {
        id: 6,
        name: 'Locket Gold config 1',
        price: 0,
        images_gallery: ['images/locket.jpg'],
        category: 'Share Tài Nguyên',
        subCategory: 'Mod(app,module...)',// Mục con mới
        description: '',
        resourceLink: 'https://raw.githubusercontent.com/hvbstar/coderhvb/main/Locket_Gold_HVB.sgmodule'
    },
    {
        id: 7,
        name: 'Locket Gold config 2',
        price: 0,
        images_gallery: ['images/locket.jpg'],
        category: 'Share Tài Nguyên',
        subCategory: 'Mod(app,module...)',// Mục con mới
        description: '',
        resourceLink: 'https://raw.githubusercontent.com/vuong2023/shad/main/modules/Locket_ohb.sgmodule'
    },
    {
        id: 8,
        name: 'Tải Shadowrocket',
        price: 0,
        images_gallery: ['images/shadow.jpg'],
        category: 'Share Tài Nguyên',
        subCategory: 'Mod(app,module...)', // Mục con mới
        description: '',
        resourceLink: 'https://idapple.csadata4g.me/'
    },
    {
        id: 9,
        name: 'Module YouTube Premium',
        price: 0,
        images_gallery: ['images/yt.jpg'],
        category: 'Share Tài Nguyên',
        subCategory: 'Mod(app,module...)',// Mục con mới
        description: '',
        resourceLink: 'https://raw.githubusercontent.com/quocchienn/YouTubePIP/refs/heads/YouTube%2B%2B/YouTubefix3.conf'
    },
    {
        id: 10,
        name: 'Link YouTube Premium',
        price: 0,
        images_gallery: ['images/yt.jpg'],
        category: 'Share Tài Nguyên',
        subCategory: 'Mod(app,module...)',// Mục con mới
        description: '',
        resourceLink: 'https://raw.githubusercontent.com/vuong2023/shad/main/modules/Locket_ohb.sgmodule'
    },
    {
        id: 11,
        name: 'Spotify Config',
        price: 0,
        images_gallery: ['images/spotify.jpg'],
        category: 'Share Tài Nguyên',
        subCategory: 'Mod(app,module...)',// Mục con mới
        description: '',
        resourceLink: 'https://raw.githubusercontent.com/quocchienn/1in1/refs/heads/main/Spotify.conf'
    },
    {
        id: 12,
        name: 'Spotify Module',
        price: 0,
        images_gallery: ['images/spotify.jpg'],
        category: 'Share Tài Nguyên',
        subCategory: 'Mod(app,module...)',// Mục con mới
        description: '',
        resourceLink: 'https://raw.githubusercontent.com/quocchienn/1in1/refs/heads/main/Spotify.module'
    },
    {
        id: 13,
        name: 'SoundCloud',
        price: 0,
        images_gallery: ['images/'],
        category: 'Share Tài Nguyên',
        subCategory: 'Mod(app,module...)', // Mục con mới
        description: '',
        resourceLink: 'https://raw.githubusercontent.com/vantuan380/vantuan/refs/heads/main/soundcloud.module'
    },
    {
        id: 14,
        name: 'Module Tổng Hợp',
        price: 0,
        images_gallery: ['images/shadow.jpg'],
        category: 'Share Tài Nguyên',
        subCategory: 'Mod(app,module...)',// Mục con mới
        description: '',
        resourceLink: 'https://raw.githubusercontent.com/quocchienn/Make/refs/heads/crack/ALL_Lucky_VP3.modules'
    },
    {
        id: 15,
        name: 'meitu module',
        price: 0,
        images_gallery: ['images/'],
        category: 'Share Tài Nguyên',
        subCategory: 'Mod(app,module...)',// Mục con mới
        description: '',
        resourceLink: 'https://raw.githubusercontent.com/vantuan380/vantuan/refs/heads/main/Meitu.module'
    },
    {
        id: 16,
        name: 'Lightroom 2',
        price: 0,
        images_gallery: ['images/'],
        category: 'Share Tài Nguyên',
        subCategory: 'Mod(app,module...)',// Mục con mới
        description: 'cre: whatshub',
        resourceLink: 'https://whatshub.top/module/lightroom.module'
    },
    {
        id: 17,
        name: 'Lightroom',
        price: 0,
        images_gallery: ['images/'],
        category: 'Share Tài Nguyên',
        subCategory: 'Mod(app,module...)',// Mục con mới
        description: '',
        resourceLink: 'https://raw.githubusercontent.com/vantuan380/phonton/refs/heads/main/lightroom.module'
    },
    {
        id: 18,
        name: 'follow tiktok',
        price: 10000,
        images_gallery: ['images/'],
        category: 'MXH',
        subCategory: 'Tiktok',
        description: 'liên hệ sdt(MXH) để biết giá thật',
    },
    {
        id: 19,
        name: 'tim tiktok',
        price: 10000,
        images_gallery: ['images/'],
        category: 'MXH',
        subCategory: 'Tiktok',
        description: 'liên hệ sdt(MXH) để biết giá thật',
    },
    {
        id: 20,
        name: 'lưu lại tiktok',
        price: 10000,
        images_gallery: ['images/'],
        category: 'MXH',
        subCategory: 'Tiktok',
        description: 'liên hệ sdt(MXH) để biết giá thật',
    },
    {
        id: 21,
        name: 'đăng lại tiktok',
        price: 10000,
        images_gallery: ['images/'],
        category: 'MXH',
        subCategory: 'Tiktok',
        description: 'liên hệ sdt(MXH) để biết giá thật',
    },
    {
        id: 22,
        name: 'Tim',
        price: 50000,
        images_gallery: ['images/'],
        category: 'MXH',
        subCategory: 'Instagram',
        description: 'liên hệ sdt(MXH) để biết giá thật',
    },
    {
        id: 23,
        name: 'like Facebook',
        price: 15000,
        images_gallery: ['images/'],
        category: 'MXH',
        description: 'liên hệ sdt(MXH) để biết giá thật',
    },
    {
        id: 24,
        name: 'Theo dõi ',
        price: 50000,
        images_gallery: ['images/'],
        category: 'MXH',
        subCategory: 'Instagram',
        description: 'liên hệ sdt(MXH) để biết giá thật',
    },
    {
        id: 25,
        name: 'Theo dõi',
        price: 50000,
        images_gallery: ['images/'],
        category: 'MXH',
        subCategory: 'Youtube',
        description: 'liên hệ sdt(MXH) để biết giá thật',
    },
    {
        id: 26,
        name: 'Kho Ipa vn',
        price: 0,
        images_gallery: ['images/'],
        category: 'Share Tài Nguyên',
        subCategory: 'Mod(app,module...)',
        description: '',
        resourceLink: 'https://ios.codevn.net/'
    },
    {
        id: 27,
        name: 'sourcode html/css/js',
        price: 0,
        images_gallery: ['images/'],
        category: 'Share Tài Nguyên',
        subCategory: 'Lập trình',
        resourceLink: 'https://uiverse.io/buttons',
        description: '',
    },
    {
        id: 28,
        name: 'Icon cho html',
        price: 0,
        images_gallery: ['images/'],
        category: 'Share Tài Nguyên',
        subCategory: 'Lập trình',
        description: '',
        resourceLink: 'https://fontawesome.com/icons?o=r'
    },
    {
        id: 29,
        name: 'python(pdf)',
        price: 0,
        images_gallery: ['images/'],
        category: 'Share Tài Nguyên',
        subCategory: 'Lập trình',
        description: '',
        resourceLink: 'https://drive.google.com/drive/u/0/folders/1XxvRMSDA-KgfRL8oC-vLkbUpM8Tdcq3o'
    },
    {
        id: 30,
        name: 'Tổng hợp python,c,php,java,...',
        price: 0,
        images_gallery: ['images/'],
        category: 'Share Tài Nguyên',
        subCategory: 'Lập trình',
        description: '',
        resourceLink: 'https://github.com/orgs/TheAlgorithms/repositories?q=sort%3Astars&utm_source=j2team&utm_medium=url_shortener&utm_campaign=The-Algorithms'
    },
    {
        id: 31,
        name: 'kho phần mềm',
        price: 0,
        images_gallery: ['images/'],
        category: 'Share Tài Nguyên',
        subCategory: 'Mod(app,module...)', // Mục con mới
        description: '',
        resourceLink: 'https://www.hoanghaopc.com/trang-ch%E1%BB%A7'
    },
    {
        id: 32,
        name: 'KHÓA HỌC HUY QUẦN HOA',
        price: 0,
        images_gallery: ['images/'],
        category: 'Share Tài Nguyên',
        subCategory: 'Photoshop & video', // Mục con mới
        description: '',
        resourceLink: 'https://drive.google.com/drive/folders/1ZaS5kstFSNlxms07pQHL7d8q5ENY5W-G'
    },
    {
        id: 33,
        name: 'khóa reup tiktok',
        price: 0,
        images_gallery: ['images/'],
        category: 'Share Tài Nguyên',
        subCategory: 'MXH', // Mục con mới
        description: '',
        resourceLink: 'https://drive.google.com/drive/folders/1QLbk4yfZ5VLhuzYDhQAhmI2f36SwXQlh'
    },
    {
        id: 34,
        name: 'c/c++',
        price: 0,
        images_gallery: ['images/'],
        category: 'Share Tài Nguyên',
        subCategory: 'Lập trình',
        description: '',
        resourceLink: 'https://github.com/codetoanbug/Tai_Lieu_cpp?fbclid=IwY2xjawMXhipleHRuA2FlbQIxMABicmlkETF2dExOd0dleDNqOXpvN3NhAR7nufqhYr2PkFKl0XguRztCOJYDdGstgYvzCiUcm_ZSRAIy38WVpXlix7BLAg_aem_4nAlqQmR77lKAF6eDCsTjw'
    },
    {
        id: 35,
        name: 'câu hỏi javascript',
        price: 0,
        images_gallery: ['images/'],
        category: 'Share Tài Nguyên',
        subCategory: 'Lập trình',
        description: '',
        resourceLink: 'https://github.com/lydiahallie/javascript-questions/blob/master/vi-VI/README-vi.md?fbclid=IwY2xjawMXiZ5leHRuA2FlbQIxMABicmlkETF2dExOd0dleDNqOXpvN3NhAR43ecPpe7NEEKGa-hpapFJeNnBsNRrKFms35NTx87rJlcw9APWIwad9XFrkqg_aem_X6xueb_8bw_j7OLguSZtZA'
    },
    {
        id: 36,
        name: 'kho code thuật toán',
        price: 0,
        images_gallery: ['images/'],
        category: 'Share Tài Nguyên',
        subCategory: 'Lập trình',
        description: '',
        resourceLink: 'https://github.com/MAZHARMIK/Interview_DS_Algo?fbclid=IwY2xjawMXiiFleHRuA2FlbQIxMABicmlkETF2dExOd0dleDNqOXpvN3NhAR7nufqhYr2PkFKl0XguRztCOJYDdGstgYvzCiUcm_ZSRAIy38WVpXlix7BLAg_aem_4nAlqQmR77lKAF6eDCsTjw'
    },
    {
        id: 37,
        name: 'Mod locket gold ipa',
        price: 0,
        images_gallery: ['images/'],
        category: 'Share Tài Nguyên',
        subCategory: 'Mod(app,module...)', // Mục con mới
        description: 'làm theo video',
        resourceLink: 'https://www.tiktok.com/@hyper_astear.17/video/7541007421255257352'
    },
    {
        id: 38,
        name: 'Mod capcut ipa',
        price: 0,
        images_gallery: ['images/'],
        category: 'Share Tài Nguyên',
        subCategory: 'Mod(app,module...)', // Mục con mới
        description: 'làm theo video mod locket gold ipa để tải ksign và nhập ipa capcut vô ksign để dùng capcut',
        resourceLink: 'https://ipaomtk.com/capcut-ipa/'
    },
    {
        id: 39,
        name: 'module locket gold 1',
        price: 0,
        images_gallery: ['images/'],
        category: 'Share Tài Nguyên',
        subCategory: 'Mod(app,module...)',// Mục con mới
        description: '',
        resourceLink: 'https://raw.githubusercontent.com/NightmarketServer/Locket/refs/heads/main/Locket-V4.module'
    },
    {
        id: 40,
        name: 'Tool full tính năng cho IT',
        price: 0,
        images_gallery: ['images/'],
        category: 'Share Tài Nguyên',
        subCategory: 'Công cụ', // Mục con mới
        description: 'tổng hợp nhiều tính năng đỉnh cho người thích mày mò,IT,sáng tạo.',
        resourceLink: 'https://it-tools.tech/'
    },
    {
        id: 41,
        name: 'sourcode tool full tính năng IT',
        price: 0,
        images_gallery: ['images/'],
        category: 'Share Tài Nguyên',
        subCategory: 'Lập trình',
        description: '',
        resourceLink: 'https://github.com/CorentinTh/it-tools/tree/main'
    },
    {
        id: 42,
        name: 'Nhóm share sourcode đa ngôn ngữ',
        price: 0,
        images_gallery: ['images/'],
        category: 'Share Tài Nguyên',
        subCategory: 'Lập trình',
        description: '',
        resourceLink: 'https://www.messenger.com/channel/codetoanbug'
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
