function binarysearch(arr,target){
    l=0;
    r=arr.length-1
    while(l<=r){
        mid = Math.floor(l+r)/2
        if(target===arr[mid]){
            return 'found '+arr[mid]
        }
        if(target<arr[mid]){
            r = mid -1  
        }
        else{
            l = mid + 1
        }
    }return 'not found'

} 

console.log(binarysearch([1,2,3,5,6,7,12],2))

function binarysearch(arr,target){
    l=0
    r=arr.length-1
    while(l<=r){
        mid = Math.floor(l+r)/2
        if(target === arr[mid]){
            return arr[mid]
        }
        if(target <arr[mid]){
            r = mid -1
        }
        else{
            l = mid + 1
        }
    }
    return 'not found'
}



// function binarysearch(arr,target){
//     let left = 0
//     let right = arr.length - 1
//     while(left<=right){
//         mid = Math.floor(left+right/2)
//         if(target = arr[mid]){
//             return 'found '+ arr[mid]
//         }
//         if(target > arr[mid]){
//             left = arr[mid] + 1
//         }else{
//             right = arr[mid] -1
//         }
//     }
//     return -1
// }

// console.log(binarysearch([2,4,5,8,9,10,12,15,16,19],9));



// function Rbinarysearch(arr, l, r, target) {
//     if (l <= r) {
//         let mid = Math.floor((l + r) / 2);

//         if (arr[mid] === target) {
//             return 'Found '+arr[mid];
//         }

//         if (target < arr[mid]) {
//             return Rbinarysearch(arr, l, mid - 1, target);
//         } else {
//             return Rbinarysearch(arr, mid + 1, r, target);
//         }
//     }

//     return -1; // If the target is not found
// }


// console.log(Rbinarysearch([2,4,5,8,9,10,12,15,16,19],0,9,19))
