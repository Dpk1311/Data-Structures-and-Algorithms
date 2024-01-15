function mergesort(arr){
    if(arr.length < 2) return arr

    const mid = Math.floor(arr.length/2)
    const left = arr.slice(0,mid)
    const right = arr.slice(mid)
    return merge(mergesort(left) , mergesort(right))
}

function merge(left,right){
    let sorted = []
    while(left.length && right.length){
        if(left[0] <= right[0]){
            sorted.push(left.shift())
        }else{
            sorted.push(right.shift())
        }
    }
    return [...sorted , ...left , ...right]
}


const arr = [1,2,58,4,-8,2]

console.log(mergesort(arr));