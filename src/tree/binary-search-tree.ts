/**
 * @description 二叉搜索树
 * @author tangc1
 * @date 2022-05-03 15:27:39
*/

interface ITreeNode {
    value: number
    left: ITreeNode | null
    right: ITreeNode | null
}

/**
 * @description 前序遍历
 * param { ITreeNode } node
 * return {Object} 
*/
export function preOrderTraverse(node: ITreeNode | null): number[] {
    if (node == null) return []
    const res: number[] = []
    // @ts-ignore
    const recursion = node => {
        if (node) {
            res.push(node.value)
            recursion(node.left)
            recursion(node.right)
        }
    }
    recursion(node)
    return res
}

/**
 * @description 中序遍历
 * param { ITreeNode } node
 * return {Object} 
*/
export function inOrderTraverse(node: ITreeNode | null): number[] {
    if (node == null) return []
    const res: number[] = []

    // @ts-ignore
    const recursion = node => {
        if (node) {
            recursion(node.left)
            res.push(node.value);
            recursion(node.right)
        }
    }
    recursion(node)
    return res
}

/**
 * @description 后序遍历
 * param { ITreeNode } node
 * return {Object} 
*/
export function postOrderTraverse(node: ITreeNode | null): number[] {
    if (node == null) return []
    const res: number[] = []
    // @ts-ignore
    const recursion = node => {
        if (node) {
            recursion(node.left)
            recursion(node.right)
            res.push(node.value);
        }
    }
    recursion(node)
    return res
}

/**
 * @description 求二叉树第k小的值
 * param {Object} 
 * return {Object} 
*/
export function getKthValue(tree: ITreeNode, k: number): number | null {
    const arr: number[] = inOrderTraverse(tree)
    return arr[k - 1] || null
}

const tree: ITreeNode = {
    value: 1,
    left: {
        value: 2,
        left: {
            value: 4,
            left: {
                value: 8,
                left: null,
                right: null
            },
            right: {
                value: 9,
                left: null,
                right: null
            }
        },
        right: {
            value: 5,
            left: {
                value: 10,
                left: null,
                right: null
            },
            right: {
                value: 11,
                left: null,
                right: null
            }
        }
    },
    right: {
        value: 3,
        left: {
            value: 6,
            left: {
                value: 12,
                left: null,
                right: null
            },
            right: {
                value: 13,
                left: null,
                right: null
            }
        },
        right: {
            value: 7,
            left: {
                value: 14,
                left: null,
                right: null
            },
            right: {
                value: 15,
                left: null,
                right: null
            }
        }
    }
}

const bst: ITreeNode = {
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
// console.info(preOrderTraverse(tree));
// console.info(inOrderTraverse(tree));
// console.info(postOrderTraverse(tree));

// console.info(getKthValue(bst, 3));