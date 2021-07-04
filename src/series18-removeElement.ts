export function removeElement(nums: number[], val: number): number {
  let i = 0
  for (let j = 0, len = nums.length; j < len; j++) {
    if (nums[j] !== val) {
      nums[i] = nums[j]
      i++
    }
  }

  return i
}

const nums = [0, 1, 2, 2, 3, 0, 4, 2],
  val = 2
const res = removeElement(nums, val)

console.log(res)
