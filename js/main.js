

let navbar = document.querySelector('.header .navbar');
let menuBtn = document.querySelector('#menu-btn');

menuBtn.onclick = () => {
    menuBtn.classList.toggle('fa-times');
    navbar.classList.toggle('active');
};

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


let darkMode = localStorage.getItem('darkMode');
const darkModeToggle = document.querySelector('#dark-mode-toggle');
const lightModeToggle = document.querySelector('#light-mode-toggle');

// check if dark mode is enabled
// if it's enabled, turn it off
// if it's disabled, turn it on

const enableDarkMode = () => {
    // 1. add the class darkmode to the body
    document.body.classList.add('darkmode');
    // 2. update darkMode in the localStorage
    localStorage.setItem('darkMode', 'enabled')
}

const disableDarkMode = () => {
    // 1. add the class darkmode to the body
    document.body.classList.remove('darkmode');
    // 2. update darkMode in the localStorage
    localStorage.setItem('darkMode', null)
}

if (darkMode === 'enabled'){
    enableDarkMode();
}

darkModeToggle.addEventListener('click', () => {
    darkMode = localStorage.getItem('darkMode');
    if (darkMode !== 'enabled'){
        enableDarkMode();
    }else{
        disableDarkMode();
    }
});

darkModeToggle.addEventListener('click', () => {
    enableDarkMode();
});

lightModeToggle.addEventListener('click', () => {
    disableDarkMode();
});


// Get form submission info
const formId = 'your-form-id';
const url = `https://api.netlify.com/api/v1/forms/${formId}/submissions`;

fetch(url)
    .then(response => {
        if (response.ok) {
            return response.json();
        }
        throw new Error('Network response was not ok.');
    })
    .then(data => {
        // Do something with the form submission data
        console.log(data);
    })
    .catch(error => {
        // Handle errors here
        console.error('There was a problem fetching form submissions:', error);
    });