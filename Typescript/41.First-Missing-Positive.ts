function firstMissingPositive(nums: number[]): number {
    const numsSet = new Set<number>();
    for (let j = 0; j < nums.length; j++) {
        if (nums[j] > 0) {
            numsSet.add(Math.abs(nums[j]));
        }
    }
    if (numsSet.size == 0) return 1
    const minelement = Math.min(...numsSet);
    const maxelement=minelement+numsSet.size;
    let i = minelement;
    for (; i <= maxelement; i++) {
        if (i !== 0 && !numsSet.has(i)) {
            break;
        }
    }
    return 1 < minelement ? 1 : i;
};