const removeFromArray = function (array) {
    const newArray = [];

    const argsArray = Array.from(arguments);

    array.forEach((item) => {
        if (!argsArray.includes(item, 1)) {
            newArray.push(item);
        }

    });

    return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;


