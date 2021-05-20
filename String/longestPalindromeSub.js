// Problem from https://leetcode.com/problems/longest-palindromic-substring/

// Given a string s, return the longest palindromic substring in s

// Input: s = "babad"
// Output: "bab"
// Note: "aba" is also a valid answer.

// Input: s = "cbbd"
// Output: "bb"

// Input: s = "a"
// Output: "a"

// Input: s = "ac"
// Output: "a"

/**
 * @param {string} s
 * @return {string}
 */

const longestPalindrome = s => {
    let palindromeSub = s[0]
    let count = 0
    
    //Method to check whether a string is Palindrome
    const isPalindrome = str => {
        //Compare value of index from 0 - half string
        let i=0

        while(i < str.length/2) {
            if(str[i] !== str[str.length-i-1]){
                return false
            }
            i++
        }
        return true
    }

    //Generate all posible subString with length 2 or more
    for (let i=0; i<s.length; i++){
        for (let j=1; j<s.length; j++){
            if(i+j < s.length){
                //Check if subString is a palindrome
                let temp = s.slice(i,i+j+1)
                if(isPalindrome(temp)){
                    if(count < temp.length){
                        //Check if this palindrome is the longest
                        count = temp.length
                        palindromeSub = temp
                    } 
                }
                
            }
        }
    }
    
    return palindromeSub
}