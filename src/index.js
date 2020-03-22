module.exports = function toReadable (number) {
    let result = '';
    const ones = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    const teens = ['', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    const decades = ['ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    if (!number) {
        return ones[0];
    }

    const hundredDigit = Math.floor(number / 100);
    const decadeDigit = Math.floor((number % 100) / 10);
    const onesDigit = number % 10;

    
    if (hundredDigit > 0) {
        result += ones[hundredDigit] + ' hundred';
        if (decadeDigit > 0 || onesDigit > 0) {
            result += ' ';
        }
    }
    
    if (decadeDigit == 1) {
        if (onesDigit == 0) {
            result += decades[onesDigit];
        } else {
            result += teens[onesDigit];
        }
    } else {
        if (decadeDigit > 1) {
            result += decades[decadeDigit - 1];
            if (onesDigit > 0) {
                result += ' ';
            }
        }
        if (onesDigit > 0) {
            result += ones[onesDigit];
        }
    }
    return result;
}
