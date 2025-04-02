document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.getElementById("menu-toggle");
    const navMenu = document.getElementById("nav-menu");
    const closeBtn = document.getElementById("close-btn");

    // Open menu
    menuToggle.addEventListener("click", function () {
        navMenu.classList.add("open");
    });

    // Close menu
    closeBtn.addEventListener("click", function () {
        navMenu.classList.remove("open");
    });
});
