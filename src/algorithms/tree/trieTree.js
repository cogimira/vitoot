function TrieTree() {
    this.rootes = [];
}

TrieTree.prototype.addPath = function(path) {
    if(!Array.isArray(path) || path.length < 1) {
        return;
    } else {
        let firstNode = this.addRootNode(path[0]);
        firstNode.loadPath(path);
    }
}

TrieTree.prototype.addRootNode = function (value) {
    for(let i = 0; i < this.rootes.length; i++) {
        if(this.rootes[i].value === value) {
            return this.rootes[i]
        }
    }
    let rootNode = new TrieNode(value);
    this.rootes.push(rootNode);
    return rootNode;
}



/**
 * trie
*/
function TrieNode(value) {
    this.value = value;
    this.children = [];
    this.str = null;
}

TrieNode.prototype.findChildByValue = function (value) {
    for(let i = 0; i < this.children.length; i++) {
        if(this.children[i].value === value) {
            return this.children[i];
        }
    }
    return null;
}

TrieNode.prototype.addChar = function(value) {
    let existNode = this.findChildByValue(value);
    if(existNode) {
        return existNode;
    } else {
        let node = new TrieNode(value);
        this.children.push(node);
        return node;
    }
}

TrieNode.prototype.addCharPath = function (pathChars, index) {
    if(index > pathChars.length - 1) {
        return;
    } else {
        let char = pathChars[index];
        let nextNode = this.addChar(char);
        let nextIndex = index + 1;
        nextNode.addCharPath(pathChars, nextIndex);
    }
}

TrieNode.prototype.loadPath = function(pathChar) {
    this.addCharPath(pathChar, 1);
}

