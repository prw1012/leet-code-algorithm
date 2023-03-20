/*
 * @lc app=leetcode.cn id=1 lang=javascript
 *
 * [1] 两数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
// n 两层遍历 大概次数仕n*n  时间O(n^2) 空间复杂度O(1)
// 一次循环 时间复杂度仕O(n)  空间复杂度O(n)
var twoSum = function(nums, target) {
  // 你需要什么样的对象，告诉主办方
  let obj = {} 
  for(let i=0;i<nums.length;i++){
    let num = nums[i]
    if(num in obj){
      return [obj[num],i]
    }else{
      obj[target-num] = i
    }
  }
};
// @lc code=end



