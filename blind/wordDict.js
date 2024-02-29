 var WordDictionary = function() {
    this.trie = {};
 }

WordDictionary.prototype.addWord = function(word) {
    let node = this.trie;

    for(let char of word) {
        if(node[char] == null) node[char] = {};
        node = node[char];
    }
    node.isEnd = true;
}

WordDictionary.prototype.dfs = function(word, trie, index) {

    //base case
    if(word.length === index) {
        return trie.isEnd ? true : false;
    }

    let char = word[index];

    if(char === ".") {
        for(let key in trie) {
            console.log(key)
            console.log(trie[key])
            if(this.dfs(word, trie[key], index+1)) return true;
        }
    } else {
        if(trie[char] != null) {
            console.log(trie[char])
            return this.dfs(word, trie[char], index+1);
        }
    }

    return false;
}

WordDictionary.prototype.search = function(word) {
    return this.dfs(word, this.trie, 0);
}

const dict = new WordDictionary();
dict.addWord("dad");
dict.addWord("mad");
dict.addWord("bad");
// console.log(dict.search("pad"));
// console.log(dict.search(".ad"));
console.log(dict.search("b.."));