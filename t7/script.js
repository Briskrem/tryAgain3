const navbar = document.querySelector('nav');
const aside = document.querySelector('aside');
const hamburger1 = document.querySelector('.hamburger1');
const hamburger2 = document.querySelector('.hamburger2');
const sections = document.querySelectorAll('section');


hamburger1.addEventListener('click', e => {
    aside.classList.add('active');
})

hamburger2.addEventListener('click', e => {
    aside.classList.remove('active');
})

navbar.addEventListener('click', e => {
    e.preventDefault();
    sections.forEach(section => {
        if(e.target.classList[1] == 'nav-button'){
            if(section.id.toLowerCase()=== e.target.classList[0]) section.style.display = 'block';
            else section.style.display = 'none'
        }
    })
})

aside.addEventListener('click', e => {
    e.preventDefault();
    sections.forEach(section => {
        if(e.target.classList[1] == 'nav-button'){
            if(section.id.toLowerCase()=== e.target.classList[0]) section.style.display = 'block';
            else section.style.display = 'none'
        }
    })
    aside.classList.remove('active');
})



