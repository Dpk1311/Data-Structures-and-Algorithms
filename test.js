class mylinkedlist{
    constructor(value){
        this.head = {
            value : value,
            next : null
        }
        this.tail = this.head 
        this.length = 1
    }
    append(value){
        const newnode = {
            value:value,
            next:null
        }
        this.tail.next = newnode
        this.tail = newnode
        this.length++
    }
    prepend(value){
        const newnode = {
            value:value,
            next:null
        }
        newnode.next = this.head
        this.head = newnode
        this.length++
    }
    indexoffirst(index){
        let currentmode = this.head
        let count = 0
        while(count != index){
            currentmode = currentmode.next
            count++
        }
        return currentmode
    }
    insert(index,value){
        if(index> this.length){
            this.append(value)
        }
        const newnode = {
            value : value,
            next : null
        }
        const firstnumber = this.indexoffirst(index -1)
        const secondnumber = firstnumber.next
        firstnumber.next = newnode
        newnode.next = secondnumber
        this.length++
    }
    remove(index){
        const firstnumber = this.indexoffirst(index-1)
        const removenumber = firstnumber.next
        firstnumber.next = removenumber.next
        this.length--
    }
    search(target){
        let currentnode = this.head
        while(currentnode != null){
            if(currentnode.value == target){
                return console.log('true');
            }
            currentnode = currentnode.next
        }
        return console.log('false');
    }
    reverse(){
        let currentnode = this.head
        let previous = null
        while(currentnode != null){
            let next = currentnode.next
            currentnode.next = previous
            previous = currentnode
            currentnode = next
        }
        this.head = previous
        return this
    }
    middle(){
        let slow = this.head
        let fast = this.head
        while(fast != null && fast.next != null){
            slow = slow.next
            fast = fast.next.next
        }
        return slow.value
    }
    middledelete(){
        let slow = this.head
        let fast = this.head
        fast = fast.next.next
        while(fast != null && fast.next != null){
            slow = slow.next
            fast = fast.next.next
        }
        slow.next = slow.next.next
        return this.head
    }
    printlist(){
        let currentnode = this.head
        let array = []
        while(currentnode != null){
            array.push(currentnode.value)
            currentnode = currentnode.next
        }
        return array
    }
    
}


const linkedlist = new mylinkedlist(2)
// linkedlist.append(445)
// linkedlist.prepend(441)
// linkedlist.insert(1,87)
// linkedlist.search(4411)
// console.log(linkedlist.middle());
// console.log(linkedlist.middledelete());
// linkedlist.reverse()

const arraqy = [1,2,3,4,5,6]
arraqy.forEach(data => linkedlist.append(data))
// console.log(linkedlist.printlist());


function binarysearch(arr,target){
    let left = 0
    let right = arr.length-1
    while(left<=right){
        mid = Math.floor((left+right)/2)
        if(target === arr[mid]){
            return 'found '+arr[mid]
        }
        if(target < arr[mid]){
            right = mid - 1
        }
        else{
            left = mid + 1
        }
    }
    return 'not found'
}

// console.log(binarysearch([1,4,5,8,9,11],11))

let array = [1,5,7,2,8]

// let val = array.includes(21)
// let val = array.indexOf(7)
// let val = array.findIndex((item)=>{
//     return item === 7
// })
// let val = array.find((item)=>{
//     return item === 7
// })

// console.log(val)


// function sum(nums){
//     if(nums == 1 ){
//         return 1
//     }
//     return nums + sum(nums-1)
// }

// console.log(sum(4));

// function factorial(nums){
//     if(nums === 2){
//         return 2
//     }
//     return nums * factorial(nums-1)
// }

// console.log(factorial(4))

function sum(nums){
    if(nums === 1){
        return 1
    }
    return nums+ sum(nums - 1)
}

// console.log(sum(4));


function factorial(nums){
    if(nums === 2){
        return 2
    }
    return nums * factorial(nums - 1)
}

// console.log(factorial(4))


function fibonacci(n){
    if(n<2){
        return n
    }
    return fibonacci(n-1) + fibonacci(n-2)
}

// console.log(fibonacci(4))


function slargest(arr){
    let largest = arr[0]
    let slargest = -1
    for(let i = 0 ; i < arr.length ; i++){
        if(arr[i]>largest){
            slargest = largest
            largest =arr[i]
        }
        if(arr[i]<largest && arr[i] > slargest){
            slargest = arr[i]
        }
    }
    console.log('second largest is ',slargest);
}
slargest([1,2,3,4,5])


