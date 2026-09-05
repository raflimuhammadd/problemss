var reverse = function(x) {
    const MAX_INT = Math.pow(2, 31) - 1;  // 2147483647
    const MIN_INT = Math.pow(2, 31) * -1; // -2147483648
    
    const sign = x < 0 ? -1 : 1;
    let num = Math.abs(x);
    
    let result = 0;
    while (num !== 0) {
        const digit = num % 10;
        num = Math.trunc(num / 10);
        
        if (result > Math.floor(MAX_INT / 10)) return 0;
        if (result === Math.floor(MAX_INT / 10) && digit > 7) return 0;

        result = result * 10 + digit;
    }
    result = result * sign;
    if (result < MIN_INT || result > MAX_INT) return 0;
    
    return result;
};

console.log(reverse(123));    // Output: 321
console.log(reverse(-123));   // Output: -321
console.log(reverse(120));    // Output: 21
console.log(reverse(0));      // Output: 0
console.log(reverse(1534236469)); // Output: 0 (overflow case)