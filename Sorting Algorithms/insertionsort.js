function insertionsort(arr){
    for(let i=1;i<arr.length;i++){
        let j = i - 1
        let currentelement = arr[i]
        while(j>=0 && arr[j] > currentelement){
            arr[j+1] = arr[j]
            j--
        }
        arr[j+1] = currentelement
    }
    return arr
}


console.log(insertionsort([2,5,8,7]))