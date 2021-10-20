// Create an portfolio object
// Use querySelector to cache arrow divs
// Add event listener so on click, it scrolls to next section


const navigationBar = document.querySelector('.navigationBar');
const openNav = document.querySelector('.openNav');
const closeNav = document.querySelector('.closeNav');

// window.addEventListener('scroll', function() {
//     navigationBar.classList.toggle('sticky', window.scrollY > 0);
// })

function visibleMenu() {
    navigationBar.classList.add('responsiveBar');
}

function unvisibleMenu() {
    navigationBar.classList.remove('responsiveBar');
}

openNav.addEventListener('click', visibleMenu);

closeNav.addEventListener('click', unvisibleMenu);

const arrows = document.querySelectorAll('.arrow');

arrows.forEach((arrow) => {
    arrow.addEventListener('click', function() {
        if (this.classList.contains('aboutArrow')) {
            const aboutSection = document.querySelector('.aboutContainer');
            aboutSection.scrollIntoView({behavior: 'smooth'});
        } else if (this.classList.contains('projectArrow')) {
            const projectSection = document.querySelector('.projectContainer');
            projectSection.scrollIntoView({behavior: 'smooth'});
        } 
        // else {
        //     const aboutSection = document.querySelector('.aboutContainer');
        //     aboutSection.scrollIntoView({behavior: 'smooth'});
        // }
    })
})
