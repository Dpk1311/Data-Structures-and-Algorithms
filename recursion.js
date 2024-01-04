// function countdown(num) {
//     if (num <= 0) {
//         return console.log('all done');
//     }
//     console.log(num)
//     num--
//     countdown(num)
// }

// (countdown(5))

// function sum(nums) {
//     if (nums == 1) {
//         return 1
//     }
//     return nums + sum(nums - 1)
// }

// console.log(sum(4))

// function factorial(number){
//     if(number === 2){
//         return 2
//     }
//     return number * factorial(number-1)
// }

// console.log(factorial(4))

function fibonacci(n){
    if(n<2){
        return n
    }
    return fibonacci(n-1) + fibonacci(n-2)
}

console.log(fibonacci(4))