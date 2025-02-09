const sumAll = function(a, b) {
    let sum = 0;

if (!Number.isInteger(a) || !Number.isInteger(b)) {
sum = "ERROR"
}

else if (a >= 0 && b >= 0 && a < b) {
    for(let i = a; i <= b; i++){
        sum += i
    }
}

else if (a >= 0 && b >= 0 && a > b) {
    for(let i = b; i <= a; i++){
        sum += i
    }

}

else {
    sum = "ERROR"
}

return sum

}


// Do not edit below this line
module.exports = sumAll;
