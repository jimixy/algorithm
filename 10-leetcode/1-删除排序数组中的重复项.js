// https://github.com/azl397985856/leetcode/blob/master/problems/26.remove-duplicates-from-sorted-array.md

// 双指针遍历
var removeDuplicates = function(nums) {
    const size = nums.length
    let slowP = 0
    for (let fastP = 0; fastP < size; fastP++) {
        if (nums[fastP] !== nums[slowP]) {
            slowP++
            nums[slowP] = nums[fastP]
        }
    }
    return slowP + 1
}

var nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4]
const res = removeDuplicates(nums)
console.log(res, nums)
