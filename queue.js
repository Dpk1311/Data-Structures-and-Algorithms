class Node {
    constructor(value) {
        this.value = value,
            this.next = null
    }
}

class queue {
    constructor() {
        this.first = null
        this.last = null
        this.size = 0
    }
    enqueue(value) {
        const newnode = new Node(value)
        if (!this.first) {
            this.first = newnode
            this.last = newnode
        } else {
            this.last.next = newnode
            this.last = newnode
        }
        this.size++
        return this
    }

    dequeue() {
        if (!this.first) {
            return null
        }
        let dequeued = this.first
        this.first = dequeued.next
        dequeued.next = null

        this.size--
        if (this.size === 0) {
            this.last = null
        }
        return dequeued
    }

    toarray(){
        let arr = []
        let current = this.first
        while(current){
            arr.push(current.value)
            current = current.next
        }
        return arr
    }
}


const queue1 = new queue()

queue1.enqueue(54)
queue1.enqueue(77)
queue1.enqueue(45)
queue1.dequeue()
console.log(queue1.toarray())