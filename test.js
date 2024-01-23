class node{
    constructor(value){
        this.value = value
        this.left = null
        this.right = null
    }
}


class BinaryST{
    constructor(){
        this.root = null
    }

    isEmpty(){
        if(!this.root) return true
    }

    insert(value){
        const newnode = new node(value)
        if(this.isEmpty()){
            this.root = newnode
        }else{
            this.insertnode(this.root,newnode)
        }
    }

    insertnode(root,newnode){
        if(!root) return null

        if(newnode.value < root.value){
            if(!root.left){
                root.left = newnode
            }else{
                this.insertnode(root.left,newnode)
            }
        }else{
            if(!root.right){
                root.right = newnode
            }else{
                this.insertnode(root.right,newnode)
            }
        }
    }

    preorder(){
        let result = []
        this.preordertraversal(this.root,result)
        return result
    }

    preordertraversal(root,result){
        if(root){
            result.push(root.value)
            this.preordertraversal(root.left,result)
            this.preordertraversal(root.right,result)
        }
    }

    
}


const bst = new BinaryST()

bst.insert(45)
bst.insert(11)
bst.insert(32)
bst.insert(56)

console.log(bst.preorder());