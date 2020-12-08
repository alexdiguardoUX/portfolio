
// Get the modal
var modalSecondLife = document.getElementById('modal-secondlife');
var modalSubNav = document.getElementById('modal-sub-nav');
var modalBrandReplace = document.getElementById('modal-brand-replacement');
var modalCostco = document.getElementById('modal-costco');
var modalDaytrip = document.getElementById('modal-daytrip');

// Get the X that closes the modal
var closeSecondLife = document.getElementsByClassName("close_secondlife_modal")[0];
var closeSubNav = document.getElementsByClassName("close_sub-nav_modal")[0];
var closeBrandReplace = document.getElementsByClassName("close_brand-replacement_modal")[0];
var closeCostco = document.getElementsByClassName("close_costco_modal")[0];
var closeDaytrip = document.getElementsByClassName("close_daytrip_modal")[0];

// Clickable thumbnails
var secondLifeThumb = document.getElementsByClassName("secondlife-thumb")[0];
var subNavThumb = document.getElementsByClassName("sub-nav-thumb")[0];
var brandReplaceThumb = document.getElementsByClassName("brand-replacement-thumb")[0];
var costcoThumb = document.getElementsByClassName("costco-thumb")[0];
var daytripThumb = document.getElementsByClassName("daytrip-thumb")[0];

// Specify the display style
secondLifeThumb.onclick = function openModal() {
    modalSecondLife.style.display = "block";
}

subNavThumb.onclick = function openModal() {
    modalSubNav.style.display = "block";
}

brandReplaceThumb.onclick = function openModal() {
    modalBrandReplace.style.display = "block";
}

costcoThumb.onclick = function openModal() {
    modalCostco.style.display = "block";
}

daytripThumb.onclick = function openModal() {
    modalDaytrip.style.display = "block";
}

// When the user clicks on X, close the modal
closeSecondLife.onclick = function() {
    modalSecondLife.style.display = "none";
}

closeSubNav.onclick = function() {
    modalSubNav.style.display = "none";
}

closeBrandReplace.onclick = function() {
    modalBrandReplace.style.display = "none";
}

closeCostco.onclick = function() {
    modalCostco.style.display = "none";
}

closeDaytrip.onclick = function() {
    modalDaytrip.style.display = "none";
}