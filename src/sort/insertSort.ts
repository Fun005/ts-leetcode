/**
 * @description 插入排序
 * @author tangc1
 * @date 2022-06-01 17:40:41
*/

export function insertSort(nums: number[]): number[] {
    if (nums.length < 2) return nums

    for (let i = 1; i < nums.length; i++) {
        for (let j = i; j > 0; j--) {
            if (nums[j] < nums[j - 1]) {
                [nums[j], nums[j - 1]] = [nums[j - 1], nums[j]]
            }
            // break
        }
    }
    return nums
}

// const arr = [3, 2, 4, 7, 4, 6, 8, 10, 5]
// const arr = [9, 6, 8, 7, 5, 4, 3, 1, 2]
// console.info(insertSort(arr));