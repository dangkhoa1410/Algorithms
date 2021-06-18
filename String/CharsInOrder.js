//Write a JavaScript function that returns a passed string with letters in alphabetical order. 
// Example string : 'webmaster' Expected Output : 'abeemrstw'
// Assume punctuation and numbers symbols are not included in the passed string.

const charsInOrder = str => {
    let dict = 'abcdefghijklmnopqrstuvwxyz'
    str = str.toLowerCase().split('')
    str = str.sort()
    str = str.join('')
    return str
}