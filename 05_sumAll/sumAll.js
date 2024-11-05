const sumAll = function(start, end) {
    // both args must be integers
    if (!Number.isInteger(start) || !Number.isInteger(end)) {
        return 'ERROR'
    }
    // doesn't work with negative numbers
    if (start < 0 || end < 0) {
        return 'ERROR'
    }
    // makes sure that start is less than end
    if (start > end) {
        let temp = start;
        start = end;
        end = temp;
    }
    
    // main logic
    let sum = 0;
    for (let i = start; i <= end; i++) {
        sum += i;
    }

    return sum;
};

// Do not edit below this line
module.exports = sumAll;
