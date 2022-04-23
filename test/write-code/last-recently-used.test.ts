/**
 * @description LRU cache test
 * @author tangc1
 * @date 2022-04-23 17:57:09
*/
import { LRUCache } from '../../src/write-code/last-recently-used'

describe('LRUCache test', () => {
    it('get set', () => {
        const lruCache = new LRUCache(2)
        lruCache.set('1', 100)
        lruCache.set('2', 200)
        expect(lruCache.get('1')).toBe(100)
        expect(lruCache.get('2')).toBe(200)
    })
    it('set 超出容量', () => {
        const lruCache = new LRUCache(2)
        lruCache.set('1', 100)
        lruCache.set('2', 200)
        lruCache.set('1', 101) // 重新 set
        lruCache.set('3', 300)
        expect(lruCache.get('1')).toBe(101)
        expect(lruCache.get('2')).toBe(null)
        expect(lruCache.get('2')).toBeNull()
        expect(lruCache.get('3')).toBe(300)
    })
    it('get 超出容量', () => {
        const lruCache = new LRUCache(2)
        lruCache.set('1', 100)
        lruCache.set('2', 200)
        lruCache.get('1')
        lruCache.set('3', 300)
        expect(lruCache.get('1')).toBe(100)
        expect(lruCache.get('2')).toBe(null)
        expect(lruCache.get('2')).toBeNull()
        expect(lruCache.get('3')).toBe(300)
    })
})