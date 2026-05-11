const themeToggle = document.getElementById("theme-toggle");

// Load saved theme
if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("darkmode");
}

themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("darkmode");

    if (document.body.classList.contains("darkmode")) {
        localStorage.setItem("theme", "dark");
    } else {
        localStorage.setItem("theme", "light");
    }
});