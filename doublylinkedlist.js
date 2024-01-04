class doubly{
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
        const newNode = {
            value : value,
            next : null,
            prev : null
        }
        newNode.prev = this.tail
        this.tail.next = newNode
        this.tail = newNode
        this.length++
    }
    prepend(value){
        const newnode = {
            value : value,
            next : null,
            prev : null
        }
        newnode.next = this.head
        this.head.prev = newnode
        this.head = newnode
        this.length++
    }
    printlist(){
        let array = []
        let currentnode = this.head
        while(currentnode != null){
            array.push(currentnode.value)
            currentnode = currentnode.next
        }
        return array
    }
    insertvalue(index,value){
        if(index >= this.length){
           return this.append(value)
        }
        const newnode = {
            value : value,
            next : null,
            prev : null
        }
        const leader = this.indexoffirst(index-1)
        const follower = leader.next
        leader.next = newnode
        newnode.prev = leader
        newnode.next = follower
        follower.prev = newnode
        this.length++
    }
    indexoffirst(index){
        let count = 0
        let currentnode = this.head
        while(count !== index){
            currentnode = currentnode.next
            count++
        }
        return currentnode
    }
    remove(index){
        const leader = this.indexoffirst(index-1)
        const toremove = leader.next
        toremove.prev = leader
        leader.next = toremove.next
        this.length--
    }
}

const doublyist = new doubly(10)
doublyist.append(44)
doublyist.prepend(7)
doublyist.insertvalue(1,741)
doublyist.remove(2)
console.log(doublyist.printlist());