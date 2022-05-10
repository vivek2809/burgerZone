
const toggle =()=>{
    let hamburger = document.getElementById('hamburger');
    if (hamburger.className === 'fa-solid fa-bars fa-xl'){
        hamburger.className = 'fa-solid fa-xmark fa-xl';
    }else{
        hamburger.className = 'fa-solid fa-bars fa-xl';
    }


    let mobileNav = document.getElementById('nav-item');
    if (mobileNav.className === 'nav-item') {
        mobileNav.className += ' responsive';
    } else {
        mobileNav.className = 'nav-item';
    }

}