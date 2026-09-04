var lengthOfLongestSubstring = function(s) {
    let charMap = new Map();
    let maxLength = 0;
    let left = 0;

    for (let right = 0; right < s.length; right++) {
        let currentChar = s[right];

        if (charMap.has(currentChar)) {
            left = Math.max(left,charMap.get(currentChar) + 1);
        }

        charMap.set(currentChar, right);

        maxLength = Math.max(maxLength, right - left + 1);
    }  
    return maxLength;
};

console.log(lengthOfLongestSubstring("abcabcbb")); // Output: 3