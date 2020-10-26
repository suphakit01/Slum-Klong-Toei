// Hide Navbar on Scroll Down and Show on Scroll Up

var prevScrollpos = window.pageYOffset;

window.onscroll = function() {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
        document.getElementById("site-header").style.top = "0";
    } else {
        document.getElementById("site-header").style.top = "-8vh";
    }
    prevScrollpos = currentScrollPos;
}