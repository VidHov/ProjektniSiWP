document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");

    if (form) {
        form.addEventListener("submit", function (e) {
            e.preventDefault();
            alert("Hvala na poruci! Javit ćemo vam se uskoro.");
            form.reset();
        });
    }