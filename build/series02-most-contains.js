"use strict";
// 1. 暴力法 o(n^2)
// function maxArea(height: number[]): number {
//   const len = height.length
//   let maxArea = 0
//   for (let i = 0; i < len; i++) {
//     for (let j = i+1; j < len; j++) {
//       let min = height[i]
//       height[j] < min && (min = height[j])
//       maxArea < min * (j - i) && (maxArea = min * (j - i))
//     }
//   }
//   return maxArea
// }
Object.defineProperty(exports, "__esModule", { value: true });
exports.maxArea = void 0;
function maxArea(height) {
    var i = 0, j = height.length - 1, res = 0;
    while (i < j) {
        var hmin = Math.min(height[i], height[j]);
        res = Math.max(res, hmin * (j - i));
        if (height[i] < height[j]) {
            ++i;
        }
        else {
            --j;
        }
    }
    return res;
}
exports.maxArea = maxArea;
var lits = [1, 8, 6, 2, 5, 4, 8, 3, 7];
var res = maxArea(lits);
console.log(res);
//# sourceMappingURL=series02-most-contains.js.map