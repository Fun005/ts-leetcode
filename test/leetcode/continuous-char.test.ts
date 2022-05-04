/**
 * @description 寻找连续出现最多的字符和个数 test
 * @author tangc1
 * @date 2022-05-04 21:37:40
*/

import { findContinuousChar } from "../../src/leetcode/continuous-char";

describe('寻找连续出现最多的字符和个数 test', () => {
    it('空字符串', () => {
        expect(findContinuousChar('')).toEqual({ char: '', length: 0 })
    })
    it('全都是连续字符', () => {
        expect(findContinuousChar('aaaaaa')).toEqual({ char: 'a', length: 6 })
    })
    it('无连续字符', () => {
        expect(findContinuousChar('abcdefg')).toEqual({ char: 'a', length: 1 })
    })
    it('正常情况', () => {
        expect(findContinuousChar('aaabbcccdeeeee1234')).toEqual({ char: 'e', length: 5 })
    })
})