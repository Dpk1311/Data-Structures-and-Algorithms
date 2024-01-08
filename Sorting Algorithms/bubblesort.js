function bubblesort(arr){
    let length = arr.length
    let swapped = false

    for(let i = 0;i<length-1 ;i++){
        swapped = false
        for(let j=0 ;j<length-i-1;j++){
            if(arr[j] > arr[j+1]){
                [arr[j],arr[j+1]] = [arr[j+1],arr[j]]
                swapped = true
            }
        }
        if(!swapped){
            break
        }
    }
    return arr
}

console.log(bubblesort([8,5,7,3,2])) 

8,5,7,3,2 //4comp

5,7,3,2,8 //3comp

5,3,2,7,8 //2comp

3,2,5,7,8 //1comp

2,3,5,7,8 //final



