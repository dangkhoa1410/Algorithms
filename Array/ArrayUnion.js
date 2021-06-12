//Union two sorted Arrays

function arrUnion(arr1,arr2){
    let i = 0
    let j = 0
    let newArr = []
    //loop through both and copy the values
    while(i<arr1.length && j<arr2.length){
        
        if(arr1[i] < arr2[j]){
            console.log(`Checking index i = ${i} - value = ${arr1[i]}`)
            console.log(`Checking index j = ${j} - value = ${arr2[j]}`)
            newArr.push(arr1[i])
            console.log(newArr)
            i++
        }

        if(arr1[i] > arr2[j]){
            console.log(`Checking index i = ${i} - value = ${arr1[i]}`)
            console.log(`Checking index j = ${j} - value = ${arr2[j]}`)
            newArr.push(arr2[j])
            console.log(newArr)
            j++
        }

        if(arr1[i] == arr2[j]){
            console.log(`Checking index i = ${i} - value = ${arr1[i]}`)
            console.log(`Checking index j = ${j} - value = ${arr2[j]}`)
            newArr.push(arr1[i])
            console.log(newArr)
            i++
            j++
        }                        
    }
    
    //check for remaining values
    if(arr1.length > arr2.length){
        console.log("Adding remaining values")
        for(i;i<arr1.length;i++){
            newArr.push(arr1[i])
        }
    } else {
        for(j;j<arr2.length;j++){
            console.log("Adding remaining values")
            newArr.push(arr2[j])
        }
    }    

    console.log(newArr)    

    return newArr
}

arrUnion([2,3,4,4,6,7],[1,2,4,4,4,4,7,8])