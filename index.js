window.addEventListener("scroll", function () {
    if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {
        document.getElementById("navbar").style.boxShadow = "0 8px 6px -6px #000";
    } else {
        document.getElementById("navbar").style.boxShadow = "none";
    }
});