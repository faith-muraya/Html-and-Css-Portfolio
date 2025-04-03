document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.getElementById('menuToggle');
    const closeBtn = document.getElementById('closeBtn');
    const navMenu = document.getElementById('navMenu');

    menuToggle.addEventListener('click', function() {
        navMenu.classList.add('active');
    });

    closeBtn.addEventListener('click', function() {
        navMenu.classList.remove('active');
    });

    // Close menu when clicking on a link
    document.querySelectorAll('.lists a').forEach(link => {
        link.addEventListener('click', function() {
            navMenu.classList.remove('active');
        });
    });
});