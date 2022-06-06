/**
 * @description z型变换 test case
 * @author tangc1
 * @date 2022-06-06 11:09:44
*/

import { zconvert } from '../../src/leetcode/ zigzag-conversion';

describe('z型变换 test case', () => {
    it('参数不符合条件', () => {
        expect(zconvert('', 2)).toBe('')
        expect(zconvert('LEETCODE', 1)).toBe('LEETCODE')
    })
    it('正常转换', () => {
        expect(zconvert("PAYPALISHIRING", 4)).toEqual('PINALSIGYAHRPI')
        expect(zconvert("PAYPALISHIRING", 3)).toEqual('PAHNAPLSIIGYIR')
        expect(zconvert("PINALSIGYAHR", 4)).toEqual('PIISGRNLYHAA')
        expect(zconvert("LEETCODE", 3)).toEqual('LCETOEED')
    })
})