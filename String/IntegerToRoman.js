// Leetcode https://leetcode.com/problems/integer-to-roman/

/**
 * @param {number} num
 * @return {string}
 */
 var intToRoman = function(num) {
    str = ''

    //All possible combinations for Roman characters
    char = ["M","CM","D","CD","C","XC","L","XL","X","IX","V","IV","I"] 

    //Starting index
    idx = 0
    
    //Check whether number is larger 1000
    if(num>=1000){
        //Loop and print every 1000th we have
        for (var i=0; i<Math.floor(num/1000); i++){
            str += char[idx]
        }
        num = num - 1000 * i   
        
        idx++
    //If not, index will be the next index
    } else {
        idx++
    }
    
    //Check if number >=900, and if not, increment the index 
    if(num>=900){   
        str += char[idx]
        num = num - 900
        idx++
    } else {
        idx++
    }

    //Check if number >=500, and if not, increment the index 
    if(num>=500){
        str += char[idx]
        num = num - 500
        idx++
    } else {
        idx++
    }

    //Check if number >=400, and if not, increment the index 
    if(num>=400){
        str += char[idx]
        num = num - 400
        idx++
    } else {
        idx++
    }

    //Check if number >=100, and if not, increment the index 
    if(num >=100){
        //Loop and print every 100th we have
        for(var i=0; i<Math.floor(num/100);i++){
            str += char[idx]
        }
        num = num - 100*i
        idx++
    } else {
        idx++
    }

    //Check if number >=90, and if not, increment the index 
    if(num>=90){
        str += char[idx]
        num = num - 90
        idx++
    } else {
        idx++
    }

    //Check if number >=50, and if not, increment the index 
    if(num>=50){
        str += char[idx]
        num = num - 50
        idx++
    } else {
        idx++
    }

    //Check if number >=40, and if not, increment the index 
    if(num>=40){
        str += char[idx]
        num = num - 40
        idx++
    } else {
        idx++
    }

    //Check if number >=10, and if not, increment the index 
    if(num>=10){
        for (var i=0; i<Math.floor(num/10); i++){
            str += char[idx]
        }
        num = num - 10*i
        idx++
    } else {
        idx++
    }

    //Check if number >=9, and if not, increment the index 
    if(num>=9){
        str += char[idx]
        num = num -9
        idx++
    } else {
        idx++
    }

    //Check if number >=5, and if not, increment the index 
    if(num>=5){
        str += char[idx]
        num = num - 5
        idx++
    } else {
        idx++
    }

    //Check if number >= 4, and if not, increment the index 
    if(num>=4){
        str += char[idx]
        idx++
        num = num - 4
    } else {
        idx++
    }

    //Check if number >=1, print every character and reduce number to 0
    if(num>=1){
        while(num>0){
            str += char[idx]
            num--
        }
    } 
    
    return str
};