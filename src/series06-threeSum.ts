// 暴力穷举
export function threeSum(nums: number[]): number[][] {
  const len = nums.length
  const resArr: number[][] = []
  for (let i = 0; i < len; i++) {
    for (let j = i + 1; j < len; j++) {
      for (let k = j + 1; k < len; k++) {
        if (
          nums[i] + nums[j] + nums[k] === 0 &&
          isNotDuplication(resArr, nums[i], nums[j], nums[k])
        ) {
          resArr.push([nums[i], nums[j], nums[k]])
        }
      }
    }
  }

  return resArr
}

export function isNotDuplication(resArr: number[][], ...parmas: number[]) {
  let len = resArr.length
  const jLen = resArr.length

  // 去重
  while (len--) {
    const arr = resArr[jLen - len - 1]
    let aLen = 3
    const flagIndex: number[] = []

    while (aLen--) {
      let bLen = 3

      while (bLen-- > 0) {
        if (arr[aLen] === parmas[bLen] && !flagIndex.includes(bLen)) {
          flagIndex.push(bLen)
          if (flagIndex.length === 3) {
            return false
          }
          break
        }
      }
    }
  }
  return true
}

const nums = [-4, -2, 1, -5, -4, -4, 4, -2, 0, 4, 0, -2, 3, 1, -5, 0]
const res = threeSum(nums)

console.log(res)
