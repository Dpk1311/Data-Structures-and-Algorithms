//largest array

function largest(arr) {
    let largest = arr[0]
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > largest) {
            largest = arr[i]
        }
    }
    console.log('largest is', largest);
}

// largest([1,2,3,4,5,54])

//Smallest array

function smallest(arr) {
    let smallest = arr[0]
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < smallest) {
            smallest = arr[i]
        }
    }
    console.log('smallest is', smallest);
}

// smallest([1,2,3,4,5,54])

//Second largest

function slarget(arr) {
    let largest = arr[0]
    let slargest = -1
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > largest) {
            slargest = largest
            largest = arr[i]
        }
        else if (arr[i] < largest && arr[i] > slargest) {
            slargest = arr[i]
        }
    }
    console.log('second largest is', slargest);
}

// slarget([21,2,333,40,125,54])


//Second Smallest
function ssmallest(arr) {
    let smallest = arr[0]
    let ssmallest = Infinity
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < smallest) {
            ssmallest = smallest
            smallest = arr[i]
        }
        else if (arr[i] > smallest && arr[i] < ssmallest) {
            ssmallest = arr[i]
        }
    }
    console.log('Second smallest is', ssmallest);
}

// ssmallest([1,2,333,40,125,54])


//Checking if an array is sorted


function sort(arr) {
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] >= arr[i - 1]) {

        } else {
            return console.log('not sorted');
        }
    }
    return console.log('sorted');
}

// sort([1,2,3,4,5])

function sortinganarray(arr) {
    arr.sort((a, b) => a - b)
    console.log(arr);

}

// sortinganarray([2,8,45,7,1])

function reverse(arr) {
  let start = 0
  let end = arr.length - 1
  while(start < end){
    [arr[start],arr[end]] = [arr[end],arr[start]]
    start++
    end--
  }
  return arr
}   

console.log(reverse([1,22,5,7]));


function duplicate(arr) {
    let i = 0
    for (let j = 1; j < arr.length; j++) {
        if (arr[i] !== arr[j]) {
            arr[i + 1] = arr[j]
            i++
        }
    }
    arr.length = i + 1
    return arr
}

// console.log(duplicate([1, 2, 2, 5, 5, 7, 7, 8, 8, 11, 11]));


function pallindome(str){
    let j = str.length - 1
    for(let i = 0 ;i < str.length/2 ; i++){
        if(str[i] != str[j]){
            return false
        }
        j--
    }
    return true
}

// console.log(pallindome("appaa"));

function sumofnaturalnumbers(nums){
    let sum = 0
    for(let i = 1 ; i<=nums ; i++){
        sum = sum + i 
    }
    return sum
}

// console.log(sumofnaturalnumbers(10))


function sumofdigits(num){
    let sum = 0
    while(num > 0){
        sum += num%10
        num = Math.floor(num / 10)
    }
    return sum
}

// console.log(sumofdigits(1287));


//using While loop
function countdigit(num){
    num = Math.abs(num)
    let count = 0
    while(num > 0){
        count ++
        num = Math.floor(num / 10)
    }
    return count
}
// console.log(countdigit(21121));

function countdigitusingdowhile(num){
    num = Math.abs(num)
    let count = 0
    do{
        count++
        num = Math.floor(num / 10)
    }while(num > 0)
    return count 
}

// console.log(countdigitusingdowhile(-121));