export function threeSumClosest(nums: number[], target: number): number {
  let n = 0,
    len = nums.length

  nums.sort((a, b) => a - b)
  const arr = []

  while (n < len) {
    if (n > 0 && nums[n] === nums[n - 1]) {
      n++
      continue
    }

    let left = n + 1
    let right = len - 1

    while (left < right) {
      const sum = nums[n] + nums[left] + nums[right]
      if (sum < target) {
        arr.push({
          distance: Math.abs(sum - target),
          sum,
        })
        while (left < right && nums[left] === nums[left + 1]) {
          left++
        }
        left++
      } else if (sum > target) {
        arr.push({
          distance: Math.abs(sum - target),
          sum,
        })
        while (left < right && nums[right] === nums[right - 1]) {
          right--
        }
        right--
      } else {
        return sum
      }
    }

    n++
  }

  arr.sort((a, b) => a.distance - b.distance)
  return arr[0].sum
}

const nums = [-1, 2, 1, -4],
  target = 1
const res = threeSumClosest(nums, target)

console.log(res)
