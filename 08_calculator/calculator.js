const add = function(a, b) {
	const sum = a + b
  return sum
};

const subtract = function(a, b) {
  const sum = a - b
  return sum
};

const sum = function(a) {
  let sum = 0;
  a.forEach(num => sum += num);
  return sum;

}


const multiply = function(a) {
	let sum = 1
  for (const num of a){
    sum *= num
  }
  return sum
};

const power = function(a, b) {
// a wird mit a multipliert und zwar so oft wie b ist
let sum = 1;
for(let i = b; i > 0; i--){
 sum *= a
}

return sum

};

const factorial = function(a) { 
  let sum = 1; 
  for (let i = 2; i <= a; i++) {
      sum *= i;
  }
  return sum;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
