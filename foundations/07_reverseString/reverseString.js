const reverseString = function (word) {

    /*
        1. String entgegen nehmen
        2. String zerteilen in einzelne Buchstaben
        3. String umkehren und zusammstenllen
    */

    let stringArray = word.split("");
    let reversedArray = stringArray.reverse();
    let newString = reversedArray.join("");
    return newString;

};

console.log(reverseString("Noel"))
// Do not edit below this line
module.exports = reverseString;
