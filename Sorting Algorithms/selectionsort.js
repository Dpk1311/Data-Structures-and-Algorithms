function Selectionsort(arr){
    for(let i=0;i<arr.length;i++){
        let lowest = i
        for(let j=i+1;j<arr.length;j++){
            if(arr[j]<arr[lowest]){
                lowest = j
            }
        }
        if(i !== lowest){
            [arr[i],arr[lowest]] = [arr[lowest],arr[i]]
        }
    }
    return arr
}

console.log(Selectionsort([23,6,4,8,11,2,4]));