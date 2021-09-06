function permute(nums: number[]): number[][] {
  const len = nums.length
  const res: number[][] = []
  const current: number[] = []

  function dfs(index: number, nums: number[]) {
    if (current.length === len) {
      res.push(current.slice())
      return
    }

    for (let i = index; i < len; i++) {
      swap(nums, i, index)
      current.push(nums[index])
      dfs(index + 1, nums)
      current.pop()
      swap(nums, i, index)
    }
  }

  function swap(nums: number[], i: number, j: number) {
    const temp = nums[i]
    nums[i] = nums[j]
    nums[j] = temp
  }
  dfs(0, nums)

  return res
}

const nums = [3, 5, 7, 9]
const res = permute(nums)
console.log(res)
