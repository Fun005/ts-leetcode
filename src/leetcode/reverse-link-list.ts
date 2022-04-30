/**
 * @description 反转单向链表，返回反转之后的链表
 * @author tangc1
 * @date 2022-04-30 20:13:15
*/

import { createLinkList, ILinkListNode } from "../base/create-link-list";

export function reverseLinkList(listNode: ILinkListNode): ILinkListNode {
    // 定义三个指针
    let prevNode: ILinkListNode | undefined = undefined
    let curNode: ILinkListNode | undefined = undefined
    let nextNode: ILinkListNode | undefined = listNode

    // 以 nextNode 为基准，遍历链表
    while (nextNode) {
        // 如果是第一个元素，删除其next，防止循环引用
        // 第一个元素curNode，其prevNode不存在，nextNode存在
        if (curNode && !prevNode) {
            // @ts-ignore
            delete curNode.next
        }

        // 反转指针
        if (curNode && prevNode) {
            //@ts-ignore
            curNode.next = prevNode
        }

        // 三个指针后移
        prevNode = curNode
        curNode = nextNode
        nextNode = nextNode?.next
    }

    // 遍历到最后，curNode是最后一个元素，nextNode为空，此时要将curNode的next设置成prevNode
    // 注视: ! 的意思是，确定curNode.next是有值的，忽略掉语法检测
    curNode!.next = prevNode

    return curNode!
}


// const arr = [100, 200, 300, 400, 500]

// const list1 = createLinkList(arr)
// console.info(list1);
// const list2 = reverseLinkList(list1)
// console.info(list2);