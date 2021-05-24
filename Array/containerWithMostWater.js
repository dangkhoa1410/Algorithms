//Leetcode https://leetcode.com/problems/container-with-most-water/

// Given n non-negative integers a1, a2, ..., an , where each represents a point at coordinate (i, ai). 
// n vertical lines are drawn such that the two endpoints of the line i is at (i, ai) and (i, 0). 
// Find two lines, which, together with the x-axis forms a container, such that the container contains the most water.

// Notice that you may not slant the container.

// Input: height = [1,8,6,2,5,4,8,3,7]
// Output: 49

// Input: height = [1,1]
// Output: 1

// Input: height = [1,2,1]
// Output: 2

/**
 * @param {number[]} height
 * @return {number}
 */
 var maxArea = function(height) {     
    let area = 0
    let length = height.length - 1 
    let start = 0
    let end = height.length - 1

    //If only 1 element, cannot build the container
    if(length === 0) {
        return 0
    }

    //Loop through the values to build the wall
    //Loop stop if the start and end values are the same
    while (start !== end) {
        //Area will be the shortest wall and the distance between start to end (or the length)
        if(height[start] < height[end]) {
            curHeight = height[start]
        } else {
            curHeight = height[end]
        }
        curArea = curHeight * length
        //If current Area is the max, remember it
        if (curArea > area) {
            area = curArea
        }
        //FORWARD PROCESS
        //We gonna move the shortest wall to the next value
        //Every time we move, the distance also reduce 
        if (height[start] <= height[end]) {
            start++
            length--
        } else {
            end--
            length--
        }
    }
    
    return area
};

console.log(maxArea([1,8,6,2,5,4,8,3,7]))
console.log(maxArea([4,3,2,1,4]))
console.log(maxArea([1,2,1]))
console.log(maxArea([1,1]))
console.log(maxArea([1]))