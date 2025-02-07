const Trie = function() {
    this.root = {};
}

Trie.prototype.insert = function(word) {
    let node = this.root;
    for(let c of word) {
        if(node[c] == null) node[c] = {};
        node = node[c];
    }
    node.isWord = true;
}

Trie.prototype.traverse = function(word) {
    let node = this.root;

    for(let c of word) {
        node = node[c];
        if(node == null) return null;
        // if(node[c] == null) return null;
        // node = node[c];
    }
    return node;
}

Trie.prototype.search = function (word) {
    let node = this.traverse(word);
    return node !== null && node.isWord === true;
}

Trie.prototype.startWith = function(word) {
    let node = this.traverse(word);
    return node !== null;
}

const trie = new Trie();
trie.insert("apple");
// trie.insert("eat");
// trie.insert("eat");
console.log(trie.search("app"));
// trie.insert("app");
console.log(trie.startWith("app"));