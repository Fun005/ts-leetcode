/**
 * @description 移动0到数组末尾
 * @author tangc1
 * @date 2022-05-04 19:03:56
*/

/**
 * 嵌套循环法
 * param { array } arr
 * return {} 
*/
export function moveZero1(arr: number[]): void {
    const length = arr.length
    if (length === 0) return

    let zeroLength = 0
    // O(n^2)
    for (let i = 0; i < length - zeroLength; i++) {
        if (arr[i] == 0) {
            arr.push(0)
            arr.splice(i, 1) // O(n)
            i--; // 数组截取了一个元素，i要递减，否则遇到连续0就会有错误
            zeroLength++
        }
    }
}

/**
 * @description 双指针
 * param { array } arr
 * return {} 
*/
export function moveZero2(arr: number[]): void {
    const length = arr.length
    if (length === 0) return

    let i
    let j = -1 // 指向第一个 0

    for (i = 0; i < length; i++) {
        if (arr[i] === 0) {
            // 第一个 0
            if (j < 0) {
                j = i
            }
        }

        if (arr[i] !== 0 && j >= 0) {
            [arr[i], arr[j]] = [arr[j], arr[i]]
            // const temp = arr[i]
            // arr[i] = arr[j]
            // arr[j] = temp
            j++
        }
    }
}

// const arr = [1, 0, 3, 4, 0, 0, 11, 0]
// moveZero2(arr)
// console.info(arr);