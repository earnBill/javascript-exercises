const reverseString = function(string) {
    let revercedString = "";
    for (let i = string.length -1 ; i >= 0; i--) {
        revercedString += string[i];  
    }
    return revercedString;
};

// Do not edit below this line
module.exports = reverseString;


