const sideBar = document.querySelector('aside');
const hamburger1 = document.querySelector('.hamburger1');
const hamburger2 = document.querySelector('.hamburger2');
const navbar = document.querySelector('nav');
const navlist = document.querySelectorAll('.navvy a');
const sections = document.querySelectorAll('.section')


hamburger1.addEventListener('click', e => {
    sideBar.classList.add('active');
});

hamburger2.addEventListener('click', e => {
    sideBar.classList.remove('active')
});


// navbar.addEventListener('click', e => {
//     e.preventDefault()
//     navlist.forEach(x => {
//         if(e.target.className === x.className){
//             sections.forEach(section => {
//                 section.style.display = 'none';
//                 if(section.id.toLowerCase() == e.target.className) section.style.display = 'block';
//             })
//         }
//     })
// })



navbar.addEventListener('click', e => {
    e.preventDefault();
    sections.forEach(section => {
        if(section.id.toLowerCase() == e.target.className) section.style.display = 'block';
        else if(section.id.toLowerCase() !== e.target.className && e.target.tagName == 'A') section.style.display = 'none';
    })
})