const d = document;

const $display = d.querySelector('.display');
const $buttonsContainer = d.querySelector('.buttons');
const $resetButton = d.querySelector('.reset-button');

let firstValue = '';
let secondValue = '';
let operation = null;

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

function createButton(val) {
	const button = d.createElement('button');
	button.textContent = val;
	button.addEventListener('click', handleButtonClick);
	$buttonsContainer.appendChild(button);
}

function handleButtonClick(e) {
	const val = e.target.textContent;
	const regex = /^[0-9.]$/;

	if (regex.test(val)) {
		if (!operation) {
			firstValue += val;
		} else {
			secondValue += val;
		}
		$display.value += val;
	} else if (val === '=') {
		performOperation();
	} else {
		if (!operation) {
			operation = val;
			$display.value += val;
		}
	}
}

function performOperation() {
	switch (operation) {
		case '+':
			$display.value = parseFloat(firstValue) + parseFloat(secondValue);
			break;

		case '-':
			$display.value = parseFloat(firstValue) - parseFloat(secondValue);
			break;

		case '*':
			$display.value = parseFloat(firstValue) * parseFloat(secondValue);
			break;

		case '/':
			$display.value = parseFloat(firstValue) / parseFloat(secondValue);
			break;

		default:
			break;
	}

	firstValue = $display.value;
	secondValue = '';
	operation = null;
}

function resetCalculator() {
	firstValue = '';
	secondValue = '';
	operation = null;
	$display.value = '';
}

buttonsValues.forEach(createButton);
$resetButton.addEventListener('click', resetCalculator);
