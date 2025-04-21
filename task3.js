document.addEventListener("DOMContentLoaded", function () {
    const ctaButton = document.querySelector(".cta-btn");

    ctaButton.addEventListener("click", function () {
        alert("Thank you for signing up! We’ll get in touch soon.");
    });

    // Smooth scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute("href"));
            target.scrollIntoView({
                behavior: "smooth"
            });
        });
    });
});
