document.addEventListener("DOMContentLoaded", function () {
  console.log("JavaScript berhasil dimuat!"); // Debugging: Cek apakah script berjalan

  const popupContainer = document.querySelector(".popup-container"); 
  const openPopupButton = document.getElementById("open-popup"); 
  const closePopupButton = document.getElementById("close-popup");

  if (openPopupButton) {
      openPopupButton.addEventListener("click", function () {
          console.log("Tombol Tambah diklik!"); // Debugging: Cek apakah event listener berjalan
          popupContainer.style.display = "flex"; 
      });
  } else {
      console.log("Tombol Tambah tidak ditemukan!"); // Debugging: Jika tombol tidak ditemukan
  }

  if (closePopupButton) {
      closePopupButton.addEventListener("click", function () {
          console.log("Tombol Kembali diklik!"); // Debugging: Cek apakah event listener berjalan
          popupContainer.style.display = "none";
      });
  } else {
      console.log("Tombol Kembali tidak ditemukan!"); // Debugging: Jika tombol tidak ditemukan
  }
});
