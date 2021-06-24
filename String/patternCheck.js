const checkPattern = (text, pattern) => {
    if (typeof text !== 'string' || typeof pattern !== 'string') {
      return 'Not a string'
    }
    const txtLength = text.length
    const patternLength = pattern.length
  
    // Iterate through the text until the txtLength - patternlength index
    for (let i = 0; i <= txtLength - patternLength; i++) {
      // For each character in the text check if the subsequent character
      // are matching the given pattern; if not break from the condition
      for (let j = 0; j < txtLength; j++) {
        if (text[i + j] !== pattern[j]) {
            break
        }
  
        // For each iteration of j check if the value of
        // j + 1 is equal to the length of the pattern
        if (j + 1 === patternLength) {
          return `Found pattern at ${i}`
        }
      }
    }
  }