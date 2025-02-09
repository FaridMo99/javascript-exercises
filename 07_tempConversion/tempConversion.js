const convertToCelsius = function(temp) {

  const fahrenheitToCelsius = (temp - 32) * 5/9;
  const rounded = parseFloat(fahrenheitToCelsius.toFixed(1));

  return rounded;
};

const convertToFahrenheit = function(temp) {
  const celsiusToFahrenheit = (temp * 9/5) + 32
  const rounded = parseFloat(celsiusToFahrenheit.toFixed(1));

  return rounded;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
