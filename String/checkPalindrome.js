const isPalindrome = str => {
        //Check value of index from 0- half string
        let i=0
        while(i < str.length/2) {
            if(str[i] !== str[str.length-i-1]){
                return false
            }
            
            i++
        }
    
        return true
    }
    
    // console.log(isPalindrome('racecar'))