// Declare worksite app
const worksite = {};

// Select elements for menu & footer functions
worksite.menuOpen = document.querySelector('.menuOpen');
worksite.menuOpenP = document.querySelector('.menuOpenP');
worksite.menuLink = document.querySelectorAll('.menuLink');
worksite.footerP = document.querySelector('.footerP');

// Show/hide mobile menu function
worksite.mobileMenu = (eventType) => {
    worksite.menuOpen.addEventListener(eventType, function(){
        if (worksite.menuLink[0].className === 'menuLink hideMenu') {
            worksite.menuOpenP.innerText = 'Close Menu';
            for (let i=0; i < worksite.menuLink.length; i++) {
                worksite.menuLink[i].className = 'menuLink showMenu';
            }
        } else if (worksite.menuLink[0].className === 'menuLink showMenu') {
            worksite.menuOpenP.innerText = 'Menu';
            for (let i=0; i < worksite.menuLink.length; i++) {
                worksite.menuLink[i].className = 'menuLink hideMenu';
            }        
        }
    });
}

// Footer Year function
worksite.footerYear = () => {
    let currentYear = new Date().getFullYear();
    worksite.footerP.innerHTML = `© Dave Tyson, ${currentYear}`;
}

// Formspree code to clear contact form after submission
worksite.formspreeClear = () => {
    window.onbeforeunload = () => {
        for(const form of document.getElementsByTagName('form')) {
          form.reset();
        }
    }
}

// Initialize worksite
worksite.init = () => {

    // Call all functions
    worksite.footerYear();
    worksite.formspreeClear();
    worksite.mobileMenu('click');
    worksite.mobileMenu('keypress');
}

// Call worksite initialization
worksite.init();