import { bubbleSort1, bubbleSort2, bubbleSort3 } from "../../src/sort/bubbleSort";

describe('快速排序', () => {
    test('test case nums = []', () => {
        expect(bubbleSort1([])).toEqual([])
        expect(bubbleSort2([])).toEqual([])
        expect(bubbleSort3([])).toEqual([])
    })
    test('test case nums = [3,1,2,6,4]', () => {
        const arr = [3, 1, 2, 6, 4]
        expect(bubbleSort1(arr)).toEqual([1, 2, 3, 4, 6])
        expect(bubbleSort2(arr)).toEqual([1, 2, 3, 4, 6])
        expect(bubbleSort3(arr)).toEqual([1, 2, 3, 4, 6])
    })
    test('test case nums = [1,2,3,5,6]', () => {
        const arr = [1, 2, 3, 5, 6]
        expect(bubbleSort1(arr)).toEqual([1, 2, 3, 5, 6])
        expect(bubbleSort2(arr)).toEqual([1, 2, 3, 5, 6])
        expect(bubbleSort3(arr)).toEqual([1, 2, 3, 5, 6])
    })
})