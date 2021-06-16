"use strict";
function maxArea(height) {
    var len = height.length;
    var maxArea = 0;
    for (var i = 0; i < len; i++) {
        for (var j = i + 1; j < len; j++) {
            var min = height[i];
            height[j] < min && (min = height[j]);
            maxArea < min * (j - i) && (maxArea = min * (j - i));
        }
    }
    return maxArea;
}
var lits = [4, 3, 2, 1, 4];
var res = maxArea(lits);
console.log(res);
//# sourceMappingURL=series02-most-contains.js.map