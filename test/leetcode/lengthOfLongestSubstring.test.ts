/**
 * @description 无重复字符的最长子串
 * @author tangc1
 * @date 2022-07-01 17:24:22
*/

import { lengthOfLongestSubstring1, lengthOfLongestSubstring2 } from "../../src/leetcode/lengthOfLongestSubstring";

describe('无重复字符的最长子串 test case', () => {
    it('正常情况', () => {
        const arr = "abcabcbb"
        expect(lengthOfLongestSubstring1(arr)).toEqual(3)
        expect(lengthOfLongestSubstring2(arr)).toEqual(3)
    })

    it('空字符串', () => {
        expect(lengthOfLongestSubstring1('')).toBe(0)
        expect(lengthOfLongestSubstring2('')).toBe(0)
    })

    it('bbbbb', () => {
        expect(lengthOfLongestSubstring1('bbbbb')).toBe(1)
        expect(lengthOfLongestSubstring2('bbbbb')).toBe(1)
    })
    it('pwwkew', () => {
        expect(lengthOfLongestSubstring1('pwwkew')).toBe(3)
        expect(lengthOfLongestSubstring2('pwwkew')).toBe(3)
    })
})