// function Rbinarysearch(arr,target,left,right){
//     while(left <= right){
//         mid = Math.floor((left+right)/2)
//         if(arr[mid]===target){
//             return 'Found '+arr[mid]
//         }
//         if(target < arr[mid]){
//             return Rbinarysearch(arr,target,left,mid - 1)
//         }
//         else{
//             return Rbinarysearch(arr,target,mid+1,right)
//         }
//     }
//     return 'Not found'
// }

// console.log(Rbinarysearch([1,2,3,4,5],4,0,4))






let array = [1, 2, 3, 4, 5, 1, 2, 3]

let val = array.includes(5)
// console.log(val)

let val1 = array.indexOf(5)
// console.log(val1)

let val2 = array.findIndex(item => {
    return item === 4
})

// console.log(val2)

let val3 = array.find(item => {
    return item === 2
})

// console.log(val3)

function duplicate(array) {
    let unique = []
    for (let i = 0; i < array.length; i++) {
        if (unique.indexOf(array[i]) === -1) {
            unique.push(array[i])
        }
    }
    return unique
}

// console.log(duplicate(array));



class linkedlist{
    constructor(value){
        this.head = {
            value : value,
            next : null
        }
        this.tail = this.head
        this.length = 1
    }
    append(value){
        const Newnode = {
            value : value,
            next : null
        }
        this.tail.next = Newnode
        this.tail = Newnode
        this.length++
    }
    prepend(value){
        const newnode = {
            value : value,
            next : null
        }
        newnode.next = this.head
        this.head = newnode
        this.length++
    }
    insert(index,value){
        if(index > this.length){
            this.append(value)
        }
        const newnode = {
            value : value,
            next : null
        }
        const firstnumber = this.indexofnumber(index - 1)
        const secondnumber = firstnumber.next
        firstnumber.next = newnode
        newnode.next = secondnumber
        this.length++
    }
    indexofnumber(index){
        let count = 0
        let currentnode = this.head
        while(count != index){
            currnetnoe = currentnode.next
            count++
        }
        return currentnode
    }
    remove(index){
        let first = this.indexofnumber(index - 1)
        let second = first.next
        first.next = second.next
        this.length--
    }
    search(target){
        let current = this.head
        while(current != null){
            if(current.value = target){
                return true
            }
            current = current.next
        }
        return false
    }
    middle(){
        let slow = this.head
        let fast = this.head
        while(fast != null && fast.next != null){
            slow = slow.next
            fast = fast.next.next
        }
        return slow
    }
    deletemiddle(){
        let slow = this.head
        let fast = this.head
        fast = fast.next.next
        while(fast != null && fast.next != null){
            slow =slow.next
            fast =fast.next.next
        }
        slow.next = slow.next.next
        return this.head
    }
    reverse(){
        let current = this.head
        let prev = null
        while(current){
            let next = current.next
            current.next = prev
            prev = current
            current = next
        }
        this.head = prev
        return this
    }
    printlist(){
        let array = []
        let current = this.head
        while(current != null){
            array.push(current.value)
            current = current.next
        }
        return array
    }
}

const mylinkedlist = new linkedlist(45)

// mylinkedlist.prepend(12)
// mylinkedlist.insert(1,555)
// // mylinkedlist.reverse()
// console.log(mylinkedlist.middle().value);
// console.log(mylinkedlist.printlist());


class doublylinked{
    constructor(value){
        this.head = {
            value : value,
            next : null,
            prev : null
        }
        this.tail = this.head
        this.length = 1
    }
    append(value){
        const newnode = {
            value : value,
            next : null,
            prev : null
        }
        newnode.prev = this.tail
        this.tail.next = newnode
        this.tail = newnode
        this.length++
    }
    prepend(value){
       const newnode = {
        value : value,
        next :null,
        prev : null
       }
       newnode.next = this.head
       this.head.prev = newnode
       this.head = newnode
       this.length++
    }
    insert(index,value){
        if(index > this.length ){
            this.append(value)
        }
        const newnode = {
            value :value ,
            next : null,
            prev : null
        }
        const firstnumber = this.indexofnumber(index - 1)
        const secondnumber = firstnumber.next
        firstnumber.next = newnode
        newnode.prev = firstnumber
        newnode.next = secondnumber
        secondnumber.prev = newnode
        this.length++
    }

    indexofnumber(index){
        let count = 0
        let current = this.head
        while( count != index) {
            current = current.next
            count++
        }
        return current
    }
    remove(index){
        let firstnumber = this.indexofnumber(index - 1)
        let secondnumber = firstnumber.next
        secondnumber.prev = firstnumber
        firstnumber.next = secondnumber.next
        this.length--
    }
    printlist(){
        let array = []
        let current = this.head
        while(current){
            array.push(current.value)
            current = current.next
        }
        return array
    }
}

const doubly = new doublylinked(12)
doubly.append(11)
doubly.prepend(10)
// console.log(doubly.printlist());


function fibonachi(nums){
    if(nums < 2){
        return 2
    }
    return fibonachi(nums - 1)+ fibonachi(nums - 2)
}

function sum(nums){
    if(nums === 1){
        return 1
    }
    return nums + sum(nums - 1)
}

function factorial(nums){
    if(nums === 2 ){
        return 2
    }
    return nums * factorial(nums - 1)
}

function binearysearch(arr,target){
    let left = 0
    let right = arr.length - 1
    while(left <= right){
        let mid = Math.floor((left+right)/2)
        if( arr[mid] === target){
            return mid
        }
        if(target < arr[mid]){
            right = mid - 1
        }
        else{
            left = mid + 1
        }
    }
    return 'Not found'
}


function Rbinarysearch(arr,left,right,target){
    while(left <= right){
        let mid = Math.floor((left+right)/2)
        if(arr[mid]===target){
            return mid
        }
        if(target < arr[mid]){
            return Rbinarysearch(arr,left,mid - 1 , target)
        }
        else{
            return Rbinarysearch(arr,mid+1,right,target)
        }
    }
    return "Not Found"
}