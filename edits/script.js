// Toggle Navbar
var menu = document.getElementById('hamburger');
var nav = document.getElementById('nav');
var header = document.getElementById('main-head');

function toggleNav() {
    // Hide and show navbar
    nav.classList.toggle('hide');
    // Animate hamburger menu
    menu.classList.toggle('toggle');
    
    // Set transition duration
    header.style.transitionDuration = "0.8s";
    // Default closed menu
    if (header.style.marginTop === "145px") {
        header.style.marginTop = "initial";
    }
    // Opened Menu
    else {
        header.style.marginTop = "145px";
    }
}

menu.addEventListener('click', toggleNav);