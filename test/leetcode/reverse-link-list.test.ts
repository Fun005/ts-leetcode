/**
 * @description 反转单向链表 test
 * @author tangc1
 * @date 2022-04-30 21:06:20
*/
import { ILinkListNode, createLinkList } from "../../src/base/create-link-list";
import { reverseLinkList } from "../../src/leetcode/reverse-link-list";

describe('反转单向链表', () => {
    it('多个元素链表', () => {
        const node: ILinkListNode = { value: 100 }
        const node1 = reverseLinkList(node)
        expect(node1).toEqual({ value: 100 })
    })
    it('单个元素链表', () => {
        const node: ILinkListNode = createLinkList([100, 200, 300])
        const node1 = reverseLinkList(node)
        expect(node1).toEqual({
            value: 300,
            next: {
                value: 200,
                next: {
                    value: 100
                }
            }
        })
    })
})