//Flipping Coins to make alternate order. Find the minimum ways

function flipCoin(A){
    //Make a function to check the minimum ways to flip coins to make alternate order
    const check = arr => {
        let count = 0
        for(let i=0; i<arr.length-1; i++){
            if(arr[i] === 0){ //First one is 1
                if(arr[i+1] === 0){
                    arr[i+1] = 1
                    count++
                }
            } else { //First one is 0
                if(arr[i+1] === 1){
                    arr[i+1] = 0
                    count++
                }
            }
        }
        return count
    }
    const B = A.slice(1)
    const C = []
    if(A[0]===1){
        B.unshift(0)
    } else {
        B.unshift(1)
    }
    let [firstEl,...rest] = A
    if(firstEl === 1){
        const C = [0,...rest] 
    } else {
        const C = [1,...rest]
    }

    const first = check(A)
    const second = check(B) + 1

    if(first < second){
        return first
    } else {
        return second
    }

}

console.log(flipCoin([1, 1, 0, 1, 1]))
console.log(flipCoin([1, 1, 0, 0, 1, 1, 1]))