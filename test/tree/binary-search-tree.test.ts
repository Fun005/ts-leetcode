/**
 * @description 二叉搜索树 test
 * @author tangc1
 * @date 2022-05-03 16:33:24
*/
import { getKthValue } from "../../src/tree/binary-search-tree";
const bst = {
    value: 5,
    left: {
        value: 3,
        left: {
            value: 2,
            left: null,
            right: null
        },
        right: {
            value: 4,
            left: null,
            right: null
        }
    },
    right: {
        value: 7,
        left: {
            value: 6,
            left: null,
            right: null
        },
        right: {
            value: 8,
            left: null,
            right: null
        }
    }
}
describe('二叉搜索树', () => {
    it('正常情况', () => {
        const res = getKthValue(bst, 3)
        expect(res).toBe(4)
    })
    it('k不是正常值', () => {
        const res = getKthValue(bst, 0)
        expect(res).toBe(null)
    })
})