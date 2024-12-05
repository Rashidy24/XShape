document.title = "Shape.io";



// function pre loader 
var loader = document.querySelector('.overlay')
window.addEventListener("load", function(){
    loader.style.display = 'none'
})
window.onscroll = () => {
    let myHeader = document.querySelector('.header-page-h')
    let upComing = document.querySelector('[data-heading]')
    let lineBreak = document.querySelector('[data-line-hr]')
    let viewContainer = document.querySelector('[data-view]')
    let upComingX = document.querySelector('[data-heading-wrapper]')
    let lineBreakX = document.querySelector('[data-line]')
    if (this.scrollY) {
        myHeader.classList.add('active')
    } else {
        myHeader.classList.remove('active')
    }  

    if (scrollY >= 400) {
        setTimeout(() => {
            upComing.classList.add('active')
        },500)
        setTimeout(() => {
            lineBreak.style.width = "100%"
        },500)
    }

    if (scrollY >= 1600) {
        setTimeout(() => {
            upComingX.classList.add('active')
        },500)
        setTimeout(() => {
            lineBreakX.style.width = "100%"
        },500)
    }


    if( scrollY >= 1200){
        setTimeout(()=> {
            viewContainer.classList.add('active')
        },500)
    }
};

function getMenu() {
    let menuBtn = document.querySelector('[data-menu-toggeler]')
    let myLinks = document.querySelector('[data-links]')
    
    menuBtn.addEventListener('click', function(){
        myLinks.classList.toggle('active')
        this.classList.toggle('active')
    } )
};

function headerLogo(index, timeOut) {
    let logo = document.querySelector('[data-header-logo]')
    let logoSpans = document.querySelectorAll('[data-letter]')

    setTimeout( _ => {
        logoSpans[index].classList.add('active')
    }, timeOut)
    
    setTimeout(function(){
        logo.classList.add('active')
    }, 2200)
};

console.log(scrollY)

window.onload = () => {
    getMenu()
    headerLogo(0, 200)
    headerLogo(1, 400)
    headerLogo(2, 600)
    headerLogo(3, 800)
    headerLogo(4, 1000)
    headerLogo(5, 1200)
    headerLogo(6, 1400)
    headerLogo(7, 1600)
    headerLogo(8, 1800)
    headerLogo(9, 2000)
}    
