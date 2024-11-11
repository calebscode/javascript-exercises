// 1, 1, 2, 3, 5, 8, 13, ...

const fibonacci = function(n) {
    // base cases
    if (!Number.isInteger(n)) n = parseInt(n);
    if (n < 0) return 'OOPS';
    if (n == 0) return 0;
    if (n < 3) return 1;
    //recursive call
    return fibonacci(n - 1) + fibonacci(n - 2);
};

// Do not edit below this line
module.exports = fibonacci;
