function romanToInt(s: string): number {
  const romanMap = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
    IV: 4,
    IX: 9,
    XL: 40,
    XC: 90,
    CD: 400,
    CM: 900,
  }

  let len = s.length,
    num = 0
  const totalLen = len

  while (len) {
    if (Reflect.has(romanMap, s[totalLen - len] + s[totalLen - len + 1])) {
      num += (romanMap as any)[s[totalLen - len] + s[totalLen - len + 1]]
      len -= 2
    } else if (Reflect.has(romanMap, s[totalLen - len])) {
      num += (romanMap as any)[s[totalLen - len]]
      len--
    }
  }

  return num
}

export const res = romanToInt('LVIII')
console.log(res)
