// Store the selected elements that we are going to use. 
const mainNav = document.querySelector('.navigation')
const hamburgerBtn = document.querySelector('#menu');
const mainTitle = document.querySelector('#main-title');

// Add a click event listender to the hamburger button and use a callback function that toggles the list element's list of classes.
hamburgerBtn.addEventListener('click', () => {
	mainNav.classList.toggle('open');
	hamburgerBtn.classList.toggle('open');
});

const navLinks = mainNav.querySelectorAll('a');

mainTitle.innerHTML = mainNav.querySelector('a.active').innerHTML;

navLinks.forEach(e => e.addEventListener('click', function() {
	navLinks.forEach(e => e.classList.remove('active'));
	this.classList.add('active');
	mainTitle.innerHTML = this.innerHTML;
}));

const currentYearElement = document.querySelector("#currentyear");
const lastModified = document.querySelector("#last-modified");

const today = new Date();
const year = today.getFullYear();

currentYearElement.innerHTML = year;
lastModified.innerHTML = document.lastModified;