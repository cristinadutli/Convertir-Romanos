const input = document.getElementById('number');
const btn = document.getElementById('convert-btn');
const output = document.getElementById('output');

// Función para convertir números arábigos a números romanos
const convertToRoman = (num) => {
    const romanNumeralMap = [
        { value: 1000, numeral: 'M' },
        { value: 900, numeral: 'CM' },
        { value: 500, numeral: 'D' },
        { value: 400, numeral: 'CD' },
        { value: 100, numeral: 'C' },
        { value: 90, numeral: 'XC' },
        { value: 50, numeral: 'L' },
        { value: 40, numeral: 'XL' },
        { value: 10, numeral: 'X' },
        { value: 9, numeral: 'IX' },
        { value: 5, numeral: 'V' },
        { value: 4, numeral: 'IV' },
        { value: 1, numeral: 'I' }
    ];

    if (num === 0){
      return '';
    }
    
    let romanNumeral = '';
    for (let i = 0 ; i < romanNumeralMap.length ; i++){
        while (num >= romanNumeralMap[i].value){
            romanNumeral += romanNumeralMap[i].numeral;
            num -= romanNumeralMap[i].value;
        }
    }
    return romanNumeral;
}

btn.addEventListener('click', () => {
    const number = parseInt(input.value);
    if (isNaN(number)){
        output.textContent = "Please enter a valid number";
    } else if (number < 1){
        output.textContent = "Please enter a number greater than or equal to 1";
    } else if (number >= 4000){
        output.textContent = "Please enter a number less than or equal to 3999";
    } else {
        const romanNumeral = convertToRoman(number);
        output.textContent = romanNumeral;
    }
});

    