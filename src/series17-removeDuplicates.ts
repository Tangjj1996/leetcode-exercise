export function removeDuplicates(nums: number[]): number {
  for (let i = 0; i < nums.length; ) {
    if (i === nums.length - 1) {
      break
    }
    if (nums[i] === nums[i + 1]) {
      nums.splice(i + 1, 1)
    } else {
      i++
    }
  }

  return nums.length
}

const nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4]
const res = removeDuplicates(nums)
console.log(res)
