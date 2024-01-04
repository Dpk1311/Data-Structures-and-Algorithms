class mylinkedlist {
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
        this.tail.next = newnode
        this.tail = newnode
        this.length++
    }
    prepend(value) {
        const newnode = {
            value: value,
            next: null
        }
        newnode.next = this.head
        this.head = newnode
        this.length++
    }
    indexofnumber(index) {
        let count = 0
        let currentnode = this.head
        while (count != index) {
            currentnode = currentnode.next
            count++
        }
        return currentnode
    }
    insert(index, value) {
        if (index > this.length) {
            this.append(value)
        }
        const newnode = {
            value: value,
            next: null
        }
        let firstnumber = this.indexofnumber(index - 1)
        let secondnumber = firstnumber.next
        firstnumber.next = newnode
        newnode.next = secondnumber
        this.length++
    }
    remove(index) {
        let firstnumber = this.indexofnumber(index - 1)
        let removenumber = firstnumber.next
        firstnumber.next = removenumber.next
        this.length--
    }
    search(target) {
        let currentmode = this.head
        while (currentmode != null) {
            if (currentmode.value === target) {
                return true
            }
            currentmode = currentmode.next
        }
        return false
    }
    middle() {
        let slow = this.head
        let fast = this.head
        while (fast != null && fast.next != null) {
            slow = slow.next
            fast = fast.next.next
        }
        return slow.value
    }
    middledelete() {
        let slow = this.head
        let fast = this.head
        fast = fast.next.next
        while (fast != null && fast.next != null) {
            slow = slow.next
            fast = fast.next.next
        }
        slow.next = slow.next.next
        return this.head
    }
    reverse() {
        let currentmode = this.head
        let previous = null
        while (currentmode != null) {
            let next = currentmode.next
            currentmode.next = previous
            previous = currentmode
            currentmode = next
        }
        this.head = previous
        return this
    }
    printlist() {
        let currentmode = this.head
        let array = []
        while (currentmode != null) {
            array.push(currentmode.value)
            currentmode = currentmode.next
        }
        return array
    }
}

const linkedlist = new mylinkedlist(45)
linkedlist.append(55)
linkedlist.prepend(1)
linkedlist.insert(1, 54)
// console.log(linkedlist.search(54))
// linkedlist.reverse()
// linkedlist.middledelete()
// linkedlist.remove(3)
console.log(linkedlist.printlist());



function binarysearch(arr, target) {
    let left = 0
    let right = arr.length - 1
    while (left <= right) {
        mid = Math.floor((left + right) / 2)
        if (arr[mid] === target) {
            return 'found ' + arr[mid]
        }
        if (target < arr[i]) {
            right = mid - 1
        }
        else {
            left = mid + 1
        }
    }
    return 'not found'
}