const upIcon = document.getElementById('up-icon');
const hireMeBtn = document.getElementById('hire-me');
const portfolioBtn = document.getElementById('portfolio-btn');
const navLinks = document.querySelectorAll('.nav-links a');
const viewMoreBtn = document.getElementById('view-more');
















document.getElementById('logo').addEventListener('click', () => {
    window.location.href = 'Index.html';
});

navLinks.forEach(link =>{
    link.addEventListener('click', () => {
        document.getElementById('check').checked = false;
    })
})


hireMeBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 1950,
        behavior: 'smooth',

    });
});
portfolioBtn.addEventListener('click', () => {
   window.location.href = 'portfolio.html';
});


upIcon.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

viewMoreBtn.addEventListener('click', ()=>{
    window.location.href = "portfolio.html"
})
document.getElementById('homeBtn').addEventListener('click', ()=>{
    window.location.href = "Index.html"
})

document.getElementById('resume-btn').addEventListener('click', ()=>{
    window,location.href = "https://drive.google.com/file/d/1TsZQWiB9xfAGnVFaypyHKuvlIxj0pPNg/view?usp=drive_link"
})
