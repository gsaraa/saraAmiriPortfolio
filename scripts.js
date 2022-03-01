// Use querySelector to cache arrow divs
// Add event listener so on click, it scrolls to next section
// Get form element and empty after user submits

const navigationBar = document.querySelector('.navigationBar');
const openNav = document.querySelector('.openNav');
const closeNav = document.querySelector('.closeNav');

function visibleMenu() {
    navigationBar.classList.add('responsiveBar');
}

function unvisibleMenu() {
    navigationBar.classList.remove('responsiveBar');
}

openNav.addEventListener('click', visibleMenu);

closeNav.addEventListener('click', unvisibleMenu);

const arrows = document.querySelectorAll('.arrow');
const arrowUp = document.querySelector('.arrowUp');
const header = document.querySelector('header');

arrows.forEach((arrow) => {
    arrow.addEventListener('click', function() {
        if (this.classList.contains('aboutArrow')) {
            const aboutSection = document.querySelector('.aboutSection');
            aboutSection.scrollIntoView({behavior: 'smooth'});
        } else if (this.classList.contains('projectArrow')) {
            const projectSection = document.querySelector('.projectSection');
            projectSection.scrollIntoView({behavior: 'smooth'});
        } else if (this.classList.contains('skillsArrow')){
            const skillsSection = document.querySelector('.skillsSection');
            skillsSection.scrollIntoView({behavior: 'smooth'});
        } else if (this.classList.contains('contactArrow')) {
            const contactSection = document.querySelector('.contactSection');
            contactSection.scrollIntoView({behavior: 'smooth'});
        }
    })
})

arrowUp.addEventListener('click', function() {
    header.scrollIntoView({behavior: 'smooth'});
});

const formEl = document.querySelector('form');

formEl.addEventListener('submit', function(e) {
    e.preventDefault();

    formEl.reset();
});

window.onbeforeunload = function () {
    window.scrollTo(0,0);
};
console.log('hello');
AOS.init();