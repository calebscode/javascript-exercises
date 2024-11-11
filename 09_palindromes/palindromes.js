const palindromes = function (str) {
    if (str.length < 3) return true;
    // sanitize the string
    let chars = Array.from(str.toLowerCase());
    chars = chars.filter((char) => isAlphanumeric(char));

    let a = 0;
    let b = chars.length-1;
    while (b - a > 0) {
        if (chars[a] != chars[b]) return false;
        a++;
        b--;
    }
    return true;
};

function isAlphanumeric(char) {
    return char.match(/^\w+$/) != null;
}

// Do not edit below this line
module.exports = palindromes;
