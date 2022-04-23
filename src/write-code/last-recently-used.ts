/**
 * @description last recently used 最近使用(缓存)算法
 * @author tangc1
 * @date 2022-04-23 17:21:56
*/

// note:
// 用hash表存储数据，这样get、set才够快，O(1) ==> js中就是object和map
// 必须有序，常用数据放前面，不常用数据放后面 ==> 只能用map
// set虽然初始化后有序，但不支持可排序
// hash + 有序 ==> map

export class LRUCache {
    private length: number
    private cache: Map<any, any> = new Map()
    constructor(length: number) {
        if (length < 1) throw new Error('invalid length')
        this.length = length
    }

    get(key: any): any {
        if (!this.cache.has(key)) {
            return null
        }

        const result = this.cache.get(key)
        // 删除再添加，保证值处于最新鲜状态
        this.cache.delete(key)
        this.cache.set(key, result)

        return result
    }

    set(key: any, value: any) {
        if (this.cache.has(key)) {
            this.cache.delete(key)
        }
        this.cache.set(key, value)

        if (this.cache.size > this.length) {
            // 超出容量，则删除最旧的(缓存)数据
            const delKey = this.cache.keys().next().value
            this.cache.delete(delKey)
        }
    }
}

// const lruCache = new LRUCache(2)
// lruCache.set(1, 1,) // { 1: 1 }
// lruCache.set(2, 2) // { 1: 1, 2: 2,}
// console.info(lruCache.get(1)); // 1 { 2:2, 1:1}
// lruCache.set(3, 3) // { 1:1, 3:3 }
// console.info(lruCache.get(2)); // null
// lruCache.set(4, 4) // { 3:3, 4:4 }
// console.info(lruCache.get(1)); // null
// console.info(lruCache.get(3)); // 3 { 4: 4, 3: 3 }
// console.info(lruCache.get(4)); // 4 { 3: 3, 4: 4 }