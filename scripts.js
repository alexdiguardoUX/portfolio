
// Get the modal
var modalThai = document.getElementById('modal-thai');
var modalRoutard = document.getElementById('modal-routard');

// Get the X that closes the modal
var closeThai = document.getElementsByClassName("close_thai_modal")[0];
var closeRoutard = document.getElementsByClassName("close_routard_modal")[0];

// Clickable thumbnails
var thaiThumb = document.getElementsByClassName("thai-thumb")[0];
var routardThumb = document.getElementsByClassName("routard-thumb")[0];

// Specify the display style
thaiThumb.onclick = function openModal() {
    modalThai.style.display = "block";
}

routardThumb.onclick = function openModal() {
    modalRoutard.style.display = "block";
}

// When the user clicks on X, close the modal
closeThai.onclick = function() {
    modalThai.style.display = "none";
}

closeRoutard.onclick = function() {
    modalRoutard.style.display = "none";
}
