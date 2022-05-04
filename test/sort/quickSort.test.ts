import { quickSort1, quickSort2 } from '../../src/sort/quickSort';

describe('快速排序', () => {
    test('test case nums = []', () => {
        expect(quickSort1([])).toEqual([])
        expect(quickSort2([])).toEqual([])
    })
    test('test case nums = [3,1,2,6,4]', () => {
        const arr = [3, 1, 2, 6, 4]
        expect(quickSort1(arr)).toEqual([1, 2, 3, 4, 6])
        expect(quickSort2(arr)).toEqual([1, 2, 3, 4, 6])
    })
    test('test case nums = [1,2,3,5,6]', () => {
        const arr = [1, 2, 3, 5, 6]
        expect(quickSort1(arr)).toEqual([1, 2, 3, 5, 6])
        expect(quickSort2(arr)).toEqual([1, 2, 3, 5, 6])
    })
})