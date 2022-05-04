/**
 * @description 🌲转数组
 * @author tangc1
 * @date 2022-05-04 00:11:34
*/
interface ITreeNode {
    id: number
    name: string
    children?: ITreeNode[]
}

interface IArrayItem {
    id: number
    name: string
    parentId: number
}

export function treeToArray(root: ITreeNode): IArrayItem[] {
    // map
    const nodeToParent: Map<ITreeNode, ITreeNode> = new Map()
    const arr: IArrayItem[] = []

    // 广度优先遍历 queue
    const queue: ITreeNode[] = []
    queue.unshift(root) // 根节点入队

    while (queue.length > 0) {
        const curNode = queue.pop() // 出队
        if (!curNode) break

        const { id, name, children = [] } = curNode

        // 创建数组 push
        const parentNode = nodeToParent.get(curNode)
        const parentId = parentNode?.id || 0
        const item = { id, name, parentId }
        arr.push(item)

        // 子节点入队
        children.forEach(child => {
            // 映射 parent
            nodeToParent.set(child, curNode)

            // 入队
            queue.unshift(child)
        });
    }
    return arr
}

const tree = {
    id: 1,
    name: '部门A',
    children: [
        {
            id: 2,
            name: '部门B',
            children: [
                {
                    id: 4,
                    name: '部门D'
                },
                {
                    id: 5,
                    name: '部门E'
                }
            ]
        },
        {
            id: 3,
            name: '部门C',
            children: [
                {
                    id: 6,
                    name: '部门F'
                }
            ]
        }
    ]
}

console.info(treeToArray(tree));