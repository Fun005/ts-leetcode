/**
 * @description 二分查找
 * @author tangc1
 * @date 2022-05-01 17:19:09
*/

import { start } from "repl"

/**
 * @description 循环
 * param {array} arr
 * return {number} target
*/
export function binarySearch1(arr: number[], target: number): number {
    const length = arr.length
    if (length === 0) return -1

    let startIndex = 0
    let endIndex = length - 1
    while (startIndex <= endIndex) {

        const midIndex = Math.floor((startIndex + endIndex) / 2)
        const midValue = arr[midIndex]
        if (target < midValue) {
            // 目标值较小，继续左侧查找
            endIndex = midIndex - 1
        } else if (target > midValue) {
            startIndex = midIndex + 1
            // 目标值较大，继续右侧查找
        } else {
            // 目标值等于中间值
            return midIndex
        }
    }
    return -1
}

/**
 * @description 递归
 * param {Object} 
 * return {Object} 
*/
export function binarySearch2(arr: number[], target: number, startIndex?: number, endIndex?: number): number {
    const length = arr.length
    if (length === 0) return -1

    if (startIndex == null) startIndex = 0
    if (endIndex == null) endIndex = length - 1

    if (startIndex > endIndex) return -1

    const midIndex = Math.floor((startIndex + endIndex) / 2)
    const midValue = arr[midIndex]

    if (target < midValue) {
        // 目标值小于中间值，继续左侧查找
        return binarySearch2(arr, target, startIndex, midIndex - 1)
    } else if (target > midValue) {
        // 目标值大于中间值，继续右侧查找
        return binarySearch2(arr, target, midIndex + 1, endIndex)
    } else {
        return midIndex
    }
}

const arr = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 200]
const target = 40
// const res1 = binarySearch1(arr, 30)
// const res2 = binarySearch2(arr, 10)
// console.info(res1);
// console.info(res2);

// 循环会更快一些（非复杂度级） 因为递归会反复调用函数
console.info('性能测试');
// 性能测试 - 循环 
console.time('binarySearch1')
for (let i = 0; i < 100 * 10000; i++) {
    binarySearch1(arr, target) // 13 ms
}
console.timeEnd('binarySearch1')

// 性能测试 - 递归
console.time('binarySearch2')
for (let i = 0; i < 100 * 10000; i++) {
    binarySearch2(arr, target) // 33 ms
}
console.timeEnd('binarySearch2')