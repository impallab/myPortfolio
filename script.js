// toggle menu-icon 

let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}


//  section active

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(navLinks => {
                navLinks.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });


    // sticky navbar

    let header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 100);

    // remove toggle icon and navbar also when click on navbar navLinks(scroll)

    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');

};


// scroll reveal
ScrollReveal({
    reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.home-content,.heading', { origin: 'top' });
ScrollReveal().reveal('.home-img,.services-container,.portfolio-box,.contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1,.about-img', { origin: 'left' });
ScrollReveal().reveal('.home-content p,.about-content', { origin: 'right' });


// typed js 
const typed = new Typed('.multiple-text', {
    strings: ['Frontend Devloper', 'Programmer', 'Web Designer', 'Content Writer'],
    typeSpeed: 50,
    backSpeed: 32,
    backDelay: 1000,
    loop: true

});



// chatGpt add on

let modeIcon = document.querySelector('#mode-icon');
let lightModeIcon = document.querySelector('#light-mode-icon');
let body = document.body;

// Define the toggleMode function
// Define a function to toggle dark and light modes
function toggleMode() {
    const body = document.body;
    const modeIcon = document.getElementById('mode-icon');
    const lightModeIcon = document.getElementById('light-mode-icon');

    // Toggle the "light-mode" class on the body element
    body.classList.toggle('light-mode');

    // Toggle the visibility of the moon and sun icons
    if (body.classList.contains('light-mode')) {
        modeIcon.style.display = 'block';
        lightModeIcon.style.display = 'none';
    } else {
        lightModeIcon.style.display = 'block';
        modeIcon.style.display = 'none';
    }
}

// Add a click event listener to the mode icon
document.getElementById('mode-icon').addEventListener('click', toggleMode);
document.getElementById('light-mode-icon').addEventListener('click', toggleMode);



// Function to send the email by the help of EmailJS.

function sendEmail(e) {
    e.preventDefault();

    const form = document.querySelector('#form-id');
    
    emailjs.sendForm("service_apsr292", "template_bv6bqng", form, "0gMMf9D1tnMDxsSC2")
        .then(function (response) {
            const customAlert = document.getElementById("custom-alert");
            const customAlertMessage = document.getElementById("custom-alert-message");
            const customAlertCloseButton = document.getElementById("custom-alert-close");

            customAlertMessage.textContent = 'Email sent successfully!';
            customAlert.style.backgroundColor = '#4CAF50'; // Green background for success
            customAlertCloseButton.style.backgroundColor = '#4CAF50'; // Green close button

            customAlert.style.display = 'block';

            customAlertCloseButton.addEventListener('click', function () {
                customAlert.style.display = 'none';
            });
        })
        .catch(function (error) {
            const customAlert = document.getElementById("custom-alert");
            const customAlertMessage = document.getElementById("custom-alert-message");
            const customAlertCloseButton = document.getElementById("custom-alert-close");

            customAlertMessage.textContent = 'Email sending failed: ' + error.message;
            customAlert.style.backgroundColor = '#ff4444'; // Red background for error
            customAlertCloseButton.style.backgroundColor = '#ff4444'; // Red close button

            customAlert.style.display = 'block';

            customAlertCloseButton.addEventListener('click', function () {
                customAlert.style.display = 'none';
            });
        });
}

document.querySelector('#form-id').addEventListener('submit', sendEmail);



