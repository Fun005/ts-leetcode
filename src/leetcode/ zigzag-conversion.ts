/** Z 字形变换
 * @description 
 * @author tangc1
 * @date 2022-06-06 10:14:20
*/

export function zconvert(s: string, numRows: number) {
    if (s === '' || numRows < 2) return s

    const arr: string[] = new Array(numRows).fill('')
    let index = 0
    let flag = -1

    for (let i = 0; i < s.length; i++) {
        const c = s[i]
        arr[index] += c
        if (index === 0 || index === numRows - 1) {
            flag = -flag
        }
        index += flag
    }

    return arr.join('')
}

// zconvert("PAYPALISHIRING", 3)
// zconvert("PINALSIGYAHR", 4)

// console.info(zconvert("PAYPALISHIRING", 4));
// console.info(zconvert("PAYPALISHIRING", 3));
// console.info(zconvert("PINALSIGYAHR", 4));
// console.info(zconvert("LEETCODE", 3));