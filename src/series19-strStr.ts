export function strStr(hayStack: string, needle: string): number {
  const hayLen = hayStack.length,
    needleLen = needle.length

  if ((hayStack === '' || hayLen < needleLen) && needle !== '') return -1

  if (needle === '') return 0

  for (let i = 0; i < hayLen; i++) {
    if (hayStack[i] === needle[0]) {
      let j = 0
      while (i + j < hayLen && j < needleLen && hayStack[i + j] === needle[j]) {
        j++
      }

      if (j === needleLen) {
        return i
      }
    }
  }
  return -1
}

const hayStack = 'aaaaa',
  needle = 'bba'
const res = strStr(hayStack, needle)

console.log(res)
