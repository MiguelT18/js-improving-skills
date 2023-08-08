const d = document;

const $display = d.querySelector('.display');
const $buttonsContainer = d.querySelector('.buttons');
const buttonsValues = [
	'7',
	'8',
	'9',
	'/',
	'4',
	'5',
	'6',
	'*',
	'1',
	'2',
	'3',
	'-',
	'.',
	'0',
	'=',
	'+',
];

buttonsValues.forEach((val) => {
	const button = d.createElement('button');
	button.textContent = val;
	$buttonsContainer.appendChild(button);
	$display.value = '';

	button.addEventListener('click', () => {
		const regex = /^[0-9]$/;
		if (regex.test(val)) {
			console.log(val);
		}
	});
});
