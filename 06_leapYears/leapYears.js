const leapYears = function(year) {
    return year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0);
    // if ( year % 4 === 0 )  {
    //     if (year % 100 === 0) {
    //         if (year % 400 === 0) {
    //             return true;
    //         }
    //         return false;
    //     }
    //     return true;
    // }
    // else {
    //     return false;
    // }
};

// Do not edit below this line
module.exports = leapYears;
// console.log(leapYears(1984));
// console.log(leapYears(1985));
// console.log(leapYears(2004));
// console.log(leapYears(1800));
// console.log(leapYears(1900));
// console.log(leapYears(1600));
// console.log(leapYears(2000));
