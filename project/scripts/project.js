const getPeople = () => {
	return JSON.parse(localStorage.getItem('people')) ?? [];
}

const setPeople = (people) => {
	let id = 1;
	people.forEach(person => {
		person.id = id++;
	});
	localStorage.setItem('people', JSON.stringify(people));
}

const addPerson = (person) => {
	const people = getPeople();
	const latestPerson = people[people.length-1];
	const id = (latestPerson?.id ?? 0) + 1;
	person.id = id;
	people.push(person);
	setPeople(people);
}

const removePersonById = (id) => {
	const people = getPeople();
	setPeople(people.filter(p => p.id !== id));
}

const clearPeople = () => {
	setPeople([]);
}

const showPeople = () => {
	const tableBody = document.querySelector('tbody');
	if (!tableBody) {
		return;
	}
	const people = getPeople();
	const peopleRows = people.map(createPersonRow);
	tableBody.innerHTML = peopleRows.join('');
	document.querySelectorAll('a.remove').forEach(a => a.addEventListener('click', () => {
		removePersonById(parseInt(a.dataset.id));
		showPeople();
	}));
}

const createPersonRow = (person) => {
	return `
			<tr>
				<td><img src="${person.profilePicure}" alt="Profile Picture" class="profile-img" loading="lazy"></td>
				<td>${person.firstNames}</td>
				<td>${person.lastNames}</td>
				<td>${person.gender}</td>
				<td>${person.birthDate}</td>
				<td><a data-id=${person.id} class="remove">☓</a></td>
			</tr>
			`;
}

const templateData = [
	{
		firstNames: 'Russell M.',
		lastNames: 'Nelson',
		gender: 'male',
		birthDate: '09-09-1924',
		profilePicure: 'https://www.churchofjesuschrist.org/imgs/13f0234d9c9e2d858ad5a251ca8a4382874977ce/full/!320%2C400/0/default',
	},
	{
		firstNames: 'Dallin H.',
		lastNames: 'Oaks',
		gender: 'male',
		birthDate: '08-12-1932',
		profilePicure: 'https://www.churchofjesuschrist.org/imgs/db96515429b848527e30220394ba6299c297236a/full/!320%2C384/0/default',
	},
	{
		firstNames: 'Henry B.',
		lastNames: 'Eyring',
		gender: 'male',
		birthDate: '05-31-1933',
		profilePicure: 'https://www.churchofjesuschrist.org/imgs/cd25ccb9b3b1878fdbf9570f65b850d8267c5320/full/!320%2C384/0/default'
	},
	{
		firstNames: 'Jeffrey R.',
		lastNames: 'Holland',
		gender: 'male',
		birthDate: '12-03-1940',
		profilePicure: 'https://www.churchofjesuschrist.org/imgs/9799926c71ef33de86b343988888a4ea2a05a1a3/full/!320%2C384/0/default'
	},
	{
		firstNames: 'Dieter F.',
		lastNames: 'Uchtdorf',
		gender: 'male',
		birthDate: '11-06-1940',
		profilePicure: 'https://www.churchofjesuschrist.org/imgs/2f847eadf674becf2b298b7eb7bf8fa3a603ddbd/full/!320%2C384/0/default'
	},
	{
		firstNames: 'David A.',
		lastNames: 'Bednar',
		gender: 'male',
		birthDate: '06-15-1952',
		profilePicure: 'https://www.churchofjesuschrist.org/imgs/3a69c12e9af5233d88cac0fe4e2a143d928650da/full/!320%2C385/0/default'
	},
	{
		firstNames: 'Quentin L.',
		lastNames: 'Cook',
		gender: 'male',
		birthDate: '09-08-1940',
		profilePicure: 'https://www.churchofjesuschrist.org/imgs/647633e40fd7d23059b1f4f96a8c76705764a95a/full/!320%2C384/0/default'
	},
	{
		firstNames: 'D. Todd',
		lastNames: 'Christofferson',
		gender: 'male',
		birthDate: '01-24-1945',
		profilePicure: 'https://www.churchofjesuschrist.org/imgs/59b3fc36d2a630a5b90f4179d7d471cc2619bd9c/full/!320%2C384/0/default'
	},
	{
		firstNames: 'Neil L.',
		lastNames: 'Andersen',
		gender: 'male',
		birthDate: '08-09-1951',
		profilePicure: 'https://www.churchofjesuschrist.org/imgs/d76e5b4ae23211eeaefceeeeac1e8cdef9e9eedc/full/!320%2C384/0/default'
	},
	{
		firstNames: 'Ronald A.',
		lastNames: 'Rasband',
		gender: 'male',
		birthDate: '02-06-1951',
		profilePicure: 'https://www.churchofjesuschrist.org/imgs/c922f38499accfa2b7b23ceaf749bab21292ab0f/full/!320%2C384/0/default'
	},
	{
		firstNames: 'Gary E.',
		lastNames: 'Stevenson',
		gender: 'male',
		birthDate: '08-06-1955',
		profilePicure: 'https://www.churchofjesuschrist.org/imgs/defa8bc07385ded9be2ad159452c807a09e1a1d2/full/!320%2C384/0/default'
	},
	{
		firstNames: 'Dale G.',
		lastNames: 'Renlund',
		gender: 'male',
		birthDate: '12-13-1952',
		profilePicure: 'https://www.churchofjesuschrist.org/imgs/fcdabf2c159411eca865eeeeac1e3df9a6ee0244/full/!320%2C382/0/default'
	},
	{
		firstNames: 'Gerrit W.',
		lastNames: 'Gong',
		gender: 'male',
		birthDate: '12-23-1953',
		profilePicure: 'https://www.churchofjesuschrist.org/imgs/3d9f5f445fa6bc9eb6a2d7495a335539baa940e1/full/!320%2C384/0/default'
	},
	{
		firstNames: 'Ulisses',
		lastNames: 'Soares',
		gender: 'male',
		birthDate: '10-02-1958',
		profilePicure: 'https://www.churchofjesuschrist.org/imgs/f28b995aa6a45c898f714de5ba6c6da8bf161559/full/!320%2C384/0/default'
	},
	{
		firstNames: 'Patrick',
		lastNames: 'Kearon',
		gender: 'male',
		birthDate: '07-18-1961',
		profilePicure: 'https://www.churchofjesuschrist.org/imgs/ac500c69e6cf11ee9cf8eeeeac1e0ca1df2f8544/full/!320%2C384/0/default'
	},
];

const getTemplateData = () => templateData;
