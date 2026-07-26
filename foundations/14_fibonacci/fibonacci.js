const fibonacci = function (number) {
    const num = Number(number);

    if (num < 0) {
        return "OOPS";
    }

    if (num < 2) {
        return num;
    }

    return fibonacci(num - 1) + fibonacci(num - 2);
}


console.log(fibonacci(6));
// Do not edit below this line
module.exports = fibonacci;
