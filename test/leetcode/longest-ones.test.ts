/**
 * @description leetcode1004-最大连续1的个数3⃣️ test case
 * @author tangc1
 * @date 2022-07-31 21:02:08
*/

import { longestOnes } from "../../src/leetcode/longest-ones";

describe('最大连续1的个数 test case', () => {
    it('输入不合法', () => {
        expect(longestOnes([], 1)).toBe(0)
        expect(longestOnes([1, 0, 0, 1, 1], 0)).toBe(0)
    })

    it('正常输入1', () => {
        const nums = [1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0]
        const k = 2
        expect(longestOnes(nums, k)).toBe(6)

    })
    it('正常输入', () => {
        const nums = [0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 1, 1, 0, 0, 0, 1, 1, 1, 1]
        const k = 3
        expect(longestOnes(nums, k)).toBe(10)
    })
})