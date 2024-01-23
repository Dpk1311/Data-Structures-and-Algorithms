class Maxheap{
    constructor(){
        this.heap = []
    }

    insert(value){
        this.heap.push(value)

        let indexpos = this.heap.length - 1

        while(true){
            let parentpos = Math.floor((indexpos-1)/2)

            if(!this.heap[parentpos]) break
            if(this.heap[parentpos] >= this.heap[indexpos]) break

            [this.heap[indexpos],this.heap[parentpos]] = [this.heap[parentpos],this.heap[indexpos]]
            indexpos = parentpos
        }
        return this
    }

    extract(){
        let lastindex = this.heap.length - 1 ;

        [this.heap[0],this.heap[lastindex]] = [this.heap[lastindex],this.heap[0]] 

        let indexpos = 0
        let largest =  this.heap.pop()
        while(true){
            let swapto = indexpos
            let leftchild = (indexpos*2)+1
            let rightchild = (indexpos*2)+2 

            if(leftchild<this.heap.length && this.heap[leftchild] > this.heap[swapto]){
                swapto = leftchild
            }
            if(rightchild < this.heap.length && this.heap[rightchild] > this.heap[swapto]){
                swapto = rightchild
            }
            if(indexpos === swapto) break

            [this.heap[indexpos],this.heap[swapto]] = [this.heap[swapto],this.heap[indexpos]]
            indexpos = swapto
        }
        return largest
    }
}



function maxsorted(arr){
    let maxsort = new Maxheap()
    for(let i=0;i<arr.length;i++){
        maxsort.insert(arr[i])
    }

    let sorted = []

    while(maxsort.heap.length){
        sorted.push(maxsort.extract())
    }
    return sorted
}

let array=[4,5,6,3,7,8,9,12]

console.log(maxsorted(array));