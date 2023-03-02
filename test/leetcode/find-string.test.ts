/**
 * @description 寻找字符串
 * @author tangc1
 * @date 2023-03-02 15:55:31
*/
import { findString } from "../../src/leetcode/find-string";

describe('寻找字符串 test', () => {
    it('字符串为空', () => {
        expect(findString('', '')).toEqual('')
        expect(findString('adasdafg', '')).toEqual('')
        expect(findString('', 'jdfgiguyq')).toEqual('')
    })
    it('正常情况', () => {
        expect(findString('bach', 'bbaaccddfg')).toEqual('abc')
        expect(findString('fach', 'bbaaccedfg')).toEqual('acf')
        expect(findString('badtg', 'badtg')).toEqual('abdgt')
    })
})