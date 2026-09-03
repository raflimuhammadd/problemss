var twoSum = function(nums, target) {
    const saved = {};

    for (let i = 0; i < nums.length; i++) {
        const currentNum = nums[i];
        const diff = target - currentNum;
        const index = saved[diff];

        if (index !== undefined) return [index, i];

        saved[currentNum] = i;
    }
};

const nums = [3, 2, 4];
const target = 6;

const result = twoSum(nums, target);
console.log(result);