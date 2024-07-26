const loadTemplateData = () => {
	const templateData = getTemplateData();
	setPeople(templateData);
	showPeople();
	setTimeout(() => alert('As people in localStorage is empty, template data was loaded'), 100);
};

const clearBtn = document.getElementById('clear-data');
const loadTemplateDataBtn = document.getElementById('load-template-data');

clearBtn.addEventListener('click', (event) => {
	clearPeople();
	showPeople();
});

loadTemplateDataBtn.addEventListener('click', (event) => {
	loadTemplateData();
});

const people = getPeople();

if (!people.length) {
	loadTemplateData();
}

showPeople();
