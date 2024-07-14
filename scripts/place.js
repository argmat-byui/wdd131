const temperature = 5;
const windSpeed = 15;

const displayWindChill = () => {
	const windChillElem = document.querySelector('#wind-chill');
	let windChill = 'N/A';

	if (temperature <= 10 && windSpeed >= 4.8) {
		windChill = calculateWindChill(temperature, windSpeed);
		windChill = Math.round(windChill * 100) / 100;
	}
	windChillElem.innerHTML = `${windChill} °C`;
};

const calculateWindChill = (temperature, windSpeed) => 13.12 + 0.6215 * temperature - 11.37 * Math.pow(windSpeed, 0.16) + 0.3965 * temperature * Math.pow(windSpeed, 0.16);


displayWindChill();
