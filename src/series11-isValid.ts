export function isValid(s: string): boolean {
  const leftFlag = ['(', '[', '{'],
    rigthFlag = [')', ']', '}']
  const stack: string[] = []
  for (let i = 0, len = s.length; i < len; i++) {
    if (leftFlag.includes(s[i])) {
      if (stack.length) {
        return false
      }
      stack.push(s[i])
    } else if (rigthFlag.includes(s[i])) {
      const index = rigthFlag.findIndex((item) => item === s[i])
      const aIndex = stack.findIndex((item) => item === leftFlag[index])
      aIndex !== -1 && stack.splice(aIndex, 1)
    }
  }

  return true
}

const s = '{()}'
const res = isValid(s)
console.log(res)
