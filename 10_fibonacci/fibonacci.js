const fibonacci = function(num) {
    let fibo = [1, 1]; 
    if (typeof num !== num) {
        num = parseInt(num);
    }
    if (num === 0) {
        return 0;
    }
    if (num < 0) {
        return "OOPS!!"
    }
    
    for (let i = 2; i < num; i++) {
        fibo[i] = fibo[i-2] + fibo[i-1];
    }
    console.log(fibo);
    return fibo[num -1];
};

// console.log(fibonacci(4));
// console.log(fibonacci(6));
// console.log(fibonacci(10));
// console.log(fibonacci(15));
// console.log(fibonacci(25));
// console.log(fibonacci(0));
// console.log(fibonacci(-25));
// console.log(fibonacci("0"));
// console.log(fibonacci("1"));
// console.log(fibonacci("2"));
// console.log(fibonacci("8"));
// Do not edit below this line
module.exports = fibonacci;
