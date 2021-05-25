function bubbleSort(arr,index=0){    
    //BASE CASE
    //Return array if we reach the last index
    if (index == arr.length-1){
        return arr
    }
    //SORTING
    //Loop through the array and sort it    
    for (var i=0;i<arr.length-index;i++){
        if(arr[i]>arr[i+1]){
            var temp = arr[i]
            arr[i] = arr[i+1]
            arr[i+1] = temp
        }        
    }
    
    //FORWARD PROCESS
    //Move to the next index
    index++
    
    //RECURSIVE
    return bubbleSort(arr,index);    
}     