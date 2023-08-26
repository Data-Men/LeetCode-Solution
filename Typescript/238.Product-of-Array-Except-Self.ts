function productExceptSelf(nums: number[]): number[] {
    const isContainZero = nums.includes(0);
    const isSingleZero = nums.indexOf(0) == nums.lastIndexOf(0) ? true : false;
    if (!isSingleZero) return new Array(nums.length).fill(0);

    const product = nums.reduce((pre, cur) => {
        if (cur !== 0) {
            pre ||= 1
            pre = pre * cur
        }
        return pre
    })
    return nums.map((val) => {
        if (val != 0 && isContainZero) {
            return 0
        } else if (val == 0) {
            return product;
        } else {
            return product / val;
        }
    });
};

console.log(productExceptSelf([1, 2, 3, 4]))
console.log(productExceptSelf([0,2,3,4]));