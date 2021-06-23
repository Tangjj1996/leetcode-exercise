export function letterCombinations(digits: string): string[] {
  if (!digits) return []

  const letterMap = new Map([
    [2, ['a', 'b', 'c']],
    [3, ['d', 'e', 'f']],
    [4, ['g', 'h', 'i']],
    [5, ['j', 'k', 'l']],
    [6, ['m', 'n', 'o']],
    [7, ['p', 'q', 'r', 's']],
    [8, ['t', 'u', 'v']],
    [9, ['w', 'x', 'y', 'z']],
  ])

  let arr: string[] = []

  for (let i = 0, len = digits.length; i < len; i++) {
    const innerArr = letterMap.get(Number(digits.charAt(i)))!

    const jArr = []
    for (let j = 0, jLen = innerArr.length; j < jLen; j++) {
      if (i === 0) {
        arr = innerArr
        break
      }
      for (let k = 0, kLen = arr.length; k < kLen; k++) {
        const str = arr[k] + innerArr[j]

        jArr.push(str)
      }
    }

    jArr.length && (arr = jArr)
  }

  return arr
}

const digits = '2'
const res = letterCombinations(digits)
console.log(res)
