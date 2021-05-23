//Leetcode https://leetcode.com/problems/string-to-integer-atoi/

// Implement the myAtoi(string s) function, 
// which converts a string to a 32-bit signed integer
//Read the character and convert them to numbers
// 1) Ignore whitespace
// 2) Return sign +/-
// 3) If it is a non-digit character, return 0

// Input: s = "42"
// Output: 42

// Input: s = "   -42"
// Output: -42

// Input: s = "4193 with words"
// Output: 4193

// Input: s = "words and 987"
// Output: 0

// Input: s = "00-42a"
// Output: 0

// Input: s = "   - 42"
// Output: 0

const myAtoi = str => {
    let result = ''
    let sign = ''
    let idx=0

    //Skip whitespace
    str = str.trim()
    //Check for sign
    if (str[idx] === '-' || str[idx] === '+'){
        sign = str[idx]
        idx++
    }

    //Check and numbers, break the loop if it's not a number
    while (idx<str.length){      
        if(isNaN(str[idx]) === false && str[idx] !== ' '){
            result += str[idx]
            idx++
        } else {
            break
        } 
    }
    //Convert string to number
    result = parseInt(result)
    //If result is not a number, return 0
    if(isNaN(result)){
        return 0
    } else {
        if(sign === '-'){
            result = -result
        }
    }

    //Check for max and min
    const MAX = Math.pow(2,31) - 1
    const MIN = Math.pow(-2,31)

    if(result >= MAX){
        result = MAX
    } else if(result<= MIN){
        result = MIN
    }

    return result
}

console.log(myAtoi("00000-42a1234"))
console.log(myAtoi("   -42a1234"))
console.log(myAtoi("   - 42a1234"))


