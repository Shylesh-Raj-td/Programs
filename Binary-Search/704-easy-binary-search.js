// Given an array of integers nums which is sorted in ascending order, and an integer target, write a function to search target in nums. If target exists, then return its index. Otherwise, return -1.

// You must write an algorithm with O(log n) runtime complexity.

 

// Example 1:

// Input: nums = [-1,0,3,5,9,12], target = 9
// Output: 4
// Explanation: 9 exists in nums and its index is 4
// Example 2:

// Input: nums = [-1,0,3,5,9,12], target = 2
// Output: -1
// Explanation: 2 does not exist in nums so return -1

//Most optimised way
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let start = 0;
    let mid = parseInt(nums.length / 2);
    let high = nums.length - 1;

    while (mid <= high && mid >= start) {
        if (nums[mid] === target) {
            return mid;
        }

        if (nums[mid] < target) {
            start = mid + 1;
            mid = parseInt((start + high) / 2);
        }

        else {
            high = mid - 1;
            mid = parseInt((start + high) / 2);
        }
    }

    return -1;
};

//My code
/////////////////////////////////////////////////////////////////

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let l=0;
    let r=nums.length;
    while(l<=r){
        let mid = Math.floor((l+r)/2);
        if(nums[mid]===target){
            return mid
        }else if(nums[mid]<target){
            l=mid+1
        }else{
            r=mid-1
        }
    }
    return -1
};

//Another way
////////////////////////////////////////////////////////////////

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

let binarySearch = (nums, target) => {
    let left = 0, right = nums.length - 1;

    while (left <= right){
        let mid = Math.floor((left + right) / 2);

        if(nums[mid] == target){
            return mid;
        }

        else if (nums[mid] < target){
            left = mid + 1;
        }

        else{
            right = mid - 1;
        }
    }

    return - 1;
}


let binarySearchRecursive = (nums, left, right, target) => {
    let mid = Math.floor((left + right) / 2);
    let index = 0;

    if(left)
    if(nums[mid] == target)
    {
        return mid;
    }

    else if(nums[mid] > target) {
        return binarySearch(nums, left, mid - 1, target);
    }

    else if(nums[mid] < target){
        return binarySearch(nums, mid + 1, right, target);
    }

    
}


var search = function(nums, target) {

    return binarySearch(nums, target)
    //return binarySearchRecursive(nums, 0, nums.length - 1,  target);
};