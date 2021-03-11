const numberTitles = [
    "zero",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
    "ten",
    "eleven",
    "twelve",
    "thirteen",
    "fourteen",
    "fifteen",
    "sixteen",
    "seventeen",
    "eighteen",
    "nineteen",
    "twenty",
];
const dozenTitles = [
    "zero",
    "ten",
    "twenty",
    "thirty",
    "forty",
    "fifty",
    "sixty",
    "seventy",
    "eighty",
    "ninety",
]

module.exports = function toReadable (number) {
    if (number === 0) return numberTitles[0];
    const arr = [];
    arr.push(checkHundredNumber(number));
    arr.push(checkNumber(number % 100));
    return arr.join(' ').trim();
}

//возвращает число от 1 до 9 строкой для сотен
function checkHundredNumber(number) {
    const seniorNum = Math.floor(number / 100);
    if (seniorNum > 0 && seniorNum < 10) {
        return `${checkNumber(seniorNum)} hundred`;
    }
    return '';
}

// возвращает число от 0 до 100 строкой
function checkNumber(number) {
    if (number >= 100 || number < 0) return '';
    if (number > 0 && number <= 20) {
        for (let i = 0; i <= 20; i++) {
            if (number === i) {
                return numberTitles[i];
            }
        }
    }
    for (let i = 1; i < 10; i++) {
        if (number === i * 10) {
            return dozenTitles[i];
        }
    }
    for (let i = 21; i < 100; i++) {
        if (number === i) {
            const dozen = Math.floor(number / 10) * 10;
            const simpleNumber = number % 10;
            return `${checkNumber(dozen)} ${checkNumber(simpleNumber)}`;
        }
    }
    return '';
}
