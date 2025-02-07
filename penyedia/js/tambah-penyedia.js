document.addEventListener("DOMContentLoaded", function () {
    const popupContainer = document.querySelector(".popup-container"); // Pilih popup-container, bukan #popup
    const addButton = document.querySelector(".button-tambah"); 
    const closeButton = document.getElementById("close-popup");

    // Tampilkan popup saat tombol tambah diklik
    addButton.addEventListener("click", function () {
      popupContainer.style.display = "flex"; // Ubah ke flex agar muncul
    });

    // Sembunyikan popup saat tombol kembali diklik
    closeButton.addEventListener("click", function () {
      popupContainer.style.display = "none";
    });
});
