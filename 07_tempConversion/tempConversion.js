const convertToCelsius = function(number1) {
  let celsius = Math.round((number1 - 32) * (5 / 9) * 10) / 10;
  return celsius;
};

const convertToFahrenheit = function(number2) {
  let fahrenheit = Math.round((number2 * ( 9 / 5) + 32) * 10) / 10;
  return fahrenheit;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
