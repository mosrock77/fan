// ฟังก์ชั่นที่จะแสดงข้อความ Popup และเอฟเฟ็กต์พลุ
function showMessage() {
    const message = document.getElementById('hiddenMessage');
    const fireworks = document.getElementById('fireworks');
    
    message.style.display = 'block'; // แสดงข้อความ
    
    // เพิ่มพลุทั่วหน้าจอ
    createFireworks();

    // หลังจาก 3 วินาทีให้ซ่อนข้อความ
    setTimeout(function() {
        message.style.display = 'none'; // ซ่อนข้อความ
        fireworks.innerHTML = ''; // ลบพลุ
    }, 3000); // 3000ms = 3 วินาที
}

// ฟังก์ชั่นสร้างพลุที่กระจายทั่วหน้าจอ
function createFireworks() {
    const fireworks = document.getElementById('fireworks');
    
    // สร้างพลุ 30 ดวงแบบสุ่มตำแหน่ง
    for (let i = 0; i < 30; i++) {
        const firework = document.createElement('div');
        firework.classList.add('firework');
        
        // กำหนดตำแหน่งสุ่มสำหรับพลุ
        const x = Math.random() * window.innerWidth;
        const y = Math.random() * window.innerHeight;
        firework.style.left = `${x}px`;
        firework.style.top = `${y}px`;
        
        // เพิ่มพลุเข้าไปในหน้าจอ
        fireworks.appendChild(firework);
    }
}

// เมื่อกดปุ่ม "ลองกดดู"
document.getElementById('showMessageBtn').addEventListener('click', showMessage);
