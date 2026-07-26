const findTheOldest = function (peopleArray) {


    return peopleArray.reduce((oldest, currentPerson) => {
        const currentYear = new Date().getFullYear();
        const oldestAge = (oldest.yearOfDeath || currentYear) - oldest.yearOfBirth;
        const currentAge = (currentPerson.yearOfDeath || currentYear) - currentPerson.yearOfBirth;

        return currentAge > oldestAge ? currentPerson : oldest;

    });
}

const people = [
    {
        name: "Carly",
        yearOfBirth: 1942,
        yearOfDeath: 1970,
    },
    {
        name: "Ray",
        yearOfBirth: 1962,
        yearOfDeath: 2011,
    },
    {
        name: "Jane",
        yearOfBirth: 1912,
        yearOfDeath: 1941,
    },
]


console.log(findTheOldest(people));


// Do not edit below this line
module.exports = findTheOldest;
