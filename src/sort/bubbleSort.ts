/**
 * @description 冒泡排序
 * @author tangc1
 * @date 2022-04-22 16:31:10
*/

/**
 * 双重循环法
 * @param {number[]} nums
 * @return {number[]}
 */
export function bubbleSort1(nums: number[]): number[] {
    for (let i = 0; i < nums.length; i++) {
        for (let j = 0; j < nums.length - 1 - i; j++) {
            if (nums[j] > nums[j + 1]) {
                [nums[j], nums[j + 1]] = [nums[j + 1], nums[j]]
            }
        }
    }
    return nums
}

/**
 * 双重循环法 优化
 * @param {number[]} nums
 * @return {number[]}
 */
export function bubbleSort2(nums: number[]): number[] {
    for (let i = 0; i < nums.length; i++) {
        let flag = true
        for (let j = 0; j < nums.length - 1 - i; j++) {
            if (nums[j] > nums[j + 1]) {
                [nums[j], nums[j + 1]] = [nums[j + 1], nums[j]]
                flag = false
            }
        }
        if (flag) {
            return nums
        }
    }
    return nums
}

/**
 * 左右指针
 * @param nums 
 * @returns 
 */
export function bubbleSort3(nums: number[]): number[] {
    let left = 0
    let right = nums.length - 1
    let flag = true
    while (left < right) {
        for (let i = left; i < right; i++) {
            if (nums[i] > nums[i + 1]) {
                [nums[i], nums[i + 1]] = [nums[i + 1], nums[i]];
                flag = false;
            }
        }
        if (flag) {
            return nums;
        }
        right--;
        for (let i = right; i > left; i--) {
            if (nums[i] < nums[i - 1]) {
                [nums[i], nums[i - 1]] = [nums[i - 1], nums[i]];
            }
        }
        left++;
    }
    return nums
}

// const arr = [4, 5, 2, 7, 8, 1, 3, 9, 0, 12]
// const arr2 = [1, 2, 3, 4, 6]
// console.info('bubble1-->', bubbleSort1(arr2));
// console.info('bubble2-->', bubbleSort2(arr));
// console.info('bubble3-->', bubbleSort3(arr));