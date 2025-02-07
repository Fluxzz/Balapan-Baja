document.addEventListener("DOMContentLoaded", function () {
    const popup = document.getElementById("popup");
    const addButton = document.getElementById("open-popup");
    const closeButton = document.getElementById("close-popup");

    // Tampilkan popup saat tombol tambah diklik
    addButton.addEventListener("click", function () {
        popup.style.display = "flex";
    });

    // Sembunyikan popup saat tombol kembali diklik
    closeButton.addEventListener("click", function () {
        popup.style.display = "none";
    });
});