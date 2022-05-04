/**
 * @description move zero test
 * @author tangc1
 * @date 2022-05-04 19:13:24
*/

import { moveZero1, moveZero2 } from "../../src/leetcode/move-zero";

describe('move zero', () => {
    it('正常情况', () => {
        const arr = [1, 0, 3, 4, 0, 0, 11, 0]
        // moveZero1(arr)
        moveZero2(arr)
        expect(arr).toEqual([1, 3, 4, 11, 0, 0, 0, 0])
    })

    it('没有0', () => {
        const arr = [1, 3, 4, 11]
        // moveZero1(arr)
        moveZero2(arr)
        expect(arr).toEqual([1, 3, 4, 11])
    })

    it('全是0', () => {
        const arr = [0, 0, 0, 0]
        // moveZero1(arr)
        moveZero2(arr)
        expect(arr).toEqual([0, 0, 0, 0])
    })
})