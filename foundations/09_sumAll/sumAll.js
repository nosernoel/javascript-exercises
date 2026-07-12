const sumAll = function (firstNumber, secondNumber) {

    const newArray = [];
    let sum = 0;

    if (firstNumber < 0 || !Number.isInteger(firstNumber) || secondNumber < 0 || !Number.isInteger(secondNumber)) {
        return "ERROR";
    } else {

        if (firstNumber < secondNumber) {
            for (let i = firstNumber; i <= secondNumber; i++) {
                newArray.push(i);
            }
        } else {
            for (let i = secondNumber; i <= firstNumber; i++) {
                newArray.push(i);
            }
        }
        sum = newArray.reduce((acc, curr) => acc + curr);
    }

    return sum;
};

console.log(sumAll(1, 4));

// Do not edit below this line
module.exports = sumAll;
