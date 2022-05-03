/**
 * @description 二分查找 test
 * @author tangc1
 * @date 2022-05-01 17:35:57
*/

import { binarySearch1, binarySearch2 } from "../../src/utils/binary-search";

describe('二分查找 test二', () => {
    it('正常情况', () => {
        const arr = [10, 20, 30, 40, 50, 60]
        const target = 20
        expect(binarySearch1(arr, target)).toBe(1)
        expect(binarySearch2(arr, target)).toBe(1)
    })

    it('没有target值', () => {
        const arr = [10, 20, 30, 40, 50, 60]
        const target = 2
        expect(binarySearch1(arr, target)).toBe(-1)
        expect(binarySearch2(arr, target)).toBe(-1)
    })

    it('空数组', () => {
        const target = 2
        expect(binarySearch1([], target)).toBe(-1)
        expect(binarySearch2([], target)).toBe(-1)
    })
})