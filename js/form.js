document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector("form");
    form.addEventListener("submit", function(event) {
        event.preventDefault();
        alert("Your request has been sent. We'll get back to you soon!");
        form.reset();
    });

    const inputs = document.querySelectorAll("input, select, textarea");
    inputs.forEach(input => {
        input.addEventListener("focus", () => {
            input.style.backgroundColor = "#444444";
        });
        input.addEventListener("blur", () => {
            input.style.backgroundColor = "#333333";
        });
    });
});
