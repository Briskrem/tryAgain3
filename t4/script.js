console.log('yammy')
const burger1 = document.querySelector('.hamburger');
const burger2 = document.querySelector('.hamburger2');
const sideBar = document.querySelector('.side-nav');


burger1.addEventListener('click', e => {
    console.log('cheese')
    sideBar.classList.add('active');
});

burger2.addEventListener('click', e => {
    console.log('bread')

    sideBar.classList.remove('active');
});