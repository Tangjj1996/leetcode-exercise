// 1. 暴力法 o(n^2)
// function maxArea(height: number[]): number {
//   const len = height.length
//   let maxArea = 0
//   for (let i = 0; i < len; i++) {
//     for (let j = i+1; j < len; j++) {
//       let min = height[i]
//       height[j] < min && (min = height[j])
//       maxArea < min * (j - i) && (maxArea = min * (j - i))
//     }
//   }
//   return maxArea
// }

export function maxArea(height: number[]): number {
  let i = 0,
    j = height.length - 1,
    res = 0

  while (i < j) {
    const hmin = Math.min(height[i], height[j])
    res = Math.max(res, hmin * (j - i))
    if (height[i] < height[j]) {
      ++i
    } else {
      --j
    }
  }

  return res
}

const lits = [1, 8, 6, 2, 5, 4, 8, 3, 7]
const res = maxArea(lits)

console.log(res)
