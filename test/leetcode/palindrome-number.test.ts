/**
 * @description 对称数
 * @author tangc1
 * @date 2022-05-04 23:34:36
*/
import { findPalindromeNumber1, findPalindromeNumber2, findPalindromeNumber3 } from "../../src/leetcode/palindrome-number";

describe('回文数 test', () => {
    it('正常情况', () => {
        expect(findPalindromeNumber1(200).length).toBe(28)
        expect(findPalindromeNumber2(200).length).toBe(28)
        expect(findPalindromeNumber3(200).length).toBe(28)
    })
    it('max <= 0', () => {
        expect(findPalindromeNumber1(0)).toEqual([])
        expect(findPalindromeNumber1(-1)).toEqual([])
        expect(findPalindromeNumber2(0)).toEqual([])
        expect(findPalindromeNumber2(-1)).toEqual([])
        expect(findPalindromeNumber3(0)).toEqual([])
        expect(findPalindromeNumber3(-1)).toEqual([])
    })
})