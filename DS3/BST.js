class Node {
    constructor(value) {
        this.left = null
        this.right = null
        this.value = value
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null
    }

    isEmpty() {
        if (!this.root) return true
    }

    Insert(value) {
        const newnode = new Node(value)
        if (this.isEmpty()) {
            this.root = newnode
        } else {
            this.insertNode(this.root, newnode)
        }
    }

    insertNode(root, newnode) {
        if (newnode.value < root.value) {
            if (root.left === null) {
                root.left = newnode
            } else {
                this.insertNode(root.left, newnode)
            }
        } else {
            if (root.right === null) {
                root.right = newnode
            } else {
                this.insertNode(root.right, newnode)
            }
        }
    }

    search(root, value) {
        if (!root) return false

        if (root.value === value) return true

        else if (value < root.value) {
            return this.search(root.left, value)
        } else {
            return this.search(root.right, value)
        }
    }

    preorder() {
        const result = []
        this.preordertraversal(this.root, result)
        return result

    }

    preordertraversal(root,result) {
        if (root) {
            result.push(root.value);
            this.preordertraversal(root.left,result)
            this.preordertraversal(root.right,result)
        }
    }

    inorder(root) {
        if (root) {
            this.inorder(root.left)
            console.log(root.value);
            this.inorder(root.right)
        }
    }

    postorder(root) {
        if (root) {
            this.postorder(root.left)
            this.postorder(root.right)
            console.log(root.value);
        }
    }

    bfs() {
        const result = []
        const queue = []

        queue.push(this.root)

        while (queue.length) {
            let current = queue.shift()
            result.push(current.value)

            if (current.left) {
                queue.push(current.left)
            }
            if (current.right) {
                queue.push(current.right)
            }
        }
        return result
    }

    min(root) {
        if (!root.left) return root.value
        else return this.min(root.left)
    }

    max(root) {
        if (!root.right) return root.value
        else return this.max(root.right)
    }

    delete(value) {
        this.root = this.deleteNode(this.root, value)
    }

    deleteNode(root, value) {
        if (!root) return null

        if (value < root.value) {
            root.left = this.deleteNode(root.left, value)
        } else if (value > root.value) {
            root.right = this.deleteNode(root.right, value)
        } else {
            if (!root.left && !root.right) return null

            if (!root.left) return root.right
            if (!root.right) return root.left
            root.value = this.min(root.right)
            root.right = this.deleteNode(root.right, root.value)
        }
        return root

    }
}


const bst = new BinarySearchTree()

// console.log('Is the tree empty = ', bst.isEmpty());


bst.Insert(10)
bst.Insert(5)
bst.Insert(15)
bst.Insert(3)
// bst.Insert(7)


console.log('value is ',bst.search(bst.root, 5));
// console.log(bst.bfs());
// console.log(bst.min(bst.root));
// console.log(bst.max(bst.root));
// bst.delete(10)
// console.log(bst.bfs());

console.log(bst.preorder());