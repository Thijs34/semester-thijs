const header = document.querySelector(".header");

function toggleHeaderBackground() {
    if (window.scrollY > 5) { // Adjust the threshold as needed
        header.classList.add("scroll");
    } else {
        header.classList.remove("scroll");
    }
}

window.addEventListener("scroll", toggleHeaderBackground);