export function divide(dividend: number, divisor: number): number {
  let flag =
    (dividend > 0 && divisor < 0) || (dividend < 0 && divisor > 0) ? -1 : 1

  dividend = Math.abs(dividend)
  divisor = Math.abs(divisor)

  let q = 0,
    times = 0

  if (divisor === 1) {
    return Math.max((-2) ** 31, Math.min(dividend * flag, 2 ** 31 - 1))
  }

  while (dividend >= divisor) {
    const cur = dividend - (divisor << times)

    if (cur >= 0) {
      q += 1 << times
      times++
      dividend = cur
    } else {
      times--
    }
  }

  return Math.max((-2) ** 31, Math.min(q * flag, 2 ** 31))
}

const dividend = -2147483648,
  divisor = -1
const res = divide(dividend, divisor)

console.log(res)
