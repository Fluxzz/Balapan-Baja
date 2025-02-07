function openPopup() {
    document.getElementById("delete-ahli").style.display = "flex";
}

function closePopup() {
    document.getElementById("delete-ahli").style.display = "none";
}

function deleteData() {
    alert("Data telah dihapus");
    closePopup();
}
