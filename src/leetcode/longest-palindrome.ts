/**
 * @description 最长回文子串
 * @author tangc1
 * @date 2022-05-05 21:47:05
*/

/**
 * @param {string} s
 * @return {string}
 */
export function longestPalindrome(s: string): string {
    if (s.length < 2) return s

    let start = 0;
    let maxLength = 1;

    function helper(left: number, right: number) {
        while (left >= 0 && right < s.length && s[left] === s[right]) {
            const len = right - left + 1
            if (len > maxLength) {
                maxLength = len
                start = left
            }
            left--
            right++
        }
    }

    for (let i = 0; i < s.length; i++) {
        helper(i - 1, i + 1)
        helper(i, i + 1)
    }

    return s.substring(start, start + maxLength)
}

// console.info(longestPalindrome('abcbc'));
// console.info(longestPalindrome('ab'));
// console.info(longestPalindrome(''));