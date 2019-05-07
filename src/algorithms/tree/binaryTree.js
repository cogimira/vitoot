const producer = require("../dataProducer");
// 二叉树
function binaryTree(value) {
    this.value = value;
    this.left = null;
    this.right = null;
}

// 向二叉树添加一个值
binaryTree.prototype.addNode = function (value) {
    if(value <= this.value) {
        if(!this.left) {
            this.left = new binaryTree(value);
        } else {
            this.left.addNode(value);
        }
    } else {
        if(!this.right) {
            this.right = new binaryTree(value);
        } else {
            this.right.addNode(value);
        }
    }
}

// 前序遍历
binaryTree.prototype.preOrder = function (root) {
    if(!root) {
        return;
    }
    this.preOrder(root.left);
    console.log(root.value);
    this.preOrder(root.right);
}

// 中序遍历
binaryTree.prototype.inOrder = function (root) {
    if(!root) {
        return;
    }
    this.preOrder(root.left);
    this.preOrder(root.right);
    console.log(root.value);
}
// 后序遍历
binaryTree.prototype.postOrder = function (root) {
    if(!root) {
        return;
    }
    console.log(root.value);
    this.preOrder(root.left);
    this.preOrder(root.right);
}

// 深度优先搜索

// 广度优先搜索

var testary = producer.produceIntAry(20);
var root = new binaryTree(testary[0]);
for(var i = 1; i < testary.length; i++) {
    root.addNode(testary[i]);
}



root.postOrder(root);

