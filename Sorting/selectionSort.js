//Selection Sort recursive method
function selectionSort(arr,index=0){    
    //base
    if(index == arr.length-1){
        return arr
    }
    //Sort the array
    var min = arr[index]
    var idx = index

    for (let i=index; i<arr.length; i++){
        if(min > arr[i]){
            min = arr[i]
            idx = i
        }
    }

    arr[idx] = arr[index]
    arr[index] = min
    
    //forward process
    index++
    //recursive
    return selectionSort(arr,index)

}
test = [3,7,10,6,2,5,9,4,3,3]
console.log(selectionSort(test))