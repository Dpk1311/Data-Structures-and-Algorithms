class Node {
    constructor(value) {
        this.value = value
        this.left = null
        this.right = null
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null
    }

    isEmpty() {
        if (!this.root) return true
    }

    insert(value) {
        const newnode = new Node(value)
        if (this.isEmpty()) {
            this.root = newnode
        } else {
            this.insertnode(this.root, value)
        }
    }

    insertnode(root, value) {
        if (value < root.value) {
            if (!root.left) {
                root.left = newnode
            } else {
                this.insertnode(root.left, value)
            }
        } else {
            if (!root.right) {
                root.right = newnode
            } else {
                this.insertnode(root.right, value)
            }
        }
    }

    search(root, value) {
        if (!root) return false

        if (value === root.value) return true

        if (value < root.value) {
            this.search(root.left, value)
        } else {
            this.search(root.right, value)
        }
    }

    preorder() {
        const result = []
        this.preordertraversal(this.root, result)
        return result
    }

    preordertraversal(root, result) {
        if (root) {
            result.push(root.value);
            this.preordertraversal(root.left, result)
            this.preordertraversal(root.right, result)
        }
    }

    inorder() {
        const result = []
        this.inordertraversal(this.root, result)
        return result
    }

    inordertraversal(root, result) {
        if (root) {
            this.inordertraversal(root.left, result)
            result.push(root.value);
            this.inordertraversal(root.right, result)
        }
    }

    postorder() {
        const result = []
        this.postordertraversal(this.root, result)
        return result
    }

    postordertraversal(root, result) {
        if (root) {
            this.postordertraversal(root.left,result)
            this.postordertraversal(root.right,result)
            result.push(root.value);
        }
    }

    bsf(){
        let queue = []
        let result = []

        queue.push(this.root)

        while(queue.length){
            let current = queue.shift()
            result.push(current.value)

            if(current.left){
                queue.push(current.left)
            }
            if(current.right){
                queue.push(current.right)
            }
        }
        return result
    }

    min(root){
        if(!root.left){
            return root.value
        }else{
            return this.min(root.left)
        }
    }

    max(root){
        if(!root.right){
            return root.value
        }else{
            return this.max(root.right)
        }
    }

    delete(value){
        this.deletenode(this.root,value)
    }

    deletenode(root,value){
        if(!root) return null

        if(value < root.value){
            root.left = this.deletenode(root.left,value)
        }else if (value > root.node){
            root.right = this.deletenode(root.right,value)
        }else{

            if(!root.left && !root.right) return null
            if(!root.left) return root.right
            if(!root.right) return root.left

            root.value = this.min(root.right)
            root.right = this.deletenode(root.right,root.value)
        }
        return root
    }
}