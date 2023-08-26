function productExceptSelf(nums) {
    var isContainZero = nums.includes(0);
    var isSingleZero = nums.indexOf(0) == nums.lastIndexOf(0) ? true : false;
    if (!isSingleZero)
        return new Array(nums.length).fill(0);
    var product = nums.reduce(function (pre, cur) {
        console.log(pre);
        if (cur !== 0) {
            pre ||= 1
            pre = pre * cur;
        }
        return pre;
    });


    return nums.map(function (val) {
        if (val != 0 && isContainZero) {
            return 0;
        }
        else if (val == 0) {
            return product;
        }
        else {
            return product / val;
        }
    });
}
;
// console.log(productExceptSelf([1, 2, 3, 4]));
console.log(productExceptSelf([0, 2, 3, 4]));
