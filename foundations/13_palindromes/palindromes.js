const palindromes = function (str) {
    let formattedString = str.toLowerCase().replace(/[^a-z0-9]/g, "");

    // Die Umkehr-Funktion (etwas kürzer geschrieben)
    let formattedStringReversed = (stringToReverse => {
        return stringToReverse.split("").reverse().join("");
    })

    return formattedString === formattedStringReversed(formattedString);

};

console.log(palindromes("A car, a man, a maraca"))

// Do not edit below this line
module.exports = palindromes;
