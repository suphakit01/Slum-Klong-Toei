//---------------------------------------------Hide Navbar on Scroll Down and Show on Scroll Up

var prevScrollpos = window.pageYOffset;

window.onscroll = function() {
    let header = document.querySelector('header');
    var currentScrollPos = window.pageYOffset;

    if (prevScrollpos > currentScrollPos) {
        document.getElementById("site-header").style.top = "0";
        header.classList.add('scrolling-active');
    }
    if (prevScrollpos < currentScrollPos) {
        document.getElementById("site-header").style.top = "-60vh";
    }
    // if (prevScrollpos == currentScrollPos) {
    //     document.getElementById("site-header").style.top = "0";
    //     header.classList.add('scrolling-active-t');
    // }
    prevScrollpos = currentScrollPos;
}

//---------------------------------------------Scrolling Active Navbar

// window.addEventListener('scroll', function() {
//     let header = document.querySelector('header');
//     let windowPosition = window.scrollY > 0;

//     header.classList.toggle('scrolling-active');
// })


//---------------------------------------------Parallax Scrolling Page1

// layer1
var layer1 = document.getElementById('layer1')
scroll = window.pageYOffset;

document.addEventListener('scroll',
    function(e) {
        var offset = window.pageYOffset;
        scroll = offset;
        layer1.style.width = (100 + scroll / 5) + '%';
        layer1.style.right = scroll / 50 + '%';
    });

// layer2
var layer2 = document.getElementById('layer2')
scroll = window.pageYOffset;

document.addEventListener('scroll',
    function(e) {
        var offset = window.pageYOffset;
        scroll = offset;
        layer2.style.width = (100 + scroll / 3.5) + '%';
    });

// layer3
// var layer3 = document.getElementById('layer3')
// scroll = window.pageYOffset;

// document.addEventListener('scroll',
//     function(e) {
//         var offset = window.pageYOffset;
//         scroll = offset;
//         layer3.style.top = -scroll / 20 + '%';
//     });

// layer4
var layer4 = document.getElementById('layer4')
scroll = window.pageYOffset;

document.addEventListener('scroll',
    function(e) {
        var offset = window.pageYOffset;
        scroll = offset;
        layer4.style.width = (100 + scroll / 5.5) + '%';
    });