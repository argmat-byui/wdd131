const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dec'];
const getMonthName = (index) => months[index];

const markAttendance = (id, date, checked) => {
    const people = getPeople();
    const person = people.find(e => e.id === id);
    if (!person.attendance) {
        person.attendance = {};
    }
    person.attendance[date] = checked;
    setPeople(people);
};

const showAttendance = (filterFn = () => true) => {
	const tableBody = document.querySelector('tbody');
	if (!tableBody) {
		return;
	}
	const people = getPeople();
	const peopleRows = people.filter(filterFn).map(createAttendanceRow);
	tableBody.innerHTML = peopleRows.join('');
	document.querySelectorAll('input.attendance-checkbox').forEach(a => a.addEventListener('change', () => {
        markAttendance(parseInt(a.dataset.id), a.dataset.date, a.checked);
	}));
};

const getLastSundays = (count = 5) => {
    const today = new Date();
    const DAY_IN_MILLIS = 24 * 3600 * 1000;
    const sunday = new Date(today - today.getDay() * DAY_IN_MILLIS);
    sunday.setHours(0, 0, 0, 0);
    const sundays = [sunday];
    for (let i = 0; i < count - 1; i++) {
        const lastSunday = sundays[0];
        sundays.unshift(new Date(lastSunday - 7 * DAY_IN_MILLIS));
    }
    return sundays;

}

const headerRow = document.querySelector('thead tr');
const lastSundays = getLastSundays(10);
headerRow.innerHTML = `
    <th>Profile Picture</th>
    <th>First Name</th>
    <th>Last Name</th>
    ${lastSundays.map(date => `<th class="center">${date.getDate()} - ${getMonthName(date.getMonth())}</th>`).join('')}
    `

const createAttendanceRow = (person) => {
	return `
			<tr>
				<td><img src="${person.profilePicure}" alt="Profile Picture" class="profile-img" loading="lazy"></td>
				<td>${person.firstNames}</td>
				<td>${person.lastNames}</td>
                ${lastSundays.map(date => `<td class="center"><input class="attendance-checkbox" data-id="${person.id}" data-date="${date}" type="checkbox" ${person.attendance?.[date] ? 'checked' : ''}/></td>`).join('')}
			</tr>
			`;
}

const filterLastSundayBtn = document.getElementById('filter-last-sunday');
filterLastSundayBtn.addEventListener('click', () => {
    const [lastSunday] = getLastSundays(1);
    showAttendance((person) => {
        return person.attendance?.[lastSunday];
    });
});

const showAllBtn = document.getElementById('show-all');
showAllBtn.addEventListener('click', () => showAttendance());

getPeople();
showAttendance();
