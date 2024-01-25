const palindromes = function (string) {
    let reversed = string.split('').reverse().join('').toLowerCase();
    reversed = reversed.replace(/.,!/g,'1')

    // let reverced = '';
    // for (let i = string.length - 1; i >= 0 ; i--) {     
    //     reverced += string[i];
    // }
    // if (reverced === string) {
    //     return true;
    // }
    // else {
    //     return false;
    // }
    return reversed;
};

console.log(palindromes('BilliS!.'));
// console.log(palindromes("billib"));
// Do not edit below this line

// module.exports = palindromes;
