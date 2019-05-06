const aryProducer = require("../dataProducer");

function singleDirectList(value) {
    this.next = null;
    this.value = value;
}

singleDirectList.prototype.addNode = function addNode(value) {
    if(this.next == null) {
        var node = new singleDirectList(value);
        this.next = node;
    } else {
        this.next.addNode(value);
    }
}

function doubleDirectList(value) {
    this.pre = null;
    this.next = null;
    this.value = value;
}

doubleDirectList.prototype.addNode = function addNode(value) {
    if(this.next == null) {
        var node = new doubleDirectList(value);
        this.next = node;
        node.pre = this;
    } else {
        this.next.addNode(value);
    }
}


// 将链表转换成字符串
function list2Ary(header, data) {
    if(header.value) {
        data.push(header.value);
    } else {
        return;
    }
    //
    if(!header.next) {
        return;
    }

    list2Ary(header.next, data);
}
// gen 单向链表 值是随机的
function proSingleDirectList(num) {
    var testAry = aryProducer.produceSortedAry(num);
    var header = new singleDirectList(testAry[0]);
    for(var i = 1; i < testAry.length; i++) {
        header.addNode(testAry[i]);
    }
    var data = [];
    console.log("base ary:  ");
    console.log(testAry.join(" - "));
    list2Ary(header, data);
    console.log("listRes:  ");
    console.log(data.join(" > "));
    return header;
}

// gen双向链表 值是随机的
function proDoubleDirectList(num) {
    var testAry = aryProducer.produceSortedAry(num);
    var header = new doubleDirectList(testAry[0]);
    for(var i = 1; i < testAry.length; i++) {
        header.addNode(testAry[i]);
    }
    return header;
}

function dblist2Ary(header, data) {
    var ind = {};
    if(header.value) {
        ind.value = header.value;
        ind.nextValue = header.next ? header.next.value : null;
        ind.preValue = header.pre ? header.pre.value : null;
        data.push(ind);
    } else {
        return;
    }
    if(!header.next) {
        return;
    }
    dblist2Ary(header.next, data);
}

// proSingleDirectList(10);
// var dl = proDoubleDirectList(12);
// var dataD = [];
// dblist2Ary(dl, dataD);
// console.log(dataD);

// 单向环形链表
function singleDrectCircleList(value) {
    this.head = false;  // 环形链表初始化的时候设置为头
    this.value = value;
    this.next = null;

}
singleDrectCircleList.prototype.addNode = function addNode(value) {
    // 如果下一个节点是头部节点 说明到了链表的结尾
    if( this.next.head) {
        var node = new singleDrectCircleList(value);
        node.next = this.next;
        this.next = node;
    } else {
        this.next.addNode(value);
    }
}
// 将此节点设置为头部节点
singleDrectCircleList.prototype.initHead = function initHead() {
    this.head = true;
    this.next = this;
}

// 产生一个环形链表
function proSingleDrectCircleList(num) {
    var testAry = aryProducer.produceSortedAry(num);
    var header = new singleDrectCircleList(testAry[0]);
    header.initHead();
    for(var i = 1; i < testAry.length; i++) {
        header.addNode(testAry[i]);
    }
    return header;
}

// 测试环形链表 打印
// var data = [];
// function tcdcl(head) {
//     data.push(head.value);
//     if(!head.next.head) {
//         cdcl(head.next);
//     }else {
//         data.push(head.value + " next node is head value >>");
//         data.push(head.next.value);
//     }
// }
// 循环单向链表测试
// var cdl = proSingleDrectCircleList(5);
// tcdcl(cdl);
// console.log(data);

// 双向循环链表
function doubleDirectCircleList(value) {
    this.value = value;
    this.head = false;
    this.next = null;
    this.pre = null;
}

doubleDirectCircleList.prototype.initHead = function () {
    this.head = true;
    this.next = this;
    this.pre = this;
}

doubleDirectCircleList.prototype.addNode = function (value) {
    // 如果下一个是头节点，说明到了链表的尾部
    if(this.next.head) {
        var node = new doubleDirectCircleList(value);
        var head = this.next;
        this.next = node;
        node.pre = this;
        node.next = head;
        head.pre = node;
    } else {
        this.next.addNode(value);
    }
}

function proDoubleDirectCircleList(num) {
    var testAry = aryProducer.produceIntAry(num);
    var header = new doubleDirectCircleList(testAry[0]);
    header.initHead();
    for(var i = 1; i < testAry.length; i++) {
        header.addNode(testAry[i]);
    }
    return header;
}

// 双向循环链表测试
var data = [];
var data2 = [];
function tddcl(head){
    // var head = proDoubleDirectCircleList(5);
    data.push(head.value);
    if(!head.next.head) {
        tddcl(head.next);
    }else {
        data.push(head.value + " next node is head value >>");
        data.push(head.next.value);
    }
}
function tddcl2(head){
    // var head = proDoubleDirectCircleList(5);
    data2.push(head.value);
    if(!head.pre.head) {
        tddcl2(head.pre);
    }else {
        data2.push(head.value + " pre node is head value >>");
        data2.push(head.pre.value);
    }
}

var head = proDoubleDirectCircleList(5);
tddcl(head);
tddcl2(head);
console.log(data);
console.log(data2);






// exports
module.exports = {
    proSingleDirectList: proSingleDirectList, // 单项链表
    proDoubleDirectList:proDoubleDirectList, // 双向链表
    proSingleDrectCircleList:proSingleDrectCircleList, // 单向环形链表
    proDoubleDirectCircleList:proDoubleDirectCircleList, 
    list2Ary:list2Ary,
    dblist2Ary:dblist2Ary
}

