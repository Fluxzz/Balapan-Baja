document.addEventListener("DOMContentLoaded", function () {
    const popupContainer = document.querySelector(".edit-container");
    const addButton = document.querySelector(".edit-btn");
    const closeButton = document.getElementById("close-edit-popup"); // Menggunakan ID yang unik

    if (addButton) {
        addButton.addEventListener("click", function () {
            popupContainer.style.display = "flex";
        });
    }

    if (closeButton) {
        closeButton.addEventListener("click", function () {
            popupContainer.style.display = "none";
        });
    }
});
