"use strict";
// 暴力穷举
// export function threeSum(nums: number[]): number[][] {
//   const len = nums.length
//   const resArr: number[][] = []
//   for (let i = 0; i < len; i++) {
//     for (let j = i + 1; j < len; j++) {
//       for (let k = j + 1; k < len; k++) {
//         if (
//           nums[i] + nums[j] + nums[k] === 0 &&
//           isNotDuplication(resArr, nums[i], nums[j], nums[k])
//         ) {
//           resArr.push([nums[i], nums[j], nums[k]])
//         }
//       }
//     }
//   }
Object.defineProperty(exports, "__esModule", { value: true });
exports.threeSum = void 0;
//   return resArr
// }
// export function isNotDuplication(resArr: number[][], ...parmas: number[]) {
//   let len = resArr.length
//   const jLen = resArr.length
//   // 去重
//   while (len--) {
//     const arr = resArr[jLen - len - 1]
//     let aLen = 3
//     const flagIndex: number[] = []
//     while (aLen--) {
//       let bLen = 3
//       while (bLen-- > 0) {
//         if (arr[aLen] === parmas[bLen] && !flagIndex.includes(bLen)) {
//           flagIndex.push(bLen)
//           if (flagIndex.length === 3) {
//             return false
//           }
//           break
//         }
//       }
//     }
//   }
//   return true
// }
function threeSum(nums) {
    var n = nums.length;
    var resArr = [];
    if (!nums || nums.length < 3) {
        return [];
    }
    nums.sort(function (a, b) {
        return a - b;
    });
    for (var i = 0; i < n; i++) {
        if (nums[i] > 0) {
            return resArr;
        }
        if (i > 0 && nums[i] === nums[i - 1]) {
            continue;
        }
        var left = i + 1;
        var right = n - 1;
        while (left < right) {
            if (nums[i] + nums[left] + nums[right] === 0) {
                resArr.push([nums[i], nums[left], nums[right]]);
                while (left < right && nums[left] === nums[left + 1]) {
                    left += 1;
                }
                while (left < right && nums[right] === nums[right - 1]) {
                    right -= 1;
                }
                left += 1;
                right -= 1;
            }
            else if (nums[i] + nums[left] + nums[right] < 0) {
                left += 1;
            }
            else if (nums[i] + nums[left] + nums[right] > 0) {
                right -= 1;
            }
        }
    }
    return resArr;
}
exports.threeSum = threeSum;
var nums = [-4, -2, 1, -5, -4, -4, 4, -2, 0, 4, 0, -2, 3, 1, -5, 0];
var res = threeSum(nums);
console.log(res);
//# sourceMappingURL=series06-threeSum.js.map