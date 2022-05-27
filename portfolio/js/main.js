// const faders = document.querySelectorAll('.fade-in'); 

// sectionOneObserver.observe(sectionOne);

// const appearOptions = {
//     threshold: 1,
//     rootMargin: "0px 0px -100px 0px"
// };

// const appearOnScroll = new IntersectionObserver
// (function(
//     entries,
//     appearOnScroll
// ) {
//     entries.forEach(entry => {
//         if(!entry.isIntersecting) {
//             return;
//         }else{
//             entry.target.classList.add('appear');
//             appearOnScroll.unobserver(entry.target);
//         }
//     });
// }, 
// appearOptions);

// faders.forEach(fader => {
//     appearOnScroll.observe(fader);
// })



const faders = document.querySelectorAll('.fade-in');
const sliders = document.querySelectorAll('.slide-in');

const appearOptions = {
    threshold: 0,
    rootMargin: "0px 0px -250px 0px"
};

const appearOnScroll = new IntersectionObserver(function (
    entries,
    appearOnScroll
) {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            return;
        } else {
            entry.target.classList.add('appear');
            appearOnScroll.unobserve(entry.target);
        }
    });
},
appearOptions);

faders.forEach(fader => {
    appearOnScroll.observe(fader);
});

sliders.forEach(slider => {
    appearOnScroll.observe(slider);
});

const tween = KUTE.fromTo(
    '#blob1',
    {path: '#blob1'},
    {path: '#blob2'},
    {repeat: 999, duration: 3000, yoyo:true}
)

tween.start()