const sumAll = function(from, to) {
    let state;
    if (!Number.isInteger(from) || !Number.isInteger(to) ) {
        return "Error";
    }
    if (from > to ) {
        let temp = from;
        from = to;
        to =temp;
    }

    let sum = 0;
    for (let i = from; i <= to; i++) {
        sum += i;
    }
    return sum;
};

//console.log(sumAll(5, 10));
// Do not edit below this line
module.exports = sumAll;

