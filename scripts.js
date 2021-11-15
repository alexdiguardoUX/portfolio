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
    alert("Thank you for your time! Please contact me at alexinfobusiness@gmail.com or find me on Linkedin.");
}

// Competitors Lightbox

function openModal() {
    document.getElementById("myModal").style.display = "block";
}

function closeModal() {
    document.getElementById("myModal").style.display = "none";
}

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
var i;
var slides = document.getElementsByClassName("mySlides");
if (n > slides.length) {slideIndex = 1}
if (n < 1) {slideIndex = slides.length}
for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
}

slides[slideIndex-1].style.display = "block";

}


// Landing Pages Lightbox

function openWlModal() {
    document.getElementById("wl-modal").style.display = "block";
}

function closeWlModal() {
    document.getElementById("wl-modal").style.display = "none";
}

var slideIndex = 1;
showWlSlides(slideIndex);

function plusWlSlides(n) {
    showWlSlides(slideIndex += n);
}

function currentWlSlide(n) {
    showWlSlides(slideIndex = n);
}

function showWlSlides(n) {
    var i;
    var slides = document.getElementsByClassName("wl-slides");
    var dots = document.getElementsByClassName("demo");
    var captionText = document.getElementById("caption");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
}


// Comparison Lightbox

function openCompareModal() {
    document.getElementById("compare-modal").style.display = "block";
}

function closeCompareModal() {
    document.getElementById("compare-modal").style.display = "none";
}

var slideIndex = 1;
showCompareSlides(slideIndex);

function plusCompareSlides(n) {
    showCompareSlides(slideIndex += n);
}

function currentCompareSlide(n) {
    showCompareSlides(slideIndex = n);
}

function showCompareSlides(n) {
    var i;
    var slides = document.getElementsByClassName("compare-slides");
    var dots = document.getElementsByClassName("demo");
    var captionText = document.getElementById("caption");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
}