//Implementing stack using linked list

class Node{
    constructor(value){
        this.value = value
        this.next = null
    }
}

class stack {
    constructor(){
        this.first = null
        this.last = null
        this.size = 0
    }

    push(value){
        const newnode = new Node(value)
        if(this.size === 0){
            this.first = newnode
            this.last = newnode
        }else{
            newnode.next = this.first
            this.first = newnode
        }
        this.size++
        return this
    }

    pop(){
        if(!this.first) return null

        let popped = this.first
        this.first = popped.next
        popped.next = null
        this.size--

        if(this.size === 0){
            this.last = null 
        }
        return popped
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

const nstack = new stack()

nstack.push(654)
nstack.push(440)
nstack.push(78)
nstack.pop()
console.log(nstack.toarray());

// Don't forget to take a look at implementation of stack and queue using array