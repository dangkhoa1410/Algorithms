// Leetcode https://leetcode.com/problems/find-and-replace-pattern/

// Given a list of strings words and a string pattern, return a list of words[i] that match pattern. 
// You may return the answer in any order.

// A word matches the pattern if there exists a permutation of letters p so that after replacing 
// every letter x in the pattern with p(x), we get the desired word.

// Input: words = ["abc","deq","mee","aqq","dkd","ccc"], pattern = "abb"
// Output: ["mee","aqq"]
// Explanation: "mee" matches the pattern because there is a permutation {a -> m, b -> e, ...}. 
// "ccc" does not match the pattern because {a -> c, b -> c, ...} is not a permutation, since a and b map to the same letter.

// Input: words = ["a","b","c"], pattern = "a"
// Output: ["a","b","c"]


/**
 * @param {string[]} words
 * @param {string} pattern
 * @return {string[]}
 */
const findAndReplacePattern = (words, pattern) => {

    //Function to decode the string and generate a number string
    const patternFn = str => {
        let patternWord = ''
        let count = 1
        let map = []

        for (var i=0; i<str.length-1; i++){
            if(str[i] !== str[i+1] && map.includes(str[i]) === true){
                // If a character is already in the map, we will increment the count based on the index
                // Then add both the index and the count to the pattern string
                patternWord += map.indexOf(str[i])
                patternWord += count
                count = 1
            } else if(str[i] !== str[i+1] && map.includes(str[i]) === false) {
                // If a character is not in the map, we will add character to the map array                
                // Then add both the index and the count to the pattern string
                map.push(str[i])
                patternWord += map.indexOf(str[i])
                patternWord += count
                count = 1
            } else {
                count++
            }
        }
        //Add the last character to the string after loop ends
        if(map.includes(str[i])){
            patternWord += map.indexOf(str[i])
            patternWord += count
        } else {
            map.push(str[i])
            patternWord += map.indexOf(str[i])
            patternWord += count
        }
    
        return patternWord
    }

    //Compare the words and the pattern, then return the result
    const patternCheck = patternFn(pattern)
    const result = words.filter(val => patternFn(val) === patternCheck)

    return result
};
