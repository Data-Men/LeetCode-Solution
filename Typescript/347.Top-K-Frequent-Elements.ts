function topKFrequent(nums: number[], k: number): number[] {
    const frequencyObj: { [key: number]: number } = {};

    for (let i = 0; i < nums.length; i++) {
        frequencyObj[nums[i]] ||= 0;
        frequencyObj[nums[i]] += 1;
    }

    const keys = Object.values(frequencyObj).sort((a, b) => b - a).slice(0, k);
    const result = new Set<number>()

    for (let j = 0; j < keys.length; j++) {
        const first = Object.values(frequencyObj).indexOf(keys[j])
        result.add(Number(Object.keys(frequencyObj)[first]))
        delete frequencyObj[Object.keys(frequencyObj)[first].toString()];
    }

    return Array.from(result)
};