// Write a JavaScript function that accepts a string as a parameter and counts the number ofvowels within the string.  
// Example string : 'The quick brown fox' Expected Output : 5

const checkVowels = str => {
    const vowels = 'aeiou'
    let count = 0
    
    //Check if input is a string
    if(typeof str !== "string"){
        console.log('Not a string')
        return -1
    }
    //Loop and count vowels
    str = str.toLowerCase()
    for (let i=0; i<str.length; i++) {
        for (let j=0; j<vowels.length; j++){
            if(str[i] === vowels[j]){
                count += 1
            }
        }
    }

    return count
} 

console.log(checkVowels('The quick brown fox'))