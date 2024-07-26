const createForm = document.getElementById('create-form');

createForm.addEventListener('submit', function (event) {
	event.preventDefault();
	const formData = new FormData(this);
	if (!validatePerson(formData)) {
		return alert("You have some errors on your data. Fix them and try again.");
	}
	const person = readPerson(formData);
	this.reset();
	addPerson(person);
});

const readPerson = (formData) => {
	const person = {
		firstNames: formData.get('first-names'),
		lastNames: formData.get('last-names'),
		gender: formData.get('gender'),
		birthDate: formData.get('birth-date'),
		profilePicure: formData.get('profile-picture'),
	};
	return person;
}

// In case some further validation needs to be done.
const validatePerson = (formData) => true;

// const validatePerson = (formData) => {
// 	const person = readPerson(formData);
// 	const errors = [];
// 	if (!person.firstNames?.length) {
// 		errors.push('First names cannot be empty.');
// 	}
// 	if (!person.lastNames?.length) {
// 		errors.push('Last names cannot be empty.');
// 	}
// 	if (!['male', 'female'].includes(person.gender)) {
// 		errors.push('Gender must be one of ["Male", "Female"].');
// 	}
// 	if (!['male', 'female'].includes(person.gender)) {
// 		errors.push('Gender must be one of ["Male", "Female"].');
// 	}
// }
