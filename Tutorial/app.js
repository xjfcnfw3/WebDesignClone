const menu = document.querySelector("#mobile-menu")
const menuLinks = document.querySelector(".navbar_menu")
const navLogo = document.querySelector('#navbar_logo')

// Display Mobile Menu
const mobileMenu = () =>{
    menu.classList.toggle("is-active")
    menuLinks.classList.toggle('active')
}

menu.addEventListener('click', mobileMenu);

// Show active menu when scrolling
const hightlightMenu = () =>{
    const elem = document.querySelector('.highlight')
    const homeMenu = document.querySelector('#home-page')
    const aboutMenu = document.querySelector('#about-page')
    const servicesMenu = document.querySelector('#services-page')
    let scrollPos = window.scrollY

    // adds 'hightlight' class to my menu items
    if(window.innerHeight > 960 && scrollPos < 600){
        homeMenu.classList.add('highlight')
        aboutMenu.classList.remove('highlight')
        return 
    } else if(window.innerHeight > 960 && scrollPos < 1400){
        aboutMenu.classList.add('highlight')
        homeMenu.classList.remove('highlight')
        servicesMenu.classList.remove('highlight')
        return
    } else if(window.innerHeight > 960 && scrollPos < 2345){
        servicesMenu.classList.add('highlight')
        aboutMenu.classList.remove('highlight')
        return
    } 

    if((elem && window.innerWidth<960 && scrollPos<600)|| elem){
        elem.classList.remove('highlight')
    }
}

window,addEventListener('scroll',hightlightMenu);
window,addEventListener('click',hightlightMenu);
