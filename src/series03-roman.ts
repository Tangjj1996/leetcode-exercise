function intToRoman(num: number): string {
  const roman = [
    {
      head: 'I',
      next: 'V',
    },
    {
      head: 'X',
      next: 'L',
    },
    {
      head: 'C',
      next: 'D',
    },
    {
      head: 'M',
    },
  ]
  let res = ''

  let len = String(num).length
  const totalLen = len
  while (len--) {
    let targetNum = Number(String(num)[totalLen - len - 1])

    if (targetNum < 4) {
      while (targetNum--) {
        res += roman[len].head
      }
    } else if (targetNum === 4) {
      res = roman[len].head + roman[len].next
    } else if (targetNum < 9) {
      res = roman[len].next!
      while (targetNum-- > 5) {
        res += roman[len].head
      }
    } else {
      res = roman[len].head + roman[len + 1].head
    }
  }
  return res
}

const result = intToRoman(8)

console.log(result)
