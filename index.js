
const toggle = () => {
    let hamburger = document.getElementById('hamburger');
    if (hamburger.className === 'fa-solid fa-bars fa-xl') {
        hamburger.className = 'fa-solid fa-xmark fa-xl';
    } else {
        hamburger.className = 'fa-solid fa-bars fa-xl';
    }


    let mobileNav = document.getElementById('nav-item');
    if (mobileNav.className === 'nav-item') {
        mobileNav.className += ' responsive';
    } else {
        mobileNav.className = 'nav-item';
    }

}

let scrollTopButton = document.getElementById("scrollTop")

window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        scrollTopButton.style.display = "block";
    } else {
        scrollTopButton.style.display = "none";
    }
}

const backToTopFun = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}