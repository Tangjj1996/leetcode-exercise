"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.removeElement = void 0;
function removeElement(nums, val) {
    var i = 0;
    for (var j = 0, len = nums.length; j < len; j++) {
        if (nums[j] !== val) {
            nums[i] = nums[j];
            i++;
        }
    }
    return i + 1;
}
exports.removeElement = removeElement;
var nums = [3, 2, 2, 3], val = 3;
var res = removeElement(nums, val);
console.log(res);
//# sourceMappingURL=series18-removeElement.js.map