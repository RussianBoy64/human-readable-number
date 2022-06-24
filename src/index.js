module.exports = function toReadable(number) {
    if (number === 0) {
        return "zero";
    } else if (number > 1000) {
        return `Ooops! ${number} its too big integer for this function!`;
    } else {
        const numbersUpTo20 = {
            1: "one",
            2: "two",
            3: "three",
            4: "four",
            5: "five",
            6: "six",
            7: "seven",
            8: "eight",
            9: "nine",
            10: "ten",
            11: "eleven",
            12: "twelve",
            13: "thirteen",
            14: "fourteen",
            15: "fifteen",
            16: "sixteen",
            17: "seventeen",
            18: "eighteen",
            19: "nineteen",
        };

        const dozens = {
            2: "twenty",
            3: "thirty",
            4: "forty",
            5: "fifty",
            6: "sixty",
            7: "seventy",
            8: "eighty",
            9: "ninety",
        };

        let resultString = "";

        const unit = number % 10;
        const dozen = Math.trunc((number % 100) / 10);
        const hundred = Math.trunc(number / 100);

        if (hundred > 0) {
            resultString += numbersUpTo20[hundred] + " hundred";
            if (dozen || unit) resultString += " ";
        }

        if (dozen === 1 || dozen === 0) {
            resultString += numbersUpTo20[dozen * 10 + unit]
                ? numbersUpTo20[dozen * 10 + unit]
                : "";
        }

        if (dozen > 1) {
            resultString += dozens[dozen];
            if (unit) resultString += " " + numbersUpTo20[unit];
        }

        return resultString;
    }
};
