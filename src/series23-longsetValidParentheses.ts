export function longestValidParentheses(s: string): number {
  const n = s.length
  if (n < 2) return 0
  for (let i = n % 2 === 0 ? n : n - 1; i > 0; ) {
    for (let j = 0; j < n - i + 1; j++) {
      if (isValid(s.substring(j, j + i))) {
        return i
      }
    }
    i -= 2
  }

  return 0
}

function isValid(x: string) {
  const stack: string[] = []
  for (let i = 0; i < x.length; i++) {
    if (x[i] === '(') {
      stack.push('(')
    } else if (stack.length && stack[stack.length - 1] === '(') {
      stack.pop()
    } else {
      return false
    }
  }

  return stack.length === 0
}
const s = ')()())'
const res = longestValidParentheses(s)
console.log(res)
