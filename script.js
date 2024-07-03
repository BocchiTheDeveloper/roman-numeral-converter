let convertButton = document.getElementById('convert-btn');
let output = document.getElementById('output');

convertButton.addEventListener('click', convertToRoman);

function convertToRoman() {
    let input = document.getElementById('number').value;
    let num = parseInt(input);

    if (!input) {
        output.textContent = 'Please enter a valid number';
        return;
    }

    if (input < 1) {
        output.textContent = 'Please enter a number greater than or equal to 1';
        return;
    }

    if (input > 3999) {
        output.textContent = 'Please enter a number less than or equal to 3999';
        return;
    }

    let convertedNumber = numToRoman(num);
    output.textContent = convertedNumber;
}

function numToRoman(num) {
    let romanNumbers = [
        { value: 1000, symbol: 'M' },
        { value: 900, symbol: 'CM' },
        { value: 500, symbol: 'D' },
        { value: 400, symbol: 'CD' },
        { value: 100, symbol: 'C' },
        { value: 90, symbol: 'XC' },
        { value: 50, symbol: 'L' },
        { value: 40, symbol: 'XL' },
        { value: 10, symbol: 'X' },
        { value: 9, symbol: 'IX' },
        { value: 5, symbol: 'V' },
        { value: 4, symbol: 'IV' },
        { value: 1, symbol: 'I' }
    ];

    let result = '';

    for (let { value, symbol } of romanNumbers) {
        while (num >= value) {
            result += symbol;
            num -= value;
        }
    }

    return result;
}