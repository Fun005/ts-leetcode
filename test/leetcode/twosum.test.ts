/**
 * @description 两数之和 test
 * @author tangc1
 * @date 2022-04-24 10:21:03
*/
import { twoSum1, twoSum2 } from "../../src/leetcode/twosum";

describe('两数之和 test', () => {
    it('两数之和 test case', () => {
        const arr = [1, 2, 4, 3, 5, 8, 7, 9]
        const target = 15
        expect(twoSum1(arr, target)).toEqual([5, 6])
        expect(twoSum2(arr, target)).toEqual([5, 6])
    })

    it('多个符合条件的值，取最先出现的', () => {
        const arr = [1, 2, 4, 3, 5, 8, 7, 9]
        const target = 9
        expect(twoSum1(arr, target)).toEqual([0, 5])
        expect(twoSum2(arr, target)).toEqual([2, 4])
    })
})