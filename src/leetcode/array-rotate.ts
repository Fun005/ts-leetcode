/**
 * @description 将一个数组旋转k步
 * @author tangc1
 * @date 2022-04-30 14:30:46
*/

export function arrayRotate1(arr: number[], k: number): number[] {
    const length = arr.length
    if (!k || length === 0) return arr

    const step = Math.abs(k % length) // 取绝对值

    for (let i = 0; i < step; i++) {
        const n = arr.pop()
        if (n != null) {
            arr.unshift(n)
        }
    }
    return arr
}

/**
 * @description concat
 * param {arr} arr
 * param {k} k
 * return {arr} arr
*/
export function arrayRotate2(arr: number[], k: number): number[] {
    const length = arr.length
    if (!k || length === 0) return arr

    const step = Math.abs(k % length) // 取绝对值

    const arr1 = arr.slice(-step)
    const arr2 = arr.slice(0, length - step)
    const result = arr1.concat(arr2)

    return result
}


// const arr1 = [1, 2, 3, 4, 5, 6, 7, 8]
// const arr2 = [1, 2, 3, 4, 5, 6, 7, 8]
// console.info(arrayRotate1(arr1, 4));
// console.info(arrayRotate2(arr2, 4));