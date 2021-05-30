export function isMatch (s: string, p: string): boolean {
  if (p.indexOf('*') === -1) {
    return p.length === s.length
  }
  return new RegExp(p).test(s)
}

console.log(isMatch("mississippi", "mis*is*p*."))