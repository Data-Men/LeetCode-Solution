function longestConsecutive2(nums: number[]): number {
    if (nums.length == 0) return 0;
    let count = 1;
    let previous, result = 1;
    previous = Math.min(...nums);
    nums.splice(nums.indexOf(previous), 1)
    while (nums.length != 0) {

        if (nums.includes(previous + 1)) {
            count++;
            previous++;
        } else {
            count = 1;
            previous = Math.min.apply(Math, nums);
        }
        nums.splice(nums.indexOf(previous), 1);
        if (count > result) {
            result = count;
        }
    }
    return result;


};
function longestConsecutive(nums: number[]): number {
    if (nums.length == 0) return 0;
    let count = 1;
    let previous, result = 1;

    const sortedList = new Set(nums.sort((a, b) => a - b));

    for (const item of sortedList) {
        console.log(previous);

        if (previous) {
            if (item == previous + 1) {
                count++;
                previous++;
            } else {
                count = 1;
                previous = item;
            }

            if (count > result) {
                result = count;
            }
        } else {
            previous = item
        }

    }
    return result
};

//[3,5,8,6,1,9,2,7]
console.log(longestConsecutive([0, 3, 7, 2, 5, 8, 4, 6, 0, 1]))