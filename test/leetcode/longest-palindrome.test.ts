/**
 * @description 最长回文子串 test
 * @author tangc1
 * @date 2022-05-05 21:59:49
*/
import { longestPalindrome } from "../../src/leetcode/longest-palindrome";

describe('最长回文子串 test', () => {
    it('正常情况', () => {
        expect(longestPalindrome('abcbc')).toBe('bcb')
        expect(longestPalindrome('abcdedcba')).toBe('abcdedcba')
    })
    it('空字符串', () => {
        expect(longestPalindrome('')).toBe('')
    })
    it('长度小于2', () => {
        expect(longestPalindrome('ab')).toBe('a')
        expect(longestPalindrome('a')).toBe('a')
    })
})