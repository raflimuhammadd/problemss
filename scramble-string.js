var isScramble = function(s1, s2) {
        const n = s1.length;
    const dp = Array.from({length: n + 1}, () => 
        Array.from({length: n}, () => 
            Array(n).fill(false)
        )
    );
    
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if (s1[i] === s2[j]) {
                dp[1][i][j] = true;
            }
        }
    }
    
    for (let len = 2; len <= n; len++) {
        for (let i = 0; i <= n - len; i++) {
            for (let j = 0; j <= n - len; j++) {
                for (let k = 1; k < len; k++) {
                    if ((dp[k][i][j] && dp[len - k][i + k][j + k]) ||
                        (dp[k][i][j + len - k] && dp[len - k][i + k][j])) {
                        dp[len][i][j] = true;
                        break;
                    }
                }
            }
        }
    }
    
    return dp[n][0][0];

};