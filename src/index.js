module.exports = function toReadable(number) {
    let firstNum = number.toString().slice(0, 1);
    let secondNum = number.toString().slice(1, 2);
    let thirdNum = number.toString().slice(2, 3);
    let numTwoLast = number.toString().slice(1, 3);
    let result = "";
    secondNum;
    firstNum;
    thirdNum;
    numTwoLast;
    const numSingle = {
        0: "",
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
    const numTen = {
        1: "ten",
        2: "twenty",
        3: "thirty",
        4: "forty",
        5: "fifty",
        6: "sixty",
        7: "seventy",
        8: "eighty",
        9: "ninety",
    };

    if (number == 0) {
        return "zero";
    }
    if (number < 20) {
        result = numSingle[number];
        return result.trim();
    }
    if (number > 19 && 100 > number) {
        result = `${numTen[firstNum]} ${numSingle[secondNum]}`;
        return result.trim();
    }
    if (number > 99 && 1000 > number) {
        if (numTwoLast < 10) {
            result = `${numSingle[firstNum]} hundred ${numSingle[thirdNum]}`;
            return result.trim();
        }
        if (numTwoLast < 20) {
            result = `${numSingle[firstNum]} hundred ${numSingle[numTwoLast]}`;
            return result.trim();
        } else
            result = `${numSingle[firstNum]} hundred ${numTen[secondNum]} ${numSingle[thirdNum]}`;
        return result.trim();
    }
};
