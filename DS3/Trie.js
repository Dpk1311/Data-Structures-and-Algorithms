class TrieNode{
    constructor(){
        this.children = {}
        this.end = false
    }
}

class Trie{
    constructor(){
        this.root = new TrieNode()
    }

    insert(word){
        let node = this.root

        for(let i=0;i<word.length;i++){
            if(!node.children[word[i]]){
                node.children[word[i]] = new TrieNode()
            }
            node = node.children[word[i]]
        }
        node.end = true
    }

    search(word){
        let node = this.root

        for(let i=0;i<word.length;i++){
            if(node.children[word[i]]){
                node = node.children[word[i]]
            }else {
                return false
            }
        }
        return node.end
    }

    startwith(prefix){
        let node = this.root

        for(let i=0;i<prefix.length;i++){
            if(node.children[prefix[i]]){
                node = node.children[prefix[i]]
            }else{
                return false
            }
        }
        this.printword(node,prefix)
    }

    printword(node,currentword){
        if(node.end){
            console.log(currentword);
        }

        for(let char in node.children){
            this.printword(node.children[char],currentword+char)
        }
    }
    print(){
        return this.printword(this.root," ")
    }

}


const trie = new Trie()

trie.insert("Cat")
trie.insert("nithi")
trie.insert("nithin")
trie.insert("Catoli")

// console.log(trie.search("Cat"));
trie.startwith("Ca")
trie.print()