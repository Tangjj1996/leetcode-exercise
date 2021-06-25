export function isValid(s: string): boolean {
  const leftFlag = ['(', '[', '{'],
    rigthFlag = [')', ']', '}']
  const stack: string[] = []
  for (let i = 0, len = s.length; i < len; i++) {
    if (leftFlag.includes(s[i])) {
      stack.push(s[i])
    } else if (rigthFlag.includes(s[i])) {
      const index = rigthFlag.findIndex((item) => item === s[i])
      let aIndex = -1

      for (let aIn = stack.length - 1; aIn >= 0; aIn--) {
        if (stack[aIn] === leftFlag[index]) {
          aIndex = aIn
          break
        }
      }

      if (aIndex === -1 || aIndex !== stack.length - 1) {
        return false
      }
      stack.splice(aIndex, 1)
    }
  }

  return stack.length === 0
}

const s = '[[[]]]'
const res = isValid(s)
console.log(res)
