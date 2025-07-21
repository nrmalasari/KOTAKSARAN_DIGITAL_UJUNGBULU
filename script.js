// Update copyright year automatically
document.getElementById('current-year').textContent = new Date().getFullYear();

// Add dynamic notification messages
const notifications = [
    "✦ Pengaduan Anda akan diproses dalam waktu maksimal 3 hari kerja ✦",
    "✦ Gunakan fitur ini dengan bijak dan bertanggung jawab ✦",
    "✦ Setiap pengaduan akan mendapatkan nomor tracking untuk memantau perkembangan ✦",
    "✦ Layanan pengaduan digital buka 24 jam ✦",
    "✦ Sampaikan pengaduan Anda dengan jelas dan lengkap ✦"
];

const notificationElement = document.querySelector('.notification-content span');
let currentNotification = 0;

function rotateNotification() {
    notificationElement.style.opacity = 0;
    setTimeout(() => {
        currentNotification = (currentNotification + 1) % notifications.length;
        notificationElement.textContent = notifications[currentNotification];
        notificationElement.style.opacity = 1;
    }, 500);
}

// Start rotating notifications
setInterval(rotateNotification, 8000);

// Add smooth scroll to form when cards are clicked
document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('click', () => {
        document.querySelector('.form-container').scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Make notification bar pause on hover
const notificationBar = document.querySelector('.notification-bar');
notificationBar.addEventListener('mouseenter', () => {
    notificationBar.style.animationPlayState = 'paused';
});

notificationBar.addEventListener('mouseleave', () => {
    notificationBar.style.animationPlayState = 'running';
});

// Responsive iframe height adjustment
function adjustIframeHeight() {
    const iframe = document.querySelector('.responsive-iframe');
    const windowHeight = window.innerHeight;
    
    if (window.innerWidth <= 767) {
        iframe.style.minHeight = (windowHeight * 1.2) + 'px';
    } else if (window.innerWidth <= 991) {
        iframe.style.minHeight = (windowHeight * 0.9) + 'px';
    } else {
        iframe.style.minHeight = '800px';
    }
}

// Initial adjustment
adjustIframeHeight();

// Adjust on window resize
window.addEventListener('resize', adjustIframeHeight);

// Add click effect to FAB button
const fabButton = document.querySelector('.fab');
fabButton.addEventListener('click', () => {
    fabButton.style.transform = 'scale(0.9)';
    setTimeout(() => {
        fabButton.style.transform = 'scale(1)';
    }, 300);
});