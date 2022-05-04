/**
 * 快速排序
 * @param { number[] } nums 
 * @returns { number[] } nums
 */
export function quickSort1(nums: number[]): number[] {
    // “<<”运算符执行左移位运算。在移位运算过程中，符号位始终保持不变。如果右侧空出位置，则自动填充为 0；超出 32 位的值，则自动丢弃。
    // “>>”运算符执行有符号右移位运算。与左移运算操作相反，它把 32 位数字中的所有有效位整体右移，再使用符号位的值填充空位。移动过程中超出的值将被丢弃。
    const mid = nums.length >> 2;

    function dfs(left: number, right: number) {
        for (let i = left; i < right; i++) {
            if (nums[i] > nums[i + 1]) {
                [nums[i], nums[i + 1]] = [nums[i + 1], nums[i]];
            }
        }
    }

    dfs(0, mid);
    dfs(mid, nums.length - 1);
    return nums;
}

export function quickSort2(arr: number[]): number[] {
    const length = arr.length
    if (length === 0) return arr

    const midIndex = Math.floor(length / 2)
    const midValue = arr[midIndex]

    const left: number[] = []
    const right: number[] = []
    for (let i = 0; i < length; i++) {
        if (i !== midIndex) {
            const v = arr[i]
            if (v < midValue) {
                left.push(v)
            }
            if (v > midValue) {
                right.push(v)
            }
        }
    }
    return quickSort2(left).concat([midValue], quickSort2(right))
}

// const arr = [3, 2, 4, 7, 4, 6, 8, 10, 5]

// // console.info(quickSort1(arr));
// console.info(quickSort2(arr));