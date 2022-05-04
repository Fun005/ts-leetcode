/**
 * @description 求 1-10000 之间的回文数
 * @author tangc1
 * @date 2022-05-04 22:20:02
*/

/**
 * @description 反转
 * param {number} max
 * return {array} []
*/
export function findPalindromeNumber1(max: number): number[] {
    const res: number[] = []
    if (max <= 0) return res
    for (let i = 1; i <= max; i++) {
        // 先转换成字符串，再转成数组，然后反转 比较
        const str = i.toString()
        if (str === str.split('').reverse().join('')) {
            res.push(i)
        }
    }
    return res
}

/**
 * @description 求 1 - max 之间的所有对称数（字符串前后比较）
 * param {Object} 
 * return {Object} 
*/
export function findPalindromeNumber2(max: number): number[] {
    const res: number[] = []
    if (max <= 0) return res

    for (let i = 1; i <= max; i++) {
        const str = i.toString()
        const length = str.length

        // 字符串头尾比较
        let flag = true
        let startIndex = 0
        let endIndex = length - 1

        while (startIndex < endIndex) {
            if (str[startIndex] !== str[endIndex]) {
                flag = false
                break;
            } else {
                startIndex++
                endIndex--
            }
        }
        if (flag) res.push(i)
    }
    return res
}

/**
 * @description 求 1 - max 之间的所有对称数（反转数字）
 * param {Object} 
 * return {Object} 
*/
export function findPalindromeNumber3(max: number): number[] {
    const res: number[] = []
    if (max <= 0) return res

    for (let i = 1; i <= max; i++) {
        let n = i;
        let rev = 0 // 存储反转数
        // 生成反转数字
        while (n > 0) {
            rev = rev * 10 + n % 10
            n = Math.floor(n / 10)
        }
        if (i === rev) res.push(i)
    }

    return res
}

// console.info(findPalindromeNumber1(1000));
// console.info(findPalindromeNumber2(1000));
// console.info(findPalindromeNumber3(1000));