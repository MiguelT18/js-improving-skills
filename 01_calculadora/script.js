const d = document;

const $display = d.getElementById('display');
const $buttons = d.getElementById('buttons');
const $resetButton = d.getElementById('reset-button');

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

// Funcion creadora de botones con eventos a handleButtonClick
function createButton(val) {
	const button = d.createElement('button');
	button.textContent = val;
	button.addEventListener('click', handleButtonClick);
	$buttons.appendChild(button);
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
		if (!operation && $display.value !== 'Syntax Error') {
			$display.$display = false;
			operation = val;
			$display.value += val;
		} else {
			$display.value = 'Syntax Error';
			$display.disabled = true;
			console.log('Input desactivado');
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
