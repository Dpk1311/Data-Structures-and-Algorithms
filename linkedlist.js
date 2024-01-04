class myLinkedList {
    constructor(value) {
        this.head = {
            value: value,
            next: null
        }
        this.tail = this.head
        this.length = 1
    }
    append(value) {
        const newnode = {
            value: value,
            next: null
        }
        this.tail.next = newnode;       
        this.tail = newnode;
        this.length++
    }
    prepend(value) {
        const node = {
            value: value,
            next: null
        }
        node.next = this.head
        this.head = node
        this.length++
    }
    printlist() {
        const array = []
        let currentnode = this.head
        while (currentnode !== null) {
            array.push(currentnode.value)
            currentnode = currentnode.next
        }
        return array
    }
    insert(index, value) {
        if (index >= this.length) {
            this.append(value)
        }
        const newNode = {
            value: value,
            next: null
        }
        const firstnumber = this.indexoffirst(index - 1)
        const secondnumber = firstnumber.next
        firstnumber.next = newNode
        newNode.next = secondnumber
        this.length++
    }

    indexoffirst(index) {
        let count = 0
        let currentnode = this.head
        while (count !== index) {
            currentnode = currentnode.next
            count++
        }
        return currentnode
    }
    remove(index) {
        const firstnumber = this.indexoffirst(index - 1)
        const removenumber = firstnumber.next;
        firstnumber.next = removenumber.next
        this.length--
    }
    search(target) {
        let currentnode = this.head

        while (currentnode !== null) {

            if (currentnode.value === target) {
                return true
            }
            currentnode = currentnode.next
        }
        return false
    }
    reverse() {
        let current = this.head
        let previous = null

        while (current) {
            let next = current.next
            current.next = previous
            previous = current
            current = next

        }

        this.head = previous
        return this
    }
    // reverse(head) {
    //     let current = head;
    //     let previous = null;

    //     while (current) {
    //         let next = current.next;
    //         current.next = previous;
    //         previous = current;
    //         current = next;
    //     }

    //     return previous;
    // }
    duplicateValue() {
        let currentValue = this.head
        while (currentValue) {
            let runner = currentValue.next
            while (runner && runner.next) {
                if (runner.next.value === currentValue.value) {
                    runner.next = runner.next.next
                    this.length--
                } else {
                    runner = runner.next
                }
            }
            currentValue = currentValue.next
        }
        return this
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
            slow = slow.next
            fast = fast.next.next
        }
        slow.next = slow.next.next
        return this.head
    }
    // pallindrome(){
    //     if(this.head == null || this.head.next == null){
    //         return true
    //     }
    //     let slow = this.head
    //     let fast = this.head
    //     while(fast.next != null && fast.next.next != null){
    //         slow = slow.next
    //         fast = fast.next.next
    //     }
    //     let newhead = this.reverse(slow.next)
    //     let first = this.head
    //     let second = newhead
    //     while(second != null){
    //         if(first.value != second.value){
    //             this.reverse(newhead)
    //             return false
    //         }
    //         first = first.next
    //         second = second.next
    //     }
    //     this.reverse(newhead)
    //     return true
    // }
}

const linkedlistis = new myLinkedList(10)
linkedlistis.append(10)
linkedlistis.append(114)
linkedlistis.prepend(4)
linkedlistis.insert(2, 44)
// linkedlistis.remove(1)
linkedlistis.reverse()
// console.log(linkedlistis.search(44))
// console.log(linkedlistis.middle())
// console.log(linkedlistis.deletemiddle())
// console.log(linkedlistis.pallindrome())
console.log(linkedlistis.printlist())







// class linkedlist{
//     constructor(value){
//         this.head = {
//             value: value,
//             next: null,
//         }
//         this.tail = this.head
//         this.length = 1
//     }
//     append(value){
//         const newnode = {
//             value : value,
//             next : null
//         }
//         this.tail.next = newnode
//         this.tail = newnode
//         this.length++
//     }
//     insert(index,value){
//         if(index >= this.length ){
//           return this.append(value)
//         }
//         const newNode = {
//             value : value,
//             next : null
//         }
//         const first = this.indexoffirst(index - 1)
//         const second = first.next
//         first.next = newNode
//         newNode.next = second
//         this.length++
//     }
//     indexoffirst(index){
//         let count = 0
//         let currentnode = this.head
//         while (count !== index){
//             currentnode = currentnode.next
//             count++
//         }
//         return currentnode
//     }
//     printlist(){
//         let array = []
//         let currentnode = this.head
//         while(currentnode!==null){
//             array.push(currentnode.value)
//             currentnode = currentnode.next
//         }
//         return array
//     }
//     prepend(value){
//         const newnode = {
//             value: value,
//             next:null
//         }
//         newnode.next = this.head
//         this.head = newnode
//         this.length++
//     }
// }


// const list = new linkedlist(10)
// list.append(54)
// list.prepend(4)
// list.insert(2,507)
// console.log(list.printlist())