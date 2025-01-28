var homeContainer = document.getElementById('home-container')
var aboutContainer = document.getElementById('about-container')
var harvardContainer = document.getElementById('harvard-container')

function scrollToTop() {
    window.scroll({
        top: 0,
        behavior: 'smooth'
    });
}

function scrollToAbout() {
    scrollToTop();
    window.scroll({
        top: homeContainer.clientHeight + 50,
        behavior: 'smooth',
    })
}

function scrollToHarvard() {
    scrollToTop();
    window.scroll({
        top: homeContainer.clientHeight + aboutContainer.clientHeight + 50,
        behavior: 'smooth',
    })
}

function scrollToProjects() {
    scrollToTop();
    window.scroll({
        top: homeContainer.clientHeight + aboutContainer.clientHeight + harvardContainer.clientHeight + 50,
        behavior: 'smooth',
    })
}

function scrollToBottom() {
    window.scroll({
        top: 50000,
        behavior: 'smooth'
    });
}


document.addEventListener('scroll', function() {
    var navbar = document.getElementById('navbar');
    if (window.scrollY >= 1250 && window.scrollY <= 2300) {
        navbar.style.backgroundColor = 'rgba(15, 29, 42, 0.366)';
    } else {
        navbar.style.backgroundColor = '';
    }
});

function handleResize() {
    const container = document.getElementById('iconContainer');
    const svg = document.getElementById('svg');
    if(window.innerWidth <= 767.98) {
        container.classList.remove('flex-column');
        container.classList.add('flex-row');
    } else {
        container.classList.remove('flex-row');
        container.classList.add('flex-column')
    }
}

// Initial call to set classes based on current width
handleResize();

// Event listener for window resize
window.addEventListener('resize', handleResize);