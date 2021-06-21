export function longestCommonPrefix(strs: string[]): string {
  if (strs.length < 1) return ''
  if (strs.length === 1) return strs[0]
  let first = strs[0].length,
    prefix = strs[0] ? strs[0][0] : ''

  const sLen = strs[0].length

  while (first--) {
    for (let i = 1, len = strs.length; i < len; i++) {
      if (strs[i].indexOf(prefix) !== 0) return prefix.slice(0, -1)
    }

    if (first === 0) return prefix

    prefix += strs[0][sLen - first]
  }

  return prefix
}

const arr = ['c', 'acc', 'ccc']
const res = longestCommonPrefix(arr)

console.log(res)
