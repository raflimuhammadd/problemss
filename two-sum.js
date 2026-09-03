var twoSum = function(nums, target) {
    const saved = {}; // saved memory than use array to store the index of the numbers

    for (let i = 0; i < nums.length; i++) {
        const currentNum = nums[i];
        const diff = target - currentNum;
        const index = saved[diff];

        if (index !== undefined) return [index, i];

        saved[currentNum] = i;
    }
};

const nums = [3, 2, 4];
const nums2 = [2, 7, 11, 15];
const nums3 = [3, 3];

const target = 6;
const target2 = 9;
const target3 = 6;

const result = twoSum(nums, target);
console.log(result);

const result2 = twoSum(nums2, target2);
console.log(result2);

const result3 = twoSum(nums3, target3);
console.log(result3);