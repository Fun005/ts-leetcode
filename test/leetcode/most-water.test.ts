/**
 * @description 盛水最多的容器 test case
 * @author tangc1
 * @date 2022-07-01 16:21:57
*/

import { maxArea } from '../../src/leetcode/most-water'

describe('盛水最多的容器 test case', () => {
    it('空数组', () => {
        expect(maxArea([])).toBe(0)
    })
    it('正常值1', () => {
        const arr1 = [1, 2, 3, 2, 1]
        const arr2 = [5, 2, 5, 2, 1]
        expect(maxArea(arr1)).toBe(4)
        expect(maxArea(arr2)).toBe(10)
    })
    it('正常值2', () => {
        const arr = [1, 8, 6, 2, 5, 4, 8, 3, 7]
        expect(maxArea(arr)).toBe(49)
    })
})
