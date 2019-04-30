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
var data = [];
function tcdcl(head) {
    data.push(head.value);
    if(!head.next.head) {
        cdcl(head.next);
    }else {
        data.push(head.value + " next node is head value >>");
        data.push(head.next.value);
    }
}
var cdl = proSingleDrectCircleList(5);
tcdcl(cdl);
console.log(data);




// exports
module.exports = {
    proSingleDirectList: proSingleDirectList, // 单项链表
    proDoubleDirectList:proDoubleDirectList, // 双向链表
    proSingleDrectCircleList:proSingleDrectCircleList, // 单向环形链表
    list2Ary:list2Ary,
    dblist2Ary:dblist2Ary
}

