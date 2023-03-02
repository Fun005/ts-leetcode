/**
 * 找字符
 * @param { string } str1
 * @param { string } str2
 * @returns { string }
 */

// 给定两个字符串，
// 从字符串2中找出字符串1中的所有字符，
// 去重并按照ASCII码值从小到大排列。

export function findString(str1: string, str2: string) {
  if (str1 === '' || str2 === '') return ''
  const s = new Set()
  for (let i = 0; i < str1.length; i++) {
    if (str2.includes(str1[i])) {
      s.add(str1[i])
    }
  }
  return [...s].sort().join('')
}