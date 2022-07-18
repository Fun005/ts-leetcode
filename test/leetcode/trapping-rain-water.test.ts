/**
 * @description 接雨水 test case
 * @author tangc1
 * @date 2022-07-18 11:14:22
*/

import { trapWater } from "../../src/leetcode/trapping-rain-water";

describe('trap rain water', () => {
    it('empty array', () => {
        expect(trapWater([])).toBe(0)
    })
    it('正常情况', () => {
        expect(trapWater([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1])).toBe(6)
        expect(trapWater([4, 2, 0, 3, 2, 5])).toBe(9)
    })
})