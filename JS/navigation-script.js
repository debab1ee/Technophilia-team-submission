const menuIcon = document.querySelector(".material-icons");
const navbar = document.querySelector(".navbar");

document.addEventListener('scroll', () => {
    menuIcon.classList.add('show-menu-icon');
    navbar.classList.add('hide-navbar');

    //Remove the menu icon and make the navbar visible when we have reached the top of our page, i.e., pixel=0
    if (window.scrollY === 0){
        menuIcon.classList.remove('show-menu-icon')
        navbar.classList.remove('hide-navbar')
    }
});

menuIcon.addEventListener('click', ()=>{
    menuIcon.classList.remove('show-menu-icon')
    navbar.classList.remove('hide-navbar')
});
