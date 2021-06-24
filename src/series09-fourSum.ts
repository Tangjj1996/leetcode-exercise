export function fourSum(nums: number[], target: number): number[][] {
  if (nums.length < 4) {
    return []
  }
  nums.sort((a, b) => a - b)
  const arr = []

  for (let i = 0, len = nums.length - 3; i < len; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) {
      continue
    }

    for (let j = i + 1, jLen = nums.length - 2; j < jLen; j++) {
      if (j > i + 1 && nums[j] === nums[j - 1]) {
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

const nums = [-2, -1, -1, 1, 1, 2, 2],
  target = 0
const res = fourSum(nums, target)
console.log(res)
