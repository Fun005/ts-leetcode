/**
 * @description 根据数组创建链表
 * @author tangc1
 * @date 2022-04-30 20:21:06
*/

export interface ILinkListNode {
    value: number
    next?: ILinkListNode
    prev?: ILinkListNode
}

export function createLinkList(arr: number[]): ILinkListNode {
    const len = arr.length
    if (len === 0) throw new Error('arr is empty')
    let curNode: ILinkListNode = {
        value: arr[len - 1]
    }

    if (len === 1) return curNode
    for (let i = len - 2; i >= 0; i--) {
        curNode = {
            value: arr[i],
            next: curNode
        }
    }

    return curNode
}