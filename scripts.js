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