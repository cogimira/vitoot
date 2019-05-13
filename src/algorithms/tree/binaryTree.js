const producer = require("../dataProducer");

// 前序遍历：根结点 ---> 左子树 ---> 右子树
// 中序遍历：左子树---> 根结点 ---> 右子树
// 后序遍历：左子树 ---> 右子树 ---> 根结点

// 二叉树
function binaryTree(value) {
    this.parent = null;
    this.value = value;
    this.left = null;
    this.right = null;
}

// 向二叉树添加一个值
binaryTree.prototype.addNode = function (value, parent) {
    if(value <= this.value) {
        if(!this.left) {
            this.left = new binaryTree(value);
            this.left.parent = parent;
        } else {
            this.left.addNode(value, this.left);
        }
    } else {
        if(!this.right) {
            this.right = new binaryTree(value);
            this.right.parent = parent;
        } else {
            this.right.addNode(value, this.right);
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

// 深度优先搜索 利用栈数据结构
binaryTree.prototype.depthSearch = function () {
    var stack = [];
    stack.push(this);
    while(stack.length) {
        var nodeTop = stack[stack.length -1];
        console.log(nodeTop.value);
        stack.pop();
        if(nodeTop.left) {
            stack.push(nodeTop.left);
        }
        if(nodeTop.right) {
            stack.push(nodeTop.right);
        }
    }
}

// 广度优先搜索 利用队列数据结构
binaryTree.prototype.breadSearch = function () {
    var queue = [];
    queue.push(this);
    while(queue.length) {
        var head = queue.shift();
        console.log(head.value);
        if(head.left) {
            queue.push(head.left);
        }
        if(head.right) {
            queue.push(head.right);
        }
    }
};

// 查询节点
binaryTree.prototype.search = function (target) {
    // var root = this;
    if(target == this.value) {
        return this;
    }
    if(!this.left && !this.right) {
        return null;
    } 
    if(target < this.value) {
        if(this.left) {
            return this.left.search(target);
        } else {
            return null;
        }
    }
    if(target > this.value) {
        if(this.right) {
            return this.right.search(target);
        } else {
            return null;
        }
    }
}

// 查找前驱节点 pre node
//  前驱节点val值小于该节点val值并且值最大的节点
// 1 如果x存在左孩子，则"x的前驱结点"为 "以其左孩子为根的子树的最大结点"
// (例如:节点10,前驱就是8);
// 2 如果x没有左孩子。则x有以下两种可能;
// 2.1 x是"一个右孩子"，则"x的前驱结点"为 "它的父结点";
// 2.2 x是"一个左孩子"，则查找"x的最低的父结点，并且该父结点要具有右孩子"，找到的这个"最低的父结点"就是"x的前驱结点";
binaryTree.prototype.findPreNode = function (target) {
    // 找到第一个node为target值的节点
    var targetNode = this.search(target);
    if(!targetNode) {
        console.log("不存在值为 " + target + " 的节点");
    }

    // 节点没有左边孩子
    if(!targetNode.left) {
        // 如果它是一个右孩子的话
        if(targetNode.parent.right && targetNode.parent.right.value === targetNode.value) {
            return targetNode.parent;
        }
    }


}


// 查找后继节点 suc node
// 后继节点val值大于该节点val值并且值最小的节点
// 1 如果x存在右孩子，则"x的后继结点"为 "以其右孩子为根的子树的最小结点"
// (例如:节点5,前驱就是6);
// 2 如果x没有右孩子。则x有以下两种可能;
// 2.1 x是"一个左孩子"，则"x的后继结点"为 "它的父结点";
// 2.2 x是"一个左孩子"，则查找"x的最低的父结点，并且该父结点要具有左孩子"，找到的这个"最低的父结点"就是"x的前驱结点";
binaryTree.prototype.findSucNode = function (target) {

}

// var testary = producer.produceIntAry(12);
var testary = "29-9-52-95-49-15-40-99-35-1-87-70".split("-");
for(var j = 0; j < testary.length; j++) {
    testary[j] = parseInt(testary[j]);
}
console.log(testary.join("-"));
var root = new binaryTree(testary[0]);
for(var i = 1; i < testary.length; i++) {
    root.addNode(testary[i], root);
}



var aa = root.search(49);
console.log(aa);

/** 
 * 

后继节点

*/
