export function nextPermutation(nums: number[]) {
  let n = nums.length
  if (n === 1) {
    return
  }
  let k = n - 1
  while (k - 1 >= 0 && nums[k - 1] >= nums[k]) {
    k-- // 一直到最开始那个
  }

  if (k === 0) {
    reverse(nums, 0, n - 1)
  } else {
    let u = k
    while (u + 1 < n && nums[u + 1] > nums[k - 1]) {
      u++
    }
    swap(nums, k - 1, u)
    reverse(nums, k, n - 1)
  }
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

const nums = [1, 3, 2]
nextPermutation(nums)

console.log(nums)
