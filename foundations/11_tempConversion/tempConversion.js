const convertToCelsius = function (temperature) {
  let celsius = (Number(temperature) - 32) * 5 / 9
  return +celsius.toFixed(1);
};

const convertToFahrenheit = function (temperature) {
  let fahrenheit = (Number(temperature)) * 9 / 5 + 32
  return +fahrenheit.toFixed(1);
}

// console.log(convertToFahrenheit(0));
// console.log(convertToCelsius(32));

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
