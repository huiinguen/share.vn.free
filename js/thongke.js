document.addEventListener('DOMContentLoaded', function() {
    const { initializeApp } = firebase;
    const { getDatabase, ref, runTransaction, get } = firebase.database;
    
    // Cấu hình Firebase của bạn
    const firebaseConfig = {
        apiKey: "AIzaSyBqW9J9fTqrVdVs7oBy9NnfvWR5CHQl3Fw",
        authDomain: "webprofire.firebaseapp.com",
        projectId: "webprofire",
        storageBucket: "webprofire.firebasestorage.app",
        messagingSenderId: "192580673494",
        appId: "1:192580673494:web:f2dfd2726172a98b088e77"
    };

    // Khởi tạo Firebase
    const app = initializeApp(firebaseConfig);
    const database = getDatabase(app);
    const totalVisitsRef = ref(database, 'visits/total');
    const monthlyVisitsRef = ref(database, 'visits/monthly');

    function updateCounters() {
        const currentDate = new Date();
        const currentMonth = `${currentDate.getFullYear()}-${(currentDate.getMonth() + 1).toString().padStart(2, '0')}`;
        
        // 1. Cập nhật Tổng lượt truy cập
        runTransaction(totalVisitsRef, (currentData) => {
            return (currentData || 0) + 1;
        }).then(() => {
            // Lấy và hiển thị tổng lượt truy cập
            get(totalVisitsRef).then((snapshot) => {
                const totalCount = snapshot.val() || 0;
                document.getElementById('totalVisits').textContent = totalCount.toLocaleString();
            });
        });

        // 2. Cập nhật lượt truy cập trong tháng
        const monthlyRef = ref(database, `visits/monthly/${currentMonth}`);
        runTransaction(monthlyRef, (currentData) => {
            return (currentData || 0) + 1;
        }).then(() => {
            // Lấy và hiển thị lượt truy cập trong tháng
            get(monthlyRef).then((snapshot) => {
                const monthlyCount = snapshot.val() || 0;
                document.getElementById('monthlyVisits').textContent = monthlyCount.toLocaleString();
            });
        });
    }

    // Cập nhật lượt truy cập khi trang tải xong
    updateCounters();
});