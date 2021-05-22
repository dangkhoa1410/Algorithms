//Selection Sort recursive method
function selectionSort(arr,index=0){    
    //BASE CASE
    //Return the array if we reach the end of the array
    if(index == arr.length-1){
        return arr
    }

    //SORTING PROCESS
    //Loop through the array and swap the value which is greater than the check value
    var checkVal = arr[index]
    var idx = index

    for (let i=index; i<arr.length; i++){
        if(checkVal > arr[i]){
            checkVal = arr[i]
            idx = i
        }
    }

    arr[idx] = arr[index]
    arr[index] = checkVal
    
    //FORWARD PROCESS
    index++

    //RECURSIVE
    return selectionSort(arr,index)

}
test = [3,7,10,6,2,5,9,4,3,3]
console.log(selectionSort(test))