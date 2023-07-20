function fadeOut() {
    var elem = document.getElementById("dropdown-menu");
    elem.style.opacity = 0;
    setTimeout(function() {
        elem.style.display = "none";
    }, 1000);
}
function fadeIn() {
    var elem = document.getElementById("dropdown-menu");
    elem.style.display = "block";
    setTimeout(function() {
        elem.style.opacity = 1;
    },10);
}