const removeFromArray = function(a, b, c, d, e) {

    const result = a.filter(number => number !== b && number !== c && number !== d && number !== e)

    return result
    
};
console.log(removeFromArray([1, 2, 3], 3))
// Do not edit below this line
module.exports = removeFromArray;
