var modal = document.getElementById("authModal");
var userIcon = document.getElementById("userIcon");
var closeButton = document.querySelector(".close-btn");
userIcon.onclick = function() {
    modal.style.display = "block"; 
}
closeButton.onclick = function() {
    modal.style.display = "none"; 
}
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none"; 
    }
}