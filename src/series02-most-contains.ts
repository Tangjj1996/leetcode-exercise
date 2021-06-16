function maxArea(height: number[]): number {
  const len = height.length
  let maxArea = 0
  for (let i = 0; i < len; i++) {
    for (let j = i+1; j < len; j++) {
      let min = height[i]
      height[j] < min && (min = height[j])
      maxArea < min * (j - i) && (maxArea = min * (j - i))
    }
  }
  return maxArea
}
const lits = [4,3,2,1,4]
const res = maxArea(lits)

console.log(res)