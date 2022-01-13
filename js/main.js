const navMobile = document.querySelector('.nav-mobile');
const navBtn = document.querySelector('.hamburger');
const footerYear = document.querySelector('.footer__year');

let lastScrollY = window.scrollY;


window.addEventListener('scroll', () => {
    if (lastScrollY < window.scrollY) {
        nav.classList
    }
})


const handleNav = () => {
    navBtn.classList.toggle('is-active');
    navMobile.classList.toggle('nav-mobile--active');
}


navBtn.addEventListener('click', handleNav)


const handleCurrentYear = () => {
    const year = (new Date).getFullYear();
    footerYear.innerText = year;
}
handleCurrentYear();




