const repeatString = function(text, count) {
    if (count < 0) return 'ERROR'
    output = "";
    for (let i = 0; i < count; i++) {
        output += text;
    }
    return output;
};

// Do not edit below this line
module.exports = repeatString;
