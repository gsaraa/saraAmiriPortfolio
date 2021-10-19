// Create an portfolio object
// Use querySelector to cache arrow divs
// Add event listener so on click, it scrolls to next section

const portfolio = {};

portfolio.arrows = document.querySelectorAll('.arrow');

portfolio.arrows.forEach((arrow) => {
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

portfolio.init = function () {

};

portfolio.init();