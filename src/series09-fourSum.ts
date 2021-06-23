export function fourSum(nums: number[], target: number): number[][] {
  if (nums.length < 4) {
    return []
  }
  nums.sort((a, b) => a - b)
  const arr = []

  for (let i = 0, len = nums.length; i < len; i++) {
    for (let j = i + 1; j < len; j++) {
      if (len - i < 4 && nums[i] === nums[j]) {
        i = j
        continue
      }

      let left = j + 1
      let right = nums.length - 1

      while (left < right) {
        if (nums[i] + nums[j] + nums[left] + nums[right] > target) {
          right--
        } else if (nums[i] + nums[j] + nums[left] + nums[right] < target) {
          left++
        } else {
          arr.push([nums[i], nums[j], nums[left], nums[right]])
          while (left < right && nums[right] === nums[right - 1]) {
            right--
          }
          while (left < right && nums[left] === nums[left + 1]) {
            left++
          }
          left++
          right--
        }
      }
    }
  }

  return arr
}

const nums = [2, 2, 2, 2, 2],
  target = 8
const res = fourSum(nums, target)
console.log(res)
