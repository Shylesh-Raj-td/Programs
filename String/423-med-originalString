// Given a string s containing an out-of-order English representation of digits 0-9, return the digits in ascending order.

// Example 1:

// Input: s = "owoztneoer"
// Output: "012"
// Example 2:

// Input: s = "fviefuro"
// Output: "45"


/**
 * @param {string} s
 * @return {string}
 */
var originalDigits = function(s) {
    const count = new Array(10).fill(0); // To store the count of each digit (0-9)
    const charCount = {}; // To store the count of each character in the input string

    // Count the frequency of each character in the input string
    for (let char of s) {
        charCount[char] = (charCount[char] || 0) + 1;
    }

    // Identify digits using unique characters
    count[0] = charCount['z'] || 0; // 'z' is only in "zero"
    count[2] = charCount['w'] || 0; // 'w' is only in "two"
    count[4] = charCount['u'] || 0; // 'u' is only in "four"
    count[6] = charCount['x'] || 0; // 'x' is only in "six"
    count[8] = charCount['g'] || 0; // 'g' is only in "eight"

    // Identify remaining digits based on leftover characters
    count[3] = (charCount['h'] || 0) - count[8]; // 'h' is in "three" and "eight"
    count[5] = (charCount['f'] || 0) - count[4]; // 'f' is in "five" and "four"
    count[7] = (charCount['s'] || 0) - count[6]; // 's' is in "seven" and "six"
    count[1] = (charCount['o'] || 0) - count[0] - count[2] - count[4]; // 'o' is in "one", "zero", "two", "four"
    count[9] = (charCount['i'] || 0) - count[5] - count[6] - count[8]; // 'i' is in "nine", "five", "six", "eight"

    let result = '';
    for (let i = 0; i < 10; i++) {
        result += i.toString().repeat(count[i]);
    }

    return result;
};


////////////////////////////////////////

/**
 * @param {string} s
 * @return {string}
 */
var originalDigits = function(s) {
    const arr = new Array(10).fill(0);
    for (const c of s) {
        if (c === 'z') arr[0]++
        else if (c === 'x') arr[6]++
        else if (c === 'w') arr[2]++
        else if (c === 'u') arr[4]++
        else if (c === 'g') arr[8]++
        else if (c === 's') arr[7]++    //6, 7
        else if (c === 'v') arr[5]++    //5, 7
        else if (c === 'r') arr[3]++    //0, 3, 4
        else if (c === 'o') arr[1]++    //0, 1, 2, 4
        else if (c === 'i') arr[9]++    //5, 6, 8, 9
    }
    arr[7] -= arr[6];
    arr[5] -= arr[7];
    arr[3] -= arr[0] + arr[4];
    arr[1] -= arr[0] + arr[2] + arr[4];
    arr[9] -= arr[5] + arr[6] + arr[8];
    let res = "";
    for (let i = 0; i <=9; i++) {
        for (let j = 0; j < arr[i]; j++) {
            res += i;
        }
    }
    return res;
};