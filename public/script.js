// ==========================
// Loader Animation
// ==========================
window.addEventListener("load", () => {
    const loader = document.getElementById("loader");
    const mainContent = document.getElementById("main-content");

    setTimeout(() => {
        loader.style.opacity = "0";
        loader.style.transition = "opacity 0.5s";
        setTimeout(() => {
            loader.style.display = "none";
            mainContent.classList.remove("hidden");
        }, 500);
    }, 2500); // Loader visible for 2.5 seconds
});

// ==========================
// Hamburger Menu Toggle
// ==========================
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector("nav ul");

if (hamburger) {
    hamburger.addEventListener("click", () => {
        navMenu.classList.toggle("show");
    });
}
