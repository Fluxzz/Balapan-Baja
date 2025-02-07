function openPopup() {
    document.getElementById("delete-penyedia").style.display = "flex";
}

function closePopup() {
    document.getElementById("delete-penyedia").style.display = "none";
}

function deleteData() {
    alert("Data telah dihapus");
    closePopup();
}
