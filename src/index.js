module.exports = function toReadable(number) {

    if (number === 0) {
        return 'zero';
    }

    let ans = '';

    if (Math.floor(number / 100) === 1) {
        ans += 'one hundred ';
    } else if (Math.floor(number / 100) === 2) {
        ans += 'two hundred ';
    } else if (Math.floor(number / 100) === 3) {
        ans += 'three hundred ';
    } else if (Math.floor(number / 100) === 4) {
        ans += 'four hundred ';
    } else if (Math.floor(number / 100) === 5) {
        ans += 'five hundred ';
    } else if (Math.floor(number / 100) === 6) {
        ans += 'six hundred ';
    } else if (Math.floor(number / 100) === 7) {
        ans += 'seven hundred ';
    } else if (Math.floor(number / 100) === 8) {
        ans += 'eight hundred ';
    } else if (Math.floor(number / 100) === 9) {
        ans += 'nine hundred ';
    }

    if (number % 100 === 10) {
        return ans + 'ten';
    }
    if (number % 100 === 11) {
        return ans + 'eleven';
    }
    if (number % 100 === 12) {
        return ans + 'twelve';
    }
    if (number % 100 === 13) {
        return ans + 'thirteen';
    }
    if (number % 100 === 14) {
        return ans + 'fourteen';
    }
    if (number % 100 === 15) {
        return ans + 'fifteen';
    }
    if (number % 100 === 16) {
        return ans + 'sixteen';
    }
    if (number % 100 === 17) {
        return ans + 'seventeen';
    }
    if (number % 100 === 18) {
        return ans + 'eighteen';
    }
    if (number % 100 === 19) {
        return ans + 'nineteen';
    }

    if (Math.floor(number / 10) % 10 === 2) {
        ans += 'twenty ';
    } else if (Math.floor(number / 10) % 10 === 3) {
        ans += 'thirty ';
    } else if (Math.floor(number / 10) % 10 === 4) {
        ans += 'forty ';
    } else if (Math.floor(number / 10) % 10 === 5) {
        ans += 'fifty ';
    } else if (Math.floor(number / 10) % 10 === 6) {
        ans += 'sixty ';
    } else if (Math.floor(number / 10) % 10 === 7) {
        ans += 'seventy ';
    } else if (Math.floor(number / 10) % 10 === 8) {
        ans += 'eighty ';
    } else if (Math.floor(number / 10) % 10 === 9) {
        ans += 'ninety ';
    }


    if (number % 10 === 1) {
        ans += 'one';
    } else if (number % 10 === 2) {
        ans += 'two';
    } else if (number % 10 === 3) {
        ans += 'three';
    } else if (number % 10 === 4) {
        ans += 'four';
    } else if (number % 10 === 5) {
        ans += 'five';
    } else if (number % 10 === 6) {
        ans += 'six';
    } else if (number % 10 === 7) {
        ans += 'seven';
    } else if (number % 10 === 8) {
        ans += 'eight';
    } else if (number % 10 === 9) {
        ans += 'nine';
    }

    return ans.trim();
}
