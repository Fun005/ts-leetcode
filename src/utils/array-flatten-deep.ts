/**
 * 数组深度扁平化 使用push
 * @param { arr } arr
 */
export function flattenDeep1(arr: any[]): any[] {
    const res: any[] = []
    arr.forEach(item => {
        if (Array.isArray(item)) {
            const flatItem = flattenDeep1(item)
            flatItem.forEach(child => res.push(child))
        } else {
            res.push(item)
        }
    })
    return res
}

/**
 * 数组深度扁平化 使用concat
 * @param { arr } arr
 */
export function flattenDeep2(arr: any[]): any[] {
    let res: any[] = []
    arr.forEach(item => {
        if (Array.isArray(item)) {
            res = res.concat(flattenDeep2(item))
        } else {
            res = res.concat(item)
        }
    })
    return res
}


// 功能测试
const arr = [1, 2, [3, [4, 5, 6, [7, 8]], [{ a: 1 }, { b: 2, c: [10, 11, 12] }]], 13, 14]
console.info('srouce arr=', arr);
console.info(flattenDeep1(arr))
console.info(flattenDeep2(arr))