// Store the selected elements that we are going to use. 
const mainNav = document.querySelector('.navigation')
const hamburgerBtn = document.querySelector('#menu');
const mainTitle = document.querySelector('#main-title');

hamburgerBtn.addEventListener('click', () => {
	mainNav.classList.toggle('open');
	hamburgerBtn.classList.toggle('open');
});

mainTitle.textContent = mainNav.querySelector('a.active').textContent;

const currentYearElement = document.querySelector("#currentyear");
const lastModified = document.querySelector("#last-modified");

const today = new Date();
const year = today.getFullYear();

currentYearElement.innerHTML = year;
lastModified.innerHTML = document.lastModified;

const temples = [
	{
	  templeName: "Aba Nigeria",
	  location: "Aba, Nigeria",
	  dedicated: "2005, August, 7",
	  area: 11500,
	  imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
	},
	{
	  templeName: "Manti Utah",
	  location: "Manti, Utah, United States",
	  dedicated: "1888, May, 21",
	  area: 74792,
	  imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
	},
	{
	  templeName: "Payson Utah",
	  location: "Payson, Utah, United States",
	  dedicated: "2015, June, 7",
	  area: 96630,
	  imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
	},
	{
	  templeName: "Yigo Guam",
	  location: "Yigo, Guam",
	  dedicated: "2020, May, 2",
	  area: 6861,
	  imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
	},
	{
	  templeName: "Washington D.C.",
	  location: "Kensington, Maryland, United States",
	  dedicated: "1974, November, 19",
	  area: 156558,
	  imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
	},
	{
	  templeName: "Lima Perú",
	  location: "Lima, Perú",
	  dedicated: "1986, January, 10",
	  area: 9600,
	  imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
	},
	{
	  templeName: "Mexico City Mexico",
	  location: "Mexico City, Mexico",
	  dedicated: "1983, December, 2",
	  area: 116642,
	  imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
	},
	{
		templeName: "San Diego California",
		location: "San Diego, California",
		dedicated: "1993, April, 25",
		area: 72000,
		imageUrl: "https://www.churchofjesuschrist.org/imgs/9fc6d53550ed3243fb8eca9ebceb284d4865e7db/full/1920%2C/0/default"
	},
	{
		templeName: "Córdoba Argentina",
		location: "Córdoba, Argentina",
		dedicated: "2015, May, 17",
		area: 34369,
		imageUrl: "https://www.churchofjesuschrist.org/imgs/6b6e41369b16768d4d61dcfe17740cc1b00ecce3/full/1920%2C/0/default"
	},
	{
		templeName: "Montevideo Uruguay",
		location: "Montevideo, Uruguay",
		dedicated: "2001, March, 18",
		area: 10700,
		imageUrl: "https://www.churchofjesuschrist.org/imgs/9b1836f5622b5eba399984b40d3f3ccb4e16153b/full/1920%2C/0/default"
	},
];

const showTemples = (temples, filterFn = () => true) => {
	const templeCardContainer = document.querySelector('#temple-cards-container');
	const templeCards = temples.filter(filterFn).map(createTempleCard);
	templeCardContainer.innerHTML = templeCards.join('');
}

const createTempleCard = (temple) => {
	return `
			<div class="temple-card">
                <div class="info">
                    <h3>${temple.templeName}</h3>
                    <span class="temple-card-key">Location:<span class="temple-card-value">${temple.location}</span></span>
                    <span class="temple-card-key">Dedicated:<span class="temple-card-value">${temple.dedicated}</span></span>
                    <span class="temple-card-key">Size:<span class="temple-card-value">${temple.area} sq ft</span></span>
                </div>
                <img class="hover" src="${temple.imageUrl}" loading="lazy" height="167" alt="Córdoba temple">
            </div>
		   `
}

const getDedicationYear = (temple) => parseInt(temple.dedicated.split(',')[0]);

const filterFunctionsMap = {
	old: (temple) => getDedicationYear(temple) < 1900,
	new: (temple) => getDedicationYear(temple) > 2000,
	large: (temple) => temple.area > 90000,
	small: (temple) => temple.area < 10000,
	all: () => true,
}

const navLinks = mainNav.querySelectorAll('a');

navLinks.forEach(e => e.addEventListener('click', function() {
	navLinks.forEach(e => e.classList.remove('active'));
	this.classList.add('active');
	mainTitle.textContent = this.textContent;
	if (this.dataset.filterKey) {
		showTemples(temples, filterFunctionsMap[this.dataset.filterKey]);
	}
}));

showTemples(temples);