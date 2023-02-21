/**
 * @description 数组转🌲
 * @author tangc1
 * @date 2022-05-03 23:54:09
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

export function arrayToTree(arr: IArrayItem[]): ITreeNode | null {
    // id 和 treeNode 映射
    const idToTreeNode: Map<number, ITreeNode> = new Map()

    let root = null

    arr.forEach(({ id, name, parentId }) => {
        // 定义 tree node 并加入 map
        const treeNode = { id, name }
        idToTreeNode.set(id, treeNode)

        // 找到 parentId 并加入到 children
        const parentNode = idToTreeNode.get(parentId)
        if (parentNode) {
            if (parentNode.children == null) parentNode.children = []
            parentNode.children.push(treeNode)
        }

        // 找到根节点
        if (parentId == 0) {
            root = treeNode
        }
    })
    return root
}

const arr = [
    { id: 1, name: '部门A', parentId: 0 }, // 0代表无父级节点
    { id: 2, name: '部门B', parentId: 1 },
    { id: 3, name: '部门C', parentId: 1 },
    { id: 4, name: '部门D', parentId: 2 },
    { id: 5, name: '部门E', parentId: 2 },
    { id: 6, name: '部门F', parentId: 3 },
]

console.info(arrayToTree(arr));
