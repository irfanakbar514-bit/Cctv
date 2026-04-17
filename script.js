window.onscroll = function() {
    const nav = document.getElementById('navbar');
    if (window.pageYOffset > 50) { nav.classList.add('scrolled'); } 
    else { nav.classList.remove('scrolled'); }
    reveal();
};
function reveal() {
    const reveals = document.querySelectorAll('.reveal');
    reveals.forEach(el => {
        let windowHeight = window.innerHeight;
        let elementTop = el.getBoundingClientRect().top;
        if (elementTop < windowHeight - 80) { el.classList.add('active'); }
    });
}
window.addEventListener("load", reveal);
window.addEventListener("resize", reveal);
reveal();


