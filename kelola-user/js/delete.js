function openPopup() {
    document.getElementById("delete-user").style.display = "flex";
}

function closePopup() {
    document.getElementById("delete-user").style.display = "none";
}

function deleteData() {
    alert("Data telah dihapus");
    closePopup();
}
