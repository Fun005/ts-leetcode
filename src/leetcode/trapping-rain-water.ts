/**
 * @description 接雨水: 给定 n 个非负整数表示每个宽度为 1 的柱子的高度图，计算按此排列的柱子，下雨之后能接多少雨水。
 * @author tangc1
 * @date 2022-07-01 18:12:01
*/

export function trapWater(height: number[]) {
    if (height.length === 0) return 0

    let result: number = 0
    let left: number = 0, right: number = height.length - 1 //初始化双指针
    let leftMax: number = 0, rightMax: number = 0 //左右两边最大高度
    while (left < right) {
        leftMax = Math.max(leftMax, height[left])
        rightMax = Math.max(rightMax, height[right])

        if (height[left] < height[right]) {
            //右边的柱子高于左边的柱子 计算这个位置的接水量 累加进结果
            result += leftMax - height[left]
            ++left
        } else {
            //左边的柱子高于或等于右边的柱子 计算这个位置的接水量 累加进结果
            result += rightMax - height[right]
            --right
        }
    }
    return result
}