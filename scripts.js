function copyEmail() {
    var copyText = document.getElementById("emailInput");
    copyText.select();
    copyText.setSelectionRange(0, 99999);
    document.execCommand("copy");
    
    var tooltip = document.getElementById("myTooltip-email");
    tooltip.innerHTML = "Email copied to clipboard!";
}
  
function outFunc() {
    var tooltip = document.getElementById("myTooltip-email");
    tooltip.innerHTML = "Copy email to clipboard";
}

function emailAlert() {
    alert("Thank you for your time! Please contact me at alexdg.ux@gmail.com or find me on Linkedin.");
}

/* Zoom modal */
// Get the modal
const modal = document.getElementById('myZoomModal');
const modalImg = document.getElementById("img01");
const captionText = document.getElementById("caption");

var img = document.querySelectorAll('.thumbnail');
    
for (var i=0; i<img.length; i++){
    
    img[i].onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    modalImg.alt = this.alt;
    captionText.innerHTML = this.alt;
    }
}

// Close modal when clicking again
modal.onclick = function() {
    img01.className += " out";
    setTimeout(function() {
        modal.style.display = "none";
        img01.className = "zoom-modal-content";
    }, 400);
    
} 