export function nextPermutation(nums: number[]) {
  let n = nums.length
  if (n === 1) {
    return
  }
  let pivot = n - 2

  while (pivot > 0 && nums[pivot] >= nums[pivot + 1]) {
    // 满足单调递增
    pivot--
  }
  if (pivot < 0) {
    // 如果都是单调递增的，直接返回最小的那个数
    reverse(nums, 0, n - 1)
    return
  }
  let lg = pivot + 1
  while (lg < n && nums[lg] > nums[pivot]) {
    lg++ // 找到最右侧的断层点
  }
  swap(nums, pivot, lg - 1) // 交换
  reverse(nums, pivot + 1, n - 1) // 从断层点往后翻转
}

function swap(nums: number[], l: number, r: number) {
  let temp = nums[l]
  nums[l] = nums[r]
  nums[r] = temp
}

function reverse(nums: number[], l: number = 0, r: number = nums.length - 1) {
  while (l < r) {
    swap(nums, l++, r--)
  }
}

const nums = [1, 2, 3]
nextPermutation(nums)

console.log(nums)
