/**
 * @description 选择排序
 * @author tangc1
 * @date 2022-06-01 11:37:09
*/

export function selectSort(nums: number[]): number[] {
    let minIndex
    for (let i = 0; i < nums.length - 1; i++) {
        minIndex = i
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[minIndex] > nums[j]) {
                minIndex = j
            }
        }

        if (minIndex !== i) {
            [nums[minIndex], nums[i]] = [nums[i], nums[minIndex]]
        }
    }
    return nums
}

// const arr = [3, 2, 4, 7, 4, 6, 8, 10, 5]

// console.info(selectSort(arr));