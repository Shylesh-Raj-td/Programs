// Given a string s and an integer k, return the maximum number of vowel letters in any substring of s with length k.

// Vowel letters in English are 'a', 'e', 'i', 'o', and 'u'.

 

// Example 1:

// Input: s = "abciiidef", k = 3
// Output: 3
// Explanation: The substring "iii" contains 3 vowel letters.
// Example 2:

// Input: s = "aeiou", k = 2
// Output: 2
// Explanation: Any substring of length 2 contains 2 vowels.

var maxVowels = function(s, k) {
    let cnt = vcnt = left = right = 0, maxi = -Infinity;

    while (right < s.length) {
        if (isVowel(s[right])) vcnt++;

        if (cnt >= k) {
            if (isVowel(s[left])) vcnt--;
            cnt--;
            left++;
        }

        cnt++;
        if (cnt == k) maxi = Math.max(maxi, vcnt);
        right++
    }

    function isVowel(char) {
        return char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u';
    }

    return maxi;
};

///////////////////////////////////////////////////////

/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var maxVowels = function(s, k) {
    if (k > s.length) return 0;
    
    const isVowel = (char) => {
        return char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u'
    }

    let maxCount = 0;
    let count = 0;

    let L = 0;
    for (let R = 0; R < s.length; R++) {
        if (isVowel(s[R])) count++;
        if (R - L + 1 > k) {
            if (isVowel(s[L])) {
                count--;
            }
            L++
        }
        maxCount = Math.max(maxCount, count);
    }

    return maxCount
};