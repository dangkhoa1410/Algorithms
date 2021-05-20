// Leetcode https://leetcode.com/problems/median-of-two-sorted-arrays/
// Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.

// Input: nums1 = [1,3], nums2 = [2]
// Output: 2.00000
// Explanation: merged array = [1,2,3] and median is 2.

// Input: nums1 = [1,2], nums2 = [3,4]
// Output: 2.50000
// Explanation: merged array = [1,2,3,4] and median is (2 + 3) / 2 = 2.5.

// Input: nums1 = [0,0], nums2 = [0,0]
// Output: 0.00000

// Input: nums1 = [], nums2 = [1]
// Output: 1.00000

// Input: nums1 = [2], nums2 = []
// Output: 2.00000


/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
const findMedianSortedArrays = (nums1, nums2) => {
    const nums = []
    let median
    let i=0, j=0;
    
    //Loop through the arrays and merge the item respectively
    while(i<nums1.length && j<nums2.length){
        if(nums1[i] <= nums2[j]){
            nums.push(nums1[i])
            i++
        } else if(nums1[i] > nums2[j]) {
            nums.push(nums2[j])
            j++
        } else {
            i++
            j++
        } 
    }
    //Add remaining items of either array 1 or 2
    while (i<nums1.length){
        nums.push(nums1[i])
        i++
    }
    while (j<nums2.length){
        nums.push(nums2[j])
        j++
    }
    
    //If the merged array have odd length, median would be the middle item
    //Else, it would be the average of the two items in the middle
    let len = nums.length
    if(len % 2 === 0){
        median = (nums[len/2-1] + nums[len/2])/2
    } else {
        median = nums[Math.floor(len/2)]
    }
    
    return median
    
};
