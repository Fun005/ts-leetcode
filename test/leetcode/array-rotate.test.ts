/**
 * @description 数组旋转k步 test
 * @author tangc1
 * @date 2022-04-30 14:57:53
*/
import { arrayRotate1, arrayRotate2 } from "../../src/leetcode/array-rotate";

describe('数组旋转k步', () => {
    it('正常情况', () => {
        const arr = [1, 2, 3, 4, 5, 6, 7]
        // expect(arrayRotate1(arr, 3)).toEqual([5, 6, 7, 1, 2, 3, 4])
        expect(arrayRotate2(arr, 3)).toEqual([5, 6, 7, 1, 2, 3, 4])
    })
    it('空数组', () => {
        const res = arrayRotate2([], 3)
        expect(res).toEqual([])
    })
    it('k=0', () => {
        const arr = [1, 2, 3, 4, 5, 6, 7]
        expect(arrayRotate2(arr, 0)).toEqual(arr)
    })
    it('k是负值', () => {
        const arr = [1, 2, 3, 4, 5, 6, 7]
        expect(arrayRotate2(arr, -3)).toEqual([5, 6, 7, 1, 2, 3, 4])
    })

    it('k不是数字', () => {
        const arr = [1, 2, 3, 4, 5, 6, 7]
        // @ts-ignore
        expect(arrayRotate2(arr, 'aaa')).toEqual(arr)
    })
})